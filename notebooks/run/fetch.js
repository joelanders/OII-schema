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
    var rp = require('request-promise');
    try {
      // const result = await rp('https://github.com/status')
      const result = yield bar();
      console.log(result);
    } catch (e) {
      console.log(e);
    }
  });

  return function run() {
    return _ref.apply(this, arguments);
  };
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

function bar() {
  return "bar";
}

// $$.sendResult(result);

// %%

// wrapper($$)
// wrapper().then((result) => console.log(result)).catch((err) => console.log(err))
// %%