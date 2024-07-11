function readTextFile(file, names) {
		  var rawFile = new XMLHttpRequest();
		  rawFile.open("GET", file, false);
		  rawFile.onreadystatechange = function () {
			if(rawFile.readyState === 4)  {
			  if(rawFile.status === 200 || rawFile.status == 0) {
				var allText = rawFile.responseText;
				var array = allText.split(",");
				var checkedIfNameExist = (array.indexOf(names) > -1);
				if(!checkedIfNameExist){
					location.replace("https://alihaja.github.io/testfetchwebjs1/err");
				}
					
				console.log(allText);
			   }
			}
		  }
		  rawFile.send(null);
}