Infinite Scroll jQuery Plugin
===============================

We all love list views. However, when we have a long list of items in a list view, it is not optimal to create dom nodes for all the items in the list view beforehand. On the mobile browser this problem is all the more relevant.

The Infinite Scroll plugin does something very simple. It keeps track of the scroll events on a page, and sends custom events when the user comes close to the end of the current document; so that one can load more items into the list view on demand.

Notes
-----
I have borrowed ideas from John Resig's blog post on "Learning from Twitter" (http://ejohn.org/blog/learning-from-twitter/)

The test page is at (http://tikurahul.github.com/InfiniteScroll)

Other Experiments
==================

New* Android UI paradigms (Facebook, Twitter, Youtube etc.) apps have a nice sliding left manu (for app navigation.) This is an attempt to re-create that using the HTML5 Flexbox spec.
Works really well on Webkit browsers (Chrome, Safari), Chrome on Android and IE 10. Firefox is still a work in progress.

The test page is at [http://tikurahul.github.com/InfiniteScroll/experiments/slidingPanel.html here]. Click on the *sample content* div, and the slide in panel should show up. This is the first time, I have attempted something *complicated* with CSS. Comments are appreciated.