// Вам нужно написать функцию которая принимает в кач-ве аргумента массива чисел и удаляет все повторяющиеся значения

function removeReps(array) {
	let tmp = [];
	
	for(let i = 0; i < array.length - 1; i++) {
		if (array[i] != array[i - 1])
			tmp.push(array[i]);
	}
	return tmp;
}

removeReps([1, 1, 2, 4, 5, 6, 6, 8, 9, 11]); // [1,2,4,5,6,8,9,11]

