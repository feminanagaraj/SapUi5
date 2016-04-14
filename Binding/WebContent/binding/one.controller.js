sap.ui.controller("binding.one", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf binding.one
*/
	onInit: function() {
		 var empid     = this.getView().byId("idempid").getValue();
			var empname   = this.getView().byId("idempname").getValue();
			var empdesign = this.getView().byId("idempdesign").getValue();
			var empmail   = this.getView().byId("idempmail").getValue();
			var empphone  = this.getView().byId("idempphone").getValue();
			var empdob    = this.getView().byId("iddob").getValue();
			
			var empdata = {
				 
					employeeid     : empid,
					employeename   : empname,
					employeedesign : empdesign,
					employeemail   : empmail,
					employeephone  : empphone,
					employeedob    : empdob
					
			              };
			
		   var empJSONObj = new sap.ui.model.json.JSONModel();
		   empJSONObj.setData(empdata);
		   sap.ui.getCore().setModel(empJSONObj,"empModel");
		   
		  
		
		
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf binding.one
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf binding.one
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf binding.one
*/
//	onExit: function() {
//
//	}
	 onSubmit : function() {
		 app.to("idtwo");
		 
	 }
});