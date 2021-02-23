# Personal Cocktail Codex
The name of this project is "A Personal Cocktail Codex Builder". 

The quintessence of the application is a REST app using Node, Express, and Sequelize with 4 views. The core functionality will allow the user to search pre-populated cocktail recipes in our database. The user can add those to his profile for future easy reference and revisit to update - add more or delete only - the recipes. The site will feature authentication/authorization security protocols.

The relational database will be a Many-to-Many with 3 tables: user account info table, user-selected drinks profile, and a cocktails table (id, drink name, primary alcohol, text block recipe string). The app's UX will be built using BOOTSTRAP. If time permits, the following will be a bonus: a. 1 more table in the database storing user-selected drinks table keyed by main alcohol b. connecting to TheCocktailDB API so users can look up new recipes c. custom CSS will be utilized instead of BOOTSTRAP d. 1 more view displaying the user’s account info (name, e-mail, password).

# USER STORIES
- As a user, I want to be able to search available cocktail recipes. 
- As a user, I want to be able to favorite some cocktail recipes. 
- As a user, I want to be able to add more favorite cocktail recipes. 
- As a user, I want to be able to delete cocktail recipes I don’t like anymore. 

# BONUS STORIES
- As a user, I want to be able to sort my favorite recipes by primary alcohol.
- As a user, I want to be able to look up recipes I don't know online.
- As a user, I want to be able to view my account info. 

# WIREFRAMES 

# ERD PAGE

## Installation:
* Create an `.env' file and put your own session secret in it.
  *Ex.: ```SESSION_SECRET=bleepbloopformetoo```
* Run ```npm install```
* Create a database: ```createdb cocktail_codex_development```
* Migrate the database: ```sequelize db:migrate```
* Populate the database:```sequelize db:seed:all```
