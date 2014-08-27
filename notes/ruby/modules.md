# Mixins

```ruby

module Upvotable

  def upvote!
    @upvotes += 1
  end

  def downvote!
    @upvotes =- 1
  end

end

class Story
  attr_accessor :title, :body, :upvotes
  include Upvotable

end

```

Mixins are used to import a set of functionality into classes in order to keep
your code DRY and to keep that functionality in an understandable.
