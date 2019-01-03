import 'core-js/shim';
import 'regenerator-runtime/runtime';
import 'whatwg-fetch';

const regeneratorRuntime = require('regenerator-runtime/runtime'); // eslint-disable-line
if (!regeneratorRuntime.default) {
  regeneratorRuntime.default = regeneratorRuntime;
}

if (!window.location.origin) {
  window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port: '');
}