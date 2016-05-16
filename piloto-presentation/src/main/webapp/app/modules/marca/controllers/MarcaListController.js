define([], function() {

  MarcaListController.$inject = ['$scope', 'MarcaService', 'gumgaController'];

  function MarcaListController($scope, MarcaService, gumgaController) {

    gumgaController.createRestMethods($scope, MarcaService, 'marca');

    MarcaService.resetDefaultState();
    $scope.marca.execute('get');

    $scope.tableConfig = {
      columns: 'nome ,button',
      checkbox: true,
      columnsConfig: [{
        name: 'nome',
        title: '<span gumga-translate-tag="marca.nome"> nome </span>',
        content: '{{$value.nome }}',
        sortField: 'nome'
      }, {
        name: 'button',
        title: ' ',
        content: '<span class="pull-right"><a class="btn btn-primary btn-sm" ui-sref="marca.edit({id: {{$value.id}} })"><i class="glyphicon glyphicon-pencil"></i></a></span>'
      }]
    };

  };
  return MarcaListController;
});
