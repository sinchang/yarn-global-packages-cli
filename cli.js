#!/usr/bin/env node
'use strict'
const cac = require('cac')
const updateNotifier = require('update-notifier')
const main = require('./')
const pkg = require('./package.json')
const cli = cac()

updateNotifier({pkg}).notify()

cli.command('*', 'My Default Command', (input, flags) => {
  console.log(main())
  process.exit()
})

cli.parse()
