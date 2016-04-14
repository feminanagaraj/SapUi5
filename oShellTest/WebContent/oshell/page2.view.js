sap.ui.jsview("oshell.page2", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf oshell.page2
	*/ 
	getControllerName : function() {
		return "oshell.page2";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf oshell.page2
	*/ 
	createContent : function(oController) {
		
	       var oText = new sap.ui.commons.TextView({
	        	 text : "this is page2"
	         })
	         return oText;
		
		
	
	}
});
