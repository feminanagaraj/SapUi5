sap.ui.jsview("scs.view.App", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.App
	*/ 
	getControllerName : function() {
		return "scs.view.App";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.App
	*/ 
	createContent : function(oController) {
		this.setDisplayBlock(true);
		
		var app = new sap.m.App("app1",{initialPage:"idlogin"});
		var login = sap.ui.view({id:"idlogin", viewName:"scs.view.Login", type:sap.ui.core.mvc.ViewType.XML});
		var selectfacility = sap.ui.view({id:"idselectfacility", viewName:"scs.view.SelectFacility", type:sap.ui.core.mvc.ViewType.XML});
		var facdetails = sap.ui.view({id:"idfacdetails", viewName:"scs.view.FacDetails", type:sap.ui.core.mvc.ViewType.XML});
		var roomdetails = sap.ui.view({id:"idroomdetails", viewName:"scs.view.RoomDetails", type:sap.ui.core.mvc.ViewType.XML});
		var receivebin = sap.ui.view({id:"idreceivebin", viewName:"scs.view.ReceiveBin", type:sap.ui.core.mvc.ViewType.XML});
		var dialogbin = sap.ui.view({id:"iddialogbin", viewName:"scs.view.Dialog", type:"JS"});
		var shipbin = sap.ui.view({id:"idshipbin", viewName:"scs.view.ShipBin", type:sap.ui.core.mvc.ViewType.XML});
		app.addPage(login);
		app.addPage(selectfacility);
		app.addPage(facdetails);
		app.addPage(roomdetails);
		app.addPage(receivebin);
		app.addPage(dialogbin);
		app.addPage(shipbin);
		
		/*var app = new sap.m.App({initialPage:"idloginpage"});
		var loginpage = sap.ui.view({id:"idloginpage", viewName:"view.Login", type:sap.ui.core.mvc.ViewType.XML});
		app.addPage(loginpage);*/
		
		/*splitapp = new sap.m.SplitApp("idsplitapp");
		
		var master = sap.ui.xmlview("idMaster", "rizveenafiori.view.Master");
		var detail = sap.ui.xmlview("idDetail", "rizveenafiori.view.Detail");
		var createPrdView = sap.ui.xmlview("idCreatePrd", "rizveenafiori.view.CreateProduct");
		
		splitapp.addMasterPage(master);
		splitapp.addDetailPage(detail);
		splitapp.addDetailPage(createPrdView);*/
		
		
		// done
		return app;
	}

});