## Git Question A:

How do you delete a local branch after completing work on it.  How would you delete a remote branch?
1. To delete a local branch you can run the command /git branch -d <branch-name>/ To delete a remote branch you have to run the command /git push origin --delete <branch-name>/
## Git Question B: 

You made a mistake in committing your last set of changes. How would you fix it?

1. If you haven't pushed it to a repo yet you can run /git commit --amend/ and change your latest commit 
2. If you did push it you can run /git revert <commit_id>/ this will got back to commit of the commit_id

Bonus question:

Would your approach change if you pushed the erroneous commit, that others may have pulled from and based their work upon?

1. Let others know that they need to revert back to an older commit before they make any changes.