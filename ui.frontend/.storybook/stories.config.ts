// Add storybook configurations here.

export const parameters = ({ url }: { url: string }) => {
   return {
      design: [
         {
            type: 'figspec',
            // accessToken: process.env.STORYBOOK_DESIGN_TOKEN,
            url,
         },
         {
            type: 'figma',
            url,
         },
         {
            type: 'link',
            url,
         },
      ],
   }
}
