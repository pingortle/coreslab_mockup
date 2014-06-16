CoreslabMockup.Project = DS.Model.extend(CoreslabMockup.Attributes, {
	description: DS.attr(),
	customer: DS.belongsTo('customer'),
});

CoreslabMockup.Project.FIXTURES = [
	{
		id: "010.017",
		description: "Northeast ElectroCloud Ops Center/Parking Garage",
	},
	{
		id: "012.002",
		description: "Mountain View Gym",
		customer: null,
	},
	{
		id: "012.018",
		description: "Calico Embroidery Addition",
		customer: 0,
	},
	{
		id: "012.014",
		description: "Riverland High School Addition",
		customer: 1,
	},
];
