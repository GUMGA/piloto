package br.com.empresa.piloto.application.repository;

import gumga.framework.domain.repository.GumgaCrudRepository;
import br.com.empresa.piloto.domain.model.Marca;

public interface MarcaRepository extends GumgaCrudRepository<Marca, Long> {
}