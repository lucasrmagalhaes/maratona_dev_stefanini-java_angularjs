package br.com.stefanini.maratonadev.model.dominio;

public enum StatusEnum {
	TODO("Para Executar"),
	DOING("Executando"),
	DONE("Feito"),
	BLOCK("Bloqueado");

	private String descricao;
	
	StatusEnum(String descricao){
		this.descricao = descricao;
	}
	
	public static Boolean isInvalido(String teste) {
		for(StatusEnum status: StatusEnum.values()) {
			if(status.name().equals(teste)) {
				return Boolean.FALSE;
			}
		}
		return Boolean.TRUE;	
	}	
}