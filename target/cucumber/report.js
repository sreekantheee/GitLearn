$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Application Login",
  "description": "",
  "id": "application-login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 13,
  "name": "Home page default login",
  "description": "",
  "id": "application-login;home-page-default-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@RegTest"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "User login into application with username \"john\" and password \"4321\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Home Page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Cards are displayed \"false\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "duration": 817728000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "john",
      "offset": 43
    },
    {
      "val": "4321",
      "offset": 63
    }
  ],
  "location": "StepDefination.user_login_into_application_with_username_and_password(String,String)"
});
formatter.result({
  "duration": 3702000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.home_page_is_populated()"
});
formatter.result({
  "duration": 430000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "false",
      "offset": 21
    }
  ],
  "location": "StepDefination.cards_are_displayed_something(String)"
});
formatter.result({
  "duration": 573900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 28,
  "name": "Home page default login with parameters",
  "description": "",
  "id": "application-login;home-page-default-login-with-parameters",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 27,
      "name": "@RepTest"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "User login in to application with \u003cusername\u003e and \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "Home Page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "Cards are displayed \"true\"",
  "keyword": "And "
});
formatter.examples({
  "line": 34,
  "name": "",
  "description": "",
  "id": "application-login;home-page-default-login-with-parameters;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 35,
      "id": "application-login;home-page-default-login-with-parameters;;1"
    },
    {
      "cells": [
        "user11",
        "pass1 6"
      ],
      "line": 36,
      "id": "application-login;home-page-default-login-with-parameters;;2"
    },
    {
      "cells": [
        "user2",
        "pass2"
      ],
      "line": 37,
      "id": "application-login;home-page-default-login-with-parameters;;3"
    },
    {
      "cells": [
        "user4",
        "pass4"
      ],
      "line": 38,
      "id": "application-login;home-page-default-login-with-parameters;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 392300,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Home page default login with parameters",
  "description": "",
  "id": "application-login;home-page-default-login-with-parameters;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 27,
      "name": "@RepTest"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "User login in to application with user11 and pass1 6",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "Home Page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "Cards are displayed \"true\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "duration": 362300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user11",
      "offset": 34
    },
    {
      "val": "pass1 6",
      "offset": 45
    }
  ],
  "location": "StepDefination.user_login_into_application_with_user_and_pass(String,String)"
});
formatter.result({
  "duration": 466200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.home_page_is_populated()"
});
formatter.result({
  "duration": 269200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 21
    }
  ],
  "location": "StepDefination.cards_are_displayed_something(String)"
});
formatter.result({
  "duration": 597600,
  "status": "passed"
});
formatter.after({
  "duration": 426300,
  "status": "passed"
});
formatter.before({
  "duration": 375700,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Home page default login with parameters",
  "description": "",
  "id": "application-login;home-page-default-login-with-parameters;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 27,
      "name": "@RepTest"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "User login in to application with user2 and pass2",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "Home Page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "Cards are displayed \"true\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "duration": 604000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user2",
      "offset": 34
    },
    {
      "val": "pass2",
      "offset": 44
    }
  ],
  "location": "StepDefination.user_login_into_application_with_user_and_pass(String,String)"
});
formatter.result({
  "duration": 6724300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.home_page_is_populated()"
});
formatter.result({
  "duration": 811800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 21
    }
  ],
  "location": "StepDefination.cards_are_displayed_something(String)"
});
formatter.result({
  "duration": 5101700,
  "status": "passed"
});
formatter.after({
  "duration": 30969900,
  "status": "passed"
});
formatter.before({
  "duration": 351200,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Home page default login with parameters",
  "description": "",
  "id": "application-login;home-page-default-login-with-parameters;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 27,
      "name": "@RepTest"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "User login in to application with user4 and pass4",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "Home Page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "Cards are displayed \"true\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "duration": 250700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user4",
      "offset": 34
    },
    {
      "val": "pass4",
      "offset": 44
    }
  ],
  "location": "StepDefination.user_login_into_application_with_user_and_pass(String,String)"
});
formatter.result({
  "duration": 159600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.home_page_is_populated()"
});
formatter.result({
  "duration": 269200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 21
    }
  ],
  "location": "StepDefination.cards_are_displayed_something(String)"
});
formatter.result({
  "duration": 492200,
  "status": "passed"
});
formatter.after({
  "duration": 64900,
  "status": "passed"
});
});