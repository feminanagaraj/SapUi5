var button="true";
sap.ui.controller("scs.view.FacDetails", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf scspro.s3
*/
	onInit: function() {
		/*this.getView().byId("idmenu").addStyleClass("hide");*/
		
		this.getView().byId("openMenu").attachBrowserEvent("tab keyup", function(oEvent){
			this._bKeyboard = oEvent.type == "keyup";
		}, this);
		
		/*this.getView().byId("fname").setValue(empdata.employeefname);*/
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf scspro.s3
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTM	L is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf scspro.s3
*/
	onAfterRendering: function() {
		/*var json = sap.ui.getCore().getModel("facdatabase");
		sap.ui.getCore().byId("idfacdetails--facility_name").setText(json.oData.facname+" Summary");*/
		
	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf scspro.s3
*/
//	onExit: function() {
//
//	}
	backtosel: function(){
		sap.ui.getCore().byId("app1").to("idselectfacility");
	},
	GoToRoom: function(){
		/*$('#idfacdetails--').find('Button')*/
		var btn = this.getView().byId("room1").getText();
		alert(btn)
		sap.ui.getCore().byId("app1").to("idroomdetails");
	},
	handlePressOpenMenu : function(oEvent) {
		var oButton = oEvent.getSource();
		var oDialog = this.getView().byId("handleMenuItemPress");
		var eDock = sap.ui.core.Popup.Dock;
		oDialog.open(this._bKeyboard, oButton, eDock.BeginTop,
				eDock.BeginBottom, oButton);

	},

});