package br.com.empresa.piloto.application.repository;

import gumga.framework.domain.repository.GumgaCrudRepository;
import br.com.empresa.piloto.domain.model.Cliente;

public interface ClienteRepository extends GumgaCrudRepository<Cliente, Long> {
}