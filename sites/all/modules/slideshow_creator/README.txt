***********************************************************************
                     D R U P A L    M O D U L E
***********************************************************************
Module Name        : Slideshow Creator
Original Author    : Bruno Massa http://drupal.org/user/67164
Maintainer and D7  : Ron House http://drupal.org/user/171604
General Links:
Project Page       : http://drupal.org/project/slideshow_creator
Support Queue      : http://drupal.org/project/issues/slideshow_creator

***********************************************************************


DESCRIPTION
-----------

Slideshow Creator creates a true slideshows using any image over
internet with many other features. If the user does not have
JavaScript enabled, it degrades to a "regular" slideshow where the
"next" button points to the next image and a whole new page is
loaded.


FEATURES
--------

* (D6 only) CCK: Slideshow Creator has its own widget to CCK
* Automaticaaly extract images from a given directory
* Convenient: can be inserted in any node type
* Customize: add as many images you want, rotate speed and even more
  than one slideshow per page
* Lightweight: the JavaScript file is very small
* Themable: use a CSS to customize the look
* Usable: JavaScript enhance the slideshow, but it is not required
* Valid: the code is XHTML 1.0 Strict


USE
---

In any node, add the string:

[slideshow:VERSION, rotate=ROTATE_SPEED, blend=BLEND, layout=LAYOUT,
 order=ORDER, name=CLASS_NAME, height=HEIGHT, width=WIDTH,
 img=|IMAGE_URL|LINK|TITLE|CAPTION|TARGET|,
 img=|IMAGE_URL|LINK|TITLE|CAPTION|TARGET|]

where:
VERSION [required]:        the slideshow filter version: currently 2
ROTATE_SPEED [optional]:   the speed, in seconds, to rotate images
	     		   (0 to not rotate at all)
CLASS_NAME [optional]: 	   you can theme your slideshow thru CSS
	       		   giving it a class name
HEIGHT [optional]: 	   all images will be at the same height
WIDTH [optional]: 	   all images will be at the same width
BLEND [optional]: 	   how long, in seconds, will take the fading
      			   transaction between images
LAYOUT [optional]:	   (See below)
ORDER [optional]:	   (See below)

LAYOUT and ORDER work in tandem, but either or both may be omitted.
LAYOUT was originally the only option for ordering the pieces of the
slideshow, but due to a very long-standing bug, not all options were
distinct. Fixing this would have broken many slideshows that users
had designed while the bug was in force, so in order to provide all
the missing options, a new directive, ORDER, was designed so that
the bug can be removed without changing the behaviour of existing
slideshows. They now work as follows:

We consider a slideshow to consist of two parts: the slideshow
proper and the 'next/previous' control line. LAYOUT controls the
order of these parts:

LAYOUT: takes options 'top', 'bottom', and 'none' (and still
recognises the buggy old option 'reverse', which is identical to
'top'):

	top:	the slideshow proper appears above the control line
	bottom:	the slideshow proper appears below the control line
	none:	the control line is not displayed

Next, the slideshow itself is considered to consist of three parts,
a title (usually bolded), a caption, and the image. ORDER controls
the position of the image relative to the other two parts. The title
is assumed to normally appear above the caption. ORDER options are:

   	top   	       The image is on top of the title and caption
	middle	       The image is between the title and caption
	bottom	       The image is below the title and caption
	reversetop     As 'top', but the caption is above the title
	reversemiddle  As 'middle', but the caption is above the title
	reversebottom  As 'bottom', but the caption is above the title

After specifying the initial options, then for each image you want
to insert, use an "img=" tag with these fields in this order:

IMAGE_URL [required]:      the image itself
LINK [optional]: 	   if you want to provide a link to some page,
     			   put the URL here
TITLE [optional]: 	   often the bold text over the image
CAPTION [optional]:        often the text under the image

TARGET [optional]: 	   where the linked page will show: _blank
       			   (default) will show on another window,
       			   _parent and _top is only used when pages
       			   have frames, _self shows on the very
       			   window or you can use a window name.

Or you can automatically extract images from a given directory:


All images in a directory:
--------------------------
You can create a normal slideshow, but you can scan for more images
using

dir=|DIR_IMAGE|DIR_RECURSIVE|DIR_LINK|TITLE|CAPTION|TARGET|

where:

DIR_IMAGE [required]:      the diretory that you want to scan for images.
	  		   The folder base is the default site files
	  		   foder, generally "sites/default/files".

DIR_RECURSIVE [optional]:  "yes" if you want to scan recursively or
	      		   leave it blank

DIR_LINK [optional]: 	   "yes" if you want link all images to their own
	  		   path or leave it blank

TITLE,CAPTION and TARGET are applied to all images

example: (you can copy and paste)
[slideshow: 2, rotate=2, blend=1,
 img=|http://drupal.org/themes/bluebeach/logos/drupal.org.png|
 drupal.org|Drupal|The ultimate CMS. Download it now!|Drupal|,
 img=|http://www.mysql.com/common/logos/mysql_100x52-64.gif|
 http://www.mysql.com|MySQL|Free and reliable SQL server and
 client.|_self|, dir=|/|yes||Generic Photos|Arent they great?||]


ADDITIONAL FEATURES
-------------------

The module recognises all of the following standard jQuery Cycle plugin
options:

    fx,
    timeout,
    continuous,
    speed,
    speedIn,
    speedOut,
    next,
    prev,
    prevNextClick,
    pager,
    pagerClick,
    pagerEvent,
    pagerAnchorBuilder,
    before,
    after,
    end,
    easing,
    easeIn,
    easeOut,
    shuffle,
    animIn,
    animOut,
    cssBefore,
    cssAfter,
    fxFn,
    height,
    startingSlide,
    sync,
    random,
    fit,
    pause,
    autostop,
    autostopCount,
    delay,
    slideExpr,
    cleartype,
    nowrap.

These are described at: http://jquery.malsup.com/cycle/options.html
But note that not all necessarily make sense in the context of the
display layout as set up by Slideshow Creator. They are not
supported and you should try them out for yourself to find ones that
work well.

To use them just include them along with the other options at the
start of the slideshow, for example:

[slideshow: 2, layout=bottom, height=382px, fx=scrollUp, rotate=1,
blend=2, ...etc...]


INSTALLATION
------------
1* Just copy the folder to your /modules/ folder
2* Activate the module in your Drupal installation.
   Go to administer > site building > modules
3* Go to administer > site configuration > input formats
   and add slideshow filter in any filter type your site have.


KNOWN ISSUES AND SPECIAL SITUATIONS
-----------------------------------

1* the "target" feature is only available thru JavaScript, in order
   to maintain the page XHTML 1.0 Strict

2* blend feature don't work on Konqueror browser 3.x, unfortunately.
   Normal on Konqueror 4.x.

3* The CCK field feature has been removed from the Drupal 7 version.
   Since this is not the critical feature of the module, it will
   only be included if someone contributes the updates from the D6
   working version.


DEVELOPMENT
-----------

If you have suggestions or complains, don't hesitate to post your
suggestions as an issue on drupal.org. USE THE MODULE ISSUE QUEUE!
Bug reports added as comments to the how-to page and similar places
will probably never see the light of day.

If you know PHP and Drupal and want to help on this module, post
your code now! Translations are also welcome.

This module was originally sponsored by the brazilian company Titan
Atlas (titanatlas.com).
