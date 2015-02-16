$("#header").html('<div id="header"><a href="http://individual.utoronto.ca/idh/" id="headering"><h1 id="headerText">IDH</h1></a><h2>// Trying to learn stuff.</h2></div>');
$('.menuChoice').hover(
    function() {
        var $this = $(this); // caching $(this)
        var original = $this.text();
        $this.data('initialText', original);
        $this.text(transformToBinary(original));
    },
    function() {
        var $this = $(this); // caching $(this)
        $this.text($this.data('initialText'));
    }
);

function transformToBinary(text) {
	var i;
	var result = 0;

	for (i = 0; i < text.length; i++) {
		result = result + text.charCodeAt(i);
	}

	return result.toString(2);
}