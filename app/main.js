var photodata = [{url: "/photos/cat1.jpg", caption: "A cat."}, 
                 {url: "/photos/cat2.jpg", caption: "A cat."}, 
                 {url: "/photos/cat3.jpg", caption: "A cat."},
                 {url: "/photos/cat4.jpg", caption: "A cat."}, 
           	     {url: "/photos/cat5.jpg", caption: "A cat."},
                 {url: "/photos/cat6.jpg", caption: "A cat."}, 
                 {url: "/photos/notcat.jpg", caption: "Not a cat."}];

var PhotoView = Backbone.View.extend({
	className: "photo",
	render: function(photo) {
		this.$el.html(Handlebars.templates.photo(photo));
		return this;
	}
});

var GalleryView = Backbone.View.extend({
	render: function(photodata) {
		var self = this;
		_.each(photodata, function(photo) {
			var photoView = new PhotoView();
			self.$el.append(photoView.render(photo).el);
		});
		return this;
	}
});

$(document).ready(function() {
	var galleryView = new GalleryView({el: "div.gallery"});
	galleryView.render(photodata);
});