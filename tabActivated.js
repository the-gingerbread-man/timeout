"use strict";

/* stampStartTime - store the time a tracked website was accessed in localstorage
*
* (websiteId) - (string) shortened "nickname" for tracked page.
* (startTime) - (double) Access time in ms since the epoch.
*/
function stampStartTime(websiteId, startTime) {

	let startTimeObj = {};

	startTimeObj[websiteId + "_start_time"] = startTime;
	chrome.storage.local.set(startTimeObj, 

}