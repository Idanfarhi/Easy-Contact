Ext.define('easyContact.store.Users', {
    extend: 'Ext.data.Store',

	config:{
		
		model:'easyContact.model.User',
		autoLoad:true,
		
		proxy: {
			type:'ajax',
			url:'app/list/user.js',
			reader:{
				type:'json',
				rootProperty:'results'
				
			}
			
		}
		
		
	},
	listeners: {
		load: function(store, records, successful, operation, eOpts) {
		}
	}

	
	
});


/*

		listeners: {
			load: function(store, records, successful, operation, eOpts) {
				alert(store.data.length);        
			}
		}
		
		*/