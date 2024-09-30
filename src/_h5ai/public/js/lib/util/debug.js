const config = require('../config');


let debug = false;
setTimeout(() => {
    if (config && config.options && config.options.debug) {
        debug = config.options.debug.enabled || false;
    }
}, 50);

const debugLog = (message, data = "") => {
    if (debug) {
        console.log(`DEBUG: ${message}`, data);
    }
};

debugLog('Debug mode is enabled.');
debugLog('Config:', config.options);

module.exports = {
    debugLog
};
