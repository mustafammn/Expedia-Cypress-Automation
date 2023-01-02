Feature: Exercise Test Cases

    Feature Description:
    1. Please navigate to https://www.expedia.com/
    2. Write a test script using any test framework/assertion library you are familiar with for at least the following four test cases:
    Test Case 1: On the Stays tab, search for the Universal Orlando Resort and select the first option from the drop-down. Check-in for a week from the current date and Check-out being a week from that, and Search the options.
    Test Case 2: On the next page, search within the Travelers Dropdown, select two adults and two children, and then set the children’s ages to 8 and 10. Assert that the submission was successful.
    Test Case 3: From the Expedia Homepage, click on Flights, confirm Roundtrip is selected by default, and confirm the following labels exist: Leaving from, Going to, Departing, and Returning. Also, please click the Economy dropdown, select First class, and make sure the dropdown is updated to First class.
    Test Case 4: Next, click One-way and validate that Returning date field no longer appears. If you click Roundtrip again, the Returning date field should be visible.
    Test Case 5: Write a for loop that clicks on each of the following tabs ( Stays, Flights, Cars, Packages, Things to do, and Cruises) and validate that the Search button appears after clicking the tab.

    Background: Login using valid credentials
        Given User accesses to the Expedia page


    Scenario: Test Case 1 & 2: User searches for hotel, adds travelers and verifies the submission is successful

        Given User searches for the "Universal Orlando Resort" on Stays tab
        And User selects the first option from the drop-down
        And User selects Check-in and Check-out dates for a week from the current date
        And User clicks on Search button
        And User clicks on Travelers Dropdown
        And User selects two adults and two children
        And User sets the children`s ages to 8 and 10 and submit
        Then User Asserts that the submission was successful

    Scenario: Test Case 3: User confirms that in Flights tab (Leaving from, Going to, Departing and Returning) labels exist

        Given User is on Flights tab
        And User confirms Roundtrip is selected by default
        And User confirms "Leaving from, Going to, Departing and Returning" labels exist
        And User clicks on the Economy dropdown
        And User selects First class
        And User confirms the dropdown is updated to First class

    Scenario: Test Case 4: User confirms that the Returning date field is not visible in One way flight
        Given User is on Flights tab
        And User clicks on One-way and validate that Returning date field no longer appears
        And User clicks on Roundtrip and validate the Returning date field is visible

    Scenario: Test Case 5: User verifies that search button appears in all tabs
        Given User clicks on each of the following tabs "Stays, Flights, Cars, Packages, Things to do and Cruises" and validates Search button appears