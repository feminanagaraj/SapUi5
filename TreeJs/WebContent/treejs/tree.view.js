sap.ui.jsview("treejs.tree", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf treejs.tree
	*/ 
	getControllerName : function() {
		return "treejs.tree";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf treejs.tree
	*/ 
	createContent : function(oController) {
		//create the Tree control
		var oTransTree = new sap.ui.commons.Tree("transTree");
		oTransTree.setShowHeader(false);
		oTransTree.setTitle("Explorer");
		oTransTree.setWidth("100%");
		oTransTree.setHeight("auto");
		oTransTree.setShowHeaderIcons(true);
		oTransTree.setShowHorizontalScrollbar(false);

		//create Tree Nodes
		var oTransNode1 = new sap.ui.commons.TreeNode("transNode1", {text:"Computer", icon:"images/system.gif", expanded: true});
		var oTransNode2 = new sap.ui.commons.TreeNode("transNode2", {text:"OSDisk (C:)", icon:"images/disk.gif", expanded: true});
		var oTransNode3 = new sap.ui.commons.TreeNode("transNode3", {text:"Program Files", icon:"images/folder.gif"});
		var oTransNode4 = new sap.ui.commons.TreeNode("transNode4", {text:"Windows", icon:"images/folder.gif"});
		var oTransNode5 = new sap.ui.commons.TreeNode("transNode5", {text:"Mass Storage (USB)", icon:"images/disk.gif"});
		var oTransNode6 = new sap.ui.commons.TreeNode("transNode6", {text:"Network", icon:"images/network.gif"});

		oTransNode1.addNode(oTransNode2);
		oTransNode1.addNode(oTransNode5);

		oTransNode2.addNode(oTransNode3);
		oTransNode2.addNode(oTransNode4);

		//add Tree Node root to the Tree
		oTransTree.addNode(oTransNode1);
		oTransTree.addNode(oTransNode6);

		oTransTree.placeAt("sample2");
	}
	
});
