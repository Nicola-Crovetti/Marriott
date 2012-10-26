//
//  Page2Controller.m
//  Marriott
//
//  Created by AMA on 01/10/12.
//  Copyright (c) 2012 AMA. All rights reserved.
//

#import "Page2Controller.h"

@interface Page2Controller ()

@end

@implementation Page2Controller

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
    
    int i = 0;
    
    [self.gallery setContentSize:CGSizeMake(314*6, 391)];
    UIImageView* image;
    image = [[UIImageView alloc] initWithImage:[UIImage imageNamed:@"Pagina 1.png"]];
    [self.gallery addSubview:image];
    image.frame = CGRectMake(314*i,0,314,391);
    i++;
    
    image = [[UIImageView alloc] initWithImage:[UIImage imageNamed:@"Pagina 2.png"]];
    [self.gallery addSubview:image];
    image.frame = CGRectMake(314*i,0,314,391);
    i++;
    
    image = [[UIImageView alloc] initWithImage:[UIImage imageNamed:@"Pagina 3.png"]];
    [self.gallery addSubview:image];
    image.frame = CGRectMake(314*i,0,314,391);
    i++;
    
    image = [[UIImageView alloc] initWithImage:[UIImage imageNamed:@"Pagina 4.png"]];
    [self.gallery addSubview:image];
    image.frame = CGRectMake(314*i,0,314,391);
    i++;
    
    image = [[UIImageView alloc] initWithImage:[UIImage imageNamed:@"Pagina 5.png"]];
    [self.gallery addSubview:image];
    image.frame = CGRectMake(314*i,0,314,391);
    i++;
    
    image = [[UIImageView alloc] initWithImage:[UIImage imageNamed:@"Pagina 6.png"]];
    [self.gallery addSubview:image];
    image.frame = CGRectMake(314*i,0,314,391);
    i++;
    
    self.gallery.pagingEnabled = true;
    
    
    
	// Do any additional setup after loading the view.
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

-(void)scrollViewDidScroll:(UIScrollView *)scrollView{
    int page =  6*scrollView.contentOffset.x/scrollView.contentSize.width;
    [self.pageController setCurrentPage:page];

}

- (IBAction)doComment:(id)sender {
    if(self.commentsImage.hidden)
        self.commentsImage.hidden = false;
}

- (IBAction)removeComments:(id)sender {
    if(!self.commentsImage.hidden) self.commentsImage.hidden = true;
}

- (IBAction)back:(id)sender {
    [self.view removeFromSuperview];
}
- (IBAction)doPaga:(id)sender {
    UIImageView* pop = [[UIImageView alloc] initWithImage:[UIImage imageNamed:@"page3"]];
    [self.view addSubview:pop];
    pop.frame = CGRectMake(0,0, 768, 1004);
    UIButton* but = [[UIButton alloc] initWithFrame:CGRectMake(407,721,153,44)];
    [self.view addSubview:but];
    [but addTarget:self action:@selector(back:) forControlEvents:UIControlEventTouchUpInside];
}
@end
