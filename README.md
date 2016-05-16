# piloto

# Liquibase
Tutorial para gerar o changeLog de uma base ja existe.
Necessario baixar o liquibase para rodar na linha de comando.
https://github.com/liquibase/liquibase/releases/download/liquibase-parent-3.5.1/liquibase-3.5.1-bin.zip

Commando:
./liquibase --driver="nome driver do banco" --classpath="driver do banco "  --changeLogFile="nome do arquivo a ser gerado" --url="url do banco"  --username="usuario"  --password="senha do banco" generateChangeLog

O arquivo changelog-master é o arquivo principal do liquibase, dentro dele voce pode colocar os tipo de dados para criar os campos das tabelas, e incluir os arquivos de changelog.

Os arquivos estão localizados na pasta: src/main/resources/