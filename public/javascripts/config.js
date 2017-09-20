angular.module('AngularApp').config(function($stateProvider, $urlRouterProvider, $httpProvider){
	$stateProvider
	.state('home', {
		url: '/',
    	templateUrl: 'views/index.jade',
    	controller: 'AngularCtrl'
	})
	.state('surmoi', {
		url: '/surmoi',
		templateUrl: 'views/surmoi.jade',
		controller: 'AngularCtrl'
	})
	/*.state('post', {
		url: '/post/:titulo/:foto/:seccion/:fecha/:contenido',
    	templateUrl: 'views/node.html',
		controller: function($scope, $stateParams){
    		$scope.titulo = $stateParams.titulo;
    		$scope.foto = $stateParams.foto;
    		$scope.seccion = $stateParams.seccion;
    		$scope.fecha = $stateParams.fecha;
    		$scope.contenido = $stateParams.contenido;
    	}
	})*/
});
