import type { Preview } from '@storybook/react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { themes } from '@storybook/theming'
import yamahaTheme from './yamahaTheme'
import '../src/assets/generated-icons/icons.scss'
import '../src/styles/main.scss'

const preview: Preview = {
   parameters: {
      theme: {
         ...yamahaTheme,
         brandImage: './images/yamaha.png',
      },
      // docs: {
      //   theme: themes.dark,
      // },
      controls: {
         matchers: {
            color: /(background|color)$/i,
            date: /Date$/i,
         },
      },
      a11y: {
         element: '#root',
         config: {},
         options: {},
      },
      options: {
         storySort: {
            order: ['Introduction', 'Components', 'Layouts'],
         },
      },
      viewport: {
         viewports: {
            ...INITIAL_VIEWPORTS,
            mobile: {
               name: 'Mobile',
               styles: {
                  width: '375px',
                  height: '667px',
               },
            },
            tablet: {
               name: 'Tablet',
               styles: {
                  width: '768px',
                  height: '1024px',
               },
            },
            desktop: {
               name: 'Desktop',
               styles: {
                  width: '1280px',
                  height: '800px',
               },
            },
         },
      },
   },
}

export default preview
