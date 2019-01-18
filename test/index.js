const expect = require('chai').expect
const Resource = require('../')
const { createApp, deleteApp } = require('@gfa/firestore-adapter/config/firestore')

describe('Resource', function () {
  before(function () {
    createApp()
  })

  after(function () {
    deleteApp()
  })

  describe('constructor', function () {
    it('initializes without errors', function () {
      var app = new Resource({ table: 'TestTable' })
      expect(app.table).to.equal('TestTable')
    })
  })
})
