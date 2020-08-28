# PogU Art

Demo: [PogU Art](http://poguart.com/)

### Introduction

PogU Art is a simple static React website that hosts all fan art found on the r/xqcow subreddit. As of 8/27/2020 the site is hosting 2033 pieces of art from 1282 unique artists. Each image artist/URL was fetched and converting into json using the PRAW Python module. 

### Local Development

If you would like to clone and manipulate the project on your machine, follow the steps below.

```bash
# Create a directory
mkdir myDir
cd myDir

# Initialize a Git repository
git init

# Enable Sparse Checkouts
git config core.sparsecheckout true

# Tell Git which directories you want
echo PogUArt/ >> .git/info/sparse-checkout

# Add the remote
git remote add -f origin https://github.com/CShatto99/MERN_Projects.git

# Fetch the files
git pull origin master

# In the PogUArt root directory run
cd client
npm install
cd ..
npm install

# Run the dev script
npm run dev
```
