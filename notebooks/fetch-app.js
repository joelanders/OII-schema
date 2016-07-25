'use strict';

// %%

//
// rp('https://github.com/status')
//     .then(function (htmlString) {
//         // console.log(htmlString)
//     })
//     .catch(function (err) {
//         // Crawling failed...
//     });

// %%

let run = (() => {
  var _ref = _asyncToGenerator(function* () {
    try {
      const result = yield rp('https://github.com/status');
      console.log(result);
    } catch (e) {
      console.log(e);
    }
  });

  return function run() {
    return _ref.apply(this, arguments);
  };
})();

// $$.sendResult(result);

// %%

// wrapper($$)
// wrapper().then((result) => console.log(result)).catch((err) => console.log(err))
// %%


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

var rp = require('request-promise');
