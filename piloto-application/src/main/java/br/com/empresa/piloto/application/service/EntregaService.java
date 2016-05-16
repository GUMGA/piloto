package br.com.empresa.piloto.application.service;

import gumga.framework.application.GumgaService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import org.hibernate.Hibernate;

import br.com.empresa.piloto.application.repository.EntregaRepository;
import br.com.empresa.piloto.domain.model.Entrega;


@Service
public class EntregaService extends GumgaService<Entrega, Long> {

	private final EntregaRepository repository;

	@Autowired
	public EntregaService(EntregaRepository repository) {
		super(repository);
		this.repository = repository;
	}
	
}
