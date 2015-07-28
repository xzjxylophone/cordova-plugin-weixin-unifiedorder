cordova.define("com.justep.cordova.plugin.weixin.weixin", function(require, exports, module) {

               
/**           
 // 使用 demo
               var weixin = navigator.weixin;
               var payInfo = {"body":"x5",
               "notify_url":"http://www.baidu.com",
               "total_fee":"1",
               "out_trade_no":"123456789",
               // 以下是可选的
               "device_info":'APP-001',
               "spbill_create_ip":'196.168.1.1'};
               var unifiedOrderSuccess = function(message){
               console.log('message:' + message);
               };
               var unifiedOrderFailed = function(message){
               console.log('message:' + message);
               };
               weixin.unifiedOrder(payInfo, unifiedOrderSuccess, unifiedOrderFailed);
**/
var exec = require('cordova/exec');

module.exports = {
    Scene: {
        SESSION:  0, // 聊天界面
        TIMELINE: 1, // 朋友圈
        FAVORITE: 2  // 收藏
    },
    Type: {
        APP:     1,
        EMOTION: 2,
        FILE:    3,
        IMAGE:   4,
        MUSIC:   5,
        VIDEO:   6,
        WEBPAGE: 7
    },
    share: function (message, onSuccess, onError) {
        exec(onSuccess, onError, "Weixin", "share", [message]);
    },

    unifiedOrder: function(payInfo,onSuccess,onError){
        exec(onSuccess, onError, "Weixin", "unifiedOrder", [payInfo]);
    },

};
});
