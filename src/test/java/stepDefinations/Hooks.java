package stepDefinations;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks {
	
	@Before("@RepTest")
	public void beforevalidation()
	{
		System.out.println("before hooks");
	}
	
	@After("@RepTest")
	public void aftervalidation()
	{
		System.out.println("after hooks - changes usa");
	}

}
