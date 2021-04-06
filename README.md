---
page_type: sample
languages:
  - javascript
products:
  - nodejs
  - azure-active-directory  
description: "This is a sample API demonstrating the CRUD oprations for a ToDo List."
---

## TodoList API:
TodoList is set of APIs to create a checklist for you. 

## Scenario:
- This api uses delegated permissions and hence an access-token issued to an user needs to be used here. 
- The access token can be requested from AAD using Auth-Code Grant Flow.
- The Access Token is used as a bearer token to authenticate the user when calling this web API.

## Prerequisites

- [Node.js](https://nodejs.org/en/download/) must be installed to run this sample.
- A modern web browser. This sample uses **ES6** conventions and will not run on **Internet Explorer**.
- [Visual Studio Code](https://code.visualstudio.com/download) is recommended for running and editing this sample.
- [VS Code Azure Tools](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-node-azure-pack) extension is recommended for interacting with Azure through VS Code Interface.

# If you plan to run this api on localhost:

| File/folder                        | Description                                                                           |
|------------------------------------|---------------------------------------------------------------------------------------|
| `/config/app_config.json`          | Contains configuration parameters for the sample.                                     |
| `/config/config.env`               | Contains Mongo DB connection string and the PORT number. Create this file if missing  |
| `app.js`                           | Main application logic resides here.                                                  |


## Note:
:warning:  This api uses MongoDB Atlas to store the ToDo List items. MongoDB Atlas provides an easy way to host and manage your data in the cloud. Please refer to the following [URL](https://docs.atlas.mongodb.com/getting-started/) for more details on creating an Atlas cluster, connecting to it, inserting data, and querying data. 

## Running the sample

```console
    cd nodejs-todo-api
    npm install
    npm run start-dev
```

## Available Scopes:
`access_as_user` 

## Available Methods and Endpoints:

| METHOD    |    ENDPOINTS                          |    DESCRIPTION
------------|---------------------------------------|--------------------------------------------------------------------------------|
| `GET` 	|	`/user`					|   Shows the details of the user who is trying to access this api.  |
| `GET` 	|	`/items`				|	Shows the welcome message with username.                     |
| `GET` 	|	`/items/getitems`  			|   Lists all todo-list items created by the user.                   |                
| `GET`		|	`/items/<title>`			|	Lists the item with specific title.                          |
| `POST` 	|	`/items/additem`			|	Adds todo-list item.                                         |
| `DELETE`	|	`/items/deleteitem/<title>`		|   Deletes the specific item.                                       |
| `PATCH`	|	`/items/upadtetitle/<title>`		|	Updates the title.                                           |
| `PATCH`	|	`/items/upadtedescription/<title>`	|   Updates the description.                                         |
| `PATCH`	|	`/items/upadteisComplete/<title>`	|   Sets the isComplete status to either true or false.              |

## Examples:

**getItems:**
```
GET https://todolist-api.azurewebsites.net/items/getitems
Header:
Content-Type: application/json
Authorization: bearer <access-token>
```

**addItem:**
```
POST https://todolist-api.azurewebsites.net/items/additem
Header:
Content-Type: application/json
Authorization: bearer <access-token>

Body:
{
	"title": "Meeting with John",
	"description": "Need to meet John today post lunch"
}
```

**updateIsComplete:**
```
PATCH https://todolist-api.azurewebsites.net/items/updateiscomplete/<title-of-todo-item>
Header:
Content-Type: application/json
Authorization: bearer <access-token>

Body:
{
	"isComplete": "true"
}

```
=======
---
page_type: sample
languages:
  - javascript
products:
  - nodejs
  - azure-active-directory  
description: "This is a sample API demonstrating the CRUD oprations for a ToDo List."
---

## TodoList API:
TodoList is set of APIs to create a checklist for you. 

## Scenario:
- This api uses delegated permissions and hence an access-token issued to an user needs to be used here. 
- The access token can be requested from AAD using Auth-Code Grant Flow.
- The Access Token is used as a bearer token to authenticate the user when calling this web API.

## Prerequisites

- [Node.js](https://nodejs.org/en/download/) must be installed to run this sample.
- A modern web browser. This sample uses **ES6** conventions and will not run on **Internet Explorer**.
- [Visual Studio Code](https://code.visualstudio.com/download) is recommended for running and editing this sample.
- [VS Code Azure Tools](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-node-azure-pack) extension is recommended for interacting with Azure through VS Code Interface.

# If you plan to run this api on localhost:

| File/folder                        | Description                                               |
|------------------------------------|-----------------------------------------------------------|
| `/config/app_config.json`          | Contains configuration parameters for the sample.         |
| `/config/config.env`               | Contains Mongo DB connection string and the PORT number.  |
| `app.js`                           | Main application logic resides here.                      |


:warning: ## Note: 
This api uses MongoDB Atlas to store the ToDo List items. MongoDB Atlas provides an easy way to host and manage your data in the cloud. Please refer to the following [URL](https://docs.atlas.mongodb.com/getting-started/) for more details on creating an Atlas cluster, connecting to it, inserting data, and querying data. 

## Running the sample

```console
    cd nodejs-todo-api
    npm install
    npm run start-dev
```

## Available Scopes:
`access_as_user`

## Available Methods and Endpoints:

| METHOD    |    ENDPOINTS                          |    DESCRIPTION
------------|---------------------------------------|--------------------------------------------------------------------|
| `GET` 	|	`/user`								|   Shows the details of the user who is trying to access this api.  |
| `GET` 	|	`/items`							|	Shows the welcome message with username.                         |
| `GET` 	|	`/items/getitems`  					|   Lists all todo-list items created by the user.                   |                
| `GET`		|	`/items/<title>`					|	Lists the item with specific title.                              |
| `POST` 	|	`/items/additem`					|	Adds todo-list item.                                             |
| `DELETE`	|	`/items/deleteitem/<title>`			|   Deletes the specific item.                                       |
| `PATCH`	|	`/items/upadtetitle/<title>`		|	Updates the title.                                               |
| `PATCH`	|	`/items/upadtedescription/<title>`	|   Updates the description.                                         |
| `PATCH`	|	`/items/upadteisComplete/<title>`	|   Sets the isComplete status to either true or false.              |

## Examples:

**getItems:**
```
GET https://todolist-api.azurewebsites.net/items/getitems
Header:
Content-Type: application/json
Authorization: bearer <access-token>
```

**addItem:**
```
POST https://todolist-api.azurewebsites.net/items/additem
Header:
Content-Type: application/json
Authorization: bearer <access-token>

Body:
{
	"title": "Meeting with John",
	"description": "Need to meet John today post lunch"
}
```

**updateIsComplete:**
```
PATCH https://todolist-api.azurewebsites.net/items/updateiscomplete/<title-of-todo-item>
Header:
Content-Type: application/json
Authorization: bearer <access-token>

Body:
{
	"isComplete": "true"
}

```
>>>>>>> 0eae006acc126b063898f1cc1541e464ae1219cb
