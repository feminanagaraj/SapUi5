sap.ui.jsview("ganttchart.app", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf ganttchart.app
	*/ 
	getControllerName : function() {
		return "ganttchart.app";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf ganttchart.app
	*/ 
	createContent : function(oController) {
 		 alert("loaded");
 		google.load("visualization", "1.1", {packages:["gantt"]});
 	    google.setOnLoadCallback(drawChart);
 	function toMilliseconds(minutes) {
 	      return minutes * 60 * 1000;
 	    }

 	    function drawChart() {

 	      var otherData = new google.visualization.DataTable();
 	      otherData.addColumn('string', 'Task ID');
 	      otherData.addColumn('string', 'Task Name');
 	      otherData.addColumn('string', 'Resource');
 	      otherData.addColumn('date', 'Start');
 	      otherData.addColumn('date', 'End');
 	      otherData.addColumn('number', 'Duration');
 	      otherData.addColumn('number', 'Percent Complete');
 	      otherData.addColumn('string', 'Dependencies');

 	      otherData.addRows([
 	        ['toTrain', 'Walk to train stop', 'walk', null, null, toMilliseconds(5), 100, null],
 	        ['music', 'Listen to music', 'music', null, null, toMilliseconds(70), 100, null],
 	        ['wait', 'Wait for train', 'wait', null, null, toMilliseconds(10), 100, 'toTrain'],
 	        ['train', 'Train ride', 'train', null, null, toMilliseconds(45), 75, 'wait'],
 	        ['toWork', 'Walk to work', 'walk', null, null, toMilliseconds(10), 0, 'train'],
 	        ['work', 'Sit down at desk', null, null, null, toMilliseconds(2), 0, 'toWork'],

 	      ]);

 	      var options = {
 	        height: 275,
 	        gantt: {
 			   criticalPathEnabled: false,
 			   
 			    arrow: {
 	              angle: 100,
 	              width: 5,
 	              color: 'red',
 	              radius: 0
 	          //defaultStartDateMillis: new Date(2015, 3, 28)
 			  }
 	        }
 	      };
 	     var options1 = {
 	 	        height: 275,
 	 	        width: '50%',
 	 	        gantt: {
 	 			   criticalPathEnabled: false,
 	 			   
 	 			    arrow: {
 	 	              angle: 100,
 	 	              width: 5,
 	 	              color: 'red',
 	 	              radius: 0
 	 	          //defaultStartDateMillis: new Date(2015, 3, 28)
 	 			  }
 	 	        }
 	 	      };
 	    var chart = new google.visualization.GanttChart(document.getElementById('content'));
 	     var containerSize = $("#content").width();
 	     alert(containerSize)
 		if (containerSize > 960) {
 			chart.draw(otherData, options);
 		} else if (containerSize <= 959) {
 			chart.draw(otherData, options1);
 		}


 		function resizeHandler() {
 			chart.draw(otherData, options1);
 		}
 		if (window.addEventListener) {
 			window.addEventListener('resize', resizeHandler, false);
 			window.addEventListener('load', resizeHandler, false);
 		} else if (window.attachEvent) {
 			window.attachEvent('onresize', resizeHandler);
 			window.attachEvent('onload', resizeHandler);
 		}

 	     

 	      chart.draw(otherData, options);
 	    }

		
	}

});