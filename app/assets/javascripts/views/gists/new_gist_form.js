GistProject1.Views.NewForm = Backbone.View.extend({

	template: JST['gists/new'],
	template2: JST['gists/gistFileForm'],
	counter: 0,

	events: {
		"submit form" : "submitForm",
		"click button.add_file" : "renderGistFileTemplate"
	},

	render: function() {
		var renderedContent = this.template({
			title: "Create New Gist!"
		});

		this.$el.html(renderedContent);

		return this;
	},

	renderGistFileTemplate: function() {
		var renderedContent = this.template2({
			count: this.counter
		});

		this.$el.find('form').append(renderedContent);
		this.counter += 1;
		return this;
	},

	submitForm: function(event) {
		event.preventDefault();

		var formData = $(event.currentTarget).serializeJSON();
		var gist = new GistProject1.Models.Gist(formData.gist, { parse: true });

		if (!gist.isValid()){
			gist.validationError.forEach(function(errorMessage) {
				this.$('form').prepend("<div>" + errorMessage + "</div>");
			});

			return;
		}

		gist.save({}, {
			success: function() {
				GistProject1.gists.add(gist);
				alert("gist made!")
			},

			error: function() {
				alert("gist not made!")
			}
		});

		Backbone.history.navigate("/", {trigger: true });
	}
});