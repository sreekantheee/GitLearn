package stepDefinations;

import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.And;
import cucumber.api.junit.Cucumber;

import java.util.List;

import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
public class StepDefination {

    @Given("^User is on NetBanking landing page$")
    public void user_is_on_netbanking_landing_page()  {
    	System.out.println("given-user is on netbanking landing page");
    }



    @When("^User login into application with following details$")
    public void user_login_into_application_with_following_details(DataTable data)  {
    	List<List<String>> obj=data.raw();
    	System.out.println(obj.get(0).get(0));
    	System.out.println(obj.get(0).get(1));
    	System.out.println(obj.get(0).get(2));
    	System.out.println(obj.get(0).get(3));
    	System.out.println(obj.get(0).get(4));
    	
    }
    
   
    
    @When("^User login into application with username \"([^\"]*)\" and password \"([^\"]*)\"$")
    public void user_login_into_application_with_username_and_password(String arg1, String arg2)  {
    	System.out.println("when-user login with to application with username "+arg1+" and password "+arg2);
    }


    @Then("^Home Page is populated$")
    public void home_page_is_populated() {
    	System.out.println("then-home page populated");

    }

    
    @When("^User login in to application with (.+) and (.+)$")
    public void user_login_into_application_with_user_and_pass(String username, String password)  {
    	System.out.println("username "+username+"password "+password);
    }
    	
    @And("^Cards are displayed \"([^\"]*)\"$")
    public void cards_are_displayed_something(String strArg1) {
    	System.out.println("and-cards displayed "+strArg1);
    	System.out.println("-----------------------------------");

    }
    
    @Given("^Open Browser$")
    public void open_Browser()  {
        // Write code here that turns the phrase above into concrete actions
    	System.out.println("Background - open browser");
    }

    @When("^open url$")
    public void open_url()  {
    	System.out.println("Background - open url");
    }

    @Then("^Opened$")
    public void opened()  {
    	System.out.println("Background - opened");
    }


}