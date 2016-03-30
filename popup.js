"use strict";

chrome.tabs.onCreated.addListener(tabObj => {
	console.log(tabObj);
	debugger;
});


class App {

	constructor() {
		this.node = document.createElement('div');
		document.body.appendChild(this.node);
		this.updateTrackingList(null, true, this.render.bind(this));
	}

	/* App.updateTrackingList - Add new websites to the list of sites being tracked,
	*							 or reset the list to defaults
	*
	* Array (newTrackedWebsitesArr) - an array of new websites to add to the tracking list
	*
	* Boolean (reset) - (optional) true will reset tracked website list to the default list
	*									supplied with the app
	*/
	updateTrackingList(newTrackedWebsitesArr, reset, callback) {

		// Fetch storage object from chrome localstorage and store it with a variable. The rest of the function is in the callback
		//   once the data is retrieved
		let dataStore = {};

		chrome.storage.local.get("trackedWebsiteList", trackedWebsiteList => {

			console.log(trackedWebsiteList);

			if (Object.keys(trackedWebsiteList).length === 0) reset = true;

			// If the user selects "reset defaults", or if the data store has been lost, reset the data store to default settings
			if (reset) {
				dataStore = {
					trackedWebsiteList: ["amazon", "buzzfeed", "facebook", "hulu", "instagram", "netflix", "pinterest", "reddit", "tumblr", "twitter", "youtube"]
				}
			} else {
				dataStore.trackedWebsiteList = trackedWebsiteList.concat(newTrackedWebsitesArr);
			}
		
			// Store the updated storage as an object in localstorage, with the localstorage key trackedWebsiteList
			chrome.storage.local.set(dataStore);
		
			// Pass the result to the optional callback argument
			if(callback && typeof callback === 'function') callback(dataStore.trackedWebsiteList);

		});

	}

	render(trackedWebsiteList) {

		trackedWebsiteList.forEach(trackedSiteName => {

			chrome.storage.local.get(trackedSiteName, trackedSiteObj => {

				console.log(trackedSiteObj);

				// this.node.appendChild(new PageBox(trackedSiteObj.name, trackedSiteObj.timeOn));

			});
		});
	}

}

class PageBox {

	constructor(pageName, pageTime) {
		this.node = document.createElement('div');
		this.pageName = pageName;
		this.pageTime = pageTime;
	}

}

new App();