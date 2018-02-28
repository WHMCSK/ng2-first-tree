// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts
// git pull jf master
// git commit -m '发布了v2.1.2'
// git push jf master
// git tag "v2.1.2" -m "发布v2.1.2"
// git push --tags jf master
// npm publish
const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './e2e/**/*.e2e-spec.ts'
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  beforeLaunch: function() {
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });
  },
  onPrepare() {
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
};
