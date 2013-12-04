GistProject1.Models.GistFile = Backbone.Model.extend({
	urlRoot: "/gists/:id/gistFiles",

	validate: function() {
		var errors = [];

		if (this.get("name").length == 0) {
			errors.push("Name can't be blank!");
		};
		if (this.get("body").length == 0) {
			errors.push("Body can't be blank!");
		};

		return errors.length == 0 ? undefined : errors;
	}
});