//
//  Popover.h
//  Marriott
//
//  Created by AMA on 28/09/12.
//  Copyright (c) 2012 AMA. All rights reserved.
//

#import <UIKit/UIKit.h>

@class ViewController;

@interface Popover : UIViewController

@property (retain,nonatomic) ViewController* parent;

@property (weak, nonatomic) IBOutlet UIButton *buttonFb;
- (IBAction)buttonFbPressed:(id)sender;
@property (weak, nonatomic) IBOutlet UIImageView *popoverImage;
@property (weak, nonatomic) IBOutlet UIButton *signInButton;
- (IBAction)signIN:(id)sender;

@end
