'use strict'

var fs = require('fs')
var protagonist = require('protagonist')
var plt = require('plotly-notebook-js')
var spawn = require('child_process').spawnSync
var _ = require('lodash/fp')
var lodash = require('lodash').runInContext();;
var apiDescriptionMixins = require('lodash-api-description');
apiDescriptionMixins(lodash);
var hercule = require('hercule');
var validate = require('jsonschema').validate;
var React = require('react');
var ReactServer = require ('react-dom/server');

var Form = require('react-jsonschema-form');

//// Event type ID (is reused as the file name
//// and the sample file name.)
//
// var id = "PackageDependencyEvent"
// var id = "TermsOfServiceEvent"
var id = "PageContentEvent"

// This boilerplate is needed by the protagonist/drafter
// libraries to render the json and json schema.

var boilerplate=`
# GET /
+ Response 200 (application/json)
    + Attributes (` + id + `)

# Data Structures

`

var sample_boilerplate=`
# GET /
+ Response 200 (application/json)
    + Attributes (` + id + `)

# Data Structures

## ` + id + `

`

// This is related to the IJavascript way to deal
// with asynchronous code.

$$.async();

var transcluded;

// This uses hercule to manage the transclusions
// that are mentioned in the Markdown using the form:
//   :[](target_file.md)

(function($$, console) {
  hercule.transcludeFile('./events/' + id + '.md', function(err, output) {
    if (err) console.log(err)
    transcluded = output
    $$.done()
  })
})($$, console);

// protagonist parses the MSON (as part of the API Blueprint spec)

var result = protagonist.parseSync(boilerplate + transcluded);

// This reaches out into the `result` and finds the schema
// (this used to be done via refract_filter.py)

var response = result.content[0].content[0].content[0].content[0].content[0].content[1]

var schema = JSON.parse(_.find( (i) => ( ( i.attributes && i.attributes.contentType ) ? i.attributes.contentType == 'application/schema+json' : false ))(response.content).content)

// console.log(JSON.stringify(schema, true, 2))

// Same thing is done with the sample file located at:
// ./events/sample/{id}.md

$$.async();

var sample_transcluded;

(function($$, console) {
  hercule.transcludeFile('./events/samples/' + id + '.md', function(err, output) {
    if (err) console.log(err)
    sample_transcluded = output
    $$.done()
  })
})($$, console);

var sample = protagonist.parseSync(sample_boilerplate + sample_transcluded);

var sample_response = sample.content[0].content[0].content[0].content[0].content[0].content[1]

var data = JSON.parse(_.find( (i) => ( ( i.attributes && i.attributes.contentType ) ? i.attributes.contentType == 'application/json' : false ))(sample_response.content).content)

// console.log(JSON.stringify(data, true,2 ))

// This customises the react-jsonschema-form component.

var uiSchema = {
  attribute: {
    // type: { "ui:widget": "hidden" },
    // property: { "ui:widget": "hidden" }
  },
  value: {
    content: { "ui:widget": "textarea"}
  }
}

// Check if the sample validates.

validate(data, schema).errors;

console.log(JSON.stringify(data, true, 2))

var html = ReactServer.renderToStaticMarkup(
  React.createElement(Form.default, {
    schema: schema,
    uiSchema: uiSchema,
    formData: data
   })
)

var title = response
 .content[0] // dataStructure
 .content[0]
 .element

title

process.versions


var styledHtml = "<div><h1>" + title +
  `</h1><style>
  .control-label,fieldset>legend { display: none;}
  fieldset > .field-description {
    width: 100%;
    padding: 0;
    margin-bottom: 20px;
    line-height: inherit;
    font-size: 1.2em;
    // color: #333333;
    border: 0;
    border-bottom: 1px solid #e5e5e5;
    }
   </style>`
  + html + "</div>"

JSON.stringify(schema, true, 2)
