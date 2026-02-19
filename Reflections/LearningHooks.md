# Liam's simple React application

## useEffect
This hook is used to re-render the website to make changes to elements. It gets triggered by its dependencies.
I used it to update the website title to whatever the user enters as their username, and therefore I used the constant username as my dependency here. 

## useMemo
useMemo is used when the application needs to do some sort of calculation faster then useEffect (I don't remember how it was faster).
I used it when doing password validation, if the password is long enough, useMemo returns a true boolean that I can use 

## Problems along the way
1. css files must be named *.modules.css. Easily solved by a google search on the error code.

2. I tried to implement a provider to send data from login page to my main page. I did not get it to work after watching 2 youtube videos, reading the react documentation and asking gemini, I gave up :(

3. React.FormEvent inside my forms submit shows up as deprecated. The code works, it just warns about it. I couldn't find any solution to it, it works fine in other projects. And some guy on the world wide web said that it seems like a bug and not intentional, and I trust him. 