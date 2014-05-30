/*global Ember*/
CoreslabMockup.Workarea = DS.Model.extend({
    name: DS.attr('string'),

    subareas: DS.hasMany('workarea'),

    parent: DS.belongsTo('workarea'),
});

// probably should be mixed-in...
CoreslabMockup.Workarea.reopen({
  attributes: function(){
    var model = this;
    return Ember.keys(this.get('data')).map(function(key){
      return Em.Object.create({ model: model, key: key, valueBinding: 'model.' + key });
    });
  }.property()
});

// delete below here if you do not want fixtures
CoreslabMockup.Workarea.FIXTURES = [
  
  {
    id: 0,
    
    name: 'foo',
    
    subareas: [0,],
    
  },
  
  {
    id: 1,
    
    name: 'foo',
    
    subareas: [],
    
  }
  
];
