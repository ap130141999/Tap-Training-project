# Tap-project

# One line requirement 
- Dynamic enum configuration Builder
## The project has four screens(four pages)
   1. Home page
   2. Form page
   3. Enum config page
   4. History page
   
## Tech-stack 
   - React
   - Node
   - Express
   - MongoDb
## Home page
  - Contains two cards and a header
  - header contains the router to the home page across all the pages
  1. First card contains two buttons that will redirect to form and history page respectively
  2. Second card contains one button that will redirect to enum config page
  
 ## Form page
    - Contains input fields and dropdowns and a submit button
    1. The option values for the select type are fetched from the mongoDb database using node and express as backend and are displayed in real-time
    2. The submit button collect all the data from the fields and stores in the database.
 
 ## Enum page
  - contains a table that shows all the option values that are fetched from the database in real-time
  - Has an edit button which onclick trigger a modal
  - the modal has a enumId that is connected to the tableId of that particular row.
  - using that model we can display the available option values and add new option values
  
  ## History page
  - This page displays the details submitted in the form page in the form of cards
  - This dispplayed data is fectched from the Database
  
  ## Databases
  - credit_guardians has collection named dynamic_enum
  - details_db has a collection named details
