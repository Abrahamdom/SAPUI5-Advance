//@ts-nocheck
sap.ui.define([
		"sap/ui/core/mvc/Controller"
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (Controller) {
		"use strict";

		return Controller.extend("abrahamgroup.Employees.controller.MainView", {
			onInit: function () {

            },
            
            onValidate: function(){
                var inputEmployee = this.byId("inputEmployee");
                var valueEmployee = inputEmployee.getValue();

                if(valueEmployee.length === 8){
                    //inputEmployee.setDescription("Ok");
                    this.byId("labelCountry").setVisible(true);
                    this.byId("slCountry").setVisible(true);
                }else{
                    //inputEmployee.setDescription("Not Ok");
                    this.byId("labelCountry").setVisible(false);
                    this.byId("slCountry").setVisible(false);
                }

            }

		});
	});
