package br.com.stefanini.maratonadev.rest;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.PATCH;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.eclipse.microprofile.openapi.annotations.Operation;
import org.eclipse.microprofile.openapi.annotations.media.Content;
import org.eclipse.microprofile.openapi.annotations.media.Schema;
import org.eclipse.microprofile.openapi.annotations.responses.APIResponse;

import br.com.stefanini.maratonadev.dto.TodoDto;
import br.com.stefanini.maratonadev.model.TodoStatus;
import br.com.stefanini.maratonadev.service.TodoStatusService;

@Path("status")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class TodoStatusRest {
	
	@Inject
	TodoStatusService service;
	
	@GET
	@Path("/{id}")
	@Operation(summary = "Listar status por tarefa",
	description = "Listar status por tarefa")
	@APIResponse(responseCode = "200",
	description = "Status",
	content = {
			@Content(mediaType =  "application/json",
			schema = @Schema(implementation = TodoStatus.class))
			}
	)
	public Response listarStatusPorTarefa(@PathParam("id") Long id) {
		return Response
				.status(Response.Status.OK)
				.entity(service.buscarTodosStatusPorTarefa(id))
				.build();
	}
	
	

}
