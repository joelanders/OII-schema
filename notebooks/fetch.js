'use strict'

// %%

var rp = require('request-promise');
var glob = true

rp('https://github.com/status')
    .then(function (htmlString) {
        $$.sendResult(htmlString)
    })
    .catch(function (err) {
        // Crawling failed...
    });


// %%

const run = async function () {
  try {
    const result = await rp('https://github.com/status')
    console.log(result)
    console.log(glob)
  } catch (e) {
    console.log(e)
  }
}

run()


// $$.sendResult(result);

// %%

// wrapper($$)
// wrapper().then((result) => console.log(result)).catch((err) => console.log(err))
// %%
