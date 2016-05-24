module.exports = {
  options: {
    files: ['package.json', 'bower.json'],
    commit: true,
    commitMessage: 'Release v%VERSION%',
    commitFiles: ['package.json', 'bower.json'],
    createTag: true,
    push: false,
    tagName: 'v%VERSION%',
    tagMessage: 'Version %VERSION%',
    gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d',
    globalReplace: false,
    prereleaseName: false,
    metadata: '',
    regExp: false
  }
};