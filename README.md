# feedback-app
Node js and React js implemetation of feedback collecting service
- Saving the reviews
- Form validation
- Pagination (5 reviews per page)
- Success message when a review is saved
- Dockerfile to run the project

# Installation
**Note**: This is developed on node v12.14.0 and npm 6.13.4
## Run feedback-ws
1. Clone the project
2. Use `npm install` to install the dependencies.
3. Run `npm start` to launch the app. Express server will listen on 3001
## Run feedback-ui
1. cd into bin/www
2. Use `npm install` to install the dependencies.
3. Run `npm start` to launch the app. This should open your browser. If not, open http://localhost:3000.
## Run feedback as an application
1. Clone the project
2. Use `npm install` to install the dependencies.
3. Use `npm run feedback-app` to start the complete application
4. Go to `http://localhost:3001/feedback-list/index.html`

##Get the image from docker hub

##API

###GET /feedbacks


```json
[
    {
        "feedBack": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        "name": "asdsada",
        "stars": "3"
    },
    {
        "feedBack": "Donec mattis, quam eget mattis pretium, nisi elit pellentesque sapien, id consequat eros risus vel neque.",
        "name": "scdscsd",
        "rating": "5"
    }
]
```

### POST /posts

#### Request

```json
{
    "feedback": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    "stars": 4,
    "name": "zczxc"
}
```
