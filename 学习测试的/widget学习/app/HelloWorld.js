/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "esri/core/tsSupport/declareExtendsHelper", "esri/core/tsSupport/decorateHelper", "esri/core/accessorSupport/decorators", "esri/widgets/Widget", "esri/widgets/support/widget"], function (require, exports, __extends, __decorate, decorators_1, Widget, widget_1) {
    "use strict";
    var CSS = {
        base: "esri-hello-world",
        emphasis: "esri-hello-world--emphasis"
    };
    var HelloWorld = /** @class */ (function (_super) {
        __extends(HelloWorld, _super);
        function HelloWorld() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /*
            **firstName
            */
            _this.firstName = "Nike";
            /*
            **lastName
            */
            _this.lastName = "Yang";
            /*
            **emphasized
            */
            _this.emphasized = false;
            return _this;
        }
        /*
        **Public Methods
        */
        HelloWorld.prototype.render = function () {
            var greeting = this._getGreeting();
            var classes = (_a = {},
                _a[CSS.emphasis] = this.emphasized,
                _a);
            return (widget_1.tsx("div", { class: this.classes(CSS.base, classes) }, greeting));
            var _a;
        };
        /*
        **Private Methods
        */
        HelloWorld.prototype._getGreeting = function () {
            return "Hello, my name is " + this.firstName + " " + this.lastName + "!";
        };
        __decorate([
            decorators_1.property(),
            widget_1.renderable()
        ], HelloWorld.prototype, "firstName", void 0);
        __decorate([
            decorators_1.property(),
            widget_1.renderable()
        ], HelloWorld.prototype, "lastName", void 0);
        __decorate([
            decorators_1.property(),
            widget_1.renderable()
        ], HelloWorld.prototype, "emphasized", void 0);
        HelloWorld = __decorate([
            decorators_1.subclass("esri.widgets.HelloWorld")
        ], HelloWorld);
        return HelloWorld;
    }(decorators_1.declared(Widget)));
    return HelloWorld;
});
//# sourceMappingURL=HelloWorld.js.map