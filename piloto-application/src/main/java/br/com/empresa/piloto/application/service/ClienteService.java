package br.com.empresa.piloto.application.service;

import gumga.framework.application.GumgaService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import org.hibernate.Hibernate;

import br.com.empresa.piloto.application.repository.ClienteRepository;
import br.com.empresa.piloto.domain.model.Cliente;


@Service
public class ClienteService extends GumgaService<Cliente, Long> {

	private final ClienteRepository repository;

	@Autowired
	public ClienteService(ClienteRepository repository) {
		super(repository);
		this.repository = repository;
	}
	
}
