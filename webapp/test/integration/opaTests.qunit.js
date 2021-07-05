/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/airdit/LiveCodeEditor/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});