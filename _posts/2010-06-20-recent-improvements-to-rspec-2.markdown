---
layout: post
title: Recent improvements to RSpec 2
---
{{ page.title }}
================
<p class="meta">{{ page.date | date_to_string }}</p>

I just pushed the following two changes into rspec-core.  They should show up in rspec-core 2.0.0.beta.13.

## You can specify the path to rcov finally!

A good use is to set it to *bundle exec rcov*.

## RSpec rake task no longer shells out to ruby!

Back in the day (i.e. before June 19th, 2010), when you ran `rake spec` it loads your project files, and then it calls out ala *system ruby ....*.  This makes everyone sad if your project takes a while to load.

Now, we invoke the RSpec runner via code!  So if your project environment takes a while to load, look forward to this in the next release!
