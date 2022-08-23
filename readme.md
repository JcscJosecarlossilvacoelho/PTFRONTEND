# PORTUGAL API 🇵🇹

### _Let´s transform Portugal into an API_

It is an Open Source project built by a Portuguese for the Portuguese programming community. Easy to use and ready to become the biggest public api.

# REST API

## `Districts`
### Get list of districts

#### Request

`GET /districts?take=100&skip=0`

    Parameters - Take:number / skip:number

### Get list of districts filter

#### Request

`GET /districts/filter?name=Porto`

     Parameters - name:string 

### Get list of districts by id

### Request

`GET /districts/10`

    Parameters - id:number 
    
    
## `Counties`
### Get list of counties

#### Request

`GET /countys?take=100&skip=0`

    Parameters - Take:number / skip:number

### Get list of counties filtered

#### Request

`GET /countys/filter?name=Paredes`

     Parameters - name:string 

### Get counties by id

### Request

`GET /countys/10`

    Parameters - id:number 
    
### Get counties by district id

### Request

`GET /countys/byDistrict/10`

    Parameters - id:number 


   
## `Counties`
### Get list of counties

#### Request

`GET /countys?take=100&skip=0`

    Parameters - Take:number / skip:number

### Get list of counties filtered

#### Request

`GET /countys/filter?name=Paredes`

     Parameters - name:string 

### Get counties by id

### Request

`GET /countys/10`

    Parameters - id:number 
    
### Get counties by district id

### Request

`GET /countys/byDistrict/10`

    Parameters - id:number 

