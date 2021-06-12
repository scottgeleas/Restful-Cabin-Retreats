# Project 2: RESTful Cabin Retreats

![Icon Name](Assets/img/cabin.png)
<!-- image credit: this image is from icons8-->

## Team Members
The members of our team (Group B) include: Oleksandr Kulyk, Scott Geleas, and Nicole Daruwalla.

  ## Table of Contents
  - [Description / Objective](#description--objective)
  - [Github Repository](#github-repository)
  - [Heroku Link](#heroku-link)
  - [Videos & Screen Captures](#videos--screen-captures)
  - [Project Requirements](#project-requirements)
  - [User Story](#user-story)
  - [Acceptance Criteria](#acceptance-criteria)
  - [Key Features](#key-features)
  - [Tools](#tools)
  - [Installation](#installation)
  - [Use](#use)
  - [License](#license)
  - [Contributors](#contributors)
  - [References](#references)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Description / Objective
  We created the RESTful Cabin Retreats application to demonstrate our ability to design, build and deploy a full-stack web application to Heroku. The application is in designed and built app using the MVC paradigm, our own server-side API, add user authentication, and database connection. We collaborated via Zoom and Slack, used Git branching workflow and Agile software development methodology.

  ## Github Repository 
  [Project 2: RESTful Cabin Retreats](https://github.com/scottgeleas/Restful-Cabin-Retreats)

  ## Heroku Link 
  [Project 2: RESTful Cabin Retreats](https://git.heroku.com/HEROKU_LINK_HERE.git)

  ## Videos & Screen Captures
  
  ### Video Demonstration of Functionality

  [(Video) Project 2: RESTful Cabin Retreats](https://youtu.be/INSERT_LINK_HERE)

  ### Screen Captures
  Image of Entity Relationship Diagram (ERD) was created to show the data model and the relationships. The ERD was created wtih DrawSQL. (https://drawsql.app/home)

  ![Entity Relationship Diagram](Assets/img/erd.jpg)

  This capture depicts the visual display and key functionality of our application.
  
  ![RESTful Cabin Retreats](Assets/img/rcr.jpg)

  ## Project 2 Requirements (from assignment README.md)
  * Use Node.js and Express.js to create a RESTful API.
  * Use Handlebars.js as the template engine.
  * Use MySQL and the Sequelize ORM for the database.
  * Have both GET and POST routes for retrieving and adding new data.
  * Use at least one new library, package, or technology that we haven’t discussed.
  * Have a folder structure that meets the MVC paradigm.
  * Include authentication (express-session and cookies).
  * Protect API keys and sensitive information with environment variables.
  * Be deployed using Heroku (with data).
  * Have a polished UI.
  * Be responsive.
  * Be interactive (i.e., accept and respond to user input).
  * Meet good-quality coding standards (file structure, naming conventions, follows best practices for class/id naming conventions, indentation, quality comments, etc.).
  * Have a professional README (with unique name, description, technologies used, screenshot, and link to deployed application)

  ## User Story 
   ```md
  AS A person seeking a quiet retreat
  I WANT to stay in a cabin somewhere in the world
  SO THAT I can rejuvenate my mind and body.
  ```

  ## Acceptance Criteria
  ```md
  GIVEN a global cabin rental site
  WHEN I visit the site for the first time
  THEN I am presented with the homepage, where I can log in or signup and navigation links for the homepage and the dashboard
  WHEN I choose to sign up 
  THEN I am prompted to create a username and password
  WHEN I click on the sign-up button
  THEN my user credentials are saved and I am logged into the site
  THEN I am prompted to enter my username and password
  WHEN I am signed in to the site
  THEN I see navigation links for the homepage, the dashboard, and the option to make a reservation or log out
  WHEN I click on the make a reservation button
  THEN I am presented with a calendar to select the begining and ending of my desired cabin stay
  THEN I am presented with an option to select a region of the world and a country
  THEN I am presented with the available cabins in that country/region
  WHEN I select a cabin 
  THEN I am presented with details about the cabin including occupancy (what else?) and an image of the cabin if an image is available
  WHEN I click on reserve cabin button
  THEN I am presented with a message that indicating my reservation was successful
  THEN I am able to view my reservation on the updated dashboard
  WHEN I click on the logout option in the navigation
  THEN I am signed out of the site
  WHEN I am idle on the site for more than a set time
  THEN I am able to view my dashboard but I am prompted to log in again before I can make an additional reservation  
  ```
  ## Key Features 
  The key features of this application include:

  * A responsive site with a visually stunning user interface
  * Robust seed data for a realistic demo experience
  * User-friendly login and signup functionality
  * A dynamic calendar for selecting duration of cabin stay
  * Capabilities to search region/country for available cabins
  * A user dashboard that enables users to view thier reservations

  ## Tools
  The tools used to create this application include: HTML, CSS, JavaScript, MySql, Node, Sequelize, Bcrypt, Dotenv, Express, Express-handlebars, Express-session, Heroku, Github, Git Bash, and Visual Studio Code.

  ## Installation
  The following packages were installed:

  - [Express-Handlebars](https://www.npmjs.com/package/express-handlebars) package is used to implement Handlebars.js for Views.
  - [MySQL2](https://www.npmjs.com/package/mysql2) and [Sequelize](https://www.npmjs.com/package/sequelize) packages are used to connect to a MySQL database for the Models, and create an Express.js API for Controllers.
  - [Dotenv Package](https://www.npmjs.com/package/dotenv) is used for environment variables.
  - [Bcrypt Package](https://www.npmjs.com/package/bcrypt) is used to hash passwords.
  - [Connect-Session-Sequelize](https://www.npmjs.com/package/connect-session-sequelize) package adds authentication.
  - [Express-Session](https://www.npmjs.com/package/express-session) package adds authentication and stores the session data on the client in a cookie. When you are idle on the site for more than a set time, the cookie will expire and you will be required to log in again to start a new session. This is the default behavior and nothing is required other than other than implementing the npm package.

  ## Use
  Use this application is used to search for cabin get-aways across the regions of the world.

  ## License
  MIT
  
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)  
  
  Click badge for license description.
  
  ## Contributors
  The contributors include: Oleksandr Kulyk, Scott Geleas, and Nicole Daruwalla.

  ## References
  The following references were used to create this application: 
  - https://www.sitepoint.com/a-beginners-guide-to-handlebars/
  - https://devcenter.heroku.com/articles/deploying-nodejs
  - https://www.npmjs.com/

  ## Tests
  No tests are available at this time.

  ## Questions
  If you have questions or need help with this application:

  Contact us on GitHub:
  - [Scott Geleas](https://github.com/scottgeleas)
  - [Oleksandr Kulyk](https://github.com/AlexKuWerz)
  - [Nicole Daruwalla](https://github.com/ndaruwalla)
 


  As Alan Cohen said:
  >There is virtue in work and there is virtue in rest. Use both and overlook neither.