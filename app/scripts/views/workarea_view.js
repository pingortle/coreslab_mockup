CoreslabMockup.WorkareaView = Ember.View.extend({

	nestedViewType: function () {
		switch (this.get("context.id")) {
			case "admin": return CoreslabMockup.AdminView;
			default: return CoreslabMockup.NotImplementedView;
		}
	}.property("context.id"),

	nestedViewTypeDidChange: function () {
		this.rerender();
	}.observes("nestedViewType"),
});
