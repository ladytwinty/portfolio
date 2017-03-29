function heightDetect() { // подгон хедера под размер экрана
		$(".header").css("height", $(window).height());
	};

	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});