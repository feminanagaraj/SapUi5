sap.ui.jsview("oshell.App", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf oshell.App
	*/ 
	getControllerName : function() {
		return "oshell.App";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf oshell.App
	*/ 
	createContent : function(oController) {
       var oText = new sap.ui.commons.TextView({
        	 text : "this is page1"
         })
         return oText;
	
	}
	
});
