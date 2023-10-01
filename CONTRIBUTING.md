<h3> 📌 Contribution Guidelines 🏗 </h3>

Are we missing any of your favorite features, which you think you can add to it❓ We invite you to contribute to this project and make it better.
To start contributing, follow the below guidelines:

*1.* Fork [this](https://github.com/lovishprabhakar/CSCentral-Hacktoberfest.git) repository.

*2.* Clone your forked copy of the project.

bash
   git clone https://github.com/lovishprabhakar/CSCentral-Hacktoberfest.git


*3.* Navigate to the project directory.


   cd CSCentral-Hacktoberfest


*4.* Create a new branch:


   git checkout -b YourBranchName


*5.* Make changes in source code.

*6.* Stage your changes and commit


   git add .
   git commit -m "<your_commit_message>"


*7.* Push your local commits to the remote repo.


   git push origin YourBranchName


*8.* Create a [PR](https://github.com/lovishprabhakar/CSCentral-Hacktoberfest.git)

*9.* If anyone contribute to this repository, then the changes will not reflect in your local repository. For that:

*10.* Setup a reference(remote) to the original repository to get all the changes from the remote.


   git remote add upstream  https://github.com/lovishprabhakar/CSCentral-Hacktoberfest.git


*11.* Check the remotes for this repository.


   git remote -v


*12.* Fetching from the remote repository will bring in its branches and their respective commits.


   git fetch upstream


*13.* Make sure that you're on your master branch.


   git checkout main


*14.* Now that we have fetched the upstream repository, we want to merge its changes into our local branch. This will bring that branch into sync with the upstream, without losing our local changes.


   git merge upstream/main
