define(["require", "exports", "esri/Map", "esri/views/MapView", "esri/geometry/Point"], function (require, exports, EsriMap, MapView, Point) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var map = new EsriMap({
        basemap: "streets"
    });
    var view = new MapView({
        map: map,
        container: "viewDiv",
        center: new Point({
            x: 116.244,
            y: 34.052
        }),
        zoom: 12
    });
});
//# sourceMappingURL=main.js.map