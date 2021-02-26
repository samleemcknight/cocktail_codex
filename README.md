# Personal Cocktail Codex


# OVERVIEW



REPLACE WITH FINAL SCREENSHOTS AFTER FINAL APPROVAL - EDIT


This a is REST API using a Postgres SQL database. The core functionality will allow the user to search pre-populated cocktail recipes in our database. The user can add those to his profile for future easy reference and revisit to customize the recipes, including a delete from favorites. The relational database utilizes Many-to-Many relationships.

## USER STORIES
- As a user, I want to be able to search available cocktail recipes by drink name. 
- As a user, I want to be able to search available cocktail recipes by primary alcohol.
- As a user, I want to be able to add some cocktail recipes to a list of favorites. 
- As a user, I want to be able to customize my favorite drink recipes. 
- As a user, I want to be able to delete cocktail recipes I don’t like anymore. 

## INSTALLATION - NEED EDIT
1. Please read the below list of required modules and verify if they are installed.
  - Use NPM to install missing modules. 
2. Create an `.env' file and put your own session secret in it inside of your cloned repo.
  - Ex.: ```SESSION_SECRET=bleepbloopformetoo```
3. Create a database: ```createdb cocktail_codex_development```
4. Migrate the database: ```sequelize db:migrate```
5. Populate the database:```sequelize db:seed:all```
6. INSTALLATION NOW INCLUDES HEROKU -- LINK?

#### LIST OF REQUIRED PLATFORMS/SOFTWARES
* Heroku
* Postgres
* Node

#### LIST OF REQUIRED NODE MODULES 
* Express
* EJS Layouts
* Express Session
* Sequelize
* Passport
* Morgan
* Method Override
* DotEnv
* Connect-Flash
* Bcrypt




### WIREFRAMES 
![login](public/assets/readme/wireframes/login.png)
![search](public/assets/readme/wireframes/search.png)
![search results](public/assets/readme/wireframes/search_results.png)
![user favorites](public/assets/readme/wireframes/user_favorites.png)
![edit recipe](public/assets/readme/wireframes/edit_recipe.png)
![profile](public/assets/readme/wireframes/profile.png)
![logout](public/assets/readme/wireframes/logout.png)


### ERD 

![ERD](public/assets/readme/erd_final.png)
