---
title: Validators
description: GNX is a collect of utilities that are used across all of our projects. It is a collection of utilities that we have found useful in our projects and we hope you will find them useful in yours. We have tried to make them as generic as possible so that they can be used in any project.
---

# 📝 Fluent Validations

Fluent Validations is a library that allows you to create validations for your entities and properties in a simple way, using the design pattern Fluent Interface and builder.

## 🧪 FluentValidation - Types

### `FluentValidation`

FluentValidation is a class that allows you to create validations for your properties.

```ts
type FluentValidations = ValidationsOptions & {
  getValidations: () => Map<Validations, boolean>
  getErrors: () => string[]
  softValidation: () => SoftValidation
  hardValidation: () => void
  validate: () => boolean
}
```

### `SoftValidation`

SoftValidation is a object that contains the result of the validation.

```ts
interface SoftValidation {
  isValid: boolean
  errors: string[]
  totalErrors: number
}
```

### `ValidationsOptions`

ValidationsOptions is a object that contains the options for the validations.

```ts
type ValidationsOptions = BasicsValidation &
  NumbersValidation &
  StringsValidation
```

### `KeyOf`

KeyOf is a string that contains the name of the property.

```ts
type KeyOf<T> = {
  [K in keyof T]: T[K] extends any ? K : never
}[keyof T]
```

### `Validations`

Validations is a string that contains the name of the validations.

```ts
type Validations = KeyOf<ValidationsOptions>
```

### `Between`

Between is a object that contains the min and max values for the validations.

```ts
interface Between {
  min: any
  max: any
}
```

### `FluentValidationsOptions`

FluentValidationsOptions is a object that contains the value for the validations.

```ts
interface FluentValidationsOptions<T = any> {
  value: string | number | T
}
```

### `BasicsValidation`

BasicsValidation is a object that contains the basic validations.

```ts
interface BasicsValidation {
  isString: () => FluentValidations
  isBoolean: () => FluentValidations
  isArray: () => FluentValidations
  isObject: () => FluentValidations
  isFunction: () => FluentValidations
  isUndefined: () => FluentValidations
  isRequired: () => FluentValidations
}
```

### `NumbersValidation`

NumbersValidation is a object that contains the numbers validations.

```ts
interface NumbersValidation {
  isNumber: () => FluentValidations
  isEqualTo: ({ value }: FluentValidationsOptions) => FluentValidations
  isGreaterThan: ({ value }: FluentValidationsOptions) => FluentValidations
  isGreaterThanOrEqualTo: ({
    value
  }: FluentValidationsOptions) => FluentValidations
  isLessThan: ({ value }: FluentValidationsOptions) => FluentValidations
  isLessThanOrEqualTo: ({
    value
  }: FluentValidationsOptions) => FluentValidations
  isBetween: ({ min, max }: Between) => FluentValidations
  isMaxLength: ({ value }: FluentValidationsOptions) => FluentValidations
  isMinLength: ({ value }: FluentValidationsOptions) => FluentValidations
  isLengthBetween: ({ min, max }: Between) => FluentValidations
  isLengthEqual: ({ value }: FluentValidationsOptions) => FluentValidations
  isLengthGreaterThan: ({
    value
  }: FluentValidationsOptions) => FluentValidations
  isLengthGreaterThanOrEqualTo: ({
    value
  }: FluentValidationsOptions) => FluentValidations
  isLengthLessThan: ({ value }: FluentValidationsOptions) => FluentValidations
  isLengthLessThanOrEqualTo: ({
    value
  }: FluentValidationsOptions) => FluentValidations
  isDivisibleBy: ({ value }: FluentValidationsOptions) => FluentValidations
  isPositive: () => FluentValidations
  isNegative: () => FluentValidations
}
```

### `StringsValidation`

StringsValidation is a object that contains the strings validations.

```ts
interface StringsValidation {
  isEmail: () => FluentValidations
  isURL: () => FluentValidations
  isGmail: () => FluentValidations
  isOutlook: () => FluentValidations
  isDate: () => FluentValidations
  isDateAfter: ({ value }: FluentValidationsOptions) => FluentValidations
  isDateBefore: ({ value }: FluentValidationsOptions) => FluentValidations
  isDateBetween: ({ min, max }: Between) => FluentValidations
  isGuid: () => FluentValidations
  isHexColor: () => FluentValidations
  isHexadecimal: () => FluentValidations
  isIP: () => FluentValidations
  isIPv4: () => FluentValidations
  isIPv6: () => FluentValidations
  isJSON: () => FluentValidations
  isLowercase: () => FluentValidations
  isUppercase: () => FluentValidations
  isUUID: () => FluentValidations
  isCreditCard: () => FluentValidations
}
```

## 🧪 ModelValidator - Types

### `ModelValidator`

ModelValidator is a class that allows you to create validations for your entities.

```ts
interface ModelValidations<T = any> {
  withProperty: (
    callback: (obj: T, { identifier }?: Identifier) => boolean
  ) => ModelValidations<T>
  validate: () => boolean
  getErrors: () => string[]
  getValidations: () => Map<string, (value: any) => boolean>
  softValidation: () => SoftValidation
  hardValidation: () => void
}
```

### `ModelValidatorOptions`

ModelValidatorOptions is a object that contains the options for the validations.

```ts
interface ModelValidatorOptions<T = any> {
  identifier: string
  model: Record<string, any> | T
}
```

### `Subtypes`

Start and Identifier are subtypes of ModelValidatorOptions.

```ts
type Start<T> = Omit<ModelValidatorOptions<T>, 'identifier'>

type Identifier<T = any> = Omit<ModelValidatorOptions<T>, 'model'>
```

## ⚠️ Exceptions

### 🧪 GNXFluentValidatorErrors

GNXFluentValidatorErrors is a object that contains the errors for the validations to create the constructor custom error.

```ts
interface GNXFluentValidatorErrorsConstructor {
  message: string
  errors: string[]
  count: number
}
```
