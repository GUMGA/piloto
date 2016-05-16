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
@SequenceGenerator(name = GumgaModel.SEQ_NAME, sequenceName = "SEQ_Pessoa")
//@Indexed
@Audited
@Entity
public class Pessoa extends GumgaModel<Long> {

    @Version
    private Integer version;
	private String nome;
	private GumgaEMail email;
	private GumgaPhoneNumber telefone;
	@Columns(columns = {
	@Column(name = "endereco_zip_code"),
	@Column(name = "endereco_premisse_type"),
	@Column(name = "endereco_premisse"),
	@Column(name = "endereco_number"),
	@Column(name = "endereco_information"),
	@Column(name = "endereco_neighbourhood"),
	@Column(name = "endereco_localization"),
	@Column(name = "endereco_state"),
	@Column(name = "endereco_country")
	})
	private GumgaAddress endereco;
	private GumgaBoolean ativo;

	public Pessoa() {
	}

	public String getNome() {
		return this.nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}

	public GumgaEMail getEmail() {
		return this.email;
	}
	public void setEmail(GumgaEMail email) {
		this.email = email;
	}

	public GumgaPhoneNumber getTelefone() {
		return this.telefone;
	}
	public void setTelefone(GumgaPhoneNumber telefone) {
		this.telefone = telefone;
	}

	public GumgaAddress getEndereco() {
		return this.endereco;
	}
	public void setEndereco(GumgaAddress endereco) {
		this.endereco = endereco;
	}

	public GumgaBoolean getAtivo() {
		return this.ativo;
	}
	public void setAtivo(GumgaBoolean ativo) {
		this.ativo = ativo;
	}
}