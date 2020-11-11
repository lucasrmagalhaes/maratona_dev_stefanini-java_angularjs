package br.com.stefanini.maratonadev;

import static io.restassured.RestAssured.given;
import static org.hamcrest.CoreMatchers.is;

import org.apache.http.auth.AUTH;
import org.hamcrest.core.Is;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;

import io.quarkus.test.junit.QuarkusTest;
import io.restassured.http.ContentType;

@QuarkusTest
public class TodoRestTest {
	
	@Test
	@Order(1)
	public void testListarTodoVazio() {
		given()
		.auth()
		.preemptive()
		.basic("teste@stefanini.com", "stefanini")
		.when().get("/api/todo")
		.then()
		.statusCode(200)
		.contentType(ContentType.JSON)
		.body(is("[{\"dataCriacao\":\"23/10/2020 20:58\",\"id\":1,\"nome\":\"string\",\"status\":\"TODO\"}]"));
	}
	@Test
	@Order(2)
	public void testIncluirTodoComSucesso() {
		String body = 
				"{\n"
				+ "  \"nome\": \"TesteAgora\"\n"
				+ "}";
		given()
		.auth()
		.preemptive()
		.basic("teste@stefanini.com", "stefanini")
		.contentType(ContentType.JSON)
		.body(body)
		.when()
		.post("/api/todo")
		.then()
		.statusCode(201);
		
	}

}
