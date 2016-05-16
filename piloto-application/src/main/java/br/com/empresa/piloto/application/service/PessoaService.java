package br.com.empresa.piloto.application.service;

import gumga.framework.application.GumgaService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import org.hibernate.Hibernate;

import br.com.empresa.piloto.application.repository.PessoaRepository;
import br.com.empresa.piloto.domain.model.Pessoa;


@Service
public class PessoaService extends GumgaService<Pessoa, Long> {

	private final PessoaRepository repository;

	@Autowired
	public PessoaService(PessoaRepository repository) {
		super(repository);
		this.repository = repository;
	}
	
}
