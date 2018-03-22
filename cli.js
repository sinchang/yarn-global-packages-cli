#!/usr/bin/env node
'use strict'
const cac = require('cac')
const main = require('./')

const cli = cac()

cli.command('*', 'My Default Command', (input, flags) => {
  console.log(main())
})

cli.parse()
