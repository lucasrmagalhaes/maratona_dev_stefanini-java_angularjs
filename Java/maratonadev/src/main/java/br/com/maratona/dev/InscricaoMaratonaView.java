package br.com.maratona.dev;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/inscricao")
public class InscricaoMaratonaView extends HttpServlet {

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		System.out.println("Teste maratona");
		PrintWriter out = resp.getWriter();
		out.print("<h2>Maratona voltamos já!</h2>");
	}
	
	
}
