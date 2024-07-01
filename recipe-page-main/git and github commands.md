# GIT and GITHUB

## Contents:
1. [common commands](#common-commands)
2. [GIT](#git)
    1. [Startup](#startup)
    2. [GIT repositories](#git-repositories)
    3. [Staging](#staging)
    4. [Commiting](#commiting)
    5. [Branching](#branching)
    6. [Merging](#merging)
3. [GITHUB](#github)
    1. [Aliases](#aliases)
    2. [Cloning](#cloning)
    3. [Pushing](#pushing)

### Common commands
- **cd:** change directory
- **cd ..:** change to a previous directory
- **mkdir directory_name:** make a directory
- **rmdir:** removes directory
- **touch file_name.extension:** creates file
- **rm:** removes file
- **rm -r:** removes a full directory
- **rm rf- .git:** removes git hidden folder
- **cp direcotry/file.extension new_directory:** copies directory/file to a new location
- **cp -r directory new_directory:** copies a directory with all its contents to a new location
- **mv direcotry/file.extension new_directory:** moves directory/file to a new location (doesnt require the -r recursive expression)
- **mv old_name new_name:** renames a directory or file
- **cp/mv file/directory ..:** moves file or directory to a parent directory
- **ls:** lists elements inside a directory
- **q:** exits out of the "no next tag press RETURN"
- **git config user.name:** retrieves username
- **git config user.email:** retrieves user email
- **git status file_name.extension:** checks status of selected file

#### Startup

###### Version check
==Commands:==
- **git --version:** checks version

###### User and email creation 
==Commands:==
- **git config --global user.name user_name:** creates user

##### GIT repositories

###### Local repository creation
==Commands:== 
- **git init:** intializes git respository

###### Local repository deletion
==Commands:==
- **rm -rf .git:** removes hidden git directory createdº	

#### Staging

###### Staging files
==Commands:==
- **git status:** retrives data of files in repo. Red = untracked, Green = staged
- **git add file_name.extension:** stages file
- **git add .:** stages all files inside a repo directory
###### Unstaging files
==Commands:==
- **git rm --cached file_name.extension:** unstages file
- **git rm --cached .:** unstages all files inside the repo directory 

#### Commiting

###### Committing files
==Commands:==
- **git commit -m "message":** commits all the staged files to the working branch
- **git log:** explicitly describes all the commits made on the working branch
- **git log --oneline:** condensely describes commits made on the working branch

#### Commit Rollbacks

###### checkout rollback
showcases the code at a certain point in time on the working branch. It doesnt undo any changes, its used to "check out" the state of the code in a certain commit breakpoint
==Commands:==
- **git checkout commit_id:** with the commit id performs a checkout rollback which can be retrieved with the "git log" command
- **git checkout master:** returns to the latest commit

###### revert rollback
it takes the code to a certain commit breakpoint, undoing changes. However the undone commits can be reverted should the revert rollback be undesired.
its like deleting changes into a "recycle bin", stored in case to be restored
==Commands:== 
- **git revert commit_id:** when doing this rollback, a new commit well be created and thus itll need to be named inside the editor (vscode)

###### reset rollback
unlike revert rollbacks, the undone or deleted commits cant be restored. its like they are deleted from the "recycle bin"
==Commands:==
- **git reset commit_id:** unlike revert, it rollsback to a commit without a fallback. However commits disappear but not the recent changes made to files, it preserves them in case of condensing the previous commits into one new commit. its a partial reset
- **git reset commit_id --hard:** removes the all the commits down to one specific commit and it also removes the latest changes made to files. its a full reset

#### Branching

###### Branch creation
create a new branch from the stable master/main branch. For that the master branch needs to be ACTIVE
==Commands:==
- **git branch branch_name:** creates a new branch
- **git branch -a:** lists all the branches available. The one flagged by an "*" is the working branch or active branch
- **git checkout branch_name:** switches from active branch to the selected branch
- **git checkout -b branch_name:** shorthand for both "git branch branch_name" and "git checkout branch_name". it creates and switches from master to the newly created branch in one step

###### Local branch renaming
==Commands:==
- **git branch -m old_name new_name:** renames a local branch

###### Remote branch renaming
==Commands:==
- **git push origin branch branch_with_new_name:** uploads a branch with a new name after its been deleted

###### Local branch deletion
==Commands:==
- **git branch -d branch_name:** WHILE ON THE MAIN/MASTER BRANCH, this deletes the selected other branch only had the aforementioned been merged into the main branch
- **git branch -D branch_name:** WHILE ON THE MAIN/MASTER BRANCH, this works for branches that havent been merged

###### Remote branch deletion
==Commands:==
- **git push origin --delete branch_name:** deletes a branch from the remote repo

#### Merging

###### Merging files
while on the main/master branch sided branches can be merged into it
==Commands:==
- **git merge branch_name:** merges selected branch into the master/main branch

*branches MUST ONLY  work on inidivual parts of code and not on the same so as to avoid conflicts when merging into the master/main branch*

### GITHUB

#### Alises

the remote repo url can be given an alias to simplify the pushing and pulling processes. when cloning the remote repos git gives the default alias "origin"
==Commands:==
- **git remote add alias_name remote_repo_url:** gives an alias to the remote repo
- **git remote -v:** shows the aliases for the diferent remote repos (origin is default for cloned repos)

#### Cloning

clone remote repos into a local machine (downloading). 
==Commands:==
- **git clone remot_repo_url:** clones the remot repo locally

#### Pushing

pushing synchronizing the cloned local repos with the remote one (uploading and replacing)
==Commands:==
- **git push remote_repo_url/url_alias master:** pushes the master branch of a local repo to the remote one
