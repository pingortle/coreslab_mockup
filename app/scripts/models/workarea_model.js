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
    id: 'production',

    name: 'Production',

    subareas: [],

  },

  {
    id: 'admin',

    name: 'Admin',

    subareas: ['settings', 'personnel',],
  },

  {
    id: 'scheduling',

    name: 'Scheduling',

    subareas: [],
  },

  {
    id: 'qc',

    name: 'QC',

    subareas: [],
  },

  {
    id: 'shipping-and-erection',

    name: 'Shipping/Erection',

    subareas: [],
  },

  {
    id: 'drafting-and-engineering',

    name: 'D&E',

    subareas: [],
  },

  {
    id: 'finance',

    name: 'Finance',

    subareas: [],
  },

  {
    id: 'settings',

    name: 'Settings',

    subareas: [],

    isToplevel: false,
  },

  {
    id: 'personnel',

    name: 'Personnel',

    subareas: [],

    isToplevel: false,
  },
];
