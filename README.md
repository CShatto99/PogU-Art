# PogU Art

PogU Art is a simple static React website that hosts all fan art found on the r/xqcow subreddit. As of 9/5/2020 the site is hosting 2154 pieces of art from 1351 unique artists. Each image artist/URL was fetched and converted into json using the PRAW Python module.

## Table of Contents

- [Tech Stack](#tech-stack)
  - [Front End](#front-end)
  - [Back End](#back-end)
- [Local Setup](#local-setup)
- [Demo](#demo)

## Tech Stack

#### Front End
* React
* React Router
* Axios
* Bootstrap
* Reactstrap
* UUID

#### Back End
* NodeJS
* ExpressJS
* Nodemon
* Concurrently

## Local Setup
1. Run these commands then - 
    ```
    git clone https://github.com/CShatto99/PogU-Art.git (clones the repo)
    
    cd PogU-Art
    
    npm run installDep (installs all dependencies)
    ```
4. Servers
    ```
    Option 1 (runs backend and frontend servers):
    
    npm run dev
    
    Option 2 (for running both the servers individually):
    
    npm run server (runs backend server only)
    
    npm run client (runs frontend server only)
    ```
## DEMO

#### Link - [poguart.com](http://poguart.com)
