Ext.define('easyContact.view.Register', {
    extend: 'Ext.form.Panel',
    xtype:'register',
    requires: ['Ext.form.FieldSet','Ext.field.Select' ,'Ext.form.Panel','Ext.form.Password', 'Ext.Label', 'Ext.Img'],
    config: {
        items: [
			{
                xtype: 'titlebar',
                title: 'הרשמה',
				docked: 'top',
				ui: 'light',
				items: [
					{
						align: 'left',
						xtype: 'button',
						id: 'backToLoginButton',
						iconCls: 'arrow_left',
					}
				]
            },
			{xtype: 'spacer',height: 15},		
			{
				xtype: 'image',
				src: Ext.Viewport.getOrientation() == 'portrait' ? 'app/images/eeasyContact.png' : 'app/images/eeasyContact.png',
				style: Ext.Viewport.getOrientation() == 'portrait' ? 'width:298px;height:300px;margin:auto' : 'width:298px;height:300px;margin:auto'
			},
			{
				xtype: 'label',
				html: '<div align="right" >.התחברות נכשלה, שם משתמש או סיסמא אינם נכונים</div>',
				id: 'labelRegisterFail',
				hidden: true,
				hideAnimation: 'fadeOut',
				showAnimation: 'fadeIn',
				style: 'color:#990000;margin:5px 0px;'
			},
			{
				xtype: 'fieldset',
				cls: 'my-fieldset',
				items: [
					{
						cls : 'align-text-right',
						xtype: 'textfield',
						placeHolder: 'מספר טלפון',
						id: 'phoneRegisterTextField',
						required: true,
								

						
					},
					{
						xtype: 'textfield',
						placeHolder: 'סיסמא',
						labelAlign: 'right',
						id: 'passwordRegisterTextField',
						required: true,
						cls   : 'align-text-right',
					},
					{
						xtype: 'textfield',
						placeHolder: 'אימייל',
						labelAlign: 'right',
						id: 'EmailRegisterTextField',
						required: true,
						cls   : 'align-text-right',
					}
				]
			},
			{
				
				
				
				xtype: 'button',
				id: 'signUpRegisterButton',
				ui: 'confirm',
				padding: '10px',
				text: 'הירשם',
				
				
			}
			
        ]
    }
});