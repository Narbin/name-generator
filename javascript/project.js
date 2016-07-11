$(document).ready(function(){
	$(".button-name").click(function(){
		generateName();
	});
});

var generateName = function(){
	var name = "",
	consonant = "bcdfghjklmnpqrstvwxz",
	vowel = "aeiouy";
	nameLength = Math.floor(Math.random()*5)+4,
	whatLetterFirst = Math.floor(Math.random()*2),
	firstLetterIs = null,
	nextLetterIs = null;

	if(whatLetterFirst == 1){
		name += consonant.charAt(Math.floor(Math.random() * consonant.length));
		firstLetterIs = "consonant";
		nextLetterIs = "vowel";
	}else if(whatLetterFirst == 0){
		name += vowel.charAt(Math.floor(Math.random() * vowel.length));
		firstLetterIs = "vowel";
		nextLetterIs = "consonant";
	}

	for( var i=0; i < nameLength; i++ ){
		if(nextLetterIs === "consonant"){
			name += consonant.charAt(Math.floor(Math.random() * consonant.length));
			nextLetterIs = "vowel";
		}else{
			name += vowel.charAt(Math.floor(Math.random() * vowel.length));
			nextLetterIs = "consonant";
		}
	}

	$(".name").html(name.charAt(0).toUpperCase() + name.slice(1)); 
}