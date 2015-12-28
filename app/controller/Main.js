Ext.define('easyContact.controller.Main', {
    extend: 'Ext.app.Controller',
	
	requires: [
		'Ext.data.proxy.LocalStorage',
		'Ext.MessageBox'
	],
	
	config: {
		stores: ['Users'],
		models: ['User'],
		refs: {
			login : 'login',
			logOut: '#logOutButton',
			usersList: '#usersList',
			
			
		},
		control: {
			logOut:{
				tap: 'onLogOutButtonTap'
			},
			usersList:{
				itemtap: 'onItemUsersListTap'
			},
			'main searchfield[id=searchBox]' : {
				clearicontap : 'onClearSearch',
				keyup: 'onSearchKeyUp'
			}
		}
		
		
	},
	
	
	onClearSearch: function() {
		var store = Ext.getStore('Users');
		store.clearFilter(false);
	},
	onSearchKeyUp: function(searchField) {
		queryString = searchField.getValue();
		//alert('Please search by: ' + queryString);

		var store = Ext.getStore('Users');
		store.clearFilter(false);

		if(queryString){
			var thisRegEx = new RegExp(queryString, "i");
			store.filterBy(function(record, id){
				if(thisRegEx.test(record.get('fullName'))){
				  return true;
				}    
				return false;
			}, this);
			
		}
		
    },
		
	
	launch: function() {
       
    },
	
	slideRightTransition: { type: 'slide', direction: 'right'},
	slideLeftTransition: { type: 'slide', direction: 'left'},
	
	onLogOutButtonTap: function () {
		var MB = Ext.MessageBox;
		Ext.apply(MB, {
				YES: { text: 'כן', itemId: 'yes', ui: 'confirm' }
		});
		Ext.apply(MB, {
				NO: { text: 'לא', itemId: 'no', ui: 'decline' }
		});
		Ext.apply(MB, {
				YESNO: [Ext.MessageBox.NO, Ext.MessageBox.YES]
		});
		Ext.Msg.confirm('התנתק', '?אתה בטוח שאתה רוצה להתנתק', function(answer) {
			if (answer == 'yes'){
				window.location.href = "";
			}
			else{
				
			}
		});
	},
	
	
	
	start: function() {
		
		//this.updateTitle(Ext.getStore('Vegetables'));
		//this.updateTitle(Ext.getStore('Fruits'));
    },
	
	
	
	
	onItemUsersListTap: function(self,index,target,record,e){
		
	}
	
	
	
   
});
