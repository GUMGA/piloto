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
@SequenceGenerator(name = GumgaModel.SEQ_NAME, sequenceName = "SEQ_Marca")
//@Indexed
@Audited
@Entity
@Table(name = "Marca")
public class Marca extends GumgaModel<Long> {

    @Version
    private Integer version;
	private String nome;
	@Columns(columns = {
	@Column(name = "location_latitude"),
	@Column(name = "location_longitude")
	})
	private GumgaGeoLocation location;

	public Marca() {
	}

	public String getNome() {
		return this.nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}

	public GumgaGeoLocation getLocation() {
		return this.location;
	}
	public void setLocation(GumgaGeoLocation location) {
		this.location = location;
	}
}