Ext.define('easyContact.model.User', {
    extend: 'Ext.data.Model',
	
	
	config:{
		fields:[
		{name: 'recordId' , type: 'int'},
		{name: 'fullName' , type: 'string'},
		{name: 'phone1' , type: 'string'},
		{name: 'phone2' , type: 'string'},
		]
		  
		
		 
	}

	
	
});
