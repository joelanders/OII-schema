// $$svg$$ = "<svg><rect width=80 height=80 style='fill: orange;'/></svg>";

'use strict'

var plt = require('plotly-notebook-js')

var myPlot = plt.createPlot([{ x: [1,2,3], y: [3,4,5] }], { title: 'Plotly in Jupyter!' });

$$html$$ = myPlot.render();
