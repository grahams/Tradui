/**
 * Appcelerator Titanium Mobile
 * This is generated code. Do not modify. Your changes will be lost.
 * Generated code is Copyright (c) 2009 by Appcelerator, Inc.
 * All Rights Reserved.
 */
#import <Foundation/Foundation.h>
#import "ApplicationRouting.h"

extern NSData * decode64(NSData * data);
extern NSData * dataWithHexString(NSString * hexString);
extern NSData * AES128DecryptWithKey(NSData * data, NSString * key);

@implementation ApplicationRouting

-(oneway void)release
{
	[super release];
}

-(id)retain
{
	return [super retain];
}

- (NSData*) resolveAppAsset:(NSURL*)url;
{
   NSString *urlStr = [url absoluteString];

   if ([urlStr isEqualToString:[NSString stringWithFormat:@"app%s//%@/%@",":",@"com.intridea.tradui",@"about.html"]]){
     return [self pageNamedAbout];
   }
   else if ([urlStr isEqualToString:[NSString stringWithFormat:@"app%s//%@/%@",":",@"com.intridea.tradui",@"creole.html"]]){
     return [self pageNamedCreole];
   }
   else if ([urlStr isEqualToString:[NSString stringWithFormat:@"app%s//%@/%@",":",@"com.intridea.tradui",@"english.html"]]){
     return [self pageNamedEnglish];
   }
   else if ([urlStr isEqualToString:[NSString stringWithFormat:@"app%s//%@/%@",":",@"com.intridea.tradui",@"translate.html"]]){
     return [self pageNamedTranslate];
   }
   else if ([urlStr isEqualToString:[NSString stringWithFormat:@"app%s//%@/%@",":",@"com.intridea.tradui",@"word.html"]]){
     return [self pageNamedWord];
   }
   else if ([urlStr isEqualToString:[NSString stringWithFormat:@"app%s//%@/%@",":",@"com.intridea.tradui",@"words.html"]]){
     return [self pageNamedWords];
   }
   else if ([urlStr isEqualToString:[NSString stringWithFormat:@"app%s//%@/%@",":",@"com.intridea.tradui",@"javascripts/about.js"]]){
     return [self scriptNamedJavascripts_about];
   }
   else if ([urlStr isEqualToString:[NSString stringWithFormat:@"app%s//%@/%@",":",@"com.intridea.tradui",@"javascripts/creole.js"]]){
     return [self scriptNamedJavascripts_creole];
   }
   else if ([urlStr isEqualToString:[NSString stringWithFormat:@"app%s//%@/%@",":",@"com.intridea.tradui",@"javascripts/english.js"]]){
     return [self scriptNamedJavascripts_english];
   }
