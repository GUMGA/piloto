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
@SequenceGenerator(name = GumgaModel.SEQ_NAME, sequenceName = "SEQ_ItemPedidoServico")
//@Indexed
@Audited
@Entity
public class ItemPedidoServico extends GumgaModel<Long> {

    @Version
    private Integer version;
	@ManyToOne
	private Servico servico;
	private Integer horas;

	public ItemPedidoServico() {
	}

	public Servico getServico() {
		return this.servico;
	}
	public void setServico(Servico servico) {
		this.servico = servico;
	}

	public Integer getHoras() {
		return this.horas;
	}
	public void setHoras(Integer horas) {
		this.horas = horas;
	}
}