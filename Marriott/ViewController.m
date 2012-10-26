//
//  ViewController.m
//  Marriott
//
//  Created by AMA on 28/09/12.
//  Copyright (c) 2012 AMA. All rights reserved.
//

#import "ViewController.h"
#import "AppDelegate.h"
#import "Page2Controller.h"
@interface ViewController ()

@end

@implementation ViewController

@synthesize btn;
@synthesize img;

- (void)viewDidLoad
{
    self.myMarriott.hidden = true;
    //www.goodwillonline.it/demo/box2.html

    [super viewDidLoad];
    AppDelegate* appDel = (AppDelegate *)[[UIApplication sharedApplication] delegate];
    appDel.count = 0;
    
    //[self.webView loadRequest:[NSURLRequest requestWithURL:[NSURL fileURLWithPath:[[NSBundle mainBundle] pathForResource:@"index" ofType:@"html"] isDirectory:false]]];
    /*
    //Load web view data
    NSString *strWebsiteUlr = [NSString stringWithFormat:@"http://www.goodwillonline.it/demo_marriott/index.html"];
    
    // Load URL
    
    //Create a URL object.
    NSURL *url = [NSURL URLWithString:strWebsiteUlr];
    
    //URL Requst Object
    NSURLRequest *requestObj = [NSURLRequest requestWithURL:url];
    
    //Load the request in the UIWebView.
    [self.webView loadRequest:requestObj];*/
    
    UIScrollView *scrollView = [self.webView.subviews objectAtIndex:0];
    [scrollView setScrollEnabled:false];
    scrollView.delegate = self;
    
    pick1 = [[Picker alloc] initWithNibName:@"Picker" bundle:nil];
    pick2 = [[Picker alloc] initWithNibName:@"Picker" bundle:nil];
    pick3 = [[Picker alloc] initWithNibName:@"Picker" bundle:nil];
    
    [self.view addSubview:pick1.view];
    [self.view addSubview:pick2.view];
    [self.view addSubview:pick3.view];
    
    pick1.view.frame = CGRectMake(25, 322, 86, 47);
    pick2.view.frame = CGRectMake(136, 322, 86, 47);
    pick3.view.frame = CGRectMake(247, 322, 86, 47);
    
    [pick1.scroll setContentSize:CGSizeMake(341, 47)];
    [pick2.scroll setContentSize:CGSizeMake(341, 47)];
    [pick3.scroll setContentSize:CGSizeMake(341, 47)];

    UIImageView* stripe;
    stripe = [[UIImageView alloc] initWithImage:[UIImage imageNamed:@"stripe.png"]];
    [pick1.scroll addSubview:stripe];
    stripe.frame = CGRectMake(0,0, 341, 47);

    stripe = [[UIImageView alloc] initWithImage:[UIImage imageNamed:@"stripe.png"]];
    [pick2.scroll addSubview:stripe];
    stripe.frame = CGRectMake(0,0, 341, 47);

    stripe = [[UIImageView alloc] initWithImage:[UIImage imageNamed:@"stripe.png"]];
    [pick3.scroll addSubview:stripe];
    stripe.frame = CGRectMake(0,0, 341, 47);
    if(appDel.loginDone) [self showDoe];
    
    
    
}

- (void) viewDidAppear:(BOOL)animated{
    if(self.webView.loading) [self.webView stopLoading];
    [self.webView loadRequest:[NSURLRequest requestWithURL:[NSURL fileURLWithPath:[[NSBundle mainBundle] pathForResource:@"index" ofType:@"html"] isDirectory:false]]];
}

- (UIView *)viewForZoomingInScrollView:(UIScrollView *)scrollView {
    return nil;
}



- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

- (IBAction)socialSign:(id)sender {
    popover = nil;
    popover = [[Popover alloc] initWithNibName:@"Popover" bundle:nil];
    popover.parent = self;
    [self.view addSubview:popover.view];
    popover.view.frame = CGRectMake(0,20, 768,1004);
}

- (IBAction)search:(id)sender {
    [self.textField resignFirstResponder];
    if(self.webView.loading) [self.webView stopLoading];
    [self.webView loadRequest:[NSURLRequest requestWithURL:[NSURL fileURLWithPath:[[NSBundle mainBundle] pathForResource:@"losangeles" ofType:@"html"] isDirectory:false]]];
    [self.webView setUserInteractionEnabled:true];
    
}

