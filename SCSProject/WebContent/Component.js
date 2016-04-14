jQuery.sap.declare("scs.Component");
sap.ui.core.UIComponent.extend("scs.Component", {

	
	createContent : function() {
		
		// create root view
		var oView = sap.ui.view({id : "app",viewName : "scs.view.App",type : "JS"});

        //load the service 
		var prodODataObj = new sap.ui.model.odata.ODataModel("proxy/http/services.odata.org/V2/(S(u0fm33whthkboho0u01zhgyh))/OData/OData.svc", true);
		oView.setModel(prodODataObj);

		// load message bunldle 
		var i18nModel = new sap.ui.model.resource.ResourceModel({ bundleUrl : "i18n/messageBundle.properties" });
		oView.setModel(i18nModel,"i18n");
		
		/*var facjson = {
				facname : "rahul",
		}
							
		var facselected = new sap.ui.model.json.JSONModel();
		facselected.setData(facjson);
		oView.setModel(facselected,"facdatabase");*/
		/*var empdata ={
				employeefname : "",
				employeelname : ""
				
			}
		var empJsonObj = new sap.ui.model.json.JSONModel();
		empJsonObj.setData(empdata);
		oView.setModel(empJsonObj,"model");*/
		
		//load the device 
		var oDeviceModel = new sap.ui.model.json.JSONModel({
			isTouch: sap.ui.Device.support.touch,
			isNoTouch: !sap.ui.Device.support.touch,
			isPhone: sap.ui.Device.system.phone,
			isNoPhone: !sap.ui.Device.system.phone,
			listMode: sap.ui.Device.system.phone ? "None" : "SingleSelectMaster",
			listItemType: sap.ui.Device.system.phone ? "Active" : "Inactive"
		});
		oDeviceModel.setDefaultBindingMode("OneWay");
		oView.setModel(oDeviceModel, "device");
		
		return oView;
	}
});