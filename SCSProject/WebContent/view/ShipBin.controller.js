sap.ui.controller("scs.view.ShipBin", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.ShipBin
*/
	onInit: function() {
		this.getView().byId("openMenu").attachBrowserEvent("tab keyup", function(oEvent){
			this._bKeyboard = oEvent.type == "keyup";
		}, this);
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.ShipBin
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.ShipBin
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.ShipBin
*/
//	onExit: function() {
//
//	}
	backtoroom: function(){
		sap.ui.getCore().byId("app1").to("idroomdetails");
	},
	handlePressOpenMenu: function (oEvent) {
		var oButton = oEvent.getSource();
		var oDialog = this.getView().byId("handleMenuItemPress");
		var eDock = sap.ui.core.Popup.Dock;
		oDialog.open(this._bKeyboard, oButton, eDock.BeginTop, eDock.BeginBottom, oButton);
		
	},
	attachSelectionChange: function(oEvent){
		/*var oSelectedItem = oEvent.getParameter("listItem");  
		var sItemName = oSelectedItem.getBindingContext().getProperty("ID");
		var array = [];*/
		/*var indices = this.getView().byId("idProductsTable").getSelectedIndices();
		alert(indices.length)*/
		/*var bind = this.getView().byId(C).getSelectedItem();
		var bbbb = this.getView().addDependent();*/
		var row = 1;
		$('#idshipbin--rowCount-content').html("0 Bins Selected");
		for(var i=0; i<$('#idshipbin--idProductsTable-listUl').find('input[type="checkbox"]').length;i++){
			var chek = $('#idshipbin--idProductsTable-listUl').find('#__item16-idshipbin--idProductsTable-'+i+'-selectMulti-CB');
			if(chek.is(':checked')){ 
				$('#idshipbin--rowCount-content').html((row++)+" Bins Selected");
			}
		}
	},
	getSelectedIndices : function(evt){
		var aIndices = this.getView().byId("idProductsTable").getSelectedIndices();
		/*var sMsg;
		if (aIndices.length < 1) {
			sMsg = "no item selected";
		} else {
			sMsg = aIndices;
		}*/
		alert(aIndices.length);
	}
	
});