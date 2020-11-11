package br.com.stefanini.maratonadev.service;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;

import br.com.stefanini.maratonadev.dao.UserDao;
import br.com.stefanini.maratonadev.model.User;

@RequestScoped
public class UserService {
	@Inject
	UserDao dao;
	
	public User buscarUsuarioPorEmail(String email) {
		return dao.buscarUsuarioPorEmail(email);
	}	
}