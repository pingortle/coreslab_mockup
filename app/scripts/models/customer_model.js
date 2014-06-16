CoreslabMockup.Customer = DS.Model.extend(CoreslabMockup.Attributes, {
	name: DS.attr(),
	address: DS.attr(),
	phone: DS.attr(),
	fax: DS.attr(),
	notes: DS.attr(),

	projects: DS.hasMany('project'),
});

CoreslabMockup.Customer.FIXTURES = [
	{
		id: 0,
		name: "Arkansas Department of Human Services"
	},
	{
		id: 1,
		name: "Jupiter Construction, Inc."
	},
];
