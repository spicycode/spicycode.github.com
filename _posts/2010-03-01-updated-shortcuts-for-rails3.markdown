---
layout: post
title: Updated shortcuts for Rails 2 and 3
---
{{ page.title }}
================
<p class="meta">{{ page.date | date_to_string }}</p>

If you are like me and spend a good deal of time between rails 2 and 3 you have probably become frustrated by your aliases no longer working. Behold, functions!

    function ss {
      if [ -e "./script/server" ]; then
        ./script/server
      fi

      if [ -e "./script/rails" ]; then
        ./script/rails server
      fi
    }

    function sc {
      if [ -e "./script/console" ]; then
        ./script/console
      fi

      if [ -e "./script/rails" ]; then
        ./script/rails console
      fi
    }
