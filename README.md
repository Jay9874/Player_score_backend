# Testing Live
- Use the following URL to test the API
- `https://server-98g7.onrender.com/players`
#### Note: The above URL is hosted on [Render](https://render.com/)
     Due to inactivity, serve may take some time to respond. Please be patient.


# Setting Up Server Locally
1. ## Prerequisites
- Install [Node.js](https://nodejs.org/en/download/)
- Install [Git](https://git-scm.com/downloads)

2. ## Clone the repository
- Move to preferred directory
- Clone the repository `git clone https://github.com/Jay9874/Player_score_backend.git`
- `cd Player_score_backend`

3. ## Setting up virtual environment
- Create a clustor on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- Create a `touch .env` file in the root directory
- Add the following to the `.env` file
```
    DB_URI = [Your MongoDB Atlas URI]
```
- Install dependencies `npm install`
- Run the server `npm run dev`
### You will get a message in the terminal saying `Database connected!! Server running on port 5000`

# Testing the API

## Using Postman
- Install [Postman](https://www.postman.com/downloads/)
- Open Postman
- Create a new request
- Enter the URL `http://localhost:5000/players`

## POST Request to _create Player_
- Select `POST` from the dropdown
- Select `Body` tab
- Select `raw` and `JSON` from the dropdown
- Enter the following in the body
```
{
    "ID: "Your unique id",
    "name": "Player 1",
    "country_code": "IN",
    "score": 88
}
```
- Click on `Send`
- You will get a response with the player details

## GET Request to _get all Players by score in decreading order_
- Select `GET` from the dropdown
- Enter the following in the URL `http://localhost:5000/players`
- Click on `Send`
- You will get a response with all the players details

## DELETE Request to _delete Player by ID_
- Select `DELETE` from the dropdown
- Enter the following in the URL `http://localhost:5000/players/:id`
- Click on `Send`
- You will get a response with the deleted player details

## PUT Request to _update Player by ID_
- Select `PUT` from the dropdown
- Enter the following in the URL `http://localhost:5000/players/:id`
- Select `Body` tab
- Select `raw` and `JSON` from the dropdown
- Enter the following in the body
```
{
    "name": "Playe 2",
    "score": 80
}
```
- Click on `Send`
- Send a GET request to see updated players.

## GET Request to _get a random player_
- Select `GET` from the dropdown
- Enter the following in the URL `http://localhost:5000/players/random`
- Click on `Send`
- You will get a response with random player details 

## GET Request to _get a player by rank comparing score_
- Select `GET` from the dropdown
- Enter the following in the URL `http://localhost:5000/players/rank/:val`
- Click on `Send`
- You will get a response with the player detail at that rank or an error message if the rank is not available
