CoreslabMockup.WorkareaRoute = Ember.Route.extend({
  model: function(params) {
    return this.get('store').find('workarea', params.workarea_id);
  }
});

