package br.com.stefanini.maratonadev.model;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.UpdateTimestamp;

import br.com.stefanini.maratonadev.model.dominio.StatusEnum;
import io.quarkus.hibernate.orm.panache.PanacheEntity;
import io.quarkus.hibernate.orm.panache.PanacheEntityBase;

@Entity
@Table(name="todostatus")
public class TodoStatus extends PanacheEntity {
	@Column(name = "status", nullable = false)
	@Enumerated(EnumType.STRING)
	private StatusEnum status;
	
	@ManyToOne(optional=false)
	@JoinColumn(name="todo_id", updatable=false)
	private Todo todo;
	
	@Column(name = "data")
	@UpdateTimestamp
	private LocalDateTime data;
	
	@ManyToOne(optional = false)
	private User user;
	
	TodoStatus(){
		super();
	}
	
	public TodoStatus(StatusEnum statusEnum){
		this.status = statusEnum;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public StatusEnum getStatus() {
		return status;
	}

	public void setStatus(StatusEnum status) {
		this.status = status;
	}

	public LocalDateTime getData() {
		return data;
	}

	public void setData(LocalDateTime data) {
		this.data = data;
	}
	
	public Todo getTodo() {
		return todo;
	}
	
	public void setTodo(Todo todo) {
		this.todo = todo;
	}
	
	@Override
	public String toString() {
		return status.name();	
	}
	
	public User getUser() {
		return user;
	}
	
	public void setUser(User user) {
		this.user = user;
	}	
}