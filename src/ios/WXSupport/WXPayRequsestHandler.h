

#import <Foundation/Foundation.h>
#import "WXUtil.h"
#import "ApiXml.h"


@interface WXPayRequsestHandler : NSObject


- (NSString *)curDebugInfo;
//初始化函数
- (id)initWithAppId:(NSString *)appId mchId:(NSString *)mchId partnerKey:(NSString *)partnerKey;
//签名实例测试
- (NSMutableDictionary *)wholePayInfoWithPatyPayInfo:(NSDictionary *)payInfo;

@end