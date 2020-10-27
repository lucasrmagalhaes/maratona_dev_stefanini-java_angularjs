package br.com.maratona.dev;

public class ContaOuro extends Conta implements ContaPrivate, Emprestimo {

	@Override
	public void saqueExtra(Float taxa) {
		// 0.99		
	}
	
	@Override
	public void emprestimo(Float taxa) {
		// 
	}
	
}