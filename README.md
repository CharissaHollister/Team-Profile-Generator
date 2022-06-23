# Team Profile Generator

Authored by Charissa Hollister 06/22/2022

## Description

Quickly and easily generator a profile of a team of Engineers and/or interns and the manager they report to. Information will be collected in the command-line through a sequence of prompts. Although details can be left blank it is recommended that you answer all questions to have a thorough profile page. A copy your newly populated Team Profile files (index.HTML and style.css) will be saved in the dist folder once you indicate that your team is complete.

## Features

Manager is required for all Team Profiles.  
Engineer and Interns can be none or many as long as there is 1 reportee on the team.  
Questions can be left unanswered, however it isn't recommended.  
Email and GitHub page contains a link for convenience.  
dist/index.html and dist/style.css is overwritten after each command-line execution, if they are required for use long term it is preferrable to copy both files into your preferred location.  
NPM inquirer and fs are both utilized.

## Demo:
https://drive.google.com/file/d/1ZI6e9Ig0CYkyMqfhnLsV3y7eWFadR3xn/view


https://user-images.githubusercontent.com/103005272/175203708-9211acac-b930-4fa7-9999-95dcda9ab58a.mp4



### GitHub Repo:

https://github.com/CharissaHollister/Team-Profile-Generator

### Minimum customer criteria

AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles

GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
