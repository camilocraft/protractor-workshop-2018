import { SpecReporter } from 'jasmine-spec-reporter';
const { AwesomeReport } = require('jasmine-awesome-report');

export let reporter = () => {
  jasmine.getEnv().addReporter(new SpecReporter({
    spec: {
      displayStacktrace: true
    }
  }));

  jasmine.getEnv().addReporter(AwesomeReport.getReport({
    fullPath: 'reports',
    fileName: 'report',
    merge: true
  }));
};
