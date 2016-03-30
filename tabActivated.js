"use strict";

/* stampStartTime - store the time a tracked website was accessed in localstorage
*
* (websiteId) - (string) shortened "nickname" for tracked page.
* (startTime) - (double) Access time in ms since the epoch.
*/

chrome.tabs.onCreated.addListener(tabObject => {

	// Run function to see if there was an active tab being tracked ?? If so, calculate time it was active and add
	//		that to the site object in localstorage

	chrome.storage.local.get("trackedWebsiteList", trackedWebsiteList => {
		
		console.log(trackedWebsiteList);
		
		// let activeTabData = {};

		// activeTabData.activeTabStartTime = Date.now();
		// activeTabData.activeTabID = tabObject.id;
		
		// let siteMatch = trackedWebsiteList.reduce((acc, trackedSiteName) => {
		// 	if (tabObject.url.indexOf(trackedSiteName) !== -1) return trackedSiteName;
		// 	else return acc;
		// }, null);

		// if (siteMatch) {

		// 	activeTabData.activeTabSiteName = siteMatch;

		// 	chrome.storage.local.set(activeTabData);
		// }

	});

});

