//  В этой задаче нужно будет написать алгоритм поиска, который скажет, можно ли найти входное слово в головоломке поиска слов, которая тоже подается функции на вход.
// Данная задача имеет два уровня сложности :
// - Первый уровень включает в себя исключительно поиск по вертикали и по горизонтали
// - Второй уровень дополнительно включает в себя поиск по диагонали
// - Слова могут быть записаны слева направо и наоборот.

function findStep(puzzle, regEx) {
	let tmpPuz = puzzle.join().replace(/,/g, '');
	if (tmpPuz.match(regEx) || tmpPuz.split('').reverse().join().replace(/,/g, '').match(regEx))
		return true;
}

function makeVertMatrix(puzzle) {
	let x = y = 0;
	let strVert = [];
	let matrixVert = [];
	while (x <= puzzle.length - 1) {
		y = 0;
		while (y <= puzzle.length - 1) {
			strVert.push(puzzle[y][x]);
			y++;
		}
		matrixVert.push(strVert);
		strVert = [];
		x++;
	}
	return matrixVert;
}

function makeDiagMatrix(puzzle) {
	let x = 0;
	let y = puzzle.length - 1;

	let strDiag = [];
	let matrixDiag = [];
	while (y >= 0) {
		let tmpY = y;
		let tmpX = 0;
		while (tmpY <= puzzle.length - 1) {
			strDiag.push(puzzle[tmpY][tmpX]);
			tmpY++;
			tmpX++;
		}
		matrixDiag.push(strDiag)
		strDiag = [];
		y--;
	}

	x = 0;
	y = 0;
	
	while (x <= puzzle.length - 1) {
		let tmpY = 0;
		let tmpX = x;
		while (tmpX <= puzzle.length - 1) {
			strDiag.push(puzzle[tmpY][tmpX]);
			tmpY++;
			tmpX++;
		}
		matrixDiag.push(strDiag)
		strDiag = [];
		x++;
	}

	return matrixDiag;
}

function searchSubString(puzzle, word) {
	const regEx = new RegExp(word)

	for (let i = 0; i < puzzle.length - 1; i++) {	// search in horizontal
		if (findStep(puzzle[i], regEx))
			return true;
	}

	const matrixVert = makeVertMatrix(puzzle);

	for (let i = 0; i < matrixVert.length - 1; i++) {	// search in vertical
		if (findStep(matrixVert[i], regEx))
			return true;
	}

	const matrixDiag = makeDiagMatrix(puzzle);

	for (let i = 0; i < matrixDiag.length - 1; i++) {	// search in vertical
		if (findStep(matrixDiag[i], regEx))
			return true;
	}

	return false;
}

const examplePuzzle = [
  ["b", "l", "g", "o", "l", "d", "s"],
  ["x", "k", "q", "w", "i", "j", "p"],
  ["a", "n", "w", "k", "k", "p", "n"],
  ["h", "e", "e", "e", "k", "i", "l"],
  ["q", "e", "k", "a", "y", "q", "a"],
  ["h", "u", "h", "a", "e", "a", "u"],
  ["k", "q", "j", "c", "c", "m", "r"],
];

// Level 1
searchSubString(examplePuzzle, "like"); // true
searchSubString(examplePuzzle, "gold"); // true
searchSubString(examplePuzzle, "queen"); // true

// // Level 2
searchSubString(examplePuzzle, "cake"); // true

