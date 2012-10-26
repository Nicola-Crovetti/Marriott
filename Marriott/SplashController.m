//
//  SplashController.m
//  Marriott
//
//  Created by AMA on 29/09/12.
//  Copyright (c) 2012 AMA. All rights reserved.
//

#import "SplashController.h"

@interface SplashController ()

@end

@implementation SplashController

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
	// Do any additional setup after loading the view.
}

- (void)viewDidAppear:(BOOL)animated{
    [self performSelector:@selector(finish:) withObject:self afterDelay:3.0f];
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

- (IBAction)finish:(id)sender{
    [self performSegueWithIdentifier:@"splash" sender:nil];

}
@end
