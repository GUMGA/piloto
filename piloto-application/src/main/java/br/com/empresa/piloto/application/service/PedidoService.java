package br.com.empresa.piloto.application.service;

import gumga.framework.application.GumgaService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import org.hibernate.Hibernate;

import br.com.empresa.piloto.application.repository.PedidoRepository;
import br.com.empresa.piloto.domain.model.Pedido;

import br.com.empresa.piloto.domain.model.ItemPedidoProduto;
import br.com.empresa.piloto.domain.model.ItemPedidoServico;

@Service
public class PedidoService extends GumgaService<Pedido, Long> {

	private final PedidoRepository repository;

	@Autowired
	public PedidoService(PedidoRepository repository) {
		super(repository);
		this.repository = repository;
	}
	
	@Transactional
	public Pedido loadPedidoFat(Long id) {
		Pedido obj = repository.findOne(id);	
		
		Hibernate.initialize(obj.getProdutos());
		Hibernate.initialize(obj.getProdutos());
		Hibernate.initialize(obj.getServicos());
		
		for(ItemPedidoProduto subObj:obj.getProdutos()) {
			Hibernate.initialize(subObj.getEntregas());
		}		
		for(ItemPedidoProduto subObj:obj.getProdutos()) {
			Hibernate.initialize(subObj.getEntregas());
		}		
		
		return obj;
	}
}
