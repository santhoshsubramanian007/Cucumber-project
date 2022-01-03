$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/adactin/feature/Adactin.feature");
formatter.feature({
  "line": 1,
  "name": "Hotel Booking In Adactin Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Login",
  "description": "",
  "id": "hotel-booking-in-adactin-application;login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Ad1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user Launch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user Enter The \"\u003cUsername\u003e\" In Username Field",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user Enter The \"\u003cPassword\u003e\" In Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user Click On The Login Button And It Nagivates To The Hotel Page",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "hotel-booking-in-adactin-application;login;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 12,
      "id": "hotel-booking-in-adactin-application;login;;1"
    },
    {
      "cells": [
        "G",
        "G@123"
      ],
      "line": 13,
      "id": "hotel-booking-in-adactin-application;login;;2"
    },
    {
      "cells": [
        "F",
        "F@123"
      ],
      "line": 14,
      "id": "hotel-booking-in-adactin-application;login;;3"
    },
    {
      "cells": [
        "santhosh007",
        "manisans@007"
      ],
      "line": 15,
      "id": "hotel-booking-in-adactin-application;login;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Login",
  "description": "",
  "id": "hotel-booking-in-adactin-application;login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Ad1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user Launch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user Enter The \"G\" In Username Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user Enter The \"G@123\" In Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user Click On The Login Button And It Nagivates To The Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Defenition.user_Launch_The_Application()"
});
formatter.result({
  "duration": 1485311579,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "G",
      "offset": 16
    }
  ],
  "location": "Step_Defenition.user_Enter_The_In_Username_Field(String)"
});
formatter.result({
  "duration": 162278129,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "G@123",
      "offset": 16
    }
  ],
  "location": "Step_Defenition.user_Enter_The_In_Password_Field(String)"
});
formatter.result({
  "duration": 82931699,
  "status": "passed"
});
formatter.match({
  "location": "Step_Defenition.user_Click_On_The_Login_Button_And_It_Nagivates_To_The_Hotel_Page()"
});
formatter.result({
  "duration": 534439002,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Login",
  "description": "",
  "id": "hotel-booking-in-adactin-application;login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Ad1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user Launch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user Enter The \"F\" In Username Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user Enter The \"F@123\" In Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user Click On The Login Button And It Nagivates To The Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Defenition.user_Launch_The_Application()"
});
formatter.result({
  "duration": 278527927,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "F",
      "offset": 16
    }
  ],
  "location": "Step_Defenition.user_Enter_The_In_Username_Field(String)"
});
formatter.result({
  "duration": 102106973,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "F@123",
      "offset": 16
    }
  ],
  "location": "Step_Defenition.user_Enter_The_In_Password_Field(String)"
});
formatter.result({
  "duration": 88070567,
  "status": "passed"
});
formatter.match({
  "location": "Step_Defenition.user_Click_On_The_Login_Button_And_It_Nagivates_To_The_Hotel_Page()"
});
formatter.result({
  "duration": 591956724,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Login",
  "description": "",
  "id": "hotel-booking-in-adactin-application;login;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Ad1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user Launch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user Enter The \"santhosh007\" In Username Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user Enter The \"manisans@007\" In Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user Click On The Login Button And It Nagivates To The Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Defenition.user_Launch_The_Application()"
});
formatter.result({
  "duration": 300810399,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "santhosh007",
      "offset": 16
    }
  ],
  "location": "Step_Defenition.user_Enter_The_In_Username_Field(String)"
});
formatter.result({
  "duration": 139324195,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "manisans@007",
      "offset": 16
    }
  ],
  "location": "Step_Defenition.user_Enter_The_In_Password_Field(String)"
});
formatter.result({
  "duration": 99522144,
  "status": "passed"
});
formatter.match({
  "location": "Step_Defenition.user_Click_On_The_Login_Button_And_It_Nagivates_To_The_Hotel_Page()"
});
formatter.result({
  "duration": 1942657302,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Search Hotel",
  "description": "",
  "id": "hotel-booking-in-adactin-application;search-hotel",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@Ad2"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "user Select The Location",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "user Select The Hotel",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user Select The Room Type",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user Select The Number Of Rooms",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "user Select The Adults Per Room",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "user Select The Children Per Room",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "user Click On The Search Button And It Nagivates To The Select Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Defenition.user_Select_The_Location()"
});
formatter.result({
  "duration": 1302476359,
  "status": "passed"
});
formatter.match({
  "location": "Step_Defenition.user_Select_The_Hotel()"
});
formatter.result({
  "duration": 266341686,
  "status": "passed"
});
formatter.match({
  "location": "Step_Defenition.user_Select_The_Room_Type()"
});
formatter.result({
  "duration": 155394974,
  "status": "passed"
});
formatter.match({
  "location": "Step_Defenition.user_Select_The_Number_Of_Rooms()"
});
formatter.result({
  "duration": 164477799,
  "status": "passed"
});
formatter.match({
  "location": "Step_Defenition.user_Select_The_Adults_Per_Room()"
});
formatter.result({
  "duration": 162499608,
  "status": "passed"
});
formatter.match({
  "location": "Step_Defenition.user_Select_The_Children_Per_Room()"
});
formatter.result({
  "duration": 149479847,
  "status": "passed"
});
formatter.match({
  "location": "Step_Defenition.user_Click_On_The_Search_Button_And_It_Nagivates_To_The_Select_Hotel_Page()"
});
formatter.result({
  "duration": 1111422083,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Select Hotel",
  "description": "",
  "id": "hotel-booking-in-adactin-application;select-hotel",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 27,
      "name": "@Ad3"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "user Click On Selected Hotel",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "user Click On Continue Button And It Nagivates To The Book A Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Defenition.user_Click_On_Selected_Hotel()"
});
formatter.result({
  "duration": 102593149,
  "status": "passed"
});
formatter.match({
  "location": "Step_Defenition.user_Click_On_Continue_Button_And_It_Nagivates_To_The_Book_A_Hotel_Page()"
});
formatter.result({
  "duration": 679145153,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Book A Hotel",
  "description": "",
  "id": "hotel-booking-in-adactin-application;book-a-hotel",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 32,
      "name": "@Ad4"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "user Enter The First Name",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "user Enter The Last Name",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "user Enter The Billing Address",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "user Enter The Credit Card No",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "user Select The Credit Card Type",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "user Select The Expiry Month",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "user Select The Expiry Year",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "user Select The CVV Number",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "user Click On Book Now Button And It Nagivates To The Booking Confirmation Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Defenition.user_Enter_The_First_Name()"
});
formatter.result({
  "duration": 243403958,
  "status": "passed"
});
formatter.match({
  "location": "Step_Defenition.user_Enter_The_Last_Name()"
});
formatter.result({
  "duration": 188804367,
  "status": "passed"
});
formatter.match({
  "location": "Step_Defenition.user_Enter_The_Billing_Address()"
});
formatter.result({
  "duration": 214224826,
  "status": "passed"
});
formatter.match({
  "location": "Step_Defenition.user_Enter_The_Credit_Card_No()"
});
formatter.result({
  "duration": 184823675,
  "status": "passed"
});
formatter.match({
  "location": "Step_Defenition.user_Select_The_Credit_Card_Type()"
});
formatter.result({
  "duration": 177137252,
  "status": "passed"
});
formatter.match({
  "location": "Step_Defenition.user_Select_The_Expiry_Month()"
});
formatter.result({
  "duration": 236663414,
  "status": "passed"
});
formatter.match({
  "location": "Step_Defenition.user_Select_The_Expiry_Year()"
});
formatter.result({
  "duration": 212772244,
  "status": "passed"
});
formatter.match({
  "location": "Step_Defenition.user_Select_The_CVV_Number()"
});
formatter.result({
  "duration": 156697923,
  "status": "passed"
});
formatter.match({
  "location": "Step_Defenition.user_Click_On_Book_Now_Button_And_It_Nagivates_To_The_Booking_Confirmation_Page()"
});
formatter.result({
  "duration": 76149021,
  "status": "passed"
});
});