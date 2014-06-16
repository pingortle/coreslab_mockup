CoreslabMockup.CustomerRoute = Ember.Route.extend({
    model: function () {
        return this.get('store').find('customer', params.customer_id);
    }
});
