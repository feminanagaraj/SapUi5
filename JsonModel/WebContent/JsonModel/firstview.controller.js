 sap.ui.controller("JsonModel.firstview", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf JsonModel.firstview
*/
	onInit: function() {
		var empdata = {
				 
				employeeid     : "",
				employeename   : "",
				employeedesign : "",
				employeemail   : "",
				employeephone  : "",
				employeedob    : ""
				
		              };
		
	   var empJSONObj = new sap.ui.model.json.JSONModel();
	   empJSONObj.setData(empdata);
	   sap.ui.getCore().setModel(empJSONObj,"empModel");		
		
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf JsonModel.firstview
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf JsonModel.firstview
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf JsonModel.firstview
*/
//	onExit: function() {
//
//	}
/*  onClick : function() {
		
		app.to("idsecondview")
	},*/
	 onSubmit : function() {
		   
		   
			
		   var allfilled = true;
			var allvalid  = true;
			
			var empid     = this.getView().byId("idempid").getValue();
			var empname   = this.getView().byId("idempname").getValue();
			var empdesign = this.getView().byId("idempdesign").getValue();
			var empmail   = this.getView().byId("idempmail").getValue();
			var empphone  = this.getView().byId("idempphone").getValue();
			var empdob  = this.getView().byId("iddob").getValue();
			
		//	alert(empdob);
			
			if(empid=="")
				{
				allfilled = false;
				this.getView().byId("idempid").setValueState("Error");
				this.getView().byId("idempid").setValueStateText("Please Enter Employee ID");
				}
			else{
				this.getView().byId("idempid").setValueState("None");
				var empid_regex = /^[0-9]+$/;
				if(!empid.match(empid_regex) || empid.length!=8)
					{
					allvalid = false;
					this.getView().byId("idempid").setValueState("Error");
					this.getView().byId("idempid").setValueStateText("Employee ID is not valid");
					}
			}
			if(empname=="")
				{
				allfilled = false;
				this.getView().byId("idempname").setValueState("Error");
				this.getView().byId("idempname").setValueStateText("Please Enter Employee name");
				}
			else{
				this.getView().byId("idempname").setValueState("None");
				var empname_regex = /^[a-zA-Z]+$/;
				if(!empname.match(empname_regex) || empname.length > 8)
					{
					allvalid = false;
					this.getView().byId("idempname").setValueState("Error");
					this.getView().byId("idempname").setValueStateText("Employee Name is not valid");
					}
				
			}
			if(empdesign=="")
				{
				allfilled = false;
				this.getView().byId("idempdesign").setValueState("Error");
				this.getView().byId("idempdesign").setValueStateText("Please Enter Employee Designation");
			}
			else{
				this.getView().byId("idempdesign").setValueState("None");
				var empdesign_regex = /^[a-zA-Z0-9]+$/;
				if(!empdesign.match(empdesign_regex) )
					{
					allvalid = false;
					this.getView().byId("idempdesign").setValueState("Error");
					this.getView().byId("idempdesign").setValueStateText("Employee designation is not valid");
					}
			}
			if(empmail=="")
				{
				allfilled = false;
				this.getView().byId("idempmail").setValueState("Error");
				this.getView().byId("idempmail").setValueStateText("Please Enter Employee mail id");
				}
			else{
				
				this.getView().byId("idempmail").setValueState("None");
				var empmail_regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
				if(!empmail.match(empmail_regex) )
					{
					allvalid = false;
					this.getView().byId("idempmail").setValueState("Error");
					this.getView().byId("idempmail").setValueStateText("Employee mail id is not valid");
					}
			}
			if(empphone=="")
				{
				allfilled = false;
				this.getView().byId("idempphone").setValueState("Error");
				this.getView().byId("idempphone").setValueStateText("Please Enter Employee phone number");
				}
			else{
				this.getView().byId("idempphone").setValueState("None");
				var empphone_regex = /^[0-9]+$/;
				if(!empphone.match(empphone_regex) || empphone.length!=10)
					{
					allvalid = false;
					this.getView().byId("idempphone").setValueState("Error");
					this.getView().byId("idempphone").setValueStateText("Phone number is not valid");
					}
			}
			
			if(empdob=="")
			{
			allfilled = false;
			this.getView().byId("iddob").setValueState("Error");
			this.getView().byId("iddob").setValueStateText("Please Enter Date of Birth");
			}
		   else{
			this.getView().byId("iddob").setValueState("None");
			
			if(this.validateDate(empdob) == false)
				{
				allvalid = false;
				this.getView().byId("iddob").setValueState("Error");
				this.getView().byId("iddob").setValueStateText("Date of birth is not Valid");
				}
		}
			
			
			if(allvalid == true && allfilled == true)
				{
				/// TO DISPLAY MESSAGE
				
			/*	jQuery.sap.require("sap.m.MessageBox");
				sap.m.MessageBox.show("Mandatory Fields are Filled and Vaild",
						sap.m.MessageBox.Icon.SUCCESS,"SUCCESS");
				
				this.getView().byId("idempid").setValue("");
				this.getView().byId("idempname").setValue("");
				this.getView().byId("idempdesign").setValue("");
				this.getView().byId("idempmail").setValue("");
				this.getView().byId("idempphone").setValue("");
				this.getView().byId("iddob").setValue("");*/
				
				//   jsonmodel starts
				
				/*
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
				   sap.ui.getCore().setModel(empJSONObj,"empModel");*/
				   
				   app.to("idsecondview")

				}
			
			// json model ends here
			
			
			//else{
			//	jQuery.sap.require("sap.m.MessageBox");
			//	sap.m.MessageBox.show("Please Fill all Mandatory Fields",
			//			sap.m.MessageBox.Icon.ERROR,"ERROR");
			// }
			
		},
		
		onEventEmpId : function()
		{
		 var empid     = this.getView().byId("idempid").getValue();
		 var empname   = this.getView().byId("idempname").getValue();
		 var empdesign = this.getView().byId("idempdesign").getValue();
		 var empmail   = this.getView().byId("idempmail").getValue();
		 var empphone  = this.getView().byId("idempphone").getValue();
		 var empdob    = this.getView().byId("iddob").getValue();
			
		 if(empid=="")
			{
			this.getView().byId("idempid").setValueState("Error");
			this.getView().byId("idempid").setValueStateText("Please Enter Employee ID");
			}
		 else{
				this.getView().byId("idempid").setValueState("None");
			}
		},
		
		
		validateDate : function(selDate)
		{
			
		  var year      = selDate.substring(0,4); 	
		  var month     = selDate.substring(4,6);
		  var date      = selDate.substring(6,8);
		  
		  var todaydate = new Date();
		  
		  var y         = todaydate.getFullYear();
		  var m         = todaydate.getMonth();
		  m = m+1;
		  var d         = todaydate.getDate();
		  
		  var oneDay    = 24 * 60 * 60 * 1000;
		  
		  var firstDate  = new Date (year,month,date);
		  var secondDate = new Date (y,m,d);
		  
		  var diffDays   = Math.round((firstDate.getTime() - secondDate.getTime())/(oneDay));
		  
		 
		  if(diffDays > 0)
		{
			  return false; 
		}
		  else{
		      return true;
		      }
		   
		  
	 }

		
});