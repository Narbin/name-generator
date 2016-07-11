$(document).ready(function(){
	$(".button-name").click(function(){
		generateName();
	});
});

var generateName = function(){
	var name = "",
		consonant = "bcdfghklmnpqrstvwxz",
		vowel = "aeijouy";
    	nameLength = Math.floor(Math.random()*9)+4,
    	whatLetterFirst = Math.floor(Math.random()*2),
    	firstLetterIs = null;

    	if(whatLetterFirst == 1){
    		name += consonant.charAt(Math.floor(Math.random() * consonant.length));
    		firstLetterIs = "consonant";
    	}else if(whatLetterFirst == 0){
    		name += vowel.charAt(Math.floor(Math.random() * vowel.length));
    		firstLetterIs = "vowel";
    	}


    
    $(".name").html(name); 
}