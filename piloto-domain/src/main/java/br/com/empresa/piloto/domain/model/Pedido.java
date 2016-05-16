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
@SequenceGenerator(name = GumgaModel.SEQ_NAME, sequenceName = "SEQ_Pedido")
//@Indexed
@Audited
@Entity
public class Pedido extends GumgaModel<Long> {

    @Version
    private Integer version;
	private String numero;
	private Date quando;
	@ManyToOne
	private Cliente cliente;
	@Columns(columns = {
	@Column(name = "endEntrega_zip_code"),
	@Column(name = "endEntrega_premisse_type"),
	@Column(name = "endEntrega_premisse"),
	@Column(name = "endEntrega_number"),
	@Column(name = "endEntrega_information"),
	@Column(name = "endEntrega_neighbourhood"),
	@Column(name = "endEntrega_localization"),
	@Column(name = "endEntrega_state"),
	@Column(name = "endEntrega_country")
	})
	private GumgaAddress enderecoDeEntrega;
	@OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
	private List<ItemPedidoProduto> produtos;
	@OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
	private List<ItemPedidoServico> servicos;

	public Pedido() {
	}

	public String getNumero() {
		return this.numero;
	}
	public void setNumero(String numero) {
		this.numero = numero;
	}

	public Date getQuando() {
		return this.quando;
	}
	public void setQuando(Date quando) {
		this.quando = quando;
	}

	public Cliente getCliente() {
		return this.cliente;
	}
	public void setCliente(Cliente cliente) {
		this.cliente = cliente;
	}

	public GumgaAddress getEnderecoDeEntrega() {
		return this.enderecoDeEntrega;
	}
	public void setEnderecoDeEntrega(GumgaAddress enderecoDeEntrega) {
		this.enderecoDeEntrega = enderecoDeEntrega;
	}

	public List<ItemPedidoProduto> getProdutos() {
		return this.produtos;
	}
	public void setProdutos(List<ItemPedidoProduto> produtos) {
		this.produtos = produtos;
	}

	public List<ItemPedidoServico> getServicos() {
		return this.servicos;
	}
	public void setServicos(List<ItemPedidoServico> servicos) {
		this.servicos = servicos;
	}
}