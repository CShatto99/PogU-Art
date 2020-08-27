# PogU Art

Demo: [PogU Art](http://poguart.com/)

### Introduction

PogU Art is a simple web app that hosts art that has been posted on the subreddit r/xqcow with the "ART" flair. If you do not see your art on the site or you would like to receive the directory containing all of the art pieces email me at cameronshatto99@gmail.com.

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
