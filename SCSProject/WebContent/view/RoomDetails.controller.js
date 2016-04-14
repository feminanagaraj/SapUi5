sap.ui.controller("scs.view.RoomDetails", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.RoomDetails
*/
onInit: function() {

	this.getView().byId("openMenu").attachBrowserEvent("tab keyup", function(oEvent){
		this._bKeyboard = oEvent.type == "keyup";
	}, this);
},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.RoomDetails
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.RoomDetails
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.RoomDetails
*/
//	onExit: function() {
//
//	}
	backtopage: function(){
		sap.ui.getCore().byId("app1").to("idfacdetails", "flip");
	},
	ShipBin : function(){
		sap.ui.getCore().byId("app1").to("idshipbin");
	},
	ReceiveBin: function(){
		sap.ui.getCore().byId("app1").to("idreceivebin");
	},
	onSelect : function(oEvent){
		var binId = oEvent.getParameters().rowContext.getProperty("ID");
		 sap.ui.getCore().byId("Dialog1").open();
		/*jQuery.sap.require("sap.m.MessageBox");
		sap.m.MessageBox.show("Message",sap.m.MessageBox.Icon.INFORMATION,"INF");*/
	},
	handlePressOpenMenu: function (oEvent) {
		var oButton = oEvent.getSource();
		var oDialog = this.getView().byId("handleMenuItemPress");
		var eDock = sap.ui.core.Popup.Dock;
		oDialog.open(this._bKeyboard, oButton, eDock.BeginTop, eDock.BeginBottom, oButton);
		
	}
});