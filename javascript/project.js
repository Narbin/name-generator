/* global document:true */

document.addEventListener('DOMContentLoaded',() => {

	let divForName = document.querySelector('.button-name');

	class Name {
		constructor(_consonant, _vowel, _localization, _nameLength){
			this.consonant = _consonant;
			this.vowel = _vowel;
			this.consonantLength = this.consonant.length;
			this.vowelLength = this.vowel.length;
			this.nameLength = _nameLength;
			this.name = '';
			this.where = document.querySelector('.name');
			this.setFirstLetter();
			this.generateName();
			this.firstLetterUpper();
		}
		setFirstLetter(){
			this.whatLetterFirst = randomNumber(2, 0);
			if (this.whatLetterFirst === 1) {
				console.log(this);
				this.name += this.consonant.charAt(randomNumber(this.consonantLength, 0));
				this.nextLetter = 'vowel';
			} else if (this.whatLetterFirst === 0) {
				this.name += this.vowel.charAt(randomNumber(this.vowelLength, 0));
				this.nextLetter = 'consonant';
			}
			return this;
		};
		generateName() {
			for (let i = 0; i < this.nameLength; i += 1) {
				if (this.nextLetter === 'consonant') {
					this.name += this.consonant.charAt(randomNumber(this.consonantLength, 0));
					this.nextLetter = 'vowel';
				} else {
					this.name += this.vowel.charAt(randomNumber(this.vowelLength, 0));
					this.nextLetter = 'consonant';
				}
			}
			return this;
		};
		firstLetterUpper () {
			this.where.innerHTML = this.name.charAt(0).toUpperCase() + this.name.slice(1);
			return this;
		};
	}

	function randomNumber(to, from) {
		return Math.floor(Math.random() * to) + from;
	}

	function createNewName() {
		let newName = new Name('bcdfghjklmnpqrstvwxz', 'aeiouy', 'name', randomNumber(5, 4));
	}

	divForName.addEventListener('click', createNewName);

});

