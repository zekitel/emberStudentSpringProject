import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('add');
  this.route('search');
  this.route('delete');
  this.route('showall');
  this.route('update');
  this.route('students');
  this.route('books');
});

export default Router;
