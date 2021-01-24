const sharp = require('sharp')
const path = require('path')
const fs = require('fs/promises')

const targetDir = path.join(process.cwd(), '/content/articles/')
const dstDir = path.join(process.cwd(), 'public/works/')

console.log(`${targetDir} -> ${dstDir}`)

async function traverseImages(dir = './') {
  const dirents = await fs.readdir(path.resolve(targetDir, dir), { withFileTypes: true })

  dirents.forEach((dirent) => {
    if (dirent.isDirectory()) {
      traverseImages(path.join(dir, dirent.name))
    }

    if (dirent.name.match(/.(png|jpe?g|gif)$/)) {
      const _targetPath = path.resolve(targetDir, dir, dirent.name)
      const _dstPath = path.resolve(dstDir, dirent.name)
      resize(_targetPath, _dstPath)
    }
  })
}

async function resize(_src, _dst) {
  return sharp(_src)
    .resize(860, 600, {
      fit: 'inside',
    })
    .toFile(_dst)
    .then(() => console.log(`${_src} --> ${_dst}`))
    .catch((err) => console.errro('Error: ', err.message))
}

traverseImages()
