var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['AngularJSTest.js'],
    multiCapabilities: [
      {
        browserName: 'chrome',
        chromeOptions: {
          args: ["--headless"]
        }
      },
      // {
      //   browserName: 'firefox',
      //   "moz:firefoxOptions": {
      //     args: ["--headless"]
      //   }
      // }
    ],
    onPrepare: function() {
      jasmine.getEnv().addReporter(
        new Jasmine2HtmlReporter({
          takeScreenshots: true,
          takeScreenshotsOnlyOnFailures: true,
          savePath: 'target/screenshots'
        })
      );

      browser.manage().window().maximize();
    }
  };