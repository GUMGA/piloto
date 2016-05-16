define(function(require) {
   require('angular')
   .module('app.marca.services', [])
   .service('MarcaService', require('app/modules/marca/services/MarcaService'));
});