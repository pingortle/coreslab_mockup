CoreslabMockup.Router.map(function () {
  this.resource('workareas', function(){
    this.resource('workarea', { path: '/:workarea_id' }, function(){
      this.route('edit');
    });
    this.route('create');
  });
});
