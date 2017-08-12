var module = angular.module("todoApp", []);
var TarefasController = function($scope, $print) {
 $scope.listTarefas = new Array();
 $scope.adicionarTarefa = function() {
  if ($scope.descricao != "" && $scope.descricao != undefined && $scope.descricao != null) {
   $scope.listTarefas.push($scope.descricao);
   $scope.descricao = "";
  }
 };
 $scope.imprimirList = function() {
  for (var i = 0; i < $scope.listTarefas.length; ++i) {
   $scope.listTarefas[i]
   console.log($scope.listTarefas[i]);
  }
 }
 $scope.imprimirTexto = function() {
  $print.mensagem($scope.descricao);
 };
};
module.controller("TarefasController", TarefasController);
module.service("$print", function() {
 var imprimirTexto = function(descricao) {
  alert(descricao);
 };
 return {
  mensagem: imprimirTexto
 }
});