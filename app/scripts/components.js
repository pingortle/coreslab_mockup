CoreslabMockup.LinkBootstrapComponent = Ember.Component.extend({
    tagName: 'li',
    classNameBindings: ['active'],
    active: function() {
        return this.get('childViews').anyBy('active');
    }.property('childViews.@each.active')
});
