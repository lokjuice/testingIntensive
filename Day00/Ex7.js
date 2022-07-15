// Напишите функцию банкомат которая принимает на вход число и возвращает объект в формате  {номинал_купюры : количество_купюр}.
// Если банкомат не может выдать данную сумму, то выводится ошибка 'Incorrect value'.
// Купюры должны выдаться оптимальным образом (вместо 5 купюр номиналом 1000 выдается одна 5000).
// За раз банкомат может выдавать не более 20 купюр, если купюр для выдачи не хватает то выводится ошибка 'Limit exceeded'

function atm(sum) {
  const banknots = [5000, 2000, 1000, 500, 200, 100, 50];

		let i = cnt = 0;
		let resCase = {}; 
		while (i <= banknots.length - 1) {
			if (cnt >= 20) { return "Limit exceeded"; }
			if (sum < banknots[i]) {
				resCase[banknots[i]] = cnt;
				i++;
				cnt = 0;
			}
			if (sum >= banknots[i]) { sum -= banknots[i]; }
			cnt++;
	}
	if (sum != 0)
		return "Incorrect value";
	return resCase;
}

atm(8350); // {5000 : 1, 2000 : 1, 1000 : 1, 200 : 1, 100 : 1, 50 : 1 }
atm(2570); // Incorrect value
atm(100050); // limit exceeded


