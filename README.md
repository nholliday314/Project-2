# Project 2 Running Planner

This second project will be my first adventure into building a full-stack application. I'll be building a Node/Express/MongoDB app from the ground up.

## Project Idea and description
While training for races, it's important to plan accordingly, whether it's a 5k or a full marathon. This running planner will allow the end user track and train for upcoming races by doing the following:
1. Find upcoming races and their relavent information (distance, date, location, sign up info)
2. Create race training plan by scheduling and tracking weekly runs


## choice of API you are going to use and a proof of concept (API keys -- hitting the api)
https://runsignup.com/Api/races/GET 
https://runsignup.com/API/race/:race_id/GET

## ERDs



## Restful Routing Chart
| HTTP METHOD (_Verb_) | URL (_Nouns_) | CRUD | Response | Notes |
| -------------------- | ------------- | ---- | -------- | ----- |
| ``            |               |      |          |       |
| GET                     | /members              | READ     | array of members         |       |
| GET                     | /members/:memberId              | READ     | single member with id of :memberId         |       |
| POST                     | /members             | CREATE     | add member to library         |       |
| PUT/PATCH                     | /members/:memberId              | UPDATE      | update member with id of :memberId         |       |
| DELETE                     | 	/members/:memberId              | DESTROY     | destroy member with id of :memberId         |       |
| PUT/PATCH (maybe post)   | /members/:memberId/books/:bookId              | UPDATE     | associate the member with id of :memberId to the book with an id of :bookId         |       |
| `Races`              |               |      |          |       |
| GET                     | /books              | READ     | array of books         |       |
| GET                     | /books/:bookId              | READ     | single book with id of :bookId         |       |
| POST                     | /books              | CREATE     | 	add book to library         |       |
| PUT/PATCH                     | /books/:bookId              | UPDATE     |  update book with id of :bookId        |       |
| DELETE                     | /books/:bookId              | DESTROY     | 	destroy book with id of :bookId         |       |
| DELETE                     | 	/books/:bookId/members/:memberId              | UPDATE     | remove the book with an id of :bookId from the member with an id of :memberId         |       |



## Wireframes of all user views


## User Stories

## MVP goals/Stretch Goals
* View Races in calendar view
* Allow 









## Getting Started

* clone this repo (no forking needed) and cd into the new directory
* run `rm -rf .git` to remove the git history
* run `git init` to create a new git history
* run `git add .` and `git commit -m "init commit"` to create the first commit of the repo 
* create a new repo on github and follow the instructions to push an existing repository from the command line
* run `npm i` to install the required packages
* touch a `.env` file and add the following to it:

```shell
DATABASE_URL= < copy mongo uri from atlas / previous project >
GOOGLE_CLIENT_ID= < copy from google cloud devs / previous project >
GOOGLE_SECRET=< copy from google cloud devs / previous project >
GOOGLE_CALLBACK=http://localhost:3000/oauth2callback
SECRET="can be any string"
```
* run `nodemon` to test your app!

Use this readme as your project pitch! 
