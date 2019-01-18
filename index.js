const { ResourceApp } = require('@gfa/core/apps/ResourceApp')
const { ResourceRouter } = require('@gfa/core/routers/ResourceRouter')
const ClientSessionsAdapter = require('@gfa/client-sessions-adapter')
const FirestoreAdapter = require('@gfa/firestore-adapter')

class Resource extends ResourceApp {
  constructor (opts) {
    opts = opts || {}
    var sessionOpts = opts.session
    delete opts.session
    var databaseOpts = opts.database
    delete opts.database
    var database = new FirestoreAdapter(databaseOpts)
    var session = sessionOpts ? new ClientSessionsAdapter(sessionOpts) : undefined
    var router = new ResourceRouter()
    super(Object.assign(opts, { router, session, database }))
  }
}

module.exports = Resource
