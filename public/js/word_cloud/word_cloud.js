
   
   function allowDrop(ev) {
	    ev.preventDefault();
	}

	function drag(ev) {
	    ev.dataTransfer.setData("text", ev.target.id);
	}

	function drop(ev) {
	    ev.preventDefault();
	    var data = ev.dataTransfer.getData("text");
	    var pathfile = "";
	    //alert("data --> " + data);
	    //ev.target.appendChild(document.getElementById(data));
	    document.getElementById("Business_Name").innerHTML = data;
	    //alert(data);
	    pathfile = data + ".json";
	    $.getJSON( "js/word_cloud/" + data + ".json", function( records ) {
			console.log(records);
			
			var wordGraph = "";
			for (var key in records) {
				  if (records.hasOwnProperty(key)) {
				  	wordGraph += "<span data-weight='" + records[key] + "'>" + key + "</span>";
				  }
				}
			//alert("word graph -->" + wordGraph);
			document.getElementById("wordcloud").innerHTML = wordGraph;
			
			//---
			$("#wordcloud").awesomeCloud({
				"size" : {
			 		"grid" : 7,
			 		"factor" : 1
			 	},
			 	"options" : {
			 		"color" : "random-dark",
					"rotationRatio" : 0.35
			 	},
			 	"font" : "'Times New Roman', Times, serif",
			 	"shape" : "circle"
			 });
			//---
				
		});
	}
	