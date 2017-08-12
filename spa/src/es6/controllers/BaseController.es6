/**
 * base class
 */
export default class BaseController {

    get name() { return this._name; }
    
    constructor($scope, name) {
        console.log(name);
        this._name = name;
    }

}
BaseController.$inject = ['$scope'];
