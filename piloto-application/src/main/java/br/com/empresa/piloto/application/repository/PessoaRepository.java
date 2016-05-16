package br.com.empresa.piloto.application.repository;

import gumga.framework.domain.repository.GumgaCrudRepository;
import br.com.empresa.piloto.domain.model.Pessoa;

public interface PessoaRepository extends GumgaCrudRepository<Pessoa, Long> {
}