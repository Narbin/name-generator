$(document).ready(function(){

	var application = {
		name : "",
		consonant : "bcdfghjklmnpqrstvwxz",
		vowel : "aeiouy",
		nameLength : null,
		whatLetterFirst : null,
		nextLetter : null
	}

	var generateName = function(){
		resetApplicationSettings();
		generatorCore();
		firstLetterUpper(".name",application.name);
	}

	var setFirstLetter = function(){
		var nextLetterIs = null;
		if(application.whatLetterFirst == 1){
			application.name += application.consonant.charAt(Math.floor(Math.random() * application.consonant.length));
			nextLetterIs = "vowel";
		}else if(application.whatLetterFirst == 0){
			application.name += application.vowel.charAt(Math.floor(Math.random() * application.vowel.length));
			nextLetterIs = "consonant";
		}
		return nextLetterIs
	}

	var generatorCore = function(){
		for( var i = 0; i < application.nameLength; i += 1 ){
			if(application.nextLetter === "consonant"){
				application.name += application.consonant.charAt(Math.floor(Math.random() * application.consonant.length));
				application.nextLetter = "vowel";
			}else{
				application.name += application.vowel.charAt(Math.floor(Math.random() * application.vowel.length));
				application.nextLetter = "consonant";
			}
		}
	}

	var firstLetterUpper = function(where,string){
		$(where).html(string.charAt(0).toUpperCase() + string.slice(1)); 
	}

	var randomNumber = function(to,from){
		return Math.floor(Math.random()*to)+from;
	}

	var resetApplicationSettings = function(){
		application.name = "";
		application.nameLength = randomNumber(5,4);
		application.whatLetterFirst = randomNumber(1,2);
		application.firstLetter = setFirstLetter();
	}

	$(".button-name").click(function(){
		generateName();
	});
});

