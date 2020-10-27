package br.com.maratona.dev;

import java.math.BigDecimal;
import java.util.Date;

public class Pessoa {
	
	// Primitive
	public char sexo;
	
	// Class
	private Integer idade;
	protected Long cpf;
	private Boolean vivo;
	private String nome;
	private Date nascimento;
	private BigDecimal saldo;
		
	// Constructor
	public Pessoa() {
		// Code
	}
	
	// Access Method
	public void setNome(String nome) {
		this.nome = nome;
	}
	
	public String getNome() {
		return nome;
	}
	
	public void setIdade(Integer idade) {
		if (idade > 100) {
			System.out.println("Idade maior que 100.");
		} else {
			this.idade = idade;
		}
	}
	
	public char getSexo() {
		return sexo;
	}

	public void setSexo(char sexo) {
		this.sexo = sexo;
	}

	public Boolean getVivo() {
		return vivo;
	}

	public void setVivo(Boolean vivo) {
		this.vivo = vivo;
	}

	public Date getNascimento() {
		return nascimento;
	}

	public void setNascimento(Date nascimento) {
		this.nascimento = nascimento;
	}

	public BigDecimal getSaldo() {
		return saldo;
	}

	public void setSaldo(BigDecimal saldo) {
		this.saldo = saldo;
	}

	public Integer getIdade() {
		return idade;
	}
	
	public void setCpf(Long cpf) {
		this.cpf = cpf;
	}
	
	public Long getCpf() {
		return cpf;
	}
	
}