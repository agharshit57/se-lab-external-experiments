# Git Command Demonstration
```bash
mkdir git-demo && cd git-demo
git init
echo "# Git Demo" > README.md
git status
git add README.md
git commit -m "Initial commit"
git switch -c feature
echo "Feature work" > feature.txt
git add feature.txt
git commit -m "Add feature"
git switch main
git merge feature
git log --oneline --graph --all
```
If initial branch is master, switch back using `git switch master`.

Connect to a new GitHub repo:
```bash
git remote add origin https://github.com/USERNAME/REPOSITORY.git
git branch -M main
git push -u origin main
```

Commands: clone copies remote repo; status shows changes; add stages; commit records; push uploads; pull fetches/integrates; branch lists branches; switch changes branch; merge combines branches; log shows history. Avoid force push unless explicitly required.
