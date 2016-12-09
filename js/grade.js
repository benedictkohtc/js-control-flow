var testGrade = 58;
var testGradeFloor = Math.floor(testGrade / 10);
var letterGrade;

switch (testGradeFloor) {
	case 10:
	case 9:
	case 8:
		letterGrade = 'A';
		break;
	case 7:
		letterGrade = 'B';
		break;
	case 6:
		letterGrade = 'C';
		break;
	case 5:
		letterGrade = 'D';
		break;
	default:
		letterGrade = 'F';
}

console.log(letterGrade);
