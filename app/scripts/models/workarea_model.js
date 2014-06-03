/*global Ember*/
CoreslabMockup.Workarea = DS.Model.extend({
    name: DS.attr('string'),

    subareas: DS.hasMany('workarea'),

    isToplevel: DS.attr('boolean', { defaultValue: true }),
});

// probably should be mixed-in...
CoreslabMockup.Workarea.reopen({
  attributes: function(){
    var model = this;
    return Ember.keys(this.get('data')).map(function(key){
      return Ember.Object.create({ model: model, key: key, valueBinding: 'model.' + key });
    });
  }.property()
});

CoreslabMockup.Workarea.FIXTURES = [

  {
    id: 0,

    name: 'Production',

    subareas: [],

  },

  {
    id: 1,

    name: 'Admin',

    subareas: [7, 8,],
  },

  {
    id: 2,

    name: 'Scheduling',

    subareas: [],
  },

  {
    id: 3,

    name: 'QC',

    subareas: [],
  },

  {
    id: 4,

    name: 'Shipping/Erection',

    subareas: [],
  },

  {
    id: 5,

    name: 'D&E',

    subareas: [],
  },

  {
    id: 6,

    name: 'Finance',

    subareas: [],
  },

  {
    id: 7,

    name: 'Settings',

    subareas: [],

    isToplevel: false,
  },

  {
    id: 8,

    name: 'Personnel',

    subareas: [],

    isToplevel: false,
  },
];
