# Final Weekend Project of Tier 2: Movie Sagas

_Time spent learning Redux-Saga: 2-3 days_

_Time to complete: ~5 hours for functionality, 10+ for styling and fiddling_



## Description

This project had us put together most of the skills we've been learning for the past month and a half, but specifically the last three weeks: React, Redux, and Redux-Saga with the full stack.

The challenge here was mainly to practice our new skills of routing dispatches to their own sagas, which in turn sent requests to separate routers, whose results in turn were sent to separate reducers. I didn't have a terribly hard time reaching base functionality (ie clicking on a poster in list view to pull up a detail view of the movie), but I did have to tinker a bit with accessing the correct data in the response. I suspect my requests could be formatted a bit differently to mitigate that issue.
 

### Things I'm really happy with: ###

- The overall style turned out great! I love the font animation, and the MUI cards look nice and clean which allows the posters to pop with a subtle box shadow.

- My custom movie posters/data 🤓 This was tedious but 100% worth it!

- I managed to move the reducers and sagas into their own folders, though it can probably be done even more elegantly.

- Working with a classmate, we figured out how to implement useParams to maintain the MovieDetail view on page refresh 

### Something I would like to have done / plan to learn: ###

- Implement useMediaQuery in the future for responsiveness... the MovieDetail view is pretty gnarly on mobile right now


## Screenshots

![Movie List View](public/images/finalLayout.png?raw=true "Movie List View")
![Movie Detail View](public/images/detail.png?raw=true "Movie Detail View")


### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [Postico](https://eggerapps.at/postico/)

## Installation

1. Create a database in Postico named `saga_movies_weekend`,
2. The queries in the `database.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly-- I recommend using my custom queries (they are labelled as such)! The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries. 
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal
6. The `npm run client` command will open up a new browser tab for you!

## Built With

## Built With

- React
- Redux
- Redux-Saga
- PostgreSQL
- Postico
- Material UI

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality! What a whirlwind it's been so far 🌬️🌪️
