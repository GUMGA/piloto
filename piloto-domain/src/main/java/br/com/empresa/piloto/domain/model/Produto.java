package br.com.empresa.piloto.domain.model;
import gumga.framework.domain.GumgaModel; //TODO RETIRAR OS IMPORTS DESNECESSÁRIOS
import gumga.framework.domain.GumgaMultitenancy;
import java.io.Serializable;
import java.util.*;
import java.math.BigDecimal;
import javax.persistence.*;
import javax.validation.constraints.*;
import gumga.framework.domain.domains.*;
import org.hibernate.annotations.Columns;
import org.hibernate.search.annotations.Field;
import org.hibernate.search.annotations.Indexed;
import org.hibernate.envers.Audited;
import com.fasterxml.jackson.annotation.JsonIgnore;

@GumgaMultitenancy
@SequenceGenerator(name = GumgaModel.SEQ_NAME, sequenceName = "SEQ_Produto")
//@Indexed
@Audited
@Entity
public class Produto extends GumgaModel<Long> {

    @Version
    private Integer version;
	private String nome;
	private BigDecimal valor;
	private Integer quantidade;
	@ManyToOne
	private Marca marca;

	public Produto() {
	}

	public String getNome() {
		return this.nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}

	public BigDecimal getValor() {
		return this.valor;
	}
	public void setValor(BigDecimal valor) {
		this.valor = valor;
	}

	public Integer getQuantidade() {
		return this.quantidade;
	}
	public void setQuantidade(Integer quantidade) {
		this.quantidade = quantidade;
	}

	public Marca getMarca() {
		return this.marca;
	}
	public void setMarca(Marca marca) {
		this.marca = marca;
	}
}