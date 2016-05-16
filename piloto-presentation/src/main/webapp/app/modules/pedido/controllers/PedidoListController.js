define([], function() {

  PedidoListController.$inject = ['$scope', 'PedidoService', 'gumgaController'];

  function PedidoListController($scope, PedidoService, gumgaController) {

    gumgaController.createRestMethods($scope, PedidoService, 'pedido');

    PedidoService.resetDefaultState();
    $scope.pedido.execute('get');

    $scope.tableConfig = {
      columns: 'numero ,button',
      checkbox: true,
      columnsConfig: [{
        name: 'numero',
        title: '<span gumga-translate-tag="pedido.numero"> numero </span>',
        content: '{{$value.numero }}',
        sortField: 'numero'
      }, {
        name: 'button',
        title: ' ',
        content: '<span class="pull-right"><a class="btn btn-primary btn-sm" ui-sref="pedido.edit({id: {{$value.id}} })"><i class="glyphicon glyphicon-pencil"></i></a></span>'
      }]
    };

  };
  return PedidoListController;
});
