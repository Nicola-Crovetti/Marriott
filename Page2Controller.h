//
//  Page2Controller.h
//  Marriott
//
//  Created by AMA on 01/10/12.
//  Copyright (c) 2012 AMA. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface Page2Controller : UIViewController <UIScrollViewDelegate>
@property (weak, nonatomic) IBOutlet UIScrollView *gallery;
@property (weak, nonatomic) IBOutlet UIPageControl *pageController;
@property (weak, nonatomic) IBOutlet UIButton *comments;
- (IBAction)doComment:(id)sender;
@property (weak, nonatomic) IBOutlet UIImageView *commentsImage;
- (IBAction)removeComments:(id)sender;
- (IBAction)back:(id)sender;
@property (weak, nonatomic) IBOutlet UIButton *paga;
- (IBAction)doPaga:(id)sender;

@end
