# Project 2 Running Planner

This second project will be my first adventure into building a full-stack application. I'll be building a Node/Express/MongoDB app from the ground up.

## Project Idea and description
While training for races, it's important to plan accordingly, whether it's a 5k or a full marathon. This running planner will allow the end user track and train for upcoming races by doing the following:
1. Find and join upcoming races and their relavent information (distance, date, location, sign up info)
2. Create race training plan by scheduling and tracking weekly runs
3. End users will be able to also view who has favorited or joined a race


## choice of API you are going to use and a proof of concept (API keys -- hitting the api)
https://runsignup.com/Api/races/GET 
https://runsignup.com/API/race/:race_id/GET

## ERDs
See pictures



## Restful Routing Chart
| HTTP METHOD (_Verb_) | URL (_Nouns_) | CRUD | Response | Notes |
| -------------------- | ------------- | ---- | -------- | ----- |
| `Runners`            |               |      |          |       |
| GET                     | /runners              | READ     | array of runners         |       |
| GET                     | /runners/:runnerId              | READ     | single runner with id of :runnerId         |       |
| POST                     | /runners             | CREATE     | add runners to list         |       |
| PUT/PATCH                     | /runners/:runnerId              | UPDATE      | update runner with id of :runnerId         |       |
| DELETE                     | 	/runners/:runnerId              | DESTROY     | delete runner with id of :runnerId         |       |

| `Races`              |               |      |          |       |
| GET                     | /races              | READ     | array of races         |       |
| GET                     | /races/:raceId              | READ     | single races with id of :raceId         |       |
| POST                     | /races              | CREATE     | 	add races to list         |       |
| PUT/PATCH                     | /races/:raceId              | UPDATE     |  update races with id of :raceId        |       |
| DELETE                     | /races/:racesId              | DESTROY     | 	destroy book with id of :raceId         |       |
| DELETE                     | 	/races/:raceId/runners/:runnerId             | UPDATE     | remove the race with an id of :raceId from the runner with an id of :runnerId         |       |
| `Running Plan`              |               |      |          |       |
| GET                     | /runningPlan            | READ     | array of running plans         |       |
| GET                     | /runningPlan/:runnerId              | READ     | single running plan with id of :runningPlanId         |       |
| POST                     | /runningPlan              | CREATE     | add runners to list         |       |
| PUT/PATCH                     | /runningPlan /:runningPlanId               | UPDATE      | update runner with id of :runningPlanId          |       |
| DELETE                     | 	/runningPlan /:runningPlanId               | DESTROY     | delete runner with id of :runningPlanId          |       |

## Wireframes of all user views
See pictures


## User Stories
* Users can view, favorite, and join races
* Users can see who has favorited and joined races
* Users can view, add, edit running plans
* User can view calendar with populated race and running plan info


## MVP goals/Stretch Goals
* Filter races based off of distance and location (state)
* Allow users to comment on races










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
