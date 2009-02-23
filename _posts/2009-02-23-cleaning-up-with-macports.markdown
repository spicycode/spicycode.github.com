---
layout: post
title: Keeping things clean when using MacPorts
---
{{ page.title }}
================
<p class="meta">{{ page.date | date_to_string }}</p>

A common pattern I perform in MacPorts is embodied in the following function.   

    function update_macports {
      sudo port selfupdate
      sudo port sync
      sudo port outdated
    }

It updates MacPorts, syncs the ports database, and then shows me what is outdated.   For most ports I tend to uninstall the old version and then install the newer version.  Sometimes this gets you in a never ending dependency removal loop.   

Use `sudo port uninstall --follow-dependents your-portname-here`.  This will uninstall this port and any dependent ports not in use by other ports on the system.   Useful for cleanup after experimentation.
