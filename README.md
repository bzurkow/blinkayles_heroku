# Blinkayles by Ben Zurkow

## Overview

I've done my best to comment what I've done throughout my code. However, there are a few key points I'd like to bring up right here about my motiviations for how I approached this project. The first is that I wanted to make something playable - even fun. While there are certainly improvements I could have made to my web interface, I hope that it can be enjoyed. The second, and probably more important motif, was my desire to restructure the game mechanics. Rather than build the game around a set of pins, I decided to build the game around a set of moves. While I am sure there are optimization improvements to be made, I see keeping track of the state of the pins as an extra step that is unnecessary to determining game status or the game winner. If we want to see the state of the pins, we can determine them from our moves. This is different than keeping track of pins and necessarily needing to determine moves off of them.

## Running my code

NOTE: Because I put this up on the internet I wanted to adhere to the privacy wishes expressed in the project parameters. So, I implemented a very basic password gate. The password is "alohomora"

To play go to blinkayles.com or https://intense-atoll-38339.herokuapp.com

Or

Yarn Install
Yarn Build
Yarn Start
Go to: http://localhost:8080

## Reading my code

There are three types of simulations in my application: single Game, multiple games and tournament. The front end is designed to get game parameters and send them to the server to calculate. The best places to start reading my code for both front end and backend are:

Front-End: src/index.js

Back-End: serverStart.js
