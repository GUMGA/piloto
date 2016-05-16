define([], function() {

  ItemPedidoServicoListController.$inject = ['$scope', 'ItemPedidoServicoService', 'gumgaController'];

  function ItemPedidoServicoListController($scope, ItemPedidoServicoService, gumgaController) {

    gumgaController.createRestMethods($scope, ItemPedidoServicoService, 'itempedidoservico');

    ItemPedidoServicoService.resetDefaultState();
    $scope.itempedidoservico.execute('get');

    $scope.tableConfig = {
      columns: 'servico ,button',
      checkbox: true,
      columnsConfig: [{
        name: 'servico',
        title: '<span gumga-translate-tag="itempedidoservico.servico"> servico </span>',
        content: '{{$value.servico }}',
        sortField: 'servico'
      }, {
        name: 'button',
        title: ' ',
        content: '<span class="pull-right"><a class="btn btn-primary btn-sm" ui-sref="itempedidoservico.edit({id: {{$value.id}} })"><i class="glyphicon glyphicon-pencil"></i></a></span>'
      }]
    };

  };
  return ItemPedidoServicoListController;
});
