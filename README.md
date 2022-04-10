# Final Weekend Project of Tier 2: Movie Sagas

## Description

This project had us put together most of the skills we've been learning for the past month and a half, but specifically the last three weeks: React, Redux, and Redux-Saga with the full stack.

The challenge here was mainly to practice our new skills of routing dispatches to their own sagas, which in turn sent requests to separate routers, whose results in turn were sent to separate reducers. I didn't have a terribly hard time reaching base functionality (ie clicking on a poster in list view to pull up a detail view of the movie), but I did have to tinker a bit with accessing the correct data in the response. I suspect my requests could be formatted a bit differently to mitigate that issue.
 

###Things I'm really happy with:###

- The overall style turned out great! I love the font animation, and the MUI cards look nice and clean which allows the posters to pop with their subtle box shadow.

- My custom movie posters/data 🤓 This was tedious but 100% worth it!

- I managed to move the reducers and sagas into their own folders, though it can probably be done even more elegantly.

###Things I'd like to have done / hope to learn:###

- Implement useMediaQuery in the future for responsiveness

- Use React useParams (to maintain detail view on page refresh)


## Screenshots

![Movie List View](public/images/listView.png?raw=true "Movie List View")
![Movie Detail View](public/images/detail.png?raw=true "Movie Detail View")
