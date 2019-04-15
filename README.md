# Workout Stats

Workout Stats is a web application that helps you track and analyze your workout progress over time. Simply create an account, record you workouts, and progress graphs will be generated for you automatically.

> Workout Stats is a demo application built in my free time. It's a fully functional application, but it's primarily just a sandbox for me to demonstrate/improve my web development skillset. This project is built on a Rails backend and React frontend.

## Code Samples

### JWT Authentication
User authentication is done using JSON web tokens. This is implemented on the Rails backend using the [knock](https://github.com/nsarno/knock) gem. I created an AuthService class in JavaScript so the frontend can easily manage the necessary authentication actions. This service handles things such as:

* Authentication API requests
* Logging in/out
* Setting/Getting the token from storage
* Decoding the token
* Checking the token's expiration date

![AuthService](https://i.imgur.com/IgjN2to.png)

> Full AuthService file available [here](https://github.com/Code47X/WO-stats/blob/master/app/javascript/components/AuthService.jsx).

## Work In Progress

The document is incomplete and will be updated as I work.
