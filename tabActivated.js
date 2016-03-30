"use strict";

/* stampStartTime - store the time a tracked website was accessed in localstorage
*
* (websiteId) - (string) shortened "nickname" for tracked page.
* (startTime) - (double) Access time in ms since the epoch.
*/

chrome.tabs.onCreated.addListener(tabObject => {

	chrome.storage.local.get("trackedWebsiteList", trackedWebsiteList => {
		
		let activeTabData = {};

		activeTabData.startTime = Date.now;
		activeTabData.tabID = tabObject.id;
		
		let siteMatch = trackedWebsiteList.reduce((acc, trackedSiteName) => {
			if (tabObject.url.indexOf(trackedSiteName) !== -1) return trackedSiteName;
			else return null;
		}, null);

		if (siteMatch) {


			
		}

	});

});

