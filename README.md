# Queueflood
[Live site](https://queue-flood.herokuapp.com/)
## Wiki Links
 - [Database Schema](https://github.com/lucianjones/Team-Tianwen/wiki/Database-Schema)
 - [Frontend Routes](https://github.com/lucianjones/Team-Tianwen/wiki/Frontend-Routes)
 - [MVP Feature List](https://github.com/lucianjones/Team-Tianwen/wiki/MVP-Feature-List)
 - [User Stories](https://github.com/lucianjones/Team-Tianwen/wiki/User-Stories)
 - [API Documentation](https://github.com/lucianjones/Team-Tianwen/wiki/API-Documentation)

## Project Summary
	Queueflood is an awesome website to go and get your coding problems answered. Create an
	account, ask and answer questions, and vote on the best answers!
## How to Install

 1. clone repo
 2. npm install
 3. set up dotenv
 4. create, migrate and seed db
 5. npm start
 6. localhost:8080

## Technology Used

 - JavaScript
 - Pugjs
 - CSS
 - Heroku
 - postgres
 - nodejs
 - sequelizejs
 - expressjs
 - bcryptjs
 - csurf
 - morgan
 - cookie-parser
 - faker
## To-Do
 - User profile page
 - Styling of questions and answers
 - Vote on questions
 - Advanced search
 - Comments sections
 ## Challenges
 
 - Enabling Search
 - Creating a functioning vote system
 

    ```div.score-container
        var  count=0
    	    each  vote  in  answer.Votes
    		    if  vote.isVote  ===  true
    			    count  =  count  +  1
    		    if  vote.isVote  ===  false
    			    count  =  count  -  1
    div.score-display
        span.score(id=`score-${answer.id}`)  #{count}
        div.vote
        if  authenticated
    	    if  answer.Votes.length  ===  0
    		    button.upVote(id=`upvote-${answer.id}`) upvote
    		    button.downVote(id=`downvote-${answer.id}`) downvote
        each  vote  in  answer.Votes
    	    if  authenticated
    		    if  vote.userId  ===  user.id
    			    if  vote.isVote  ===  true
    				    button.upVote(id=`upvote-${answer.id}`  class='highlight') upvote
    				    button.downVote(id=`downvote-${answer.id}`) downvote
    			    if  vote.isVote  ===  false
    				    button.upVote(id=`upvote-${answer.id}`) upvote
    				    button.downVote(id=`downvote-${answer.id}`  class='highlight') downvote
    			    if  vote.userId  !==  user.id
    				    button.upVote(id=`upvote-${answer.id}`) upvote
    				 button.downVote(id=`downvote-${answer.id}`) downvote

## Photos
![Pictures of features](https://imgur.com/a/Ho4X0tJ)

