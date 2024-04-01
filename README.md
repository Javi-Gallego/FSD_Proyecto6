# Welcome to

<center><img src="/src/img/readme/logo.png"/></center>

This is the fourth project in the Full Stack Developer Bootcamp at GeeksHubs


  ## Content 📝
  <ol>
    <li><a href="#about-the-project">About the project</a></li>
    <li><a href="#stack">Stack</a></li>
    <li><a href="#deploy-🚀">Deploy</a></li>
    <li><a href="#local-installation">Installation</a></li>
    <li><a href="#api-information">API information</a></li>
    <li><a href="#db-diagram">DB diagram</a></li>
    <li><a href="#db-relations">DB relations</a></li>
    <li><a href="#endpoints">Endpoints</a></li>
    <li><a href="#problems-solutions">Problems solutions</a></li>
    <li><a href="#future-features">Future features</a></li>
    <li><a href="#development">Development</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>


## About the project

Create a web of a tattoo studio. This project includes only the frontend part in which I used React. It is part of a Fullstack project in which I made a functional API connected to a MySQL database (you can see it here).

In the landing page you can see links to the services and the catalog that the studio has and you can register and login.

If you are logged as a normal user you can edit your profile and see and create your appointments.

If you are logged as a super_admin you can see, create, update and delete the services that the shop can offer.

The super admin role can create new services, add images to the catalog, add new tatoo artists and change roles to users if needed.

As super_admin you can also see all pending appointments of the shop and you can search for any client using different filters: name, email and rol(if you want to filter for user or tattoo_artist)


## Stack

<div align="center">
<a href="">
    <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
</a>
<a href="https://www.expressjs.com/">
    <img src= "https://img.shields.io/badge/express.js-%23c04d59.svg?style=for-the-badge&logo=express&logoColor=white" alt="Express JS"/>
</a>
<a href="">
    <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL" />
</a>
<a href="https://nodejs.org/es/">
    <img src= "https://img.shields.io/badge/node.js-026E00?style=for-the-badge&logo=node.js&logoColor=white" alt="Node JS"/>
</a>
<a href="https://developer.mozilla.org/es/docs/Web/JavaScript">
    <img src= "https://img.shields.io/badge/javascipt-EFD81D?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript"/>
</a>
<a href="">
<img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" />
</a>
<a href="">
    <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white" alt="JWT" />
</a>
<a href="">
    <img src="https://img.shields.io/badge/bcrypt-3178C6?style=for-the-badge&" alt="TypeScript" />
</a>
<a href="">
    <img src="https://img.shields.io/badge/thunder-cc6636?style=for-the-badge" alt="TypeScript" />
</a>
 </div>

## Deploy 🚀
<div align="center">
    <a href="https://tattooshopfsdjavier-dev-rkdt.2.ie-1.fl0.io"><strong>https://tattooshopfsdjavier-dev-rkdt.2.ie-1.fl0.io</strong></a>🚀🚀🚀
</div>


## Local installation

1. If you don't have MySQL installed on you computer, you can install Docker and execute the above command on your Powershell to create a MySQL container
` $ docker run --name nombre-contenedor -p 3311:3306 -e MYSQL_ROOT_PASSWORD=1234 -d mysql `
2. Clone the repository
` $ git clone https://github.com/Javi-Gallego/FSD_Proyecto4.git `
3. Install dependencies
` $ npm install `
4. Run server
` $ npm run dev `
5. Run migrations on DB
` $ npm run run-migrations `
6. Mock DB with seeders
` $ npm run seeds `

## API information
<details>
<summary>Work in local</summary>
The repository has a .env_local_sample. You have to change its name to .env to work properly

In the HTTP directory there is a file named tattoo_shop_local.json, you can open it with 'Thunder Client' to have all the endpoints of the API.

For the endpoints examples below I will put the deployed url. In the tattoo_shop_local.json you have the url with your localhost.

If you will use the API in local, you need a connection to a DB and put the credentials in the .env as needed. These credentials are the user, the password for that user, the port to connect to the DB and the name of the database.
</details>

<details>
<summary>Work with deployed server</summary>
The repository has a .env_deploy_sample. You have to change its name to .env to work properly.

In the HTTP directory theres a file named tattoo_shop_deployed.json, you can open it with 'Thunder Client' to have all the endpoints of the API.
</details>

<details>
<summary>Authentication</summary>
When an endpoint needs authentication you must put the token given to you when you login in the Bearer Token field in "Auth". In the login endpoint I will put the super_admin email and password.

 !['imagen-auth'](./img/AuthenticationToken.JPG)

 For a fast comprehension we will use icons to show what is needed to see the endopoints:
 :angel: You must be logged as super_admin
 :man: You must be logged
 :earth_africa: This endpoint is global and can be viewed by everybody
 :lock: You can enter this endpoint if you are authenticated. If you are a user you can only search, update or retrieve your own things, if you are a super_admin you can change or retrieve all the records of the database.
