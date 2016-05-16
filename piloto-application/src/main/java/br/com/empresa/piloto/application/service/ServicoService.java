package br.com.empresa.piloto.application.service;

import gumga.framework.application.GumgaService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import org.hibernate.Hibernate;

import br.com.empresa.piloto.application.repository.ServicoRepository;
import br.com.empresa.piloto.domain.model.Servico;


@Service
public class ServicoService extends GumgaService<Servico, Long> {

	private final ServicoRepository repository;

	@Autowired
	public ServicoService(ServicoRepository repository) {
		super(repository);
		this.repository = repository;
	}
	
}
