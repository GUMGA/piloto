define([], function() {

  ClienteListController.$inject = ['$scope', 'ClienteService', 'gumgaController'];

  function ClienteListController($scope, ClienteService, gumgaController) {

    gumgaController.createRestMethods($scope, ClienteService, 'cliente');

    ClienteService.resetDefaultState();
    $scope.cliente.execute('get');

    $scope.tableConfig = {
      columns: 'nome ,button',
      checkbox: true,
      columnsConfig: [{
        name: 'nome',
        title: '<span gumga-translate-tag="cliente.nome"> nome </span>',
        content: '{{$value.nome }}',
        sortField: 'nome'
      }, {
        name: 'button',
        title: ' ',
        content: '<span class="pull-right"><a class="btn btn-primary btn-sm" ui-sref="cliente.edit({id: {{$value.id}} })"><i class="glyphicon glyphicon-pencil"></i></a></span>'
      }]
    };

  };
  return ClienteListController;
});
