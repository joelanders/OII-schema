'use strict'

import protagonist from 'protagonist'
import plt from 'plotly-notebook-js'
import { spawnSync as spawn}  from 'child_process'

import React, { Component } from "react";
import { renderToString } from "react-dom/server";

import Form from "react-jsonschema-form";

var boilerplate=`
# GET /
+ Response 200 (application/json)
    + Attributes (Identity requirement measurement)

# Data Structures

`

var schema=`
# Identity requirement measurement (Measurement)

The possibility to let the user control the disclosure of their identity.
Samples below reflect that:
 - Many Jabber servers don't require an email to create an account
 - Reddit account creation has email as an optional field

    NOTE: This validates with Drafter 2.3.0 but doesn't properly deal with the One Of declaration yet (fixed in 2.3.1)

    This should probably have a frontmatter with
      practices:
         - design#14
         - technology#1

## Properties

- identity (Identity requirement)

# Identity requirement (enum)
- no identity - No sign up required
- no email - New account without an email (like many jabber server and reddit does)
- email - New account with email
- email from provider - New account with email from specific provider
- phone number - New account with phone number
- facebook - New account with Facebook
- twitter - New account with Twitter
- google - New account with Google
- legal id - New account with legal id

# Measurement
- category (Category)
- project (string) - Project identifier
- evidence (Evidence)
- One of
   - evidence (Evidence)
   - evidencemedium (Evidence Medium)
   - evidencestrong (Evidence Strong)

# Category (enum)
- Pseudonymity

# Project
- name (string)

# Evidence
- url (string)
- comment (string)

# Evidence Medium
- url (string)
- comment (string)
- screenshot (Attachment)

# Evidence Strong
- url (string)
- url_2 (string)
- url_3 (string)
- comment (string)
- screenshot (Attachment)

# Attachment
- URI (string)
`


var result = protagonist.parseSync(boilerplate + schema);

var child = spawn('python', [ "refract-filter.py", "-j", "--content_type=\"application/schema+json\""],
  {
    cwd: process.cwd(),
    env: process.env,
    encoding: 'utf8',
    input: JSON.stringify(result) + "\n",
    shell: true
  }
)

var schema = JSON.parse(child.stdout)

React.createElement('Form', {  schema: schema })

renderToString(React.createElement('Form', {  schema: schema }))
