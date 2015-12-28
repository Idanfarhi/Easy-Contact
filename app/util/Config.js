Ext.define('easyContact.util.Config', {
    singleton : true,

    config : {
        nowStart : true,
		Store : 'Vegetables',
		listNumber : 1,
		title2 : 'Fruits',
		title3 : 'Other',
		totalPrice : 280,
		firstNoZeroVegetable : 0,
		firstNoZeroFruits : 0,
		kkk : 1
    },

    constructor : function(config) {
        this.initConfig(config);
        this.callParent([config]);
		
		
		
    }
});