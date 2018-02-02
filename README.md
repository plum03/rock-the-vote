# Rock the Vote - Fullstack Project

## Objective
Build a website where users can create posts on current political issues and comment on, up-vote and down-vote each post.

Build a server and database to support website functionalities.
 

## Built With

### Backend
* [Express](http://expressjs.com/) - Web framework for Node.js
* [NodeJS](https://nodejs.org/en/docs/) - Server framework
* [MongoDB](https://docs.mongodb.com/) - NoSQL Database
* [Mongoose](http://mongoosejs.com/) - Schemas and models for use with MongoDB

### Frontend
* [ReactJS](https://reactjs.org/) - The web framework used
* [Redux](https://redux.js.org/) - State Management
* [Axios](https://github.com/axios/axios) - enables AJAX functionality
* Redux Thunk - permits asynchronous action calls
* Javascript, HTML, CSS 


## Code Examples

### Mongoose Schema 
```
const issueSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    upVote: {
        type: Number,
        default: 0
    },
    downVote: {
        type: Number,
        default: 0
    }
})
```
### Express Routes
```
commentsRouter
    .route("/:issueId")
    .get((req, res) => {
        Comment.find({
            issueId: req.params.issueId
        }, (err, foundComments) => {
            if (err) {
                console.error(err)
            } else {
                res.send(foundComments)
            }
        })
    })
```
## Features for Future Versions

[1] User Authentication


## Author

* **Erica Stone** [plum03](https://github.com/plum03)
