package br.com.empresa.piloto.application.service;

import gumga.framework.application.GumgaService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import org.hibernate.Hibernate;

import br.com.empresa.piloto.application.repository.ProdutoRepository;
import br.com.empresa.piloto.domain.model.Produto;


@Service
public class ProdutoService extends GumgaService<Produto, Long> {

	private final ProdutoRepository repository;

	@Autowired
	public ProdutoService(ProdutoRepository repository) {
		super(repository);
		this.repository = repository;
	}
	
}
