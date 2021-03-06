import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('homes');
  this.route('about');
  this.route('contact');
  this.route('scientists');
  this.route('programmers');
});

export default Router;