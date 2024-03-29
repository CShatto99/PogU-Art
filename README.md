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
* react-router-dom
* axios
* bootstrap/reactstrap
* uuid

#### Back End
* Node
* express
* nodemon
* concurrently

## Local Setup
1. Run the following commands 
    ```
    git clone https://github.com/CShatto99/PogU-Art.git
    
    cd PogU-Art
    
    npm run installDep
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
**Note:** This demo relied on the Heroku free tier and is no longer active.
#### LINK - [poguart.com](http://poguart.com)
