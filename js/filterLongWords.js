var wordArray = ['my', 'array', 'of', 'long', 'and', 'many', 'words', 'that', 'has', 'to', 'be', 'filtered'];
var maxLength = 3;
var newArray = [];

for (var x = 0; x < wordArray.length; x++) {
	if (wordArray[x].length > maxLength) {
		newArray.push(wordArray.splice(x, 1));
	}
}
console.log(wordArray);
console.log(newArray);
