package br.com.maratona.dev;

import java.util.ArrayList;
import java.util.List;

public class Run {
	
	public static void main(String[] args) {	
		
		ContaCorrente contaCorrente = new ContaCorrente();
		contaCorrente.getLimite();
		contaCorrente.getCodigoPix();
		contaCorrente.setSaldo(Double.valueOf(250));
		
		ContaPoupanca contaPoupanca = new ContaPoupanca();
		contaPoupanca.setSaldo(Double.valueOf(1000));
		
		Conta conta = new ContaCorrente();
		Conta poupanca = new ContaPoupanca();
		conta.setAgencia(22536);
		
		
		// Cast
		if(conta instanceof ContaPoupanca) {
			((ContaPoupanca)conta).getValorRendimento();
		} else if(conta instanceof ContaCorrente) {
			((ContaCorrente)conta).getLimite();
			((ContaCorrente)conta).emprestimo(Float.valueOf(1.5f));
			conta.setSaldo(Double.valueOf(2500));
			((ContaCorrente)conta).sacar(2.50);
			conta.setStatus(EnumStatusConta.ATIVO);
			System.out.println(conta.getStatus().getDescricao());
			System.out.println(conta.getStatus().getCodigo());
		}
		
		List<Conta> lista = new ArrayList<Conta>();
		lista.add(conta);
		lista.add(poupanca);
		
		lista.get(0).getAgencia();
	}
}