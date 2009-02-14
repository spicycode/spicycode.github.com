---
layout: post
title: Rubygems in your HOME directory, a 5 second guide.
---
{{ page.title }}
================
<p class="meta">{{ page.date | date_to_string }}</p>

It seems you are finally ready to let your gems live only in your *HOME* directory.  I'll show you the ropes.

1. First, stop typing `sudo gem whatever`, all the cool kids type `gem whatever`.
2. Add the following export to your zsh or bash config.
3. For ruby 1.8x it would be something like `export GEM_HOME=~/.gem/ruby/1.8`
4. For 1.9.1 it would be `export GEM_HOME=~/.gem/ruby/1.9.1`

Now you can install and remove gems in your home directory with no issue. 
