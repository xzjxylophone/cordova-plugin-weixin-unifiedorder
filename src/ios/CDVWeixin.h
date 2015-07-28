#import <Cordova/CDV.h>
#import "WXApi.h"

enum  CDVWeixinSharingType {
    CDVWXSharingTypeApp = 1,
    CDVWXSharingTypeEmotion,
    CDVWXSharingTypeFile,
    CDVWXSharingTypeImage,
    CDVWXSharingTypeMusic,
    CDVWXSharingTypeVideo,
    CDVWXSharingTypeWebPage
};

@interface CDVWeixin:CDVPlugin <WXApiDelegate>




- (void)unifiedOrder:(CDVInvokedUrlCommand *)command;


- (void)share:(CDVInvokedUrlCommand *)command;


@end
