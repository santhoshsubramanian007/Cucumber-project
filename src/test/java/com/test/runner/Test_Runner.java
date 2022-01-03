package com.test.runner;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;

import com.Base_Class.Baseclass;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
@RunWith(Cucumber.class)
@CucumberOptions(features = "src\\test\\java\\com\\adactin\\feature\\Adactin.feature",

		glue = "com.sd",
		
		monochrome= true,
		
		dryRun= false,
		
		strict = false,
		
		tags = ("~@Ad5"),
		
		plugin = { "html:Report/Html_Report", "pretty", "json:Reports/JsonReport.json",
				
				"com.cucumber.listener.ExtentCucumberFormatter:Folder/Name.html"
				
				
				
		}
		
		)

public class Test_Runner {
	
	public static WebDriver c;
	
	@BeforeClass
	public static void set_Up() {
	
		c = Baseclass.getBrowser("chrome");
	}

	@AfterClass
	public static void tear_Down() {
		
		c.close();

	}
}
