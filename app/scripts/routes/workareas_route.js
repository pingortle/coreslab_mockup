CoreslabMockup.WorkareasRoute = Ember.Route.extend({
  model: function() {
    return this.get('store').find('workarea');
  }
});

