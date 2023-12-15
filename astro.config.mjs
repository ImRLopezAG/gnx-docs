import starlight from '@astrojs/starlight'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'GNX - Utilities',
      social: {
        github: 'https://github.com/ImRLopezAG/generic-service',
        twitter: 'https://twitter.com/ImR_Lopez'
      },
      favicon: '/public/favicon.svg',
      
      sidebar: [
        {
          label: 'Getting Started',
          link: '/packages/getting-started'
        },
        {
          label: 'Packages',
          items: [
            { label: 'Models', link: '/packages/models' },
            { label: 'Services', link: '/packages/services' },
            {
              label: 'Decorators',
              link: '/packages/decorators',
              badge: {
                text: 'new',
                variant: 'success'
              }
            },
            {
              label: 'Validators',
              link: '/global/soon',
              badge: {
                text: 'Coming Soon',
                variant: 'tip'
              }
            }
          ]
        },
        {
          label: 'API',
          items: [
            {
              label: 'Models',
              link: '/api/models'
            },
            {
              label: 'Services',
              link: '/api/services'
            },
            {
              label: 'Decorators',
              link: '/api/decorators',
              badge: {
                text: 'new',
                variant: 'success'
              }
            },
            {
              label: 'Validators',
              link: '/global/soon',
              badge: {
                text: 'Coming Soon',
                variant: 'tip'
              }
            }
          ]
        }
      ],
      customCss: ['./src/tailwind.css'],
      expressiveCode: true
    }),
    tailwind({ applyBaseStyles: false })
  ]
})
