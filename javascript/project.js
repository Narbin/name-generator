document.addEventListener("DOMContentLoaded", function(event) {

	var divForName = document.querySelector('.button-name');
	divForName.addEventListener('click', createNewName);

	function createNewName(){
		var newName = new Name('bcdfghjklmnpqrstvwxz', 'aeiouy', 'name', randomNumber(5,4));
		newName
			.setFirstLetter()
			.generateName()
			.firstLetterUpper();
		console.log(newName);
	}

	function Name(_consonant, _vowel, _localization, _nameLength){
		this.consonant = _consonant;
		this.vowel = _vowel;
		this.consonantLength = this.consonant.length;
		this.vowelLength = this.vowel.length;
		this.nameLength = _nameLength;
		this.name = '';
		this.where = document.querySelector('.name');
	}

	Name.prototype.setFirstLetter = function(){
		this.whatLetterFirst = randomNumber(2,0);
		if(this.whatLetterFirst == 1){
			this.name += this.consonant.charAt(randomNumber(this.consonantLength, 0));
			this.nextLetter = 'vowel';
		}else if(this.whatLetterFirst === 0){
			this.name += this.vowel.charAt(randomNumber(this.vowelLength, 0));
			this.nextLetter = 'consonant';
		}
		return this;
	};

	Name.prototype.generateName = function(){
		for( var i = 0; i < this.nameLength; i += 1 ){
			if(this.nextLetter === 'consonant'){
				this.name += this.consonant.charAt(randomNumber(this.consonant.length, 0));
				this.nextLetter = 'vowel';
			}else{
				this.name += this.vowel.charAt(randomNumber(this.vowel.length, 0));
				this.nextLetter = 'consonant';
			}
		}
		return this;
	};

	Name.prototype.firstLetterUpper = function(){
		return this.where.innerHTML = this.name.charAt(0).toUpperCase() + this.name.slice(1); 
	};

	function randomNumber(to, from){
		return Math.floor(Math.random() * to) + from;
	}

});

