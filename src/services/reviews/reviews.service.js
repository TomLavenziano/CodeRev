// Initializes the `reviews` service on path `/reviews`
const createService = require('feathers-memory');
const hooks = require('./reviews.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    name: 'reviews',
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/reviews', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('reviews');

  service.hooks(hooks);
};
