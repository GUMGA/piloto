package br.com.empresa.piloto.application.repository;

import gumga.framework.domain.repository.GumgaCrudRepository;
import br.com.empresa.piloto.domain.model.Produto;

public interface ProdutoRepository extends GumgaCrudRepository<Produto, Long> {
}