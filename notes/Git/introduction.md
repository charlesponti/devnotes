# Git

![Git](../../assets/images/git.png)

Git is a version control system and source control management tool. It handles
the management of changes to documents. It allows developers to manage multiple
versions of the same codebase, which comes in handy, for example, when bugs get
accidentally introduced and the application needs to be reverted to a previous
working state. It also helps

## Committing

```
~> git commit -m 'Initial commit'
```

Committing in Git takes all of the changes that are in the staging area and
takes a snapshot of them. The '-m' flag, which stands for message, allows you
to add a message to the snapshot.

It's a best practice to be very explicit about the changes you have made in
your commit message, as it will help you and other developers to know what
happened in each commit without having to review the code.

There is popular phrase for committing that says 'Commit early. Commit often.'
Essentially, it is best practice to commit after doing any changes to a file.
This comes in very handy when your code stops working because you will be
able to rollback your changes commit by commit back to point when the code was
working.

## Branching

![Git Branching](../../assets/images/git-branching.png)

Branching means you diverge from the main line of development and continue to
do work without messing with that main line.  

When working on a new feature or a bug fix, it is best practice to create a
new branch for the new code you are going to write and to give that branch
a descriptive name, such as 'feature/add-navigation-bar'.

To create a branch, you can use the git branch command like so:

```
~> git branch new_branch
```
You
- duplicates your current branch into a new branch
-

The above command will create a new branch with the name new_branch that is an
exact duplicate of the branch you are currently in. You can
also create a new branch and checkout into it by using the git checkout command
with the '-b' flag, like so:

```
~> git checkout -b new_branch
```

Once a branch already exists and you would like to move into it, use the
checkout command like so:

```
~> git checkout new_branch
```

Changes that are made in one branch do not affect other branches until the
two branches are merged together. If you want to merge two branches together,
you can use the git merge command.

```
~> git merge new_branch
```

The above command will merge the branch named new_branch into the branch that
you are currently in.

## Commands

### git init

```
~> git init
```

- initialises a new git repository in current working directory

### git add

```
~>  git add a.txt
```

```
~>  git add --all
```

This command updates the index using the current content found in the working
tree, to prepare the content staged for the next commit. It typically adds the
current content of existing paths as a whole, but with some options it can also
be used to add content with only part of the changes made to the working tree
files applied, or remove paths that do not exist in the working tree anymore.

The "index" holds a snapshot of the content of the working tree, and it is this
snapshot that is taken as the contents of the next commit. Thus after making any
changes to the working directory, and before running the commit command, you
must use the add command to add any new or modified files to the index.

This command can be performed multiple times before a commit. It only adds the
content of the specified file(s) at the time the add command is run; if you want
subsequent changes included in the next commit, then you must run git add again
to add the new content to the index.

The git status command can be used to obtain a summary of which files have
changes that are staged for the next commit.

The git add command will not add ignored files by default. If any ignored files
were explicitly specified on the command line, git add will fail with a list of
ignored files. Ignored files reached by directory recursion or filename globbing
performed by Git (quote your globs before the shell) will be silently ignored.
The 'git add' command can be used to add ignored files with the -f (force) option.


### git diff

```
~>  git diff
```

Using the git diff command will show you the changes between the working tree
and the index or a tree, changes between the index and a tree, changes between
two trees, changes between two blob objects, or changes between two files on
disk.

Running the git diff command with no arguments, will show the diffs between all
of the files in the the Git repository in your current branch. If you only want
to see the diff of one file, you can pass the filename to the command like so:

```
~>  git diff a.txt
```

### git rm


```
~>  git rm a.txt
```

This command is used to remove files from Git. Running it as shown above will
also remove the file from your computer. You can run this command with `--cached`
to remove the file from the git staging area.


### git pull

```
~> git pull origin master
```

This command pulls the code that is in the master branch from the origin remote
and merges it with your branch.

### git push

```
~> git push origin master
```

This command pushs your code to the master branch of the origin remote and
merges its branch. This command also takes two arguments. The first argument
is the remote server to which you wish to push your code. The second argument is
the branch that you wish to push to.
