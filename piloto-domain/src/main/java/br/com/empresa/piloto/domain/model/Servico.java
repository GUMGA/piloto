package br.com.empresa.piloto.domain.model;

import gumga.framework.domain.GumgaModel; //TODO RETIRAR OS IMPORTS DESNECESSÁRIOS
import gumga.framework.domain.GumgaMultitenancy;
import java.io.Serializable;
import java.util.*;
import java.math.BigDecimal;
import javax.persistence.*;
import javax.validation.constraints.*;
import gumga.framework.domain.domains.*;
import org.hibernate.annotations.Columns;
import org.hibernate.search.annotations.Field;
import org.hibernate.search.annotations.Indexed;
import org.hibernate.envers.Audited;
import com.fasterxml.jackson.annotation.JsonIgnore;

@GumgaMultitenancy
@SequenceGenerator(name = GumgaModel.SEQ_NAME, sequenceName = "SEQ_Servico")
//@Indexed
@Audited
@Entity
public class Servico extends GumgaModel<Long> {

    @Version
    private Integer version;
    private String nome;
    private String codigoUniversal;

    @Columns(columns = {
        @Column(name = "arquivo_name"),
        @Column(name = "arquivo_size"),
        @Column(name = "arquivo_type"),
        @Column(name = "arquivo_bytes", length = 100 * 1024 * 1024)
    })
    private GumgaFile arquivo;

    public Servico() {
    }

    public String getNome() {
        return this.nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public GumgaFile getArquivo() {
        return arquivo;
    }

    public void setArquivo(GumgaFile arquivo) {
        this.arquivo = arquivo;
    }

    public String getCodigoUniversal() {
        return this.codigoUniversal;
    }

    public void setCodigoUniversal(String codigoUniversal) {
        this.codigoUniversal = codigoUniversal;
    }
}
