define([], function() {

  EntregaListController.$inject = ['$scope', 'EntregaService', 'gumgaController'];

  function EntregaListController($scope, EntregaService, gumgaController) {

    gumgaController.createRestMethods($scope, EntregaService, 'entrega');

    EntregaService.resetDefaultState();
    $scope.entrega.execute('get');

    $scope.tableConfig = {
      columns: 'quando ,button',
      checkbox: true,
      columnsConfig: [{
        name: 'quando',
        title: '<span gumga-translate-tag="entrega.quando"> quando </span>',
        content: '{{$value.quando }}',
        sortField: 'quando'
      }, {
        name: 'button',
        title: ' ',
        content: '<span class="pull-right"><a class="btn btn-primary btn-sm" ui-sref="entrega.edit({id: {{$value.id}} })"><i class="glyphicon glyphicon-pencil"></i></a></span>'
      }]
    };

  };
  return EntregaListController;
});
