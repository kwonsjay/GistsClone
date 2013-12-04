GistProject1.Models.Gist = Backbone.Model.extend({
	urlRoot: "/gists",

	validate: function () {
		var errors = [];

		if (this.get("title").length == 0) {
			errors.push("Title can't be blank");
		};

		return errors.length == 0 ? undefined : errors;
	},

	favorites: function() {
		if (!this._gistFavorites) {
			this._gistFavorites = new GistProject1.Collections.GistFavorites([], { gist: this });
		}

		return this._gistFavorites;
	},

	gistFiles: function() {
		if (!this._gistFiles) {
			this._gistFiles = new GistProject1.Collections.GistFiles([], { gist: this });
		}

		return this._gistFiles;
	},

	parse: function(serverAttributes, options) {
		this.favorites().reset(serverAttributes.favorites);
		this.gistFiles().reset(serverAttributes.gistFiles);

		delete serverAttributes.favorites;
		delete serverAttributes.gistFiles;

		return serverAttributes;
	},

	toJSON: function() {
		var json = _.extend({}, this.attributes);
		json.gistFiles = this.gistFiles().toJSON();
		return json;
	}
});