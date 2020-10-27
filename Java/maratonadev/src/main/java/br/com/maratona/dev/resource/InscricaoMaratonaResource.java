package br.com.maratona.dev.resource;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.util.List;

import javax.inject.Inject;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

@Path(value = "/inscricao" )
public class InscricaoMaratonaResource {
	
	@Inject
	InscricaoHelper inscricaoHelper; // End-point
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("lista/inscritos")
	
	public List<Pessoa> matricula() {
		inscricaoHelper.init();
		return inscricaoHelper.getPessoas();
	}
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("find/inscrito/{id}")
	public Response matriculaPorId(@PathParam("id") String id) {
		Pessoa objetoRetorno;
		
		try {
			objetoRetorno = inscricaoHelper.findPessoa(new Integer(id));
		}catch (NumberFormatException e) {
			return Response.status(Status.INTERNAL_SERVER_ERROR).entity("Erro na solicitação..").build();
		}catch (NullPointerException e) {
			return Response.status(Status.INTERNAL_SERVER_ERROR).entity("Erro na solicitação..Null").build();
		}
		
		if(objetoRetorno != null) {
			return Response.status(Status.OK).entity(objetoRetorno).build();
		}else {
			return Response.status(Status.NO_CONTENT).build();
		}
	}
	
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Path("cadastrar/inscrito/")
	
	public Response cadastrar(Pessoa pessoa) {
		
		inscricaoHelper.init();
		pessoa.setMatricula(inscricaoHelper.getPessoas().size()+1);
		inscricaoHelper.getPessoas().add(pessoa);
		
		return Response.status(Status.CREATED).entity("Inscrito com sucesso!").build();
	}
	
	@PUT
	@Produces(MediaType.APPLICATION_JSON)
	@Path("alterar/inscrito/")
	
	public Response alterar(Pessoa pessoa) {
		inscricaoHelper.init();
		Pessoa pessoaEdit = null;
		
		for (Pessoa indice : inscricaoHelper.getPessoas()) {
			if(indice.getMatricula().equals(pessoa.getMatricula())) {
				pessoaEdit = indice;
			}
		}
		if(pessoaEdit != null) {
			pessoaEdit.setNome(pessoa.getNome());
			return Response.status(Status.OK).entity(pessoaEdit).build();
		}else {
			return Response.status(Status.NO_CONTENT).build();
		}
	}
	
	@DELETE
	@Produces(MediaType.APPLICATION_JSON)
	@Path("remover/inscrito/{id}")
	
	public Response removerPorId(@PathParam("id") String id) {
		
		inscricaoHelper.init();
		Pessoa remove = null;
		
		for (Pessoa indice : inscricaoHelper.getPessoas()) {
			if(indice.getMatricula().equals(new Integer(id))) {
				remove = indice;
			}
		}
		
		if(inscricaoHelper.getPessoas().remove(remove)) {
			return Response.status(Status.OK).entity("Removido com sucesso!").build();
		}
		return Response.status(Status.NO_CONTENT).build();
	}
	
	
	public void callInputFile() {
		try {
			inputFile();
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		}
		// Continue
	}
	
	// Example
	public void inputFile() throws FileNotFoundException {
		FileInputStream fl = new  FileInputStream("/dev/teste.txt");
	}
	
		
}