sap.ui.controller("scs.view.Dialog", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.Dialog
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.Dialog
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.Dialog
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.Dialog
*/
//	onExit: function() {
//
//	}
	OK:function() {

        sap.ui.getCore().byId("Dialog1").close();

  }
	/*NewEntry: function() {

        sap.ui.getCore().byId("Dialog1").open();

  },



Save:function() {



        var fName = sap.ui.getCore().byId("FName").getValue();

        var lName = sap.ui.getCore().byId("LName").getValue();

        var age = sap.ui.getCore().byId("Age").getValue();

 oTableRow = new sap.m.ColumnListItem({



               type: "Active",

              visible: true,

               selected: true,

               cells: [

                            new sap.m.Label({



               text: fName



              }),

                            new sap.m.Label({



            text: lName



             }),

                            new sap.m.Label({

             

            text: age



            })

            ]

        });



        sap.ui.getCore().byId("Players").addItem(oTableRow);

        sap.ui.getCore().byId("Dialog1").close();

        sap.m.MessageToast.show("Saved",{duration:1000});

  },



Cancel:function() {

        sap.ui.getCore().byId("Dialog1").close();

  }*/

});