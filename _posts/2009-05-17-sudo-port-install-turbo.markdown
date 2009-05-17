---
layout: post
title: Speeding up port install
---
{{ page.title }}
================
<p class="meta">{{ page.date | date_to_string }}</p>

I've been doing a lot of software installation via [macports](http://macports.org) recently and I wanted to make sure things were building as fast as they could.  After reading through the macports FAQ I found a few easy steps for speeding up installations.

# Install ccache

From the **ccache** homepage:

> ccache is a compiler cache. It acts as a caching pre-processor to C/C++ compilers, using the -E compiler switch and a hash to detect when a compilation can be satisfied from cache. This often results in a 5 to 10 times speedup in common compilations.

To use **ccache** port install it by typing:

    sudo port install ccache
    
<br />    
# Tweak your macports.conf

We will need to edit a few settings in our **macports.conf** to enable ccache, and to make builds faster.   First open **macports.conf** in your editor of choice.

    sudo vim /opt/local/etc/macports/macports.conf

Now find the **configureccache** setting and change it's value to **yes**.   Next find **buildmakejobs** and change it's value from **1** to **0**.  Now you can save and exit the file.

With the last changes we have enabled **ccache** integration in macports and also told it to detect the number of processor cores to use, instead of leaving it hardcoded to 1.

Things should zoom along quite a bit faster now when compiling in macports.