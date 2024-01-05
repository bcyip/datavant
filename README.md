# DATAVANT TAKE HOME

## Local Run Setup
```
npm install cypress
```

## Run Tests
To run tests via the GUI, run the following command and select the tests you would like to run
```
npx cypress open
```

To run tests in headless mode, you can also use the command to run a single file or all files
```
npx cypress run
npx cypress run --spec "cypress/tests/buytickets.cy.js"
```

## Task 2
- both PT and EN languages button text is truncated when minimizing window width before moving to mobile version
- not sure why the T&C takes just a large presence on the screen, likely be minimized to footer links unless there's some regulation criteria that needs to be met
- dear lord the usability around date picker
  - entering date by typing on return date does a reservation
  - return date could start at month of depart date (always start in january)
- mobile doesn't have

## Task 3
- please give test-data attributes and not this horrendous selector nonsense
- for the test case given, why when clicking cancel the return city now has an element id?
- would love to be able to just enter text into the date selector as opposed to having to code up logic to click button for next month etc. (unless you're testing that specific part of the functionality)

## Additional Notes
- wanted to implement date selector simply by entering formatted date via type for speed reasons.  return date selector did not allow this (always cleared entered text selection)
- so frustrated needing to use selectors
- buyTicketDateFormatted used to handle edge case of rolling over to next month or year (year rollover not coded yet), created before seeing the issue with entering text into second date box
 - wanted to bypass all the clicks via date selector (brittle), weren't testing that functionality so why take more time/make test be more prone to breaking
