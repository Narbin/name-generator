$(document).ready(function(){

	var application = {
		name : "",
		consonant : "bcdfghjklmnpqrstvwxz",
		vowel : "aeiouy",
		nameLength : null,
		whatLetterFirst : null,
		nextLetter : null
	}

	function createNewName(){
		var newName = new name('bcdfghjklmnpqrstvwxz','aeiouy');
		newName.setFirstLetter();
		newName.generateName();
		newName.firstLetterUpper('.name',newName.name);
		console.log(newName);
	}

	function name(_consonant,_vowel){
		this.consonant = _consonant;
		this.vowel = _vowel;
		this.nameLength = randomNumber(5,4);
		this.name = ''
	}

	name.prototype.setFirstLetter = function(){
		this.nextLetter = null,
		this.whatLetterFirst = randomNumber(2,0);
		if(this.whatLetterFirst == 1){
			this.name += this.consonant.charAt(randomNumber(this.consonant.length,0));
			this.nextLetter = "vowel";
		}else if(this.whatLetterFirst == 0){
			this.name += this.vowel.charAt(randomNumber(this.vowel.length,0));
			this.nextLetter = "consonant";
		}
		return this.nextLetter

	}

	name.prototype.generateName = function(){
		for( var i = 0; i < this.nameLength; i += 1 ){
			if(this.nextLetter === "consonant"){
				this.name += this.consonant.charAt(randomNumber(this.consonant.length,0));
				this.nextLetter = "vowel";
			}else{
				this.name += this.vowel.charAt(randomNumber(this.vowel.length,0));
				this.nextLetter = "consonant";
			}
		}
	}

	name.prototype.firstLetterUpper = function(where,string){
		$(where).html(string.charAt(0).toUpperCase() + string.slice(1)); 
	}

	function randomNumber(to,from){
		return Math.floor(Math.random()*to)+from;
	}

	$(".button-name").click(function(){
		createNewName();
	});
});

