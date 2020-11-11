package br.com.stefanini.maratonadev.model;

import java.time.LocalDateTime;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedNativeQueries;
import javax.persistence.NamedNativeQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import org.hibernate.annotations.CreationTimestamp;
import io.quarkus.hibernate.orm.panache.PanacheEntityBase;

@Entity
@Table(name="todo")
@NamedNativeQueries ({
	@NamedNativeQuery(name="CONSULTAR_TODO", query = ""
			+ "SELECT id, nome, dataCriacao FROM todo", resultClass = Todo.class),
	
	@NamedNativeQuery(name="INSERIR_TODO", query = ""
			+ "INSERT INTO todo (nome, dataCriacao) values "
			+ "(:nome, :dataCriacao)"),
	
	@NamedNativeQuery(name="EXCLUIR_TODO", query = "DELETE todo WHERE id = :id"),
	
	@NamedNativeQuery(name="CONSULTAR_NOME_REPETIDO_TODO", query = ""
			+ "SELECT id, nome, dataCriacao FROM todo where nome like :nome", resultClass = Todo.class),
	
	@NamedNativeQuery(name="CONSULTAR_TODO_ID", query = ""
			+ "SELECT id, nome, dataCriacao FROM todo where id = :id", resultClass = Todo.class),
	
	@NamedNativeQuery(name="ATUALIZAR_TODO", query="UPDATE todo "
			+ "set nome = :nome, dataCriacao = :dataCriacao WHERE id = :id"),
})

public class Todo extends PanacheEntityBase {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name="nome", length = 250, nullable = false)
	private String nome;
	
	@Column(name="dataCriacao", nullable = false, updatable = false)
	@CreationTimestamp
	private LocalDateTime dataCriacao;
	
	@OneToMany(mappedBy = "todo", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<TodoStatus> status;
	
	public Todo(Long id) {
		this.id = id;
	}
	
	public Todo() {
		super();
	}

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
	
	public List<TodoStatus> getStatus() {
		return status;
	}
	
	public void setStatus(List<TodoStatus> status) {
		this.status = status;
	}
}