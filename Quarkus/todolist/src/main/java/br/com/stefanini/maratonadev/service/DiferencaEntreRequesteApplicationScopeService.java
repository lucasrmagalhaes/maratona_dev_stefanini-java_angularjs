package br.com.stefanini.maratonadev.service;

import java.util.ArrayList;
import java.util.List;

import javax.enterprise.context.ApplicationScoped;
import javax.enterprise.context.RequestScoped;

//@ApplicationScoped
@RequestScoped
public class DiferencaEntreRequesteApplicationScopeService {
	
	/**
	 * Código com exemplo de utilização do ApplicationScoped
	 * e RequestScoped
	 */
	private List<String> listaNome = new ArrayList<>();
	
	
	public void adicionar(String nome) {
		listaNome.add(nome); 
	}
	
	public List<String> listar(){
		return listaNome;
	}
}
