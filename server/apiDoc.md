# API Documentation

## Endpoints:

List of available endpoints:

- `POST /register`
- `POST /login`
- `POST /category`
- `GET /caterogy`
- `GET /category/:id`
- `DELETE /category/:id`
- `POST /todo`
- `GET /todo`
- `GET /todo/:id`
- `PATCH /todo/:id`
- `DELETE /todo/:id`

&nbsp;

## 1. POST /register

Request :

```json
{
  "name": "ebel",
  "phoneNumber": "+626666666",
  "email": "ebel@cobra.com",
  "username": "cobra",
  "password": "ebelcobra123"
}
```

_Response (201- Created)_

```json
{
  "message": "Succes create account"
}
```

&nbsp;

## 2. POST /login

Request :

```json
{
  "username": "cobra",
  "password": "ebelcobra123"
}
```

_Response (200 - OK)_

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZmUxYWYxNzE5M2IwOGRkMTJlMzkyYiIsImlhdCI6MTY3NzU5NzQzN30.TmokTs8_AqpTqraYjR_ojDUMc_BPdfcUEuu57rv86ng"
}
```

&nbsp;

## 3. POST /category

Request:

```json
{
  "name": "Work"
}
```

Headers:

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZmUxYWYxNzE5M2IwOGRkMTJlMzkyYiIsImlhdCI6MTY3NzU5NzQzN30.TmokTs8_AqpTqraYjR_ojDUMc_BPdfcUEuu57rv86ng"
}
```

_Response (201- Created)_

```json
{
  "message": "Succes create category"
}
```

&nbsp;

## 4. GET /category

Headers:

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZmUxYWYxNzE5M2IwOGRkMTJlMzkyYiIsImlhdCI6MTY3NzU5NzQzN30.TmokTs8_AqpTqraYjR_ojDUMc_BPdfcUEuu57rv86ng"
}
```

_Response (200 - OK)_

```json
[
  {
    "_id": "63fe1b307193b08dd12e3931",
    "name": "Sport",
    "color": "#6880d3",
    "user": "63fe1af17193b08dd12e392b",
    "__v": 0
  },
  {
    "_id": "63fe1c714cc8c55cbe8e872d",
    "name": "Work",
    "color": "#709a9b",
    "user": "63fe1af17193b08dd12e392b",
    "__v": 0
  },
  {
    "_id": "63fe2ce94cc8c55cbe8e8a23",
    "name": "Home",
    "color": "#1d8270",
    "user": "63fe1af17193b08dd12e392b",
    "__v": 0
  },
  {
    "_id": "63fe3967ece2cc2a584ebf2e",
    "name": "Study",
    "color": "#fca3f7",
    "user": "63fe1af17193b08dd12e392b",
    "__v": 0
  }
]
```

&nbsp;

## 5. GET /category/:id

Params:

```json
{
  "id": "63fe3967ece2cc2a584ebf2e"
}
```

Headers:

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZmUxYWYxNzE5M2IwOGRkMTJlMzkyYiIsImlhdCI6MTY3NzU5NzQzN30.TmokTs8_AqpTqraYjR_ojDUMc_BPdfcUEuu57rv86ng"
}
```

_Response (200 - OK)_

```json
{
  "_id": "63fe3967ece2cc2a584ebf2e",
  "name": "Study",
  "color": "#fca3f7",
  "user": "63fe1af17193b08dd12e392b",
  "__v": 0
}
```

&nbsp;

## 6. DELETE /category/:id

Params:

```json
{
  "id": "63fe3967ece2cc2a584ebf2e"
}
```

Headers:

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZmUxYWYxNzE5M2IwOGRkMTJlMzkyYiIsImlhdCI6MTY3NzU5NzQzN30.TmokTs8_AqpTqraYjR_ojDUMc_BPdfcUEuu57rv86ng"
}
```

_Response (200 - OK)_

```json
{
  "message": "Succes delete category"
}
```

&nbsp;

## 7. POST /todo

Request:

```json
{
  "name": "Go to gym",
  "category": "63fe1b307193b08dd12e3931"
}
```

Headers:

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZmUxYWYxNzE5M2IwOGRkMTJlMzkyYiIsImlhdCI6MTY3NzU5NzQzN30.TmokTs8_AqpTqraYjR_ojDUMc_BPdfcUEuu57rv86ng"
}
```

