window.GistProject1 = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
		GistProject1.gists = new GistProject1.Collections.Gists();
		GistProject1.gists.fetch({
			success: function() {
				new GistProject1.Routers.GistRouter();
				Backbone.history.start();
			}
		});
  }
};

$(document).ready(function(){
  GistProject1.initialize();
});
