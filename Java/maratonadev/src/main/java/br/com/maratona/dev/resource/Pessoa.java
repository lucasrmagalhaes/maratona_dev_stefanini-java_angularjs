package br.com.maratona.dev.resource;

public class Pessoa {
	
	public Pessoa(String nome, Integer matricula) {
		this.nome = nome;
		this.matricula = matricula;
	}
	public Pessoa() {
		// TODO Auto-generated constructor stub
	}
	private String nome;
	private Integer matricula;
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public Integer getMatricula() {
		return matricula;
	}
	public void setMatricula(Integer matricula) {
		this.matricula = matricula;
	}	
}