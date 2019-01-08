# Memory Game

#### Epicodus Memory Game using JS, 01/03/2019

#### Tanvi Garg

## Description

Add description here

## Specs

| Behavior | Input | Output |
|----------|-------|--------|
| Generate Single Card | Back Of Card Visible and Clickable | Card should Reveal color |
| Generate 3 cards | Back Of of each is Card Visible and Clickable | Each card should reveal color |
| Duplicate the cards to have 2 sets of 5 cards (total 10 cards) | 10 cards should appear |  Each card should have a duplicate in the DOM|
| Generate Grid of Cards | Start Game | Grid of cards should appear |
| On click event on a card, display card contents | flip any card | card should flip and reveal color |
| On click event on a second card | flip another card | second card should flip and reveal color |
| Check for match on the first and the second flip, If same color appear keep them open| second click on another card should flip it | If the first and the second card flip match, keep cards open |
| Check for match on the first and the second flip, if different pictures appear flip them back to close| second click on another card should flip it | If the first and the second card flip do not match, close the cards|
| Player should not be able to play further until two flips are compared for a match or a mismatch | third click | 1. If the first and the second card flip do not match, close the cards  2. If the first and the second card flip match, open the cards|

## Setup on OSX

* Install Node.js
* Install karma-cli globally: `npm install -g karma-cli`
* Clone the repo
* `npm install` to install dependencies
* `npm run start` to build and start the dev server
* `npm run lint` to explicitly run ESLint
* `npm run test` to run the unit tests with Karma and Jasmine. Visit `localhost:9876` to view the tests.

## Contribution Requirements

1. Clone the repo
1. Make a new branch
1. Commit and push your changes
1. Create a PR

## Technologies Used

* JavaScript
* Node.js
* jQuery 3.3.1
* Bootstrap 4.1.3
* Babel
* Webpack
* ESLint
* Jasmine
* Karma

## Links

* Add links here

## License

This software is licensed under the MIT license.

Copyright (c) 2018 **Tanvi Garg**
