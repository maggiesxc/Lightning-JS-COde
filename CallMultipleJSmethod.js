// JS for calling multiple method in JS or DoInt:

({
	doInit : function(component, event, helper) {
        
		helper.getUserDetails(component);
        helper.getStates(component);
        helper.getCountries(component);
        helper.getTopics(component);
    },
})