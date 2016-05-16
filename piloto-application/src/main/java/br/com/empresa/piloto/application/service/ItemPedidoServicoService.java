package br.com.empresa.piloto.application.service;

import gumga.framework.application.GumgaService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import org.hibernate.Hibernate;

import br.com.empresa.piloto.application.repository.ItemPedidoServicoRepository;
import br.com.empresa.piloto.domain.model.ItemPedidoServico;


@Service
public class ItemPedidoServicoService extends GumgaService<ItemPedidoServico, Long> {

	private final ItemPedidoServicoRepository repository;

	@Autowired
	public ItemPedidoServicoService(ItemPedidoServicoRepository repository) {
		super(repository);
		this.repository = repository;
	}
	
}
