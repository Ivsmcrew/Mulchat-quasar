const { moveStoreFlagsToShared } = require('./move-store-flags-to-shared')

function fsdFix() {
  /**
   * This is necessary because Quasar does not provide
   * the ability to specify the location of the - store-flag.d.ts
   * file generation in the project
   */
  moveStoreFlagsToShared()
}

export { fsdFix }
