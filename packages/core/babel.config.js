const preset = require('@priceline/babel-preset')

module.exports = (api) => {
  api.cache(true)

  // This is necessary because we observed odd behavior in Jest tests when using
  // the preset by name.
  return preset()
}
