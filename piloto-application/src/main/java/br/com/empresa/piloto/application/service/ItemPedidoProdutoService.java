package br.com.empresa.piloto.application.service;

import gumga.framework.application.GumgaService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import org.hibernate.Hibernate;

import br.com.empresa.piloto.application.repository.ItemPedidoProdutoRepository;
import br.com.empresa.piloto.domain.model.ItemPedidoProduto;

import br.com.empresa.piloto.domain.model.Entrega;

@Service
public class ItemPedidoProdutoService extends GumgaService<ItemPedidoProduto, Long> {

	private final ItemPedidoProdutoRepository repository;

	@Autowired
	public ItemPedidoProdutoService(ItemPedidoProdutoRepository repository) {
		super(repository);
		this.repository = repository;
	}
	
	@Transactional
	public ItemPedidoProduto loadItemPedidoProdutoFat(Long id) {
		ItemPedidoProduto obj = repository.findOne(id);	
		
		Hibernate.initialize(obj.getEntregas());
		
		
		return obj;
	}
}
