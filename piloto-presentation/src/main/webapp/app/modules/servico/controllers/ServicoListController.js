define([], function() {

  ServicoListController.$inject = ['$scope', 'ServicoService', 'gumgaController'];

  function ServicoListController($scope, ServicoService, gumgaController) {

    gumgaController.createRestMethods($scope, ServicoService, 'servico');

    ServicoService.resetDefaultState();
    $scope.servico.execute('get');

    $scope.tableConfig = {
      columns: 'nome ,button',
      checkbox: true,
      columnsConfig: [{
        name: 'nome',
        title: '<span gumga-translate-tag="servico.nome"> nome </span>',
        content: '{{$value.nome }}',
        sortField: 'nome'
      }, {
        name: 'button',
        title: ' ',
        content: '<span class="pull-right"><a class="btn btn-primary btn-sm" ui-sref="servico.edit({id: {{$value.id}} })"><i class="glyphicon glyphicon-pencil"></i></a></span>'
      }]
    };

  };
  return ServicoListController;
});
