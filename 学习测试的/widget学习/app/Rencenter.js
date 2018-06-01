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
define(["require", "exports", "esri/core/tsSupport/declareExtendsHelper", "esri/core/tsSupport/decorateHelper", "esri/core/accessorSupport/decorators", "esri/widgets/Widget", "esri/core/watchUtils", "esri/widgets/support/widget"], function (require, exports, __extends, __decorate, decorators_1, Widget, watchUtils, widget_1) {
    "use strict";
    var CSS = {
        base: "recenter-tool"
    };
    var Recenter = /** @class */ (function (_super) {
        __extends(Recenter, _super);
        function Recenter() {
            var _this = _super.call(this) || this;
            _this._onViewChange = _this._onViewChange.bind(_this);
            return _this;
        }
        Recenter.prototype.postInitialize = function () {
            var _this = this;
            watchUtils.init(this, "view.center, view.interacting, view.scale", function () { return _this._onViewChange(); });
        };
        //-------------------------------------------------------------------
        //
        //  Public methods
        //
        //-------------------------------------------------------------------
        Recenter.prototype.render = function () {
            var _a = this.state, x = _a.x, y = _a.y, scale = _a.scale;
            var styles = {
                textShadow: this.state.interacting ? '-1px 0 red, 0 1px red, 1px 0 red, 0 -1px red' : ''
            };
            return (widget_1.tsx("div", { bind: this, class: CSS.base, styles: styles, onclick: this._defaultCenter },
                widget_1.tsx("p", null,
                    "x: ",
                    Number(x).toFixed(3)),
                widget_1.tsx("p", null,
                    "y: ",
                    Number(y).toFixed(3)),
                widget_1.tsx("p", null,
                    "scale: ",
                    Number(scale).toFixed(5))));
        };
        //-------------------------------------------------------------------
        //
        //  Private methods
        //
        //-------------------------------------------------------------------
        Recenter.prototype._onViewChange = function () {
            var _a = this.view, interacting = _a.interacting, center = _a.center, scale = _a.scale;
            this.state = {
                x: center.x,
                y: center.y,
                interacting: interacting,
                scale: scale
            };
        };
        Recenter.prototype._defaultCenter = function () {
            this.view.goTo(this.initialCenter);
        };
        __decorate([
            decorators_1.property(),
            widget_1.renderable()
        ], Recenter.prototype, "view", void 0);
        __decorate([
            decorators_1.property(),
            widget_1.renderable()
        ], Recenter.prototype, "initialCenter", void 0);
        __decorate([
            decorators_1.property(),
            widget_1.renderable()
        ], Recenter.prototype, "state", void 0);
        Recenter = __decorate([
            decorators_1.subclass("esri.widgets.Recenter")
        ], Recenter);
        return Recenter;
    }(decorators_1.declared(Widget)));
    return Recenter;
});
//# sourceMappingURL=Rencenter.js.map