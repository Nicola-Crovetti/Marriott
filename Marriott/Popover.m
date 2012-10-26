//
//  Popover.m
//  Marriott
//
//  Created by AMA on 28/09/12.
//  Copyright (c) 2012 AMA. All rights reserved.
//

#import "Popover.h"
#import "ViewController.h"

@interface Popover ()

@end

@implementation Popover

- (id)initWithNibName:(NSString *)nibNameOrNil bundle:(NSBundle *)nibBundleOrNil
{
    self = [super initWithNibName:nibNameOrNil bundle:nibBundleOrNil];
    if (self) {
        // Custom initialization
    }
    return self;
}

- (void)viewDidLoad
{
    [super viewDidLoad];
    // Do any additional setup after loading the view from its nib.
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

- (IBAction)buttonFbPressed:(id)sender {
    self.buttonFb.hidden = true;
    [self.popoverImage setImage:[UIImage imageNamed:@"signing in fb.png"]];
    [self performSelector:@selector(signIN:) withObject:self.buttonFb afterDelay:1.0f];
    
}

- (IBAction)signIN:(id)sender {
    [self.view removeFromSuperview];
    [self.parent showDoe];
}


@end
