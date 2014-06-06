/*global Ember*/
CoreslabMockup.Workarea = DS.Model.extend(CoreslabMockup.Attributes, {
    name: DS.attr('string'),

    subareas: DS.hasMany('workarea'),

    isToplevel: DS.attr('boolean', { defaultValue: true }),
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
