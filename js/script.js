calendar(2019, 10);
	function calendar(year, month){
		createNameDaysWeek(createTr(createTable())); // Создаем таблицу с днями недели
		var firstDayMonth = 1;
		var lastDayMonth = numberDaysMonth(year, month); // Узнаем сколько дней в месяце
		var arr = createArr(firstDayMonth, lastDayMonth); // Создаем массив с числами от 1 до конца месяца
		
		addBeginningArray(arr, NumberDaysBeginning(year, month)); // Добавляем в начало массива пустые элементы 
		addEndArray(arr, NumberDaysEnd(year, month, lastDayMonth)); // Добавляем в конец массива пустые элементы 
		createWeeks(arr); // создаем из полученного массива календарь :)
	};
	
	function createNameDaysWeek(elem) {
		var arrWeek = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
		
		for (var i = 0; i < arrWeek.length; i++) {
			createTh(elem, arrWeek[i]);
		}
	};
	
	function createTable() {
		var table = document.createElement("table");
		document.body.appendChild(table);
		
		return table;
	};
	
	function createTr(elem) {
		var tr = document.createElement("tr");
		elem.appendChild(tr);
		
		return tr;
	};
	
	function numberDaysMonth(year, month) {
		var date = new Date(year, month, 0);
		
		return date.getDate();
	};
	
	function createArr(firstElem, lastElem) {
		arr = [];
		for (var i = firstElem; i <= lastElem; i++) {
			arr.push(i);
		};
		
		return arr;
	};
	
	function NumberDaysBeginning(yearElem, monthElem) {
		var date = new Date(yearElem, monthElem - 1, 1);
		if (date.getDay() != 0) {
			return date.getDay() - 1;
		} else {return 6};
	};
	
	function NumberDaysEnd(yearElem, monthElem, lastDayMonthElem) {
		var date = new Date(yearElem, monthElem - 1, lastDayMonthElem);
		if (date.getDay() != 0) {
			return 7 - date.getDay();
		} else {return 0};
	};
	
	function addBeginningArray(arrElem, numElem) {
		for (var i = 0; i < numElem; i++) {
			arrElem.unshift("");
		};
		
		return arrElem;
	};
	
	function addEndArray(arrElem, numElem) {
		for (var i = 0; i < numElem; i++) {
			arrElem.push("");
		};
		
		return arrElem;
	};
	
	
	function createWeeks(arrElem) {
		var table = document.querySelector("table");
		var leng = arrElem.length; 
		
		for (var i = 0; i < leng / 7; i++) {
			var  tr = createTr(table);
			for (var j = 0; j < 7; j++) {
				createTh(tr, arrElem.shift());
			};
		};
	};
	
	function createTh(elem, text) {
		var th = document.createElement("th");
		th.innerHTML = text;
		elem.appendChild(th);
	};
	
	