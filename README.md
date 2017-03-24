# "Ask a Dog"

#### _Questions and answer message board built with EmberJS_

#### By _**Alexandra Holcombe**_

## Description
TBD

## Planning
**1.  Configuration/Dependencies**  
  * install ember-bootstrap, used in all templates & components
  * install ember-cli-sass, used in app.scss  

**2.  Specs**  
  **The user can create a question with author and additional notes.**  
    * Example Input: New question form: "Who's a good boy?"
    * Example Output: Question added to top of list on main page  
  **The user can click on a question to go to the question's own page.**  
    * Example Input: *question-clicky*
    * Example Output: "Who's a good boy?" Content: "Do you know?" followed by list of answers  
  **The user can update a question to change its content.**  
    * Example Input: *update-clicky*
    * Example Output: new content  
  **The user can answer a question.**  
    * Example Input: "I be da goodest boy." Author: "Frankie"
    * Example Output: Answer added to bottom of list of answers on question's page.  

**3.  Integration**  

  **Routes**  
    * Index ->
    * Question -> includes individual question including question content _a la_ Yahoo Answers, list of answers at bottom underneath form to add a new answer.  

  **Templates**  
    * Index - includes list of all questions
    * Question - includes question-detail, new-answer, answer-tile

  **Components**  
    * Nav-bar
    * Side-bar? (contains ask-question form, maybe stick in app so appears on all pages)
    * Question-tile (just author and title for index)
    * Question-detail (full question for question route)
    * New-question (form)
    * New-answer (form)
    * Answer-tile (all details)
    * Update-question (probably modal)

**4.  UX/UI**  
  * Uses SASS & Bootstrap

**5.  Polish**  
  * See if refactoring is needed
  * Delete unused code
  * Revisit README
  * Clone project from github to ensure works correctly!!

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <https://github.com/alexandraholcombe/cr-javascript-week2.git>`
* `cd cr-javascript-week2`
* `npm install`
* `bower install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
