Ext.define('easyContact.controller.Register', {
    extend: 'Ext.app.Controller',
	
	requires: [
		'Ext.data.proxy.LocalStorage',
		'Ext.MessageBox'
	],
	
	
	config: {
		refs: {
			login : 'login',
			backToLoginButton : '#backToLoginButton',
            signUpRegisterButton : '#signUpRegisterButton',
		},
		control: {
			backToLoginButton:{
				tap: 'onBackToLoginButtonTap'
			},
			signUpRegisterButton:{
				tap: 'onSignUpRegisterButtonTap'
			}
		}
	},
	
	slideLeftTransition: { type: 'slide', direction: 'right'},
	
	onBackToLoginButtonTap: function(){
		Ext.Viewport.animateActiveItem(this.getLogin(), this.slideLeftTransition);
		
	},
	
	
	onSignUpRegisterButtonTap: function(){
		Ext.Viewport.animateActiveItem(this.getLogin(), this.slideLeftTransition);
	
	},
	
	
	

	
	changeYeshuv: function(yeshuvName) {
		store=Ext.getStore('Streets');
		store.clearFilter(false);
		store.filterBy(function(record, id){
			if(record.get("yeshuv") == yeshuvName){
			  return true;
			}    
			return false;
		}, this);
	},
	
	

	
	
});
