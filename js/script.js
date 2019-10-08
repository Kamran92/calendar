initCalendar();
	function initCalendar() {
		var date = new Date();
		var showYear = date.getFullYear();
		var showMonth = date.getMonth();
		
		var prew = document.querySelector(".prew");
		var next = document.querySelector(".next");
		
		// функция кнопки назад
		prew.addEventListener("click", function() {
			showYear = getPrevYear(showYear, showMonth);
			showMonth = getPrevMonth(showMonth);
			
			calendar(showYear, showMonth + 1);
		});
		
		// функция кнопки вперед
		next.addEventListener("click", function() {
			showYear = getNextYear(showYear, showMonth);
			showMonth = getNextMonth(showMonth);
			
			calendar(showYear, showMonth + 1);
		});
		
		
		calendar(date.getFullYear(), date.getMonth() + 1);
	}
	
	function getPrevYear(year, month) {
		if (month == 0) {
			return year - 1;
		} else {
			return year;
		};
	}
	
	function getPrevMonth(month) {
		if (month == 0) {
			return month = 11;
		} else {
			return month - 1;
		}
	}

	
	function getNextYear(year, month) {
		if (month == 11) {
			return year + 1;
		} else {
			return year;
		};
	}
	
	function getNextMonth(month) {
		if (month == 11) {
			return month = 0;
		} else {
			return month + 1;
		}
	}
	
	
	function calendar(year, month){
		var info = document.querySelector(".info");
		var dates = document.querySelector(".dates");
		createTitleDate(year, month, info); // Заголовок календаря
		var firstDayMonth = 1; // Первый день месяца
		var lastDayMonth = numberDaysMonth(year, month); // Узнаем сколько дней в месяце
		var arr = createArr(firstDayMonth, lastDayMonth); // Создаем массив с числами от 1 до конца месяца
		addBeginningArray(arr, NumberDaysBeginning(year, month)); // Добавляем в начало массива пустые элементы 
		addEndArray(arr, NumberDaysEnd(year, month, lastDayMonth)); // Добавляем в конец массива пустые элементы 
		createWeeks(arr, dates); // Создаем из полученного массива календарь :)
		stylingToday(year, month, dates); // Обозначали сегодняшний день в красный цвет
		
	};
	// функция стилизации сегодняшний день
	function stylingToday(yearElem, monthElem, elem) {
		var date = new Date(yearElem, monthElem - 1);
		var newDate = new Date();
		
		if (newDate.getFullYear() == date.getFullYear() && newDate.getMonth() == date.getMonth()) {
			var td = elem.querySelectorAll("td");
			for (var i = 0; i < td.length; i++) {
				if (td[i].innerHTML == newDate.getDate()) {
					td[i].classList.add("active");
				};
			};
		};
	};
	// функция найти сколько дней в месяце
	function numberDaysMonth(year, month) {
		var date = new Date(year, month, 0);
		
		return date.getDate();
	};
	// функция создать массив из дней в месяце
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
	
	// функция добавить созданный массив в таблицу
	function createWeeks(arrElem, tableElem) {
		tableElem.innerHTML = "";
		var leng = arrElem.length; 
		
		for (var i = 0; i < leng / 7; i++) {
			var  tr = createTr(tableElem);
			for (var j = 0; j < 7; j++) {
				createTd(tr, arrElem.shift());
			};
		};
	};
	
	function createTr(elem) {
		var tr = document.createElement("tr");
		elem.appendChild(tr);
		
		return tr;
	};
	
	function createTd(elem, text) {
		var td = document.createElement("td");
		td.innerHTML = text;
		elem.appendChild(td);
		
		return td;
	};
	
	// функция создать заголовок
	function createTitleDate(elemYear, elemMonth, elem) {
		var arr = [
			"Январь", "Февраль", "Март", "Апрель", 
			"Май", "Июнь", "Июль", "Август", 
			"Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
		];
		elem.innerHTML = arr[elemMonth -1] + " " + elemYear;
	};