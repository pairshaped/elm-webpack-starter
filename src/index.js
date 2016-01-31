'use strict'

require('./styles/Main')

var Elm = require('./elm/Main')

Elm.embed(Elm.Main, document.getElementById('main'))
