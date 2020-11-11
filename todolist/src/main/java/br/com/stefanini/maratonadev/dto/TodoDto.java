package br.com.stefanini.maratonadev.dto;

import java.time.LocalDateTime;
import java.io.Serializable;
import javax.json.bind.annotation.JsonbDateFormat;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import org.hibernate.validator.constraints.Length;

public class TodoDto implements Serializable {

	private Long id;
	
	@NotNull(message = "Nome é obrigatório.")
	@NotBlank(message = "Não é permitido nome vazio.")
	@Length(min = 3, max = 250, message = "Não é permitido nomes "
			+ "menores que 3 caracteres ou maiores que 250.")
	
	private String nome;
	
	@JsonbDateFormat("dd/MM/yyyy às HH:mm")
	private LocalDateTime dataCriacao;
	
	private String status;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public LocalDateTime getDataCriacao() {
		return dataCriacao;
	}

	public void setDataCriacao(LocalDateTime dataCriacao) {
		this.dataCriacao = dataCriacao;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}	
}