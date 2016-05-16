package br.com.empresa.piloto.application.repository;

import gumga.framework.domain.repository.GumgaCrudRepository;
import br.com.empresa.piloto.domain.model.Pedido;

public interface PedidoRepository extends GumgaCrudRepository<Pedido, Long> {
}