//
//  ViewController.h
//  Marriott
//
//  Created by AMA on 28/09/12.
//  Copyright (c) 2012 AMA. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "Popover.h"
#import "Picker.h"
#import "Page2Controller.h"

@interface ViewController : UIViewController <UIScrollViewDelegate,UIWebViewDelegate> {
    Popover* popover;
    Picker* pick1;
    Picker* pick2;
    Picker* pick3;
    bool login;
    int cont;
    Page2Controller* pageContr;
}
@property (weak, nonatomic) IBOutlet UIImageView *welcome;
@property (weak, nonatomic) IBOutlet UIButton *buttonSignIn;
@property (weak, nonatomic) IBOutlet UIWebView *webView;
@property (weak, nonatomic) IBOutlet UIImageView *Doe;
@property (retain, nonatomic) UIButton* btn;
@property (retain, nonatomic) UIImageView* img;

- (IBAction)socialSign:(id)sender;
- (IBAction)search:(id)sender;
- (void)showDoe;
- (IBAction)chooseDate:(id)sender;
@property (weak, nonatomic) IBOutlet UIButton *dateButton;
@property (weak, nonatomic) IBOutlet UILabel *checkOut;
@property (weak, nonatomic) IBOutlet UIImageView *mappa;
@property (weak, nonatomic) IBOutlet UIButton *backMap;
- (IBAction)doBackMap:(id)sender;
- (IBAction)doPrenota:(id)sender;
@property (weak, nonatomic) IBOutlet UIButton *myMarriott;
- (IBAction)doMyMarriott:(id)sender;
@property (weak, nonatomic) IBOutlet UIButton *bigButton;
- (IBAction)bigButtonPressed:(id)sender;
@property (weak, nonatomic) IBOutlet UITextField *textField;
@property (weak, nonatomic) IBOutlet UIButton *losAngeles;

- (IBAction)doLosAngeles:(id)sender;
- (IBAction)backMyMarriott:(id)sender;
@property (weak, nonatomic) IBOutlet UIButton *logOutButton;
- (IBAction)doLogOut:(id)sender;

@end
