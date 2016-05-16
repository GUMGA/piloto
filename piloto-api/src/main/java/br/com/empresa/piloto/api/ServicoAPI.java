package br.com.empresa.piloto.api;

import br.com.empresa.piloto.application.service.ServicoService;
import br.com.empresa.piloto.domain.model.Servico;
import com.wordnik.swagger.annotations.ApiOperation;
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
import gumga.framework.domain.domains.GumgaFile;
import gumga.framework.domain.domains.GumgaImage;
import gumga.framework.presentation.GumgaAPI;
import org.springframework.web.bind.annotation.RequestMapping;
import java.io.IOException;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/servico")
public class ServicoAPI extends GumgaAPI<Servico, Long> {

    @Autowired
    private GumgaTempFileService gumgaTempFileService;

    @Autowired
    public ServicoAPI(GumgaService<Servico, Long> service) {
        super(service);
    }

    @Transactional
    @ApiOperation(value = "save", notes = "Salva .")
    @RequestMapping(method = RequestMethod.POST)
    public RestResponse<Servico> save(@RequestBody @Valid Servico obj, BindingResult result) {
        if (obj.getArquivo() != null) {
            obj.setArquivo((GumgaFile) gumgaTempFileService.find(obj.getArquivo().getName()));
        }
        return super.save(obj, result);
    }

    @Transactional
    @ApiOperation(value = "update", notes = "Atualiza ")
    @RequestMapping(value = "/{id}", method = RequestMethod.PUT, consumes = "application/json")
    public RestResponse<Servico> update(@PathVariable("id") Long id,
            @Valid @RequestBody Servico obj, BindingResult result) {
        Servico old = service.view(id);
        if (obj.getArquivo() != null) {
            if ("null".equals(obj.getArquivo().getName())) {
                obj.setArquivo(null);
            } else if (obj.getArquivo().getSize() == 0) {
                obj.setArquivo((GumgaFile) gumgaTempFileService.find(obj.getArquivo().getName()));
            }
        }

        return super.update(id, obj, result);
    }

    @ApiOperation(value = "arquivoUpload", notes = "Faz o upload do arquivo Servico.")
    @RequestMapping(method = RequestMethod.POST, value = "/arquivo")
    public String arquivoUpload(@RequestParam MultipartFile arquivo) throws IOException {
        GumgaFile gf = new GumgaFile();
        gf.setBytes(arquivo.getBytes());
        gf.setMimeType(arquivo.getContentType());
        gf.setName(arquivo.getOriginalFilename());
        gf.setSize(arquivo.getSize());
        String fileName = gumgaTempFileService.create(gf);
        System.out.println("-------------Arquivo ---->" + fileName + " " + arquivo.getOriginalFilename());
        return fileName;
    }

    @ApiOperation(value = "arquivoDelete", notes = "Deleta arquivo do usuário.")
    @RequestMapping(method = RequestMethod.DELETE, value = "/arquivo/{fileName}")
    public String arquivoDelete(@PathVariable String fileName) {
        return gumgaTempFileService.delete(fileName);
    }

    @ApiOperation(value = "arquivoGet", notes = "Retorna os bytes do arquivo.")
    @RequestMapping(method = RequestMethod.GET, value = "/arquivo/{fileName}")
    public byte[] arquivoGet(@PathVariable(value = "fileName") String fileName) {
        return gumgaTempFileService.find(fileName).getBytes();
    }

}
