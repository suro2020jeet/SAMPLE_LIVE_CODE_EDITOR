sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"com/airdit/LiveCodeEditor/util/prism",
	"com/airdit/LiveCodeEditor/util/prismlive"
], function (Controller, prism, prismlive) {
	"use strict";

	return Controller.extend("com.airdit.LiveCodeEditor.controller.App", {
		onPressRun: function () {
			var html = this.byId("html").getValue(),
				css = this.byId("css").getValue(),
				js = this.byId("js").getValue(),
				code = this.byId("output").getDomRef().contentWindow.document;

			code.open();
			code.writeln(html + "<style>" + css + "</style>" + "<script>" + js + "</script>");
			code.close();
		}
	});
});