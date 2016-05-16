package br.com.empresa.piloto.api;

import br.com.empresa.piloto.application.service.FuncionarioService;
import br.com.empresa.piloto.domain.model.Funcionario;
import gumga.framework.application.GumgaService;
import gumga.framework.presentation.GumgaAPI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestMethod;
import gumga.framework.presentation.RestResponse;
import javax.validation.Valid;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.validation.BindingResult;
import gumga.framework.application.GumgaTempFileService;
import gumga.framework.domain.domains.GumgaImage;
import gumga.framework.presentation.GumgaAPI;
import org.springframework.web.bind.annotation.RequestMapping;
import java.io.IOException;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/funcionario")
public class FuncionarioAPI extends GumgaAPI<Funcionario, Long> {


    @Autowired
    public FuncionarioAPI(GumgaService<Funcionario, Long> service) {
        super(service);
    }

    @Override
    public Funcionario load(@PathVariable Long id) {
        return ((FuncionarioService)service).loadFuncionarioFat(id);
    }


}
