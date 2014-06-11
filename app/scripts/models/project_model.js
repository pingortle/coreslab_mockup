CoreslabMockup.Project = DS.Model.extend(CoreslabMockup.Attributes, {
	description: DS.attr(),
	customer: DS.belongsTo('customer'),
});

CoreslabMockup.Project.FIXTURES = [
	{
		id: "010.017",
		description: "Southwest PowerPool Ops Center/Parking Garage",
	},
	{
		id: "012.002",
		description: "Valley View Gym",
		customer: null,
	},
	{
		id: "012.018",
		description: "Calico Rock Addition",
		customer: 0,
	},
	{
		id: "012.014",
		description: "Brookland High School Addition",
		customer: 1,
	},
];
