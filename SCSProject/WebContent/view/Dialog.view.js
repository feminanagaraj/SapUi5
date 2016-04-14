sap.ui.jsview("scs.view.Dialog", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.Dialog
	*/ 
	getControllerName : function() {
		return "scs.view.Dialog";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.Dialog
	*/ 
	createContent : function(oController) {
		//var oPage = new sap.m.Page({ title: "Players Details", });

		/*var oButton1 = new sap.m.Button("Submit", {text: "New Entry", tap: [ oController.NewEntry, oController ] });



		var oButton2 = new sap.m.Button("Save", {text: "Save",tap: [ oController.Save, oController ]});



		var oButton3 = new sap.m.Button("Cancel", {text: "Cancel",tap: [ oController.Cancel, oController ]});
*/
		var ok = new sap.m.Button("OK", {text: "OK",tap: [ oController.OK, oController ]});

		var oDialog = new sap.m.Dialog("Dialog1",{ title:"Details of Selected Record", modal: true,           
	    	 buttons: [ ok ],
	    	 content:[
	
	              new sap.m.Label({text:"Bin ID", width:"50%"}),
	
	              new sap.m.Input({
	            	  maxLength: 20, id: "binid", width:"50%" 
	              }),
	              new sap.m.Label({text:"Room", width:"50%"}),
	
	              new sap.m.Input({
	            	  maxLength: 20,id: "roomid", width:"50%"
	              }),
	              
	              new sap.m.Label({text:"Facility", width:"50%"}),
	
	              new sap.m.Input({
	            	  maxLength: 3,id: "facilityid", width:"50%"
	    		  }),
	    		  new sap.m.Label({text:"Contents", width:"50%"}),
	    			
	              new sap.m.Input({
	            	  maxLength: 3,id: "conentsid", width:"50%"
	    		  }),
	    		  new sap.m.Label({text:"Date Received", width:"50%"}),
	    			
	              new sap.m.Input({
	            	  maxLength: 3,id: "recdateid", width:"50%"
	    		  }),
	    		  new sap.m.Label({text:"Recevied By", width:"50%"}),
	    			
	              new sap.m.Input({
	            	  maxLength: 3,id: "recbyid", width:"50%"
	    		  }),
	
	          ]
	
	     });

    /* var oTable = new sap.m.Table({



            id: "Players",

            columns: [



            new sap.m.Column({



                   width: "1em",

                   header: new sap.m.Label({

                   text: "First Name"

                   })



            }),new sap.m.Column({



                   width: "1em",

                   header: new sap.m.Label({

                   text: "Last Name"

                   })



            }),new sap.m.Column({



                   width: "1em",

                   header: new sap.m.Label({

                    text: "Age"

                   })

            })

            ]

     });*/



     /*oPage.addContent(oButton1);

     oPage.addContent(oTable);
*/
    // return oPage;
	}

});