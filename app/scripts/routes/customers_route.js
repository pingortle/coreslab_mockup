CoreslabMockup.CustomersRoute = Ember.Route.extend({
    model: function () {
        return this.get('store').find('customer');
    }
});
