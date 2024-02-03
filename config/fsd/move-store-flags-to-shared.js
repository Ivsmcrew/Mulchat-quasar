const fs = require('fs')

const path = require('path')

const { black, red, green, bgRed, bgGreen, lightCyan } = require('kolorist')

function moveStoreFlagsToShared() {
  const name = 'store-flag.d.ts'

  const defaultDir = '/src/app'

  const dir = '/src/shared/types'

  const dts = path.join(__dirname, `${defaultDir}/${name}`)

  fs.stat(dts, e => {
    if (e) return

    fs.copyFile(dts, path.join(__dirname, `${dir}/${name}`), (e) => {
      if (e) {
        console.log(
          `${red(' App •')} ${bgRed(black(' FSD FIX'))} ${red('•')} File ${
            lightCyan(`.${defaultDir}/${name}`)
          } was not copied (see: quasar.config.js)`,
        )
      }

      console.log(
        `${green(' App •')} ${bgGreen(black(' FSD FIX'))} ${green('•')} File ${
          lightCyan(`.${defaultDir}/${name}`)
        } was copied to ${`.${dir}/${name}`})} (see: quasar.config.js)`,
      )

      fs.unlink(dts, (e) => {
        if (e) {
          console.log(
            `${red(' App •')} ${bgRed(black(' FSD FIX'))} ${red('•')} File ${
              lightCyan(`.${defaultDir}/${name}`)
            } was deleted (see: quasar.config.js)`,
          )
        }

        console.log(
          `${green(' App •')} ${bgGreen(black(' FSD FIX'))} ${green('•')} File ${
            lightCyan(`.${defaultDir}/${name}`)
          } was deleted (see: quasar.config.js)`,
        )
      })
    })
  })
}

export { moveStoreFlagsToShared }
