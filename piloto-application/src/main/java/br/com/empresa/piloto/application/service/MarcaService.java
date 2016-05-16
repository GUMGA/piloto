package br.com.empresa.piloto.application.service;

import gumga.framework.application.GumgaService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import org.hibernate.Hibernate;

import br.com.empresa.piloto.application.repository.MarcaRepository;
import br.com.empresa.piloto.domain.model.Marca;


@Service
public class MarcaService extends GumgaService<Marca, Long> {

	private final MarcaRepository repository;

	@Autowired
	public MarcaService(MarcaRepository repository) {
		super(repository);
		this.repository = repository;
	}
	
}