</details>

## DB diagram
!['imagen-db'](./img/DB_relations.JPG)

## DB relations
    
    - "Roles" to "Users": One-to-many relationship
    where:
      - One role can have many users.

    - "Users" to "Appointments": One-to-many relationship
    where:
      - One user can have many appointments.

    - "Services" to "Appointments": One-to-many relationship
    where:
      - One service can have many appointments.

    - "Catalogs" to "Appointments": One-to-many relationship
    where:
      - One catalog can have many appointments.

## Endpoints

<details>
<summary>Endpoints</summary>


- AUTH
    - REGISTER :earth_africa:

            POST https://tattooshopfsdjavier-dev-rkdt.2.ie-1.fl0.io/api/auth/register
        body:
        ``` js
            {
                "first_name": "Alberto",
                "last_name": "Martínez",
                "email": "alberto@gmail.com",
                "password": "123456"
            }
        ```

    - LOGIN :earth_africa:

            POST https://tattooshopfsdjavier-dev-rkdt.2.ie-1.fl0.io/api/auth/login 
        body:
        ``` js
            {
                "email": "super_admin@gmail.com",
                "password": "123456"
            }
        ```
        This will be needed to obtain a token with super_admin credentials
        body:
        ``` js
            {
                "email": "javi@gmail.com",
                "password": "123456"
            }
        ```
        This will be needed to obtain a token with user credentials
- USERS
    - PROFILE :lock:

            GET https://tattooshopfsdjavier-dev-rkdt.2.ie-1.fl0.io/api/users/profile

        You must be logged in and you will see the profile of the user authenticated.

    - UPDATE PROFILE :lock:

            PUT https://tattooshopfsdjavier-dev-rkdt.2.ie-1.fl0.io/api/users?limit=10&page=1
            body:
        ``` js
            {
                { 
                    "email": "email",
                    "firstName": "firstname",
                    "lastName": "lastname",
                    "currentPassw": "pass",
                    "newPass": "newpass"
                }
            }
        ```
        You must be logged because it will show the profile based on the id that is encrypted in the token. You can change your first name, last name, email or your password. If you want to change your password you must put your current password and the new password. It has same validations as in the registration.
        Fields that want to be updated must be named in the body as in the example.
    - GET USERS :angel:

            GET https://tattooshopfsdjavier-dev-rkdt.2.ie-1.fl0.io/api/users?limit=10&page=1
            body:
        ``` js
            {
                { 
                    "email": "email",
                    "name": "firstname",
                    "lastname": "lastname",
                    "role": "rolename"
                }
            }
        ```
        This endponint has the query params "limit" and "page". "limit" is the number of records shown each time. If there are more registres than the limit they are shown in next pages.
        If you don't have any value in the body it will show every user in the database but you can put some entries that will work as filters, they are optional to put and the value must be exactly the same as in the database.
        You must be logged as super_admin to retrieve users.
    - UPDATE USER ROLE :angel:

            PUT https://tattooshopfsdjavier-dev-rkdt.2.ie-1.fl0.io/api/users/13/role
        body:
        ``` js
            {
                "userRole": 3
            }
        ```
        You must be logged as super_admin. In the url we pass the user id as a parameter and we should send the new role id of that user in the body. 
        1 -> super_admin
        2 -> admin
        3 -> user
        4 -> tattoo_artist
        5 -> worker
    - DELETE USER :angel:

            DELETE https://tattooshopfsdjavier-dev-rkdt.2.ie-1.fl0.io/api/users
        body:
        ``` js
            {
                "id": 10
            }
        ```
        You must be logged as super_admin. This time you must send the user id you want to delete in the body. 
- SERVICES
    - GET SERVICES :earth_africa:

            GET https://tattooshopfsdjavier-dev-rkdt.2.ie-1.fl0.io/api/services

        Everybody can see all the services provided by the shop. No authentication needed.
    - CREATE SERVICES :angel: 

            POST  https://tattooshopfsdjavier-dev-rkdt.2.ie-1.fl0.io/api/services
            body:
        ``` js
            {
                "serviceName": "name",
                "description": "description"    
            }
        ```
        You must be logged as super_admin to create a service. The body must have a "serviceName" and a "description" field.
    - UPDATE SERVICES :angel: 

            PUT  https://tattooshopfsdjavier-dev-rkdt.2.ie-1.fl0.io/api/services/:id
            body:
        ``` js
            {
                "serviceName": "name",
                "description": "description"
            }
        ```
        You must be logged as super_admin to update a service. The body must have a "serviceName" a "description" or both fields. The id of the updated service must be send via parameter in the url.
    - DELETE SERVICE :angel: 

            DELETE  https://tattooshopfsdjavier-dev-rkdt.2.ie-1.fl0.io/api/services
            body:
        ``` js
            {
                { 
                    "id": 6,
                }
            }
        ```
        You must be logged as super_admin to delete a service. The body must have the id of the service to be deleted

