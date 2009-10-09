---
layout: post
title: GemKata - The Art of the Gem
---
{{ page.title }}
================
<p class="meta">{{ page.date | date_to_string }}</p>

  <img class="awesome-image" src="/images/posts/gymkata.jpg" border="0" title="It's not like I could find a picture of GemKata, so deal with this" />

The dust has settled.   The [GitHub](http://github.com) has moved.  What's that you say?  They don't build gems anymore?  Don't worry, you should use [GemCutter](http://gemcutter.com).   This assumes that you are already using *jeweler*.  You are, aren't you?

## Let's say you want to release a gem

Make sure your jeweler config in your *Rakefile* looks something like the following.

    begin
      require 'jeweler'
      Jeweler::Tasks.new do |gem|
        gem.name = "your-awesome-gem-here"
        # ...
      end
      Jeweler::GemcutterTasks.new
    rescue LoadError
      puts "Jeweler not available. Install it with: gem install jeweler"
    end


Now it's as easy as typing:

    # If you have never released before
    rake version write MAJOR=0 MINOR=1 PATCH=0
    # If you are back for more, releasing again
    rake version:bump:(major|minor|patch)


You now have an updated gemspec, and with the version set correctly.  Now to tag the release on github.

    rake release


Finally, release it to [GemCutter](http://gemcutter.com) using:

    rake gemcutter:release 

## The users are at the gates, and they demand documentation!

The next most awesome thing to do is to add [sdoc](http://github.com/voloko/sdoc).  Think the best rdoc template in the history of the universe.  And as a special bonus we'll generate them on your gh-pages branch so you can go to *http://yournamehere.github.com/your-awesome-gem-here* to see the rdoc documentation.

Open your *Rakefile* back up and put this at the bottom:

    begin
      %w{sdoc sdoc-helpers riscount}.each { |name| gem name }
      require 'sdoc_helpers'
    rescue LoadError => ex
      puts "sdoc support not enabled:"
      puts ex.inspect
    end

    require 'rake/rdoctask'
    Rake::RDocTask.new do |rdoc|
      version = File.exist?('VERSION') ? File.read('VERSION') : ''
      rdoc.rdoc_dir = 'rdoc'
      rdoc.title = "your-awesome-gem-here #{version}"
      rdoc.rdoc_files.include('README*')
      rdoc.rdoc_files.include('lib/**/*.rb')
    end

To generate the docs the first time run:
    rake pages:init

To rebuild the github pages branch after updates:
    rake pages

## Bask in your amazingness

Now you've done it!  You're the envy of ever ne're-do-well programmer from here to there.   Enjoy!
