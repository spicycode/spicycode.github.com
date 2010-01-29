# Rspec 2: in the trenches

Brief outline of where rspec 2 and rspec 2 rails are at.

* Fixing bugs in the nested describe metadata inheritance

<pre>
  describe Foo, :focused => true do
    
    it "thinks it can"

    it "knows it can"

    it "can can"

  end
</pre>

With the above spec previously the focused metadata would not inherit to the lower levels.  
This means that the runner would not be able to focus the run on these specs.

After fixing the metadata inheritance and extracting metadata to a simple object we now have fully
inheritable metadata that can be specified from either level.

## Break into some more detail on how metadata and runner interact

* Fixing compatibility issues with instance variable behaviour between Rspec 1 and Rspec 2.

In Rspec 1 when you have a spec like the following instance variables are cleaned up (i.e. are removed) between examples.

<pre>
  describe Bar do

    before do
      @the_first_ivar = 'the best ivar, i think so'
    end

    it "has an ivar named A!" do
      @a = "ok"
      @the_first_ivar.should_not be_nil
    end

    it "has an ivar named B, but don't get me started about A" do
      instance_variable_defined?("@a").should be_false
      @b = "is the best and greatest variable of all time"
      @the_first_ivar.should_not be_nil
    end

  end
</pre>

Assuming a simple world where the examples run in the order defined in earlier versions of Rspec 2 the test above would fail.  
Now, Rspec 2 behaves the same as Rspec 1 and the world is a happier place for it.


# How do I report bugs to Rspec 2 now?

You don't, we are still in early alpha (transitioning to beta).   If you want to contribute you can fork the repo at "URL HERE" and 
send a pull request.

# How to install Rspec 2?

instructions here



# Next up

* How do I use the metadata for fun and profit?  (hooking in modules, before blocks, etc)

