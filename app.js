(function(){
'use strict';

angular.module("ShoppingListCheckOff",[])
.controller("ToBuyController", ToBuyController)
.controller("AlreadyBoughtController",AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
  var buyCtrl = this;
  buyCtrl.toBuyList = ShoppingListCheckOffService.getItems();
  buyCtrl.buyItem = function(itemIdx){
    ShoppingListCheckOffService.boughtItem(itemIdx);
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
    var boughtCtrl = this;
    boughtCtrl.boughtItems = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService(){
  var service = this;
  var toBuyList = [{name:'Cookies',quantity:10},{name:'Donuts',quantity:5},
                  {name:'Candy',quantity:25}, {name:'Milk',quantity:2},
                  {name:'Bread',quantity:3}];
  var boughtList =[];

  service.getItems = function(){
    return toBuyList;
  };

  service.getBoughtItems = function(){
    return boughtList;
  };

  service.boughtItem = function(itemIdx){
    boughtList.push(toBuyList[itemIdx]);
    toBuyList.splice(itemIdx,1);

  };

}

})();
