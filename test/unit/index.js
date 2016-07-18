// ---------------------------------------
// Test Environment Setup
// ---------------------------------------
import chai from 'chai'
import sinonChai from 'sinon-chai'
import { triggerHTMLEvents, triggerMouseEvents } from './utils'

chai.use(sinonChai)

global.chai = chai
global.triggerHTMLEvents = triggerHTMLEvents
global.triggerMouseEvents = triggerMouseEvents
global.assert = chai.assert
global.expect = chai.expect
global.should = chai.should()

// ---------------------------------------
// Require Tests
// ---------------------------------------
// for use with karma-webpack-with-fast-source-maps
const __karmaWebpackManifest__ = [] // eslint-disable-line
const inManifest = path => ~__karmaWebpackManifest__.indexOf(path)

// require all `**/*.spec.js`
const testsContext = require.context('./', true, /\.spec\.js$/)

// only run tests that have changed after the first pass.
const testsToRun = testsContext.keys().filter(inManifest)
;(testsToRun.length ? testsToRun : testsContext.keys()).forEach(testsContext)

// require all `src/**/*.(js|vue)` except for `index.(js|vue)` (for coverage reporting)
const componentsContext = require.context('../../src/', true, /^((?!index).)*\.(js|vue)$/)

componentsContext.keys().forEach(componentsContext)
