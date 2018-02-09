JS for redirect to another component page, with current page Id. 

({
	goToEditJobPosting : function(component, event, helper) {
		// Here using navigateToURL by using URL Parameter
		var urlEvent = $A.get("e.force:navigateToURL");
		// Here Setting URL Link and also passing recordId to the Page.
		// Community Page URL used here
		urlEvent.setParams({
		  "url": "/create-job-posting#/"+component.get("v.recordId")
		});
		urlEvent.fire();
	},
}) 