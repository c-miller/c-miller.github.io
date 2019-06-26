
$(function() {
	//Default to +1
	var math = "+1";
	generateProblems(math);

	//Button bar at top
	$('.mathButtons a').click(function() {
		$('.mathButtons a.btn-danger').removeClass('btn-danger').addClass('btn-default');
		var $this = $(this);
		$this.addClass('btn-danger');

		math = $this.data('math');
		generateProblems(math);
	});

	//Start button
	$('#start').click(function() {
		var $this = $(this);
		$("#timer").toggleClass('hidden');
		console.log("TIMER");
	});

});


function generateProblems(math) {
	var problems = [];
	var a = Number(math);

	for (var b=1; b<11; b++) {
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
		problems.push(p);
	}

	problems = shuffle(problems);
	//console.log(problems);


	addProblemDivs(problems);

}

function addProblemDivs(problems) {
	for (var j=0; j<problems.length; j++) {
		var problemObj = problems[j];
		$('#problemHolder').append( "<div class='problem'><p>" + problemObj.a + "</p><p>+</p><p>" + problemObj.b + 
			"</p><br><hr><input class='form-control form-control-lg answer' type='number' data-answer='" + problemObj.c + "'></div><br>" );
	}
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}