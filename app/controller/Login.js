Ext.define('easyContact.controller.Login', {
    extend: 'Ext.app.Controller',
	
	requires: [
		'Ext.data.proxy.LocalStorage',
		'Ext.MessageBox'
	],
	
	
	config: {
		refs: {
			register : 'register',
			main : 'main',
			connectLoignButton : '#connectLoignButton',
            signUpLoignButton : '#signUpLoignButton',
		},
		control: {
			connectLoignButton:{
				tap: 'onConnectLoignButtonTap'
			},
			signUpLoignButton:{
				tap: 'onSignUpLoignButtonTap'
			}
		}
	},
	
	slideLeftTransition: { type: 'slide', direction: 'left'},
		
	onConnectLoignButtonTap: function(){
		this.goToMain();
		/*
		if(Ext.getCmp('userNameLoginTextField').getValue() == 'test' && Ext.getCmp('passwordLoginTextField').getValue() == '123'){
			
			
		}
		else{
			Ext.getCmp('labelLoginFail').show();
			Ext.Msg.alert('for test use','userName:test password:123');
		}*/
		
	},
	
	
	goToMain: function(){
		Ext.getCmp('labelLoginFail').hide();
		//Ext.getStore('Vegetables').load({url:'http://yarkan.mipo.co.il/yii/merchant/getMerchantProducts/?customerId=1&category_id=1'});
		//Ext.getStore('Fruits').load({url:'http://yarkan.mipo.co.il/yii/merchant/getMerchantProducts/?customerId=1&category_id=2'});
		easyContact.app.dispatch({
			controller : 'Main',
			action     : 'start',
			args       : [ ]
		});
		Ext.Viewport.add(Ext.create('easyContact.view.Main'));
		Ext.Viewport.animateActiveItem(this.getMain(), this.slideLeftTransition);
	},
	onSignUpLoignButtonTap: function(){
		
		if (Ext.Viewport.down('register') == null){
			Ext.Viewport.add(Ext.create('easyContact.view.Register'));
			Ext.Viewport.animateActiveItem(this.getRegister(), this.slideLeftTransition);
		
		}
		else{
			Ext.Viewport.animateActiveItem(this.getRegister(), this.slideLeftTransition);
		}
		
	}
	
	
});

