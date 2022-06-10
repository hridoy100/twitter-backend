# twitter-backend

## Setting up the Project:
1. First clone the repository. 
2. Then run ```npm install``` this will install the dependencies. 
3. Create a file named **.env** and add the following parameters described in [Environment File ](#env) section.
4. From **sql** folder, import the tables into your mysql database.
5. Now you're all set up to run this application.

<a name="env"></a>
## Environment File:
.env file should have the following parameters:
```
TOKEN_HEADER_KEY = x-access-token
ACCESS_TOKEN_SECRET=
REFRESH_TOKEN_SECRET=
```
You can generate the secret keys by using the following commands and then copy and paste the data here.

```javascript
node
require('crypto').randomBytes(64).toString('hex');
require('crypto').randomBytes(64).toString('hex');
```
Running the command two times will generate a secret key. You can use that in your env file.

## Running the application:
1. using node 
```node bin/www```
2. using nodemon ```nodemon bin/www```

## API:
* User Creation API:

  * POST [http://localhost:3000/users/create](http://localhost:3000/users/create)
  ```json
  {
    "userName": "hridoy",
    "name": "Raihanul Alam Hridoy",
    "password": "Abcd@12345",
    "birthDay": "12-12-2020"
  }
  ```
  
* User login or Token generation API:
  * POST [http://localhost:3000/users/generate-token](http://localhost:3000/users/generate-token)
  ```json
  {
    "userName": "hridoy",
    "password": "Abcd@12345"
  }
  ```
  
* Token validation API:
  * GET [http://localhost:3000/users/validate-token](http://localhost:3000/users/validate-token)
  ```
  'headers': {
    'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0aW1lIjoiU2F0IEp1biAxMSAyMDIyIDA0OjM0OjQ5IEdNVCswNjAwIChCYW5nbGFkZXNoIFN0YW5kYXJkIFRpbWUpIiwidXNlcklkIjoxLCJ1c2VyTmFtZSI6ImhyaWRveSIsInBhc3N3b3JkIjoiZTEwYWRjMzk0OWJhNTlhYmJlNTZlMDU3ZjIwZjg4M2UiLCJpYXQiOjE2NTQ5MDA0ODksImV4cCI6MTY1NDkwMDU0OX0.miEsRiOXXsBEFTGsbphRN88xQ8H21NUsedZa13eOyvk'
  }
  ```
  
* Fetch user API:
  * GET using ID [http://localhost:3000/users/id/{id}](http://localhost:3000/users/id/{id})
  * GET using userName [http://localhost:3000/users/username/{userName}](http://localhost:3000/users/username/{userName})

* Tweet Creation API: 
  * POST [http://localhost:3000/tweets/create](http://localhost:3000/tweets/create)
  ```json
  {
    "userID": "8",
    "tweet": "I am tweeting my thoughts!"
  }
  ```
  
* Single User Tweet API:
  * POST [http://localhost:3000/tweets/my/{id}](http://localhost:3000/tweets/my/{id})
  ```json
  {
    "isNext": 0,
    "time": 1654886934716
  }
  ```
  In this API, **isNext** can have 3 values `{-1,0,1}` meaning `{prev, default, next}` and **time** specifies the time of last fetched tweet.
For default case, **isNext** and **time** parameters are ignored. This is basically implemented for large tweet data.

* Newsfeed or Following User Tweets API:
  * POST [http://localhost:3000/tweets/feed/{id}](http://localhost:3000/tweets/feed/{id})
  ```json
  {
    "isNext": 0,
    "time": 1654886934716
  }
  ```
  Similar to previous API description.

* Follow someone:
  * POST [http://localhost:3000/follow](http://localhost:3000/follow)
  ```json
  {
    "myID": "1",
    "followingID": "8"
  }
  ```
  
## API Documentation and Testing in Postman:

[Twitter-API](https://documenter.getpostman.com/view/2913103/Uz5NiYDe)