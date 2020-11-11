package br.com.stefanini.maratonadev.model;

import java.util.UUID;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

import io.quarkus.hibernate.orm.panache.PanacheEntity;
import io.quarkus.hibernate.orm.panache.PanacheEntityBase;
import io.quarkus.security.jpa.Password;
import io.quarkus.security.jpa.PasswordType;
import io.quarkus.security.jpa.Roles;
import io.quarkus.security.jpa.UserDefinition;
import io.quarkus.security.jpa.Username;

@Entity
@Table(name="user")
@UserDefinition
public class User extends PanacheEntityBase {

	@Id
	@GeneratedValue(generator = "UUID")
	@GenericGenerator(
			name = "UUID",
			strategy = "org.hibernate.id.UUIDGenerator"
			)
	private UUID id;
	
	
	@Column(name="nome", nullable = false)
	private String nome;
	
	@Username
	@Column(name="email",nullable = false, unique = true)
	private String email;
	
	@Password(PasswordType.CLEAR)
	@Column(name="senha",nullable = false)
	private String senha;
	
	@Roles
	@Column(name = "permissao",nullable = false)
	private String permissao;

	public User() {
		super();
	}



	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}



	public UUID getId() {
		return id;
	}



	public void setId(UUID id) {
		this.id = id;
	}



	public String getPermissao() {
		return permissao;
	}



	public void setPermissao(String permissao) {
		this.permissao = permissao;
	}
	
	
}