- (void)showDoe
{
    AppDelegate* appDel = (AppDelegate *)[[UIApplication sharedApplication] delegate];
    appDel.count--;
    [self.webView loadRequest:[NSURLRequest requestWithURL:[NSURL fileURLWithPath:[[NSBundle mainBundle] pathForResource:@"index2" ofType:@"html"] isDirectory:false]]];
    appDel.loginDone = true;
    self.buttonSignIn.hidden = true;
    self.welcome.hidden = true;
    self.Doe.hidden = false;
    self.myMarriott.hidden = false;
    self.logOutButton.hidden = false;
    
}

- (IBAction)chooseDate:(id)sender {
    [self.dateButton setTitle:@"10/09/2012" forState:UIControlStateNormal];
    [self.checkOut setText:@"10/12/2012"];
}


- (void)webViewDidStartLoad:(UIWebView *)webView{
    AppDelegate* appDel = (AppDelegate *)[[UIApplication sharedApplication] delegate];
    appDel.count++;
    if(appDel.count==2){
        self.mappa.hidden = false;
        pick1.view.hidden = true;
        pick2.view.hidden = true;
        pick3.view.hidden = true;
        self.logOutButton.hidden = true;
        //self.bigButton.hidden = false;
    }
    if(appDel.count==3){
        appDel.count--;
        pageContr = [[Page2Controller alloc] initWithNibName:@"Page2" bundle:nil];
        [self.view addSubview:pageContr.view];
        pageContr.view.frame = CGRectMake(0,20,768,1004);
        [self doBackMap:nil];
        //[self performSegueWithIdentifier:@"prenota" sender:nil];
    }
 
}

- (IBAction)doPrenota:(id)sender {
    
}

-(void)viewDidDisappear:(BOOL)animated{
    [self.webView stopLoading];
}

- (void)webView:(UIWebView *)webView didFailLoadWithError:(NSError *)error{
    
}

- (IBAction)doBackMap:(id)sender {
    AppDelegate* appDel = (AppDelegate *)[[UIApplication sharedApplication] delegate];
    appDel.count = 0;
    if(appDel.loginDone) self.logOutButton.hidden = false;
    self.mappa.hidden = true;
    pick1.view.hidden = false;
    pick2.view.hidden = false;
    pick3.view.hidden = false;
    if(self.webView.loading) [self.webView stopLoading];
    if(appDel.loginDone){
        [self.webView loadRequest:[NSURLRequest requestWithURL:[NSURL fileURLWithPath:[[NSBundle mainBundle] pathForResource:@"index2" ofType:@"html"] isDirectory:false]]];
    }else{
        [self.webView loadRequest:[NSURLRequest requestWithURL:[NSURL fileURLWithPath:[[NSBundle mainBundle] pathForResource:@"index" ofType:@"html"] isDirectory:false]]];
    }
}
- (IBAction)doMyMarriott:(id)sender {
    if(self.btn!=nil) return;
    self.img = [[UIImageView alloc] initWithImage:[UIImage imageNamed:@"pageLast.png"]];
    self.img.frame = CGRectMake(0,20, 768,1004);
    [self.view addSubview:self.img];
    self.btn = [[UIButton alloc] initWithFrame:CGRectMake(15,7,108,50)];
    [self.btn addTarget:self action:@selector(backMyMarriott:) forControlEvents:UIControlEventTouchUpInside];
    [self.view addSubview:self.btn];
    
    //[btn setBackgroundColor:[UIColor blueColor]];
    
}

- (IBAction)backMyMarriott:(id)sender{
    [self.img removeFromSuperview];
    [self.btn removeFromSuperview];
    self.img = nil;
    self.btn = nil;
}

- (IBAction)bigButtonPressed:(id)sender {

    

}
- (IBAction)doLosAngeles:(id)sender {
    [self.losAngeles setTitle:@"Los Angeles" forState:UIControlStateNormal];
}
- (IBAction)doLogOut:(id)sender {
    AppDelegate* appDel = (AppDelegate *)[[UIApplication sharedApplication] delegate];
    appDel.count=0;
    [self.webView loadRequest:[NSURLRequest requestWithURL:[NSURL fileURLWithPath:[[NSBundle mainBundle] pathForResource:@"index" ofType:@"html"] isDirectory:false]]];
    appDel.loginDone = false;
    self.buttonSignIn.hidden = false;
    self.welcome.hidden = false;
    self.Doe.hidden = true;
    self.myMarriott.hidden = true;
    self.logOutButton.hidden = true;
}
@end
