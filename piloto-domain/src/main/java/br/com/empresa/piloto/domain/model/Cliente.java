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
@SequenceGenerator(name = GumgaModel.SEQ_NAME, sequenceName = "SEQ_Cliente")
//@Indexed
@Audited
@Entity
public class Cliente extends Pessoa {

	private GumgaCNPJ cnpj;
	private GumgaURL url;

	public Cliente() {
	}

	public GumgaCNPJ getCnpj() {
		return this.cnpj;
	}
	public void setCnpj(GumgaCNPJ cnpj) {
		this.cnpj = cnpj;
	}

	public GumgaURL getUrl() {
		return this.url;
	}
	public void setUrl(GumgaURL url) {
		this.url = url;
	}
}