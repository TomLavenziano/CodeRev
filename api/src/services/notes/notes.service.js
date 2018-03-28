// Initializes the `notes` service on path `/notes`
const createService = require('feathers-memory');
const hooks = require('./notes.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    name: 'notes',
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/notes', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('notes');

  service.hooks(hooks);
};
