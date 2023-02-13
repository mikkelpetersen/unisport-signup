module.exports = {
  // Lint & Prettify JS Files
  '**/*.(js|jsx)': filenames => [
    `npm exec eslint ${filenames.join(' ')}`,
    `npm exec prettier --write ${filenames.join(' ')}`
  ],

  // Prettify Markdown and JSON Files
  '**/*.(md|json)': filenames => `npm exec prettier --write ${filenames.join(' ')}`
};