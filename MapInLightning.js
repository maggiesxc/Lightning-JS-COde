// JS for fetching value from Apex Map :

({
     getStates: function (component) {
		// calling apex method  
		var action = component.get("c.getStates");
		
		action.setCallback(this, function (response) {
			var values = response.getReturnValue();
			//converting JSON into String to check Value
            console.log(JSON.stringify(values));
			var valuesTemp = [];

			for (var value in values) {
				if (values.hasOwnProperty(value)) {
					valuesTemp.push({
						key: value,
						value: values[value]
					});
				}
			}
			component.set("v.stateValues", valuesTemp);
		});

		$A.enqueueAction(action); 
	},
})


// Apex Class for getting picklist value with record Id...
 
    @AuraEnabled
    public static Map<String,String> getStates()
    {
        return getPicklistOptions('Job_Posting__c','State_Province__c');
    }

// Component for display picklist value in Drop Down Box

<aura:attribute name="stateValues" type="Map" access="global" />

<lightning:layoutItem flexibility="auto" padding="around-small">
    <lightning:select name="selectItem" aura:id="stateId" label="" onchange="{!c.filterActions}" value="{!v.stateSelection}" class="job-state" >
        <option value="">STATE</option>
            <aura:iteration items="{!v.stateValues}" indexVar="key" var="item">
                <option text="{!item.key}" label="{!item.value}" />
            </aura:iteration>
   </lightning:select>
</lightning:layoutItem>

