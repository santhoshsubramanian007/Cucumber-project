package com.sd;

import org.openqa.selenium.WebDriver;

import com.Base_Class.Baseclass;
import com.SdpAdactin.Page_Object_Manager2;
import com.helper.File_Reader_Manager;
import com.test.runner.Test_Runner;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Step_Defenition extends Baseclass {

	public static WebDriver c = Test_Runner.c;

	public static Page_Object_Manager2 pom = new Page_Object_Manager2(c);

	@Given("^user Launch The Application$")
	public void user_Launch_The_Application() throws Throwable {

		String url = File_Reader_Manager.getInstanceFRM().getInstanceCR().geturl();
		url(url);
	}

//	@When("^user Enter The Username In Username Field$")
//	public void user_Enter_The_Username_In_Username_Field( ) throws Throwable {

//		String username = File_Reader_Manager.getInstanceFRM().getInstanceCR().getUsername();
//		inputvalue(pom.getInstanceus().getUsername(),username);
//
//	}

//	@When("^user Enter The Password In Password Field$")
//	public void user_Enter_The_Password_In_Password_Field() throws Throwable {
//
//	String pass = File_Reader_Manager.getInstanceFRM().getInstanceCR().getIstancepass();
//		String password = Data_From_Excel(pass, 2, 5);
//		inputvalue(pom.getInstanceus().getPassword(), password);

//	}
	
	@When("^user Enter The \"([^\"]*)\" In Username Field$")
	public void user_Enter_The_In_Username_Field(String username) throws Throwable {
	    
		inputvalue(pom.getInstanceus().getUsername(),username);
	}

	@When("^user Enter The \"([^\"]*)\" In Password Field$")
	public void user_Enter_The_In_Password_Field(String password) throws Throwable {
	  
		inputvalue(pom.getInstanceus().getPassword(), password);
	}

	@Then("^user Click On The Login Button And It Nagivates To The Hotel Page$")
	public void user_Click_On_The_Login_Button_And_It_Nagivates_To_The_Hotel_Page() throws Throwable {

		clickonElement(pom.getInstanceus().getLogin());

	}

	@When("^user Select The Location$")
	public void user_Select_The_Location() throws Throwable {

		String loc = File_Reader_Manager.getInstanceFRM().getInstanceCR().getIstanceloc();
		String location = Data_From_Excel(loc, 4, 5);
		String tex = File_Reader_Manager.getInstanceFRM().getInstanceCR().getIstancetex();
		dropdown(pom.getInstancehd().getLocation(), tex, location);

	}

	@When("^user Select The Hotel$")
	public void user_Select_The_Hotel() throws Throwable {

		String hotel = File_Reader_Manager.getInstanceFRM().getInstanceCR().getIstancehotel();
		String Hotels = Data_From_Excel(hotel, 5, 5);
		String tex = File_Reader_Manager.getInstanceFRM().getInstanceCR().getIstancetex();
		dropdown(pom.getInstancehd().getHotel(), tex, Hotels);


	}

	@When("^user Select The Room Type$")
	public void user_Select_The_Room_Type() throws Throwable {

		String ind = File_Reader_Manager.getInstanceFRM().getInstanceCR().getIstanceind();
		String ones = File_Reader_Manager.getInstanceFRM().getInstanceCR().getIstanceone();
		dropdown(pom.getInstancehd().getRoomtype(), ind, ones);


	}

	@When("^user Select The Number Of Rooms$")
	public void user_Select_The_Number_Of_Rooms() throws Throwable {

		String ind = File_Reader_Manager.getInstanceFRM().getInstanceCR().getIstanceind();
		String twos = File_Reader_Manager.getInstanceFRM().getInstanceCR().getIstancetwo();
		dropdown(pom.getInstancehd().getRoomno(), ind, twos);

	}


	@When("^user Select The Adults Per Room$")
	public void user_Select_The_Adults_Per_Room() throws Throwable {

		String ind = File_Reader_Manager.getInstanceFRM().getInstanceCR().getIstanceind();
		String twos = File_Reader_Manager.getInstanceFRM().getInstanceCR().getIstancetwo();
		dropdown(pom.getInstancehd().getAdultroom(), ind, twos);



	}

	@When("^user Select The Children Per Room$")
	public void user_Select_The_Children_Per_Room() throws Throwable {

		String ind = File_Reader_Manager.getInstanceFRM().getInstanceCR().getIstanceind();
		String twos = File_Reader_Manager.getInstanceFRM().getInstanceCR().getIstancetwo();
		dropdown(pom.getInstancehd().getChildroom(), ind, twos);	

	}

	@Then("^user Click On The Search Button And It Nagivates To The Select Hotel Page$")
	public void user_Click_On_The_Search_Button_And_It_Nagivates_To_The_Select_Hotel_Page() throws Throwable {

		clickonElement(pom.getInstancehd().getSumbit());
	}

	@When("^user Click On Selected Hotel$")
	public void user_Click_On_Selected_Hotel() throws Throwable {

		clickonElement(pom.getInstancecf().getRadio());

	}

	@Then("^user Click On Continue Button And It Nagivates To The Book A Hotel Page$")
	public void user_Click_On_Continue_Button_And_It_Nagivates_To_The_Book_A_Hotel_Page() throws Throwable {

		clickonElement(pom.getInstancecf().getCon());
	}

	@When("^user Enter The First Name$")
	public void user_Enter_The_First_Name() throws Throwable {

		String loc = File_Reader_Manager.getInstanceFRM().getInstanceCR().getIstanceloc();
		String firstname = Data_From_Excel(loc, 15, 5);
		inputvalue(pom.getInstanceud().getFirstname(), firstname);

	}

	@When("^user Enter The Last Name$")
	public void user_Enter_The_Last_Name() throws Throwable {

		String loc = File_Reader_Manager.getInstanceFRM().getInstanceCR().getIstanceloc();
		String lastname = Data_From_Excel(loc, 16, 5);
		inputvalue(pom.getInstanceud().getLastname(), lastname);

	}

	@When("^user Enter The Billing Address$")
	public void user_Enter_The_Billing_Address() throws Throwable {

		String loc = File_Reader_Manager.getInstanceFRM().getInstanceCR().getIstanceloc();
		String address = Data_From_Excel(loc, 17, 5);
		inputvalue(pom.getInstanceud().getAddress(), address);
	}

	@When("^user Enter The Credit Card No$")
	public void user_Enter_The_Credit_Card_No() throws Throwable {

		String loc = File_Reader_Manager.getInstanceFRM().getInstanceCR().getIstanceloc();
		String creditno = Data_From_Excel(loc, 18, 5);
		inputvalue(pom.getInstanceud().getCardno(), creditno);

	}

	@When("^user Select The Credit Card Type$")
	public void user_Select_The_Credit_Card_Type() throws Throwable {

		String ind = File_Reader_Manager.getInstanceFRM().getInstanceCR().getIstanceind();
		String twos = File_Reader_Manager.getInstanceFRM().getInstanceCR().getIstancetwo();
		dropdown(pom.getInstanceud().getCreditcard(), ind, twos);
	}

	@When("^user Select The Expiry Month$")
	public void user_Select_The_Expiry_Month() throws Throwable {

		String ind = File_Reader_Manager.getInstanceFRM().getInstanceCR().getIstanceind();
		String tens = File_Reader_Manager.getInstanceFRM().getInstanceCR().getIstanceten();
		dropdown(pom.getInstanceud().getExpdate(), ind, tens);


	}

	@When("^user Select The Expiry Year$")
	public void user_Select_The_Expiry_Year() throws Throwable {

		String tens = File_Reader_Manager.getInstanceFRM().getInstanceCR().getIstanceten();
		String ind = File_Reader_Manager.getInstanceFRM().getInstanceCR().getIstanceind();
		dropdown(pom.getInstanceud().getExpyear(), ind, tens);

	}

	@When("^user Select The CVV Number$")
	public void user_Select_The_CVV_Number() throws Throwable {

		String loc = File_Reader_Manager.getInstanceFRM().getInstanceCR().getIstanceloc();
		String cvvno = Data_From_Excel(loc, 22, 5);
		inputvalue(pom.getInstanceud().getCvv(), cvvno);
	}

	@Then("^user Click On Book Now Button And It Nagivates To The Booking Confirmation Page$")
	public void user_Click_On_Book_Now_Button_And_It_Nagivates_To_The_Booking_Confirmation_Page() throws Throwable {

		clickonElement(pom.getInstanceud().getBook());

	}

	@Then("^user Click On Logout Button And It Nagivates To The Home Page$")
	public void user_Click_On_Logout_Button_And_It_Nagivates_To_The_Home_Page() throws Throwable {

		clickonElement(pom.getInstancelg().getLogout());

	}

}
