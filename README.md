# PogU Art

PogU Art is a simple static React website that hosts all fan art found on the r/xqcow subreddit. As of 8/27/2020 the site is hosting 2033 pieces of art from 1282 unique artists. Each image artist/URL was fetched and converting into json using the PRAW Python module. 

## Table of Contents

- [Tech Stack](#tech-stack)
  - [Front-end](#front-end)
  - [Back-end](#back-end)
- [Guidelines to setup](#local-setup)

- [Demo](#demo)
  - [Link](#link---poguart.com)
  - [Images](#images)

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
  
#### IMAGES
<img src="/demo/images/1.png" width=340px /><img src="/demo/images/5.png" width=340px />
<img src="/demo/images/3.png" width=340px /><img src="/demo/images/10.png" width=340px />
<img src="/demo/images/7.png" width=340px /><img src="/demo/images/9.png" width=340px />
