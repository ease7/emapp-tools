const version = '1.0.0';
import Log from '../packages/log';

const install = function (Vue, config = {}) {
  if (install.installed) return;

  Vue.component('log', Log);
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};

module.exports = {
  install,
  version,
  Log
}
