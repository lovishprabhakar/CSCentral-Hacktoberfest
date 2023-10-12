<h3> 📌 Contribution Guidelines 🏗 </h3>

Are we missing any of your favorite features, which you think you can add to it❓ We invite you to contribute to this project and make it better.
To start contributing, follow the below guidelines:

_1._ Fork [this](https://github.com/lovishprabhakar/CSCentral-Hacktoberfest.git) repository.

_2._ Clone your forked copy of the project.

bash
git clone https://github.com/lovishprabhakar/CSCentral-Hacktoberfest.git

_3._ Navigate to the project directory.

cd CSCentral-Hacktoberfest

_4._ Create a new branch:

git checkout -b YourBranchName

_5._ Make changes in source code.

_6._ Stage your changes and commit

git add .
git commit -m "<your_commit_message>"

_7._ Push your local commits to the remote repo.

git push origin YourBranchName

_8._ Create a [PR](https://github.com/lovishprabhakar/CSCentral-Hacktoberfest.git)

_9._ If anyone contribute to this repository, then the changes will not reflect in your local repository. For that:

_10._ Setup a reference(remote) to the original repository to get all the changes from the remote.

git remote add upstream https://github.com/lovishprabhakar/CSCentral-Hacktoberfest.git

_11._ Check the remotes for this repository.

git remote -v

_12._ Fetching from the remote repository will bring in its branches and their respective commits.

git fetch upstream

_13._ Make sure that you're on your master branch.

git checkout main

_14._ Now that we have fetched the upstream repository, we want to merge its changes into our local branch. This will bring that branch into sync with the upstream, without losing our local changes.

git merge upstream/main
