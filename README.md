# Introduction 
This project is a Tea Event application that allows user to order packets and have them delivered
to their home. There are some users who will want to be premium members.
They will be able to sign in and be able to access the page where they can view events and invite up to 3 guests. 


# Tech Stack
This project is built using the following technologies:
- Frontend: React.js, HTML, CSS
- Backend: Spring Boot, Java
- Database: MySQL
- Authentication: JWT (JSON Web Tokens)

# Future Features

For the features going forward in this project, I will be implementing a the table of Tea Products and make 
that its own api call. Instead of using a public api, it will be calling locally from this database. Another feature 
that will be implemented is a more user friendly eventCard for the premium users. It will have an ongoing list of the
max number of people who can go and an ongoing number of how many people can attend. Once a person signs up, the number 
of seats left will decrease. This will inform the user that their request went through in addition to their email 
confirmation that I will also be implementing.

# Setup Instructions Part 1: Setting up SQL Database
1. Open MySql Workbench
2. Please note your username, password, and active port for your own personal database. You will need to reference those later
3. In the main area of my SQL Workbench, please create your new schema. I named mine theteahousedatabase. Feel free to use that name
4. Once created please double click on the newly created schema so that it is highlighted. The highlighted schema should have slightly bolder text than the others if other databases are already created
5. Once highlighted, please run "TheTeaHouse SQL Schema". This is a SQL script found in the FinalRepo folder. By clicking the lighting bolt WITHOUT the cursor or magnifying glass, this will create your table, relationships, and insert data in those tables
   
# Setup Instructions Part 2: Setting up API
1. Create a folder in which you want the project to be created in
2. Open Intellij
3. Open the folder in which you want the project to be created in
4. In Intellij, change the directory to the file you created
5. Run the following command: "git clone https://github.com/jdmc291/FinalRepo.git --recurse-submodules". This will allow the current project to call the intial repository along with the child repositories within them
   Once it is done cloning, you should have the .idea folder and the FinalRepo folder inside the intial folder you created
6. Use Intellij again and Open the FinalRepo > Backend > Backend > LaunchCode-unit-2-project folder. This will create the .idea folder in the LaunchCode-unit-2-project folder. You will need this to run the API
7. Create a .env file in the LaunchCode-unit-2-project folder. Please click on the reference link at the end to see an example of how the file needs to look like.
8. Create your .env file with your local database credentials. These are some default settings for your database if unchanged: "DB_Host=localhost" or "DB_Port=3306"
9. Use Part 1 Step 2 to fill out the rest of your .env file and reference the document linked below
10. (optional) If you used the same name for your database, it should be "DB_NAME=theteahousedatabase"
11. Double Click on the LaunchCode-unit-2-project > src> main > java > teahouseco.com.demo > TheTeaHouseApplication
12. Click the "Play" on the top
13. Your API is now running

# Setup Instructions Part 3: Setting up Front End
1. Open up VS Code
2. Use VS Code to open the following directory: folder you created > FinalRepo > FrontEnd. Have VS Code open up the FrontEnd folder
3. Open up the terminal and type in "cd src". This will change your directory to the src file.
4. In the terminal, type in "npm install"
5. In the terminal, type in "npm run dev". You will see what localhost port you need to go to in your web browser.

# Image for ERD Reference, Wireframes, and .env Example can be found here:

https://docs.google.com/document/d/1VGe-i8IaT-QCIL7GR4I1wDAMCaouFzSWfUHnShy6BFo/edit?tab=t.0
