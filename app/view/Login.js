Ext.define('easyContact.view.Login', {
    extend: 'Ext.form.Panel',
    xtype:'login',
    requires: ['Ext.form.FieldSet', 'Ext.form.Password', 'Ext.Label', 'Ext.Img', 'Ext.NavigationView','Ext.Map'],
    config: {
        items: [
			{
                docked: 'top',
                xtype: 'titlebar',
                title: 'התחברות',
				ui: 'light',
            },
			{xtype: 'spacer',height: 15},	
			{
				xtype: 'image',
				src: Ext.Viewport.getOrientation() == 'portrait' ? 'app/images/eeasyContact.png' : 'app/images/eeasyContact.png',
				style: Ext.Viewport.getOrientation() == 'portrait' ? 'width:298px;height:300px;margin:auto' : 'width:298px;height:300px;margin:auto'
			},
			{ 
				cls:'labelFail',
				xtype: 'label',
				html: '<div align="right" >.התחברות נכשלה, טלפון או סיסמא אינם נכונים</div>',
				id: 'labelLoginFail',
				hidden: true,
				hideAnimation: 'fadeOut',
				showAnimation: 'fadeIn',
				style: 'color:#990000;margin:5px 0px;align:right;'
			},
			{
				xtype: 'fieldset',
				//cls: 'my-fieldset',
				//title:'<div align="right">דף התחברות</div>',
				items: [
					
					{
						
						xtype: 'textfield',
						placeHolder: 'טלפון',
						id: 'userNameLoginTextField',
						required: true,
						cls   : 'align-text-right',

						
					},
					{
						xtype: 'textfield',
						placeHolder: 'סיסמא',
						id: 'passwordLoginTextField',
						required: true,
						cls   : 'align-text-right',
						//clearIcon : false,

						
					}
				]
			},
			
			{	
				xtype: 'button',
				id: 'connectLoignButton',
				ui: 'confirm',
				padding: '10px',
				text: 'כניסה'
			},
			{xtype: 'spacer',height: 5},
			{		
				xtype: 'button',
				id: 'signUpLoignButton',
				ui: 'light',
				padding: '10px',
				text: 'הירשם'
			}
        ]
    }
});