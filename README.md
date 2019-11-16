# unit-4-game

<h2>Project Name</h2>

Save the Pokemon!

<h2>Concept</h2>

A web application that applies random values to images. 

<h2>Project Overview</h2>

A web application that applies random values to images. Once these images are click, it will add the ranom value to the user's total. The object of the game is to match the computer-generated random number without going over. If you hit the exact number, your wins go up by one. If you go over by just one, losses go up. New numbers are generated after each win/loss.

<h2>Process</h2>

I declared four variable that would hold four random numbers between 1 - 12

i delcared one variable to generate a random number between 19 - 120

i tied an event click function to the page and tied four images to the the four variables holding the random numbers

in each image, i ran a score checker that compared the totals to the computer generated number (between 19 - 120)

the score checker function checked if the total number was either over or matching. if over, it increased losses. if matched, it increased wins. each of these triggered a restart functiuon that reset all random numbers.
