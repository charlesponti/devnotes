# Associations

As the data we want to store in each table grows, sometimes we need more than
just attributes. For example, if we want to store the user who wrote a story, we
could start by storing the user_name as an attribute on a store. But, if we need
to store more information about the user, such as email or nickname, things will
become messy quickly.

Associations define how two models interact with one another. Adding associations
will help us know which user posted a story or what album a photo belongs to.