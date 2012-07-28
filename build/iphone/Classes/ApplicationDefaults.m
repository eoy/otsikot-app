/**
* Appcelerator Titanium Mobile
* This is generated code. Do not modify. Your changes *will* be lost.
* Generated code is Copyright (c) 2009-2011 by Appcelerator, Inc.
* All Rights Reserved.
*/
#import <Foundation/Foundation.h>
#import "TiUtils.h"
#import "ApplicationDefaults.h"
 
@implementation ApplicationDefaults
  
+ (NSMutableDictionary*) copyDefaults
{
    NSMutableDictionary * _property = [[NSMutableDictionary alloc] init];

    [_property setObject:[TiUtils stringValue:@"aK35AcpCqF9kKH9oIt9wujg3bsj3ZWO8"] forKey:@"acs-oauth-secret-production"];
    [_property setObject:[TiUtils stringValue:@"EwMFSuV1rndWNApatXZyjQFV9H8gd5gl"] forKey:@"acs-oauth-key-production"];
    [_property setObject:[TiUtils stringValue:@"t4CNVp7xHwJYtkmBhIFdAyvx4fbRPLXT"] forKey:@"acs-api-key-production"];
    [_property setObject:[TiUtils stringValue:@"Pi940DhA12p1DpNxIBQcAmD6hWFj61mP"] forKey:@"acs-oauth-secret-development"];
    [_property setObject:[TiUtils stringValue:@"ag8ss9zG83z5zW8IOX1hTbOxJgbCyWZW"] forKey:@"acs-oauth-key-development"];
    [_property setObject:[TiUtils stringValue:@"Ed3V3t2kNRS2mA110e8Vl4Z9ORlVTYji"] forKey:@"acs-api-key-development"];
    [_property setObject:[TiUtils stringValue:@"system"] forKey:@"ti.ui.defaultunit"];

    return _property;
}
@end
