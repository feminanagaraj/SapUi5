sap.ui.controller("shellxml.App", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf shellxml.App
*/
	onInit: function() {
	     var leaveReq = {
	    		 leaveList : [
	    		              {   leaveReqId : "001" , 
	    		            	  requestdate : "01.03.2016", 
	    		            	  name : "Jhonny",
	    		            	  depName : "Development",
	    		            	  tReq : "on",
	    		            	  startdate : "01.04.2016",
	    		            	  edate : "08.04.2016",
	    		            	  levAvai : "10",
	    		            	  levBal : "4",
	    		            	  selection : "yes",
	    		            	  remarks : "Good"
	    		                  		              },
	    		              {   leaveReqId : "002" , 
	    		            	  requestdate : "01.03.2016", 
	    		            	  name : "Mary",
	    		            	  depName : "Development",
	    		            	  tReq : "on",
	    		            	  startdate : "01.04.2016",
	    		            	  edate : "08.04.2016",
	    		            	  levAvai : "10",
	    		            	  levBal : "4",
	    		            	  selection : "yes",
	    		            	  remarks : "Good"
	    		                  		              },
          		              {   leaveReqId : "003" , 
	    		            	  requestdate : "01.03.2016", 
	    		            	  name : "Mary",
	    		            	  depName : "Development",
	    		            	  tReq : "on",
	    		            	  startdate : "01.04.2016",
	    		            	  edate : "08.04.2016",
	    		            	  levAvai : "10",
	    		            	  levBal : "4",
	    		            	  selection : "yes",
	    		            	  remarks : "Good"
	    		                  		              },
          		              {   leaveReqId : "004" , 
	    		            	  requestdate : "01.03.2016", 
	    		            	  name : "Mary",
	    		            	  depName : "Development",
	    		            	  tReq : "on",
	    		            	  startdate : "01.04.2016",
	    		            	  edate : "08.04.2016",
	    		            	  levAvai : "10",
	    		            	  levBal : "4",
	    		            	  selection : "yes",
	    		            	  remarks : "Good"
	    		        	    		         },   		              
	          		          {   leaveReqId : "005" , 
	    		            	  requestdate : "01.03.2016", 
	    		            	  name : "Mary",
	    		            	  depName : "Development",
	    		            	  tReq : "on",
	    		            	  startdate : "01.04.2016",
	    		            	  edate : "08.04.2016",
	    		            	  levAvai : "10",
	    		            	  levBal : "4",
	    		            	  selection : "yes",
	    		            	  remarks : "Good"
	    		                  		              },
	    	    		         {   leaveReqId : "005" , 
	    		            	  requestdate : "01.03.2016", 
	    		            	  name : "Mary",
	    		            	  depName : "Development",
	    		            	  tReq : "on",
	    		            	  startdate : "01.04.2016",
	    		            	  edate : "08.04.2016",
	    		            	  levAvai : "10",
	    		            	  levBal : "4",
	    		            	  selection : "yes",
	    		            	  remarks : "Good"
	    		                  		              },
              		          {   leaveReqId : "005" , 
 	    		            	  requestdate : "01.03.2016", 
 	    		            	  name : "Mary",
 	    		            	  depName : "Development",
 	    		            	  tReq : "on",
 	    		            	  startdate : "01.04.2016",
 	    		            	  edate : "08.04.2016",
 	    		            	  levAvai : "10",
 	    		            	  levBal : "4",
 	    		            	  selection : "yes",
 	    		            	  remarks : "Good"
 	    		                  		              },
              		          {   leaveReqId : "005" , 
	    		            	  requestdate : "01.03.2016", 
	    		            	  name : "Mary",
	    		            	  depName : "Development",
	    		            	  tReq : "on",
	    		            	  startdate : "01.04.2016",
	    		            	  edate : "08.04.2016",
	    		            	  levAvai : "10",
	    		            	  levBal : "4",
	    		            	  selection : "yes",
	    		            	  remarks : "Good"
	    		                  		              },
              		          {   leaveReqId : "005" , 
	    		            	  requestdate : "01.03.2016", 
	    		            	  name : "Mary",
	    		            	  depName : "Development",
	    		            	  tReq : "on",
	    		            	  startdate : "01.04.2016",
	    		            	  edate : "08.04.2016",
	    		            	  levAvai : "10",
	    		            	  levBal : "4",
	    		            	  selection : "yes",
	    		            	  remarks : "Good"
    	    		    	    		               },
    		                 {    leaveReqId : "005" , 
	    		             	  requestdate : "01.03.2016", 
	    		            	  name : "Mary",
	    		            	  depName : "Development",
	    		            	  tReq : "on",
	    		            	  startdate : "01.04.2016",
	    		            	  edate : "08.04.2016",
	    		            	  levAvai : "10",
	    		            	  levBal : "4",
	    		            	  selection : "yes",
	    		            	  remarks : "Good"
	    		                  		              },
    		                  {   leaveReqId : "005" , 
	    		            	  requestdate : "01.03.2016", 
	    		            	  name : "Mary",
	    		            	  depName : "Development",
	    		            	  tReq : "on",
	    		            	  startdate : "01.04.2016",
	    		            	  edate : "08.04.2016",
	    		            	  levAvai : "10",
	    		            	  levBal : "4",
	    		            	  selection : "yes",
	    		            	  remarks : "Good"
	    		                  		              },
          		              {   leaveReqId : "005" , 
	    		            	  requestdate : "01.03.2016", 
	    		            	  name : "Mary",
	    		            	  depName : "Development",
	    		            	  tReq : "on",
	    		            	  startdate : "01.04.2016",
	    		            	  edate : "08.04.2016",
	    		            	  levAvai : "10",
	    		            	  levBal : "4",
	    		            	  selection : "yes",
	    		            	  remarks : "Good"
	    		                  		              },
      		                  {   
	    		                  leaveReqId : "005" , 
	    		            	  requestdate : "01.03.2016", 
	    		            	  name : "Mary",
	    		            	  depName : "Development",
	    		            	  tReq : "on",
	    		            	  startdate : "01.04.2016",
	    		            	  edate : "08.04.2016",
	    		            	  levAvai : "10",
	    		            	  levBal : "4",
	    		            	  selection : "yes",
	    		            	  remarks : "Good"
    	    		    		    		        	    		        	    		                  		              }
 
	    		              ]
	    		 
	     };
	     
	     var leaveJSONObj = new sap.ui.model.json.JSONModel();
	     leaveJSONObj.setData(leaveReq);
	     sap.ui.getCore().setModel(leaveJSONObj,"ui5LeaveModel");
	     
	},  
	
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf shellxml.App
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf shellxml.App
*/
	onAfterRendering: function() {
		$("#viewId--idTable-listUl").dataTable();
	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf shellxml.App
*/
//	onExit: function() {
//
//	}

	
	
	
});