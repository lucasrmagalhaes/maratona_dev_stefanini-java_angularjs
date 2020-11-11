package br.com.stefanini.maratonadev.dao;

import javax.enterprise.context.RequestScoped;

import br.com.stefanini.maratonadev.model.User;

@RequestScoped
public class UserDao {
	
	public User buscarUsuarioPorEmail(String email) {	
		return User.find("email", email).firstResult();
	}
}
