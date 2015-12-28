Ext.define('easyContact.view.Main', {
    extend: 'Ext.Panel',
	xtype: 'main',

    config: {
		layout: 'vbox',
        items: [
			{
				//cls:'titlebar',
				ui: 'light',
                xtype: 'toolbar',
				//id: 'mainTitle1',
                docked: 'top',
				layout: 'vbox',
				items:[ 
					{
						xtype: 'toolbar',
						ui: 'light',
						items:[ 
							{
								xtype: 'button',
								icon: 'app/images/logout.png',
								id: 'logOutButton',
							},
							{
								xtype: 'spacer'
							},
							{
								xtype: 'searchfield',
								id: 'searchBox',
								placeHolder: 'חיפוש',
								cls: 'align-text-right',
								
							}
							
						]
						
					}
					
				]
		
            },
			
			{
				style: 'background:#444444',
				flex: 4,
				layout: 'card',
				id: 'cardLayoutMain',
				items:[	
					{
						//title:'Vegetables',
						xtype:'list',
						id:'usersList',
						store:'Users',
						itemHeight: 50,
						scrollable: true,
						disableSelection: true,
						
							itemTpl: new Ext.XTemplate(
							'<tpl if="this.isBanner(phone2)">',
								'<b><span class="fullName">{fullName}</span></b>',
								'<a href="tel:{phone1}"><img src="app/images/call.png"/></a><font color="#00333F"><b> {phone1}</b></font>',
							'<tpl else>',
								'<b><span class="fullName">{fullName}</span></b>',
								'<a href="tel:{phone1}"><img src="app/images/call.png"/></a><font color="#00333F"><b> {phone1}</b></font>',
								'<br><a href="tel:{phone2}"><img src="app/images/call.png"/></a><font color="#00333F"><b> {phone2}</b></font>',
							'</tpl>',
									
									
								{
								isBanner: function(phone2){
									return phone2 == null;
								}
							})	
					}			
							
				]
							
			}		
            
            
        ]
    }
});

