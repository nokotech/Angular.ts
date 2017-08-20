/**
 * base class
 */
export default class BaseController {

    get name() { return this._name; }
    
    constructor($scope, name) {
        console.log(name);
        this._name = name;
        $(document).ready(() => this.ready($scope));
    }

    ready($scope) {
        console.log( this.name + "called ready." );
    }

    render($scope) {
        $scope.$apply();
    }

}
BaseController.$inject = ['$scope'];
