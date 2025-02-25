import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
   plugins: [
      react({
         babel: {
            plugins: [
               '@babel/plugin-proposal-object-rest-spread',
               ['@babel/plugin-proposal-decorators', { version: 'legacy' }],
               ['@babel/plugin-proposal-class-properties', { loose: true }],
            ],
         },
      }),
   ],
   build: {
      minify: false, //To be changed
      manifest: 'asset-manifest.json',
      rollupOptions: {
         output: {
            entryFileNames: 'js/[name]-[hash].js',
            chunkFileNames: 'js/[name]-[hash].js',
            assetFileNames: ({ name }) => {
               if (name && name.endsWith('.css')) {
                  return 'css/[name]-[hash][extname]'
               }
               return 'assets/[name]-[hash][extname]'
            },
         },
      },
   },
})
