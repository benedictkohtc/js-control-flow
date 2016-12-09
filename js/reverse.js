var inputString = 'building';
var reversed = '';

for (var x = inputString.length - 1; x >= 0; x--) {
	reversed = reversed + inputString[x];
}
console.log(reversed);
