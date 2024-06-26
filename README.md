# Welcome to

<center><img src="/src/img/readme/logo.png"/></center>

This is the sixth project in the Full Stack Developer Bootcamp at GeeksHubs


  ## Content 📝
  <ol>
    <li><a href="#about-the-project">About the project</a></li>
    <li><a href="#stack">Stack</a></li>
    <li><a href="#deploy-🚀">Deploy</a></li>
    <li><a href="#local-installation">Installation</a></li>
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
    <img src="https://img.shields.io/badge/React-000000?style=for-the-badge&logo=react&logoColor=White" alt="React" />
</a>
<a href="">
    <img src="https://img.shields.io/badge/HTML5-0f375d?style=for-the-badge&logo=html5" alt="HTML5" />
</a>
<a href="">
    <img src="https://img.shields.io/badge/css3-cc6636?style=for-the-badge&logo=css3" alt="CSS3" />
</a>
<a href="https://developer.mozilla.org/es/docs/Web/JavaScript">
    <img src= "https://img.shields.io/badge/javascipt-EFD81D?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript"/>
</a>
<a href="">
    <img src="https://img.shields.io/badge/mantine-228cef?style=for-the-badge&logo=mantine&logoColor=white" alt="JWT" />
</a>
<a href="">
    <img src="https://img.shields.io/badge/JWT-287606?style=for-the-badge&logo=jsonwebtokens&logoColor=white" alt="JWT" />
</a>
 </div>

## Deploy 🚀
<div align="center">
    <a href="https://master.d2taes3vht5dyt.amplifyapp.com/"><strong>https://master.d2taes3vht5dyt.amplifyapp.com/</strong></a>🚀🚀🚀
</div>


## Local installation

1. Clone the repository
` $ git clone https://github.com/Javi-Gallego/FSD_Proyecto6.git `
2. Install dependencies
` $ npm install `
3. Run React project
` $ npm run dev `

Unfortunately, the server is hosted on a free site and it is very likely that is not online the moment you want to see this project. In this link you have the repository (an Express made server working with a MySQL database) and the instructions to install it locally:
https://github.com/Javi-Gallego/FSD_Proyecto4.git

If you need to run the server locally, you will need to go to /src/services/apiCalls.js and put the right urlRoot.
<center><img src="/src/img/readme/rooturl.JPG"></center>

## Pages

To log as a super_admin 
``` js
    "email": "super_admin@gmail.com",
    "password": "Aa123456"
```
To log as a normal user (or you can register your own)
``` js
    "email": "silvia@gmail.com",
    "password": "Aa123456"
```

:earth_africa: 
<details>
<summary>Non registered users </summary>

- CATALOG :earth_africa:

<center><img src="/src/img/readme/catalog.JPG"></center>

These are some samples of the catalog that you can choose if you like it. All these tattoos can be choosen if the user creates an appointment for the service "Tattoo from catalog".

- SERVICES :earth_africa:

<center><img src="/src/img/readme/services.JPG"></center>

These are the services that the tattoo studio offers, with a little explanation and an image.

- REGISTER :earth_africa:

<center><img src="/src/img/readme/register.JPG"></center>

As you are writing in the inputs you can see if the field has an error and is not valid

- LOGIN :earth_africa:

<center><img src="/src/img/readme/login.JPG"></center> 


To log as a super_admin 
``` js
    "email": "super_admin@gmail.com",
    "password": "Aa123456"
```
To log as a normal user (or you can register your own)
``` js
    "email": "silvia@gmail.com",
    "password": "Aa123456"
```
</details>
</br>

:lock:
<details>
<summary>Registered users</summary>

- HEADER 

<center><img src="/src/img/readme/usernavbar.JPG"></center> 

Detail of de header when a user is logged. You see the user name's to go to their profile, the appointment section and the logout button.

- PROFILE

<center><img src="/src/img/readme/profile.JPG"></center> 

A detailed view of the user data. You can update any field at any moment. If you want to change password you will be switched to another page.

<center><img src="/src/img/readme/changepass.JPG"></center>

- APPOINTMENTS

<center><img src="/src/img/readme/appointments.JPG"></center>

Here you can your own appointments, if you click in each one you can see a detailed view and the option to delete the appointment.

If you go to Create appointment you will see a new view.

<center><img src="/src/img/readme/createappointment.JPG"></center>

</details>
</br>

:angel:
<details>
<summary>Super admin</summary>

- CATALOG

<center><img src="/src/img/readme/superservices.JPG"></center>

The catalog page from the super admin changes and now you can edit or delete appointment and can create a new one.

- APPOINTMENTS

<center><img src="/src/img/readme/superappointments.JPG"></center>

In this page you can see all the appointmets from the moment onwards. You can delete any appointmet and see the details if you click on any of them.
- USERS 

In this page you can search for any user in the database and apply three optional filters: name, email and role (e.g. search for tattoo_artist or user)
The search will retrieve all users than matches the filter partially, if you search por the name "er" and you have an user with the name "Javier" that user will be shown

<center><img src="/src/img/readme/searchuser.JPG"></center>

You can choose how many results will be shown in each page and navigate through the different pages

<center><img src="/src/img/readme/searchuser2.JPG"></center>

If you click in any user you will see a detailed view and you can change his role or delete the user from the database
</details>

## Problems solutions
A lot of changes in the API because it was not made with front end point of view. Almost as many commits to fix things in the server as in the front end. It was good to see both points of view for the first time.

## Future features
[ ] Tattoo artists can also make and update appointments on their own.
[ ] Add Tatto artist section with their works and bio.
[ ] CRUD for catalog as super admin
[ ] Maybe, to buy a piercing you do not need to make an appointment, just go to the shop. So you can see the service but cannot make an appointment with that service.
[ ] Add piercings images to the catalog.
[ ] Add role for piercing artists if they are different from the tattoo ones, add another role for the artists than can do both.

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