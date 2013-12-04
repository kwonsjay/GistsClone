GistProject1.Collections.GistFiles = Backbone.Collection.extend({
	url: "/gists/:id/gistFiles",
	model: GistProject1.Models.GistFile
});