const fs = require('fs')

/**
 * Returns all entrypoint chunks (JS and CSS) of the React app. These chunks
 * will not need to be precached because they're already requested from the HTML
 * file)
 *
 * @param {string} assetManifestPath: Path to the asset manifest file from which
 * the entrypoint files can be read
 */
function getEntrypoints(assetManifestPath) {
   if (!fs.existsSync(assetManifestPath)) {
      throw Error(
         `Cannot determine entrypoints: No asset manifest found at path ${assetManifestPath}`
      )
   }

   const manifest = fs.readFileSync(assetManifestPath, { encoding: 'utf8' })
   const manifestContent = JSON.parse(manifest)

   const entryPoints = []

   for (const entry in manifestContent) {
      const entryData = manifestContent[entry]
      entryData.css?.forEach((cssEntry) => entryPoints.push(cssEntry))
      entryPoints.push(entryData.file)
   }

   if (entryPoints.length < 1) {
      throw Error(
         `Cannot determine entrypoints: Missing "entrypoints" in ${assetManifestPath}`
      )
   }

   return entryPoints
}

module.exports = getEntrypoints
