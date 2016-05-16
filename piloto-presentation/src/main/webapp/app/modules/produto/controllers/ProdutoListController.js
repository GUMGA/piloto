define([], function() {

  ProdutoListController.$inject = ['$scope', 'ProdutoService', 'gumgaController'];

  function ProdutoListController($scope, ProdutoService, gumgaController) {

    gumgaController.createRestMethods($scope, ProdutoService, 'produto');

    ProdutoService.resetDefaultState();
    $scope.produto.execute('get');

    $scope.tableConfig = {
      columns: 'nome ,button',
      checkbox: true,
      columnsConfig: [{
        name: 'nome',
        title: '<span gumga-translate-tag="produto.nome"> nome </span>',
        content: '{{$value.nome }}',
        sortField: 'nome'
      }, {
        name: 'button',
        title: ' ',
        content: '<span class="pull-right"><a class="btn btn-primary btn-sm" ui-sref="produto.edit({id: {{$value.id}} })"><i class="glyphicon glyphicon-pencil"></i></a></span>'
      }]
    };

  };
  return ProdutoListController;
});
