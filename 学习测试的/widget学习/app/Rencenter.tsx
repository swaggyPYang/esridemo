/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />

import { subclass, declared, property } from "esri/core/accessorSupport/decorators";
import Widget = require("esri/widgets/Widget");
import watchUtils = require("esri/core/watchUtils");

import { renderable, tsx } from "esri/widgets/support/widget";

import Point = require("esri/geometry/Point");
import MapView = require("esri/views/MapView");

type Coordinates = Point | number[] | any;

interface Center {
  x: number;
  y: number;
}

interface State extends Center {
  interacting: boolean;
  scale: number;
}

interface Style {
  textShadow: string;
}

const CSS = {
  base: "recenter-tool"
};

@subclass("esri.widgets.Recenter")
class Recenter extends declared(Widget) {

  constructor() {
    super();
    this._onViewChange = this._onViewChange.bind(this)
  }

  postInitialize() {
    watchUtils.init(this, "view.center, view.interacting, view.scale", () => this._onViewChange());

  }

  //--------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------

  //----------------------------------
  //  view
  //----------------------------------

  @property()
  @renderable()
  view: MapView;

  //----------------------------------
  //  initialCenter
  //----------------------------------

  @property()
  @renderable()
  initialCenter: Coordinates;

  //----------------------------------
  //  state
  //----------------------------------

  @property()
  @renderable()
  state: State;

  //-------------------------------------------------------------------
  //
  //  Public methods
  //
  //-------------------------------------------------------------------

  render() {
    const { x, y, scale } = this.state;
    const styles: Style = {
      textShadow: this.state.interacting ? '-1px 0 red, 0 1px red, 1px 0 red, 0 -1px red' : ''
    };
    return (
      <div
        bind={this}
        class={CSS.base}
        styles={styles}
        onclick={this._defaultCenter}>
        <p>x: {Number(x).toFixed(3)}</p>
        <p>y: {Number(y).toFixed(3)}</p>
        <p>scale: {Number(scale).toFixed(5)}</p>
      </div>
    );
  }

  //-------------------------------------------------------------------
  //
  //  Private methods
  //
  //-------------------------------------------------------------------

  private _onViewChange() {
    let { interacting, center, scale } = this.view;
    this.state = {
      x: center.x,
      y: center.y,
      interacting,
      scale
    };
  }

  private _defaultCenter() {
    this.view.goTo(this.initialCenter);
  }
}

export = Recenter;