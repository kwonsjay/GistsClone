GistProject1.Collections.GistFavorites = Backbone.Collection.extend({
	url: '/favorites',
	model: GistProject1.Models.Favorite
});