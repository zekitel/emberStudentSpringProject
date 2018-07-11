import DS from 'ember-data';

export default DS.Model.extend({

  posts:DS.hasMany('post'),
  name:DS.attr(),
  username:DS.attr(),
  email:DS.attr(),
  address:DS.attr()

});
