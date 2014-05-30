CoreslabMockup.WorkareaEditController = Ember.ObjectController.extend({
  needs: 'workarea',
  actions: {
    save: function(){
      self = this
      this.get('buffer').forEach(function(attr){
        self.get('controllers.workarea.model').set(attr.key, attr.value);
      });
      this.transitionToRoute('workarea',this.get('model'));
    }
  }
});

