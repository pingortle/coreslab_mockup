CoreslabMockup.Customer = DS.Model.extend(CoreslabMockup.Attributes, {
	name: DS.attr(),
	projects: DS.hasMany('project'),
});

CoreslabMockup.Customer.FIXTURES = [
	{
		id: 0,
		name: "Arkansas Department of Corrections"
	},
	{
		id: 1,
		name: "Olympus Construction, Inc."
	},
];
