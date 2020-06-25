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

## Tests
### Tests of API
Run `npm run test`
### Tests of UI
Run `npm run test-ui`
### Test all
Run `npm run unit-tests`

## Get the image from docker hub

To pull the latest image from docker hub run
`docker pull dinanjanag/feedback-app`
Docker push CI job is configured in github.
https://github.com/dinanjana/feedback-app/blob/master/.github/workflows/docker-image.yml

## API

### GET /feedbacks


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
## Project structure
 
 |bin  
 |____|www  
 |_______|_____build  
 |______|_____public  ---> _UI app static resources_  
 |_______|_____src  ---> _UI app_  
 |  
 |configs  
 |  
 |logs  
 |
 |ws  ---> _backend service_    
 |____|test  ---> _backend service unit tests_  
 
## Third party services
Logs are stored in logs bucket of https://play.min.io/minio/ Get the default creds from here https://docs.min.io/docs/javascript-client-quickstart-guide.html

Feedbacks are stored in mongodb atlas instance
https://cloud.mongodb.com/v2/5eec3f9d5638bc560d23e72c#metrics/replicaSet/5eec40286d64ba1c058314dd/explorer/feedBacks/feedBacks