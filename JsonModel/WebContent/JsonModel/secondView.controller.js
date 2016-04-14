sap.ui.controller("JsonModel.secondView", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf JsonModel.secondView
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf JsonModel.secondView
*/
	onBeforeRendering: function() {
		 
/*	  
		var empJSONObj  =  sap.ui.getCore().getModel("empModel");
		var empdata     =  empJSONObj.getData();
		
		
		
		this.getView().byId("idempid").setValue(empdata.employeeid);
		this.getView().byId("idempname").setValue(empdata.employeename);
		this.getView().byId("idempdesign").setValue(empdata.employeedesign);
		this.getView().byId("idempmail").setValue(empdata.employeemail);
		this.getView().byId("idempphone").setValue(empdata.employeephone);
		this.getView().byId("iddob").setValue(empdata.employeedob);
		*/
	   
	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf JsonModel.secondView
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf JsonModel.secondView
*/
//	onExit: function() {
//
//	}
	onTap : function() {
		
		app.to("idFirstView1");
	}
});