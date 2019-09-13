package com.cas.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class FrontController {
	
	@GetMapping("/login")
	public ModelAndView getLoginPage() {
		return new ModelAndView("login");
	}
	
	@GetMapping("/home")
	public ModelAndView getHomePage() {
		return new ModelAndView("home");
	}
}
