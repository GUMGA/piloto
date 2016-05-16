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
@SequenceGenerator(name = GumgaModel.SEQ_NAME, sequenceName = "SEQ_Funcionario")
//@Indexed
@Audited
@Entity
public class Funcionario extends Pessoa {

	private GumgaCPF cpf;
	private Date dataNascimento;
	@ManyToMany
	private Set<Servico> capacidades;

	public Funcionario() {
	}

	public GumgaCPF getCpf() {
		return this.cpf;
	}
	public void setCpf(GumgaCPF cpf) {
		this.cpf = cpf;
	}

	public Date getDataNascimento() {
		return this.dataNascimento;
	}
	public void setDataNascimento(Date dataNascimento) {
		this.dataNascimento = dataNascimento;
	}

	public Set<Servico> getCapacidades() {
		return this.capacidades;
	}
	public void setCapacidades(Set<Servico> capacidades) {
		this.capacidades = capacidades;
	}
}