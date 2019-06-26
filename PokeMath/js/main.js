
$(function() {
	//Default to +1
	var math = "+1";
	generateProblems(math);

	$('.mathButtons a').click(function() {
		$('.mathButtons a.btn-danger').removeClass('btn-danger').addClass('btn-default');
		var $this = $(this);
		$this.addClass('btn-danger');

		math = $this.data('math');
		generateProblems(math);
	});

});


var problems = [];
function generateProblems(math) {
	problems = [];
	var a = Number(math);
	//TODO: make the answers lower than some number (12??) somehow
	//var ceiling = 12 - a;
	//console.log(ceiling);

	for (var i=0; i<10; i++) {
		var b = Math.floor(Math.random() * 10) + 1;
		var c = a + b;
		var p = {};
		//Randomize a+b or b+a order
		var ab = Math.random() >= 0.5;
		if (ab) {
			p['a'] = a;
			p['b'] = b;
		} else {
			p['a'] = b;
			p['b'] = a;
		}
		p['c'] = c;
		problems[i] = p;
	}
	console.log(problems);

	for (var j=0; j<problems.length; j++) {
		addProblemDiv(problems[j]);
	}

}

function addProblemDiv(problemObj) {
	//TODO: Add to DOM
}