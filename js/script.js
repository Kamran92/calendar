calendar()
	function calendar(year, month){
		createTr(createTable());
		
	}
	
	function createNameDaysWeek(elem) {
		var arrWeek = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"]
		
		for (var i = 0; i < arrWeek.length; i++) {
			<!-- var th = document.("li"); -->
			
		}
	}
	
	function createTable() {
		var table = document.createElement("table");
		document.body.appendChild(table);
		return table;
	}
	
	function createTr(elem) {
		var tr = document.createElement("tr");
		elem.appendChild(tr);
	}