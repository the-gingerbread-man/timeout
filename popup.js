"use strict";

// Query localstorage, and if needed, initalize it when the popup is opened



class App {

	constructor() {

	},

	updateTrackingList(newTrackedWebsitesArr, reset) {

		// Fetch storage object from chrome localstorage and store it with a variable. The rest of the function is in the callback
		//   once the data is retrieved
		chrome.storage.local.get(timeOutExtentionData, function(dataStore) {

		// If the user selects "reset defaults", or if the data store has been lost, reset the data store to default settings
		if (reset || !dataStore) {
			dataStore = {
					disabled: false,
					trackingPeriod: 'hour',
					currentSite: {
						siteName: null,
						startTime: null
					},
					trackedWebsiteList: ["amazon", "buzzfeed", "facebook", "hulu", "instagram", "netflix", "pinterest", "reddit", "tumblr", "twitter", "youtube"]
			}
		} else {
			dataStore.trackedWebsiteList = dataStore.trackedWebsiteList.concat(newTrackedWebsitesArr);
		}
	
		// Store the updated storage as an object in localstorage, with the localstorage key timeOutDataStore
		chrome.storage.local.set({timeOutExtentionData: dataStore});
	
		// Return the current data store so it can be passed to other functions without another query

		}

	},

	render(dataStore) {


		
	}

};


















/* updateTrackingList - Add new websites to the list of sites being tracked,
*							 or reset the list to defaults
*
* Array (newTrackedWebsitesArr) - an array of new websites to add to the tracking list
*
* Boolean (reset) - (optional) true will reset tracked website list to the default list
*									supplied with the app
*/

function App(dataStore) {

	if(!dataStore) dataStore = chrome.storage.local.get(timeOutExtentionData, function(data) {
		return App(data);
	});

	let trackedWebsiteList = dataStore.trackedWebsiteList;

	chrome.storage.local.get(trackedWebsiteList, function(trackedSiteObj) {

		// Update or append a div for each site containing its name and the amout of time spent on it

	});
}
