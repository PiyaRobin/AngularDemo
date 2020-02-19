function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["orderschild-orderschild-module"], {
  /***/
  "./src/app/modules/orders/orderschild/orderschild-routing.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/modules/orders/orderschild/orderschild-routing.module.ts ***!
    \**************************************************************************/

  /*! exports provided: OrderschildRoutingModule */

  /***/
  function srcAppModulesOrdersOrderschildOrderschildRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderschildRoutingModule", function () {
      return OrderschildRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _orderschild_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./orderschild.component */
    "./src/app/modules/orders/orderschild/orderschild.component.ts");

    var routes = [{
      path: '',
      component: _orderschild_component__WEBPACK_IMPORTED_MODULE_2__["OrderschildComponent"]
    }];

    var OrderschildRoutingModule = function OrderschildRoutingModule() {
      _classCallCheck(this, OrderschildRoutingModule);
    };

    OrderschildRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: OrderschildRoutingModule
    });
    OrderschildRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function OrderschildRoutingModule_Factory(t) {
        return new (t || OrderschildRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OrderschildRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderschildRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/orders/orderschild/orderschild.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/modules/orders/orderschild/orderschild.component.ts ***!
    \*********************************************************************/

  /*! exports provided: OrderschildComponent */

  /***/
  function srcAppModulesOrdersOrderschildOrderschildComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderschildComponent", function () {
      return OrderschildComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var OrderschildComponent =
    /*#__PURE__*/
    function () {
      function OrderschildComponent() {
        _classCallCheck(this, OrderschildComponent);
      }

      _createClass(OrderschildComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return OrderschildComponent;
    }();

    OrderschildComponent.ɵfac = function OrderschildComponent_Factory(t) {
      return new (t || OrderschildComponent)();
    };

    OrderschildComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: OrderschildComponent,
      selectors: [["app-orderschild"]],
      decls: 2,
      vars: 0,
      template: function OrderschildComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "orderschild works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvb3JkZXJzL29yZGVyc2NoaWxkL29yZGVyc2NoaWxkLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderschildComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-orderschild',
          templateUrl: './orderschild.component.html',
          styleUrls: ['./orderschild.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/orders/orderschild/orderschild.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/modules/orders/orderschild/orderschild.module.ts ***!
    \******************************************************************/

  /*! exports provided: OrderschildModule */

  /***/
  function srcAppModulesOrdersOrderschildOrderschildModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderschildModule", function () {
      return OrderschildModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _orderschild_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./orderschild-routing.module */
    "./src/app/modules/orders/orderschild/orderschild-routing.module.ts");
    /* harmony import */


    var _orderschild_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./orderschild.component */
    "./src/app/modules/orders/orderschild/orderschild.component.ts");

    var OrderschildModule = function OrderschildModule() {
      _classCallCheck(this, OrderschildModule);
    };

    OrderschildModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: OrderschildModule
    });
    OrderschildModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function OrderschildModule_Factory(t) {
        return new (t || OrderschildModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _orderschild_routing_module__WEBPACK_IMPORTED_MODULE_2__["OrderschildRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OrderschildModule, {
        declarations: [_orderschild_component__WEBPACK_IMPORTED_MODULE_3__["OrderschildComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _orderschild_routing_module__WEBPACK_IMPORTED_MODULE_2__["OrderschildRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderschildModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_orderschild_component__WEBPACK_IMPORTED_MODULE_3__["OrderschildComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _orderschild_routing_module__WEBPACK_IMPORTED_MODULE_2__["OrderschildRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=orderschild-orderschild-module-es5.js.map