---
layout: post
title: This is why RVM is cool
---
{{ page.title }}
================
<p class="meta">{{ page.date | date_to_string }}</p>

# Step 1 

Take a directory, any directory. Sprinkle a *.rvmrc* file in the directory.

# Step 2

Put "rvm your-ruby-version" in the file.

# Step 3

Magic! Let’s test this in the real world…


    ~/src/codes > ruby -v
    ruby 1.9.2dev (2010-02-25 trunk 26759) [x86_64-darwin10]

    ~/src/codes > cd internet_superstar

    ~/src/codes/internet_superstar /msater > ruby -v
    ruby 1.8.7 (2009-12-24 patchlevel 248) [i686-darwin10.2.0]

    ~/src/codes/internet_superstar /msater > cat .rvmrc
    rvm ree

Want the full scoop?  Check out the docs at http://rvm.beginrescueend.com/workflow/rvmrc/
