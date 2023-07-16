require('dotenv').config();
const common = `
    --require stepDefitions/support/hooks.js
    --require src/stepDefitions/**/*.js
`;
module.exports = {
  default: `${common} src/features/**/*.feature --parallel ${process.env.CUCUMBER_PARALLEL_WORKERS} --tags ${process.env.CUCUMBER_FILTER_TAGS}`
};
