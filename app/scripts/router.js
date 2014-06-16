CoreslabMockup.Router.map(function () {
  this.resource('workareas', function () {
    this.resource('workarea', { path: '/:workarea_id' }, function() {
      this.route('edit');
    });
    this.route('create');
  });

  this.resource('projects', function() {
    this.resource('project', { path:'/:project_id' });
  });

  this.resource('customers'), function() {
    this.resource('customer', { path:'/:customer_id' });
  }

  this.route('settings');
});