_Response (201 - Created)_

```json
{
  "message": "Succes create todo"
}
```

&nbsp;

## 8. GET /todo

Headers:

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZmUxYWYxNzE5M2IwOGRkMTJlMzkyYiIsImlhdCI6MTY3NzU5NzQzN30.TmokTs8_AqpTqraYjR_ojDUMc_BPdfcUEuu57rv86ng"
}
```

_Response (200 - OK)_

```json
[
  {
    "_id": "63fe1c154cc8c55cbe8e871d",
    "name": "olahraga",
    "status": true,
    "user": "63fe1af17193b08dd12e392b",
    "category": {
      "_id": "63fe1b307193b08dd12e3931",
      "name": "Sport",
      "color": "#6880d3",
      "user": "63fe1af17193b08dd12e392b",
      "__v": 0
    },
    "__v": 0
  },
  {
    "_id": "63fe1c7e4cc8c55cbe8e8732",
    "name": "kejar deadline",
    "status": false,
    "user": "63fe1af17193b08dd12e392b",
    "category": {
      "_id": "63fe1c714cc8c55cbe8e872d",
      "name": "Work",
      "color": "#709a9b",
      "user": "63fe1af17193b08dd12e392b",
      "__v": 0
    },
    "__v": 0
  },
  {
    "_id": "63fe3a33ece2cc2a584ebf4f",
    "name": "Belajar Coding",
    "status": false,
    "user": "63fe1af17193b08dd12e392b",
    "category": {
      "_id": "63fe3967ece2cc2a584ebf2e",
      "name": "Study",
      "color": "#fca3f7",
      "user": "63fe1af17193b08dd12e392b",
      "__v": 0
    },
    "__v": 0
  },
  {
    "_id": "63fedcb7d616890d31bfdb27",
    "name": "Bersih bersih",
    "status": false,
    "user": "63fe1af17193b08dd12e392b",
    "category": {
      "_id": "63fe2ce94cc8c55cbe8e8a23",
      "name": "Home",
      "color": "#1d8270",
      "user": "63fe1af17193b08dd12e392b",
      "__v": 0
    },
    "__v": 0
  }
]
```

&nbsp;

## 9. GET /todo/:id

Params:

```json
{
  "id": "63fedcb7d616890d31bfdb27"
}
```

Headers:

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZmUxYWYxNzE5M2IwOGRkMTJlMzkyYiIsImlhdCI6MTY3NzU5NzQzN30.TmokTs8_AqpTqraYjR_ojDUMc_BPdfcUEuu57rv86ng"
}
```

_Response (200 - OK)_

```json
{
  "_id": "63fedcb7d616890d31bfdb27",
  "name": "Bersih bersih",
  "status": false,
  "user": "63fe1af17193b08dd12e392b",
  "category": {
    "_id": "63fe2ce94cc8c55cbe8e8a23",
    "name": "Home",
    "color": "#1d8270",
    "user": "63fe1af17193b08dd12e392b",
    "__v": 0
  },
  "__v": 0
}
```
&nbsp;

## 10. PATCH /todo/:id
Params:

```json
{
  "id": "63fedcb7d616890d31bfdb27"
}
```

Headers:

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZmUxYWYxNzE5M2IwOGRkMTJlMzkyYiIsImlhdCI6MTY3NzU5NzQzN30.TmokTs8_AqpTqraYjR_ojDUMc_BPdfcUEuu57rv86ng"
}
```
_Response (201 - Created)_
```json
{
    "message": "Succes update todo"
}
```
&nbsp;

## 11. DELETE /todo/:id
Params:

```json
{
  "id": "63fedcb7d616890d31bfdb27"
}
```

Headers:

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZmUxYWYxNzE5M2IwOGRkMTJlMzkyYiIsImlhdCI6MTY3NzU5NzQzN30.TmokTs8_AqpTqraYjR_ojDUMc_BPdfcUEuu57rv86ng"
}
```
_Response (200 - OK)_

```json
{
    "message": "Succes delete todo"
}
```

## Global Error
_Response (500 - Internal server error)_
```json
{
    "message": "Internal server error"
}
```