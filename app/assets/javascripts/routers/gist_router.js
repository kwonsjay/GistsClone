GistProject1.Routers.GistRouter = Backbone.Router.extend({

	routes: {
		"" : "gistsIndex",
		"gists/new" : "newGist",
		"gists/:id" : "showGist"
	},

	gistsIndex: function() {
		var indexPage = new GistProject1.Views.GistsIndex({
			collection: GistProject1.gists
		});

		$('div.gists').html(indexPage.render().$el);
	},

	showGist: function(id) {
		var showPage = new GistProject1.Views.GistDetail({
			model: GistProject1.gists.get(id)
		});

		$('div.gists').html(showPage.render().$el);
	},

	newGist: function() {
		var newGistPage = new GistProject1.Views.NewForm({

		});

		$('div.gists').html(newGistPage.render().$el);
		$('div.gists').append(newGistPage.renderGistFileTemplate().$el);
	}

});