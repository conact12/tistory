package com.mailauth;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableAsync;

@EnableAsync
@SpringBootApplication
public class MailauthApplication {

	public static void main(String[] args) {
		SpringApplication.run(MailauthApplication.class, args);
	}

}
