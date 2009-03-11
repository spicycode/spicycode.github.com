---
layout: post
title: Binding Option-Left and Option-Right in iTerm and Terminal
---
{{ page.title }}
================
<p class="meta">{{ page.date | date_to_string }}</p>

I finally got around to solving one of the consistency issues I encounter on OSX as I switch between Cocoa and the terminal.   I really enjoy `Option-Left` and `Option-Right` as skip back one word and skip forward a word.   Drop the following in your ZSH config to get things done.  

    # To see the key combo you want to use just do:
    # cat > /dev/null
    # And press it
    
    bindkey '^K' kill-whole-line                      # ctrl-k
    bindkey "^R" history-incremental-search-backward  # ctrl-r
    bindkey "^A" beginning-of-line                    # ctrl-a  
    bindkey "^E" end-of-line                          # ctrl-e
    bindkey "[B": history-search-forward              # down arrow
    bindkey "[A": history-search-backward             # up arrow
    bindkey '^[[D' backward-word                      # option left
    bindkey '^[[C' forward-word                       # option right
    
I've included the quick instructions on finding out what a key combo is in the terminal so you can bind any old thing.   You can see what is currently bound by using `bindkey -L`.