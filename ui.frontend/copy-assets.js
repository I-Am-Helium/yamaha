const fs = require('fs')
const path = require('path')

// Function to copy a file
async function copyFile(src, dest) {
   await fs.promises.copyFile(src, dest)
   console.log(`Copied file from ${src} to ${dest}`)
}

// Function to copy a directory recursively
async function copyDirectory(src, dest) {
   await fs.promises.mkdir(dest, { recursive: true })
   console.log(`Created directory ${dest}`)

   const entries = await fs.promises.readdir(src, { withFileTypes: true })

   for (let entry of entries) {
      const srcPath = path.join(src, entry.name)
      const destPath = path.join(dest, entry.name)

      if (entry.isDirectory()) {
         await copyDirectory(srcPath, destPath)
      } else {
         await copyFile(srcPath, destPath)
      }
   }
}

// Main function to initiate copy
async function main() {
   const srcDir = path.resolve(__dirname, 'src/assets')
   const destDir = path.resolve(__dirname, 'dist/assets')

   try {
      await copyDirectory(srcDir, destDir)
      console.log('Directory copied successfully')
   } catch (error) {
      console.error('Error copying directory:', error)
   }
}

main()
