GistProject1.Views.GistDetail = Backbone.View.extend({
	template: JST['gists/detail'],

	initialize: function() {

	},

	events: {
		"click .favorite": "favoriteGist"
	},

	render: function() {
		var renderedContent = this.template({
			gist: this.model
		});

		this.$el.html(renderedContent);
		return this;
	},

	favoriteGist: function() {
		var that = this;
		event.preventDefault();
		//
		// var favorite = $(event.currentTarget).find('button').attr('name');
		// console.log(favorite);
		newFavorite = new GistProject1.Models.Favorite({gist_id: this.model.id});
		//{user_id: 1, gist_id: this.model.id}
		newFavorite.save({}, {
			url: "gists/" + this.model.id + "/favorite",
			success: function() {
				that.model._gistFavorites.add(newFavorite);
				alert("success");
			},
			error: function() {
				alert("Saving favorite didn't work");
			}
		});
	}
});