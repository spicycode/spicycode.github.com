---
layout: post
title: RCov News Extravaganza
---
{{ page.title }}
================
<p class="meta">{{ page.date | date_to_string }}</p>

It's been a while since the last fireside chat about RCov, so let's head into this one at full-steam.

##No more REXML

The source of countless bugs in RCov reporting across multiple versions of Ruby has been eliminated in favor of simple ERB templates.  This simplifies the codebase and makes way for better template support down the road.

##The official repository on GitHub is now under the Relevance account

This is great for everyone as it means more support, faster response to issues, and generally nothing but up for RCov going forward.   Issues are moving to GitHub as well, so make sure to keep track of them at their [new location](http://github.com/relevance/rcov/issues).

##JRuby has a maintainer for their RCov version

Charles Nutter is maintaining the official JRuby fork at [http://github.com/jruby/rcov](http://github.com/jruby/rcov).   This should do similiarly great things for RCov on JRuby.   Thanks to everyone who has submitted patches building out the initial version for JRuby in the past.

##Ruby 1.9 support is drawing near

With the removal of REXML many of the biggest pain points are now gone, leading to a much more streamlined RCov.  Work on Ruby 1.9 is progressing and already in **alpha** working state.  More on this soon.

##To recap...

1) Install Rcov by doing the following:

    gem install relevance-rcov --source=http://gems.github.com


2) Need JRuby support?

    gem install jruby-rcov --source=http://gems.github.com

3) Still having issues on Ruby 1.8.X with RCov?  Make sure you are using **relevance-rcov v0.8.3.2** or higher.   If you have an outstanding issue, or requests file it at our [GitHub Issue Tracker](http://github.com/relevance/rcov/issues).

4) Waiting on Ruby 1.9?   Support is coming soon.