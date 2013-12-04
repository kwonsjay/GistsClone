GistProject1.Views.GistsIndex = Backbone.View.extend({
	template: JST['gists/index'],

	initialize: function() {

	},

	render: function() {
		var renderedContent = this.template({
			title: "Gists Index",
			gists: this.collection
		});

		this.$el.html(renderedContent);
		return this;
	}
});