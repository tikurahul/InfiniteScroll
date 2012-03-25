Infinite Scroll jQuery Plugin
===============================

We all love list views. However, when we have a long list of items in a list view, it is not optimal to create dom nodes for all the items in the list view beforehand. On the mobile browser this problem is all the more relevant. 

The Infinite Scroll plugin does something very simple. It keeps track of the scroll events on a page, and sends custom events when the user comes close to the end of the current document; so that one can load more items into the list view on demand.

Notes
-----
I have borrowed ideas from John Resig's blog post on "Learning from Twitter" (http://ejohn.org/blog/learning-from-twitter/)