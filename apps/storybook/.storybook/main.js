module.exports = {
  addons: [
    '@storybook/addon-a11y/',
    '@storybook/addon-knobs/',
    '@storybook/addon-essentials',
  ],
  stories: ['../../../packages/**/src/**/*.stories.@(js|tsx|mdx)'],
}