- CATALOG
    - GET CATALOG :earth_africa:

            GET https://tattooshopfsdjavier-dev-rkdt.2.ie-1.fl0.io/api/catalog

        Everybody can see all the tattoos int the catalog of the shop.

    - CREATE TATTOO

            POST  https://tattooshopfsdjavier-dev-rkdt.2.ie-1.fl0.io/api/catalog
            body:
        ``` js
            {
                "tattooName": "Rhino",
                "urlImage": "./img/rhino.jpg"
            }
        ```
        You must be logged as super_admin to create a tattoo. The body must have a "tattooName" and a "urlImage" field.
    - UPDATE TATTOO :angel: 

            PUT  https://tattooshopfsdjavier-dev-rkdt.2.ie-1.fl0.io/api/catalog/:id
            body:
        ``` js
            {
                "tattooName": "Rrrrrhino",
                "urlImage": "./img/rinrin.jpg"
            }
        ```
        You must be logged as super_admin to update a tattoo. The body must have a "serviceName" a "description" or both fields. The id of the updated tattoo must be send via parameter in the url.
    - DELETE TATTOO :angel: 

            DELETE  https://tattooshopfsdjavier-dev-rkdt.2.ie-1.fl0.io/api/catalog/:id

        You must be logged as super_admin to delete a tattoo. The id must be passed as parameter in the url

- APPOINTMENTS
    - GET APPOINTMENTS :lock:

            GET https://tattooshopfsdjavier-dev-rkdt.2.ie-1.fl0.io/api/appointments
            query examples:
        ``` js
            {
                ?id=5&serviceId=2&artistId=11&catalogId=2
            }
        ```

        Authentication needed. If you are a normal user you can only retrieve your appointments. Only appointmets posterior to the actual date are shown. A Filter can be applied as query params and the values that can be checked are id, serviceId, artistId and catalogId, all the fields are optionals.

    - CREATE APPOINTMENT :man:
    
            POST  https://tattooshopfsdjavier-dev-rkdt.2.ie-1.fl0.io/api/appointments
            body:
        ``` js
            {
                "serviceId": 5,
                "date": "2024-03-26 17:00:00"
            }
        ```
        You must be logged to create an appointment. In the body you must send all the fields needed. Only serviceId = 2 has the option of catalogId, and only serviceId 1, 2 and 3 have the option of artistId.
    - UPDATE APPOINTMENT :lock:

            PUT  https://tattooshopfsdjavier-dev-rkdt.2.ie-1.fl0.io/api/appointments:id
            body:
        ``` js
            {
                "serviceId": 2,
                "artistId": 11,
                "catalogId": 3,
                "date": "2024-03-17 11:00:00"
            }
        ```
        You must be logged to update an appointment. The id of the appointment must be passed as parameter in the url, in the body you can send all the fields you want to change. Only serviceId = 2 has the option of catalogId, and only serviceId 1, 2 and 3 have the option of artistId. If you are a normal user you can change only your own appointments. If you are logged as super admin, you can change every appointment of the DB.
    - DELETE APPOINTMENT :angel: 

            DELETE  https://tattooshopfsdjavier-dev-rkdt.2.ie-1.fl0.io/api/catalog/:id

        You must be logged as super_admin to delete a tattoo. The id must be passed as parameter in the url
</details>

## Problems solutions
I could not erase fields that were already written.

If we update an appointment of a service that has tattoo artist and a tattoo image from the catalog and change that appointment to do a piercing, the obvious thing is to change the service_id and delete the artist_id and tattoo_id that are no longer needed, but I could not do that.

I thought of an internal convention to change the artist_id to one named "worker" that points to a king of default worker and to a tattoo_id that points to a tattoo named "no tattoo selected".

## Future features
[ ] Tattoo artists can also make and update appointments on their own.
[ ] Add reviews to the artists based on user experiences
[ ] Add a rating system to the catalog and filter or order based on this rating.
[ ] Maybe, to buy a piercing you do not need to make an appointment, just go to the shop. So you can see the service but cannot make an appointment with that service.
[ ] Add piercings images to the catalog.
[ ] Add role for piercing artists if they are different from the tattoo ones, add another role for the artists than can do both.
[ ] Add a frontend so the users can interact with the API.

## Development:

``` js
 const developer = "Javier Gallego";

 console.log("Desarrollado por: " + developer);
```  

## Contact
<div align="center">
<a href = "mailto:galgar@gmail.com"><img src="https://img.shields.io/badge/Gmail-C6362C?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
<a href="https://www.linkedin.com/in/javier-gallego-dev"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white"></a>
<a href="https://github.com/Javi-Gallego"><img src="https://img.shields.io/badge/github-24292F?style=for-the-badge&logo=github&logoColor=white" target="_blank"></a>
</div>