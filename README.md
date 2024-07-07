

# https://sites.google.com/view/ayokoladeerinlesportfolio/projects/backend-frontend-integration-blockchain-explorer
Name:Ayokolade Emmanuel Erinle


How to run:

BACKEND#1 (blocks)
- cd backend
- cd blocks-api
- sudo npm install
- sudo npm start
- can use postman to test end points http://localhost:3000/blocks/addresses and http://localhost:3000/blocks/details/0xafa57bd80dfef746aaa7bea1e9e024e89ab1056e 

BACKEND#2 (transactions) **SEPERATE TERMINAL
- cd backend
- cd transactions-api
- sudo npm install
- sudo npm start
- can use postman to test end points http://localhost:3001/transactions/history and http://localhost:3001/transactions/send

ADDED IMAGES FOR CONVENIENCE

UI **SEPERATE TERMINAL
- cd ui
- sudo npm install
- sudo npm run start
- go to localhost and you will be able to see the Ethereum Block
- Had to alter addressSelector to pass value instead of event cause of error I could not fix.

