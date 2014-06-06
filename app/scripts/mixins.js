CoreslabMockup.Attributes = Ember.Mixin.create({
  attributes: function() {
    var model = this;
    return Ember.keys(this.get('data')).map(function(key){
      return Ember.Object.create({ model: model, key: key, valueBinding: 'model.' + key });
    });
  }.property()
});
