Feature: Hotel Booking In Adactin Application

@Ad1
Scenario Outline: Login
Given user Launch The Application
When user Enter The "<Username>" In Username Field
And user Enter The "<Password>" In Password Field
Then user Click On The Login Button And It Nagivates To The Hotel Page

Examples:

      |Username|Password|
      |G|G@123|
      |F|F@123|
      |santhosh007|manisans@007|

@Ad2
Scenario: Search Hotel
When user Select The Location
And user Select The Hotel
And user Select The Room Type
And user Select The Number Of Rooms
And user Select The Adults Per Room
And user Select The Children Per Room
Then user Click On The Search Button And It Nagivates To The Select Hotel Page

@Ad3
Scenario: Select Hotel
When user Click On Selected Hotel
Then user Click On Continue Button And It Nagivates To The Book A Hotel Page

@Ad4
Scenario: Book A Hotel
When user Enter The First Name
And user Enter The Last Name
And user Enter The Billing Address
And user Enter The Credit Card No
And user Select The Credit Card Type
And user Select The Expiry Month
And user Select The Expiry Year
And user Select The CVV Number
Then user Click On Book Now Button And It Nagivates To The Booking Confirmation Page

@Ad5
Scenario: Check Booking Deatails Of The Hotel
Then user Click On Logout Button And It Nagivates To The Home Page

















