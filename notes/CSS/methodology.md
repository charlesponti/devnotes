# Methodology

There are countless different CSS methodologies poking around today, from
**SMACSS** to **BEM** to **WHOZAMAWHATSIT**. The particular methodology that
you prescribe to is not important. In fact, you do not have to prescribe to any
preexisting methodology and make your own if you choose. No matter which of
these options you choose, there are a few key factors that must be taken into
account in order to write great CSS.

## Keys

### Understandable
This key is a rather obvious one. Whichever methodology that you
choose, it must be understandable both by the experienced members of
your team and the layman. If a non-developer could read your class
names and gather what they mean, then you have succeeded in
achieving this goal.

### Flexible
Your methodology should be flexible. Many methodologies are very
strict in their execution. This can be great in helping developers
not go to far off the path when making new classes and writing new
CSS rules. This can also not be so great because, on any non-trivial
web site, flexibility is required. You and your team will no doubt
find yourselves in a position at some point where you will need to
style a component inside of a component inside of a component inside
of a component... and will find it very difficult to apply the rules
of the methodology you've decided to follow to the situation you are
in. This is where you will need flexibility in your methodology.

### Functional & Modular
Classes and the grouping of CSS rules should be done on the basis
of their functionality and not on their content. The reason for
this is, if you create rules based on content, you will find it
difficult of reuse classes if you base their grouping on the
content that you are trying to style at that moment. If you
create classes to be based on their functionality, such as
positioning or applying designated widths, those classes will be
much more modular and reusable in the future.

### Consistent
This is the only key that can feel a bit strict, but it is
important if the methodology you take on or create is to be
understandable. Your approach should be consistent. Members of
the team, both new and old, should be able to make assumptions
about the code they're reading and the code they're writing
because they know that everyone on the team has been consistent
with the approach taken. This does not mean that rules cannot be
broken. There will no doubt be times when rules will have to be
either bent or broken in order to accomplish the task at hand. If
a consistent rule is to be bent of broken, however, it is important
to write comments within the code about why this was done so that
other developers who stumble upon it later on will understand. You
can also leave a TODO in the comments if this violation can be
fixed in the future through some form of code refactoring.
