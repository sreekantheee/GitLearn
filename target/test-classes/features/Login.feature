Feature: Application Login



Scenario: Home page default login
Given User is on NetBanking landing page
When User login into application with username "jin" and password "1234"
Then Home Page is populated
And Cards are displayed "true"


@RegTest
Scenario: Home page default login
Given User is on NetBanking landing page
When User login into application with username "john" and password "4321"
Then Home Page is populated
And Cards are displayed "false"

@SmokeTest
Scenario: Home page default login with DataTable
Given User is on NetBanking landing page
When User login into application with following details
| ram | 1234 | italy | europe | earth |
Then Home Page is populated
And Cards are displayed "true"

@RepTest
Scenario Outline: Home page default login with parameters
Given User is on NetBanking landing page
When User login in to application with <username> and <password>
Then Home Page is populated
And Cards are displayed "true"

Examples:
|username|password|
|user11  |pass1 6 |
|user2   |pass2   |
|user4   |pass4   |