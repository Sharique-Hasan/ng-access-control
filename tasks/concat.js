module.exports = {
  options: {
    separator: ';'
  },
  dist: {
    src: ['src/lodash.custom.min.js', 'src/ng-access-control.js', 'src/directive/control.directive.js'],
    dest: '.tmp/ng-access-control.js'
  }
};