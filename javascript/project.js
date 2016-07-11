$(document).ready(function(){
	$(".button-name").click(function(){
		generateName();
	});
});

var generateName = function(){
	var name = "",
		consonant = "bcdfghklmnpqrstvwxz",
		vowel = "aeijouy";
    	nameLength = Math.floor(Math.random()*9)+1,
    	whatLetterFirst = Math.floor(Math.random()*2),
    	firstLetterIs = null;

    	if(whatLetterFirst == 1){
    		name += consonant.charAt(Math.floor(Math.random() * nameLength));
    		firstLetterIs = "consonant";
    	}else if(whatLetterFirst == 0){
    		name += vowel.charAt(Math.floor(Math.random() * nameLength));
    		firstLetterIs = "vowel";
    	}


    
    $(".name").html(name); 
}