package br.com.empresa.piloto.application.repository;

import gumga.framework.domain.repository.GumgaCrudRepository;
import br.com.empresa.piloto.domain.model.Funcionario;

public interface FuncionarioRepository extends GumgaCrudRepository<Funcionario, Long> {
}