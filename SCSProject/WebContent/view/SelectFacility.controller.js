sap.ui.controller("scs.view.SelectFacility", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.SelectFacility
*/
	onInit: function() {
		this.getView().byId("openMenu").attachBrowserEvent("tab keyup", function(oEvent){
			this._bKeyboard = oEvent.type == "keyup";
		}, this);
		
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.SelectFacility
*/
onBeforeRendering: function() {
	/*var json = sap.ui.getCore().getModel("model");
	var empdata = json.getData();
	console.log(empdata)*/
	/*this.getView().byId("fname").setValue(empdata.employeefname);*/
},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.SelectFacility
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.SelectFacility
*/
//	onExit: function() {
//
//	}
	onChange: function(){
		var selected = this.getView().byId("comboid").getSelectedItem().getBindingContext();
		alert(selected)
		//var val = selected.getBindingContext();
		sap.ui.getCore().byId("idfacdetails--facility_name").setBindingContext(selected);
		sap.ui.getCore().byId("idroomdetails--room_facility_name").setBindingContext(selected);
		/*var facjson = {
				facname : selected,
		}
		var facselected = new sap.ui.model.json.JSONModel();
		facselected.setData(facjson);
		sap.ui.getCore().setModel(facselected,"facdatabase");*/
		
					sap.ui.getCore().byId("app1").to("idfacdetails");
		
	},
	handlePressOpenMenu: function (oEvent) {
		var oButton = oEvent.getSource();
		var oDialog = this.getView().byId("handleMenuItemPress");
		var eDock = sap.ui.core.Popup.Dock;
		oDialog.open(this._bKeyboard, oButton, eDock.BeginTop, eDock.BeginBottom, oButton);
		
	}
});