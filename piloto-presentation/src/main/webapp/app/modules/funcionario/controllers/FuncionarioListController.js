define([], function() {

  FuncionarioListController.$inject = ['$scope', 'FuncionarioService', 'gumgaController'];

  function FuncionarioListController($scope, FuncionarioService, gumgaController) {

    gumgaController.createRestMethods($scope, FuncionarioService, 'funcionario');

    FuncionarioService.resetDefaultState();
    $scope.funcionario.execute('get');

    $scope.tableConfig = {
      columns: 'nome ,button',
      checkbox: true,
      columnsConfig: [{
        name: 'nome',
        title: '<span gumga-translate-tag="funcionario.nome"> nome </span>',
        content: '{{$value.nome }}',
        sortField: 'nome'
      }, {
        name: 'button',
        title: ' ',
        content: '<span class="pull-right"><a class="btn btn-primary btn-sm" ui-sref="funcionario.edit({id: {{$value.id}} })"><i class="glyphicon glyphicon-pencil"></i></a></span>'
      }]
    };

  };
  return FuncionarioListController;
});
