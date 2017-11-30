define(["dojo/_base/declare","dojo/_base/lang", "esri/layers/WebTileLayer", "esri/geometry/Extent", "esri/geometry/SpatialReference", "esri/layers/support/TileInfo","esri/geometry/Point"],
    function (declare, lang,WebTileLayer, Extent, SpatialReference, TileInfo,point) {
        return WebTileLayer.createSubclass({

            normalizeCtorArgs: function(a, b) {
            return "string" === typeof a ? lang.mixin({
                    urlTemplate: a
                },
                b || {}) : a
        },
        getDefaults: function(a) {
            this.spatialReference = new SpatialReference({
                    wkid: 102113
                });
            var b = new Extent(-20037508.342787, -20037508.342787, 20037508.342787, 20037508.342787, this.spatialReference);

            return lang.mixin(this.inherited(arguments), {
                fullExtent: b,
                tileInfo: new TileInfo({
                    size: 256,
                    dpi: 96,
                    format: "PNG8",
                    compressionQuality: 0,
                    origin: new point({
                        x:-2.0037508342787E7,
                        y: 2.0037508342787E7,
                        spatialReference: this.spatialReference
                    }),
                    spatialReference: this.spatialReference,
                    lods: [
                        { level: 2, resolution: 39135.7584820001, scale: 147914381.897889 },
                        { level: 3, resolution: 19567.8792409999, scale: 73957190.948944 },
                        { level: 4, resolution: 9783.93962049996, scale: 36978595.474472 },
                        { level: 5, resolution: 4891.96981024998, scale: 18489297.737236 },
                        { level: 6, resolution: 2445.98490512499, scale: 9244648.868618 },
                        { level: 7, resolution: 1222.99245256249, scale: 4622324.434309 },
                        { level: 8, resolution: 611.49622628138, scale: 2311162.217155 },
                        { level: 9, resolution: 305.748113140558, scale: 1155581.108577 },
                        { level: 10, resolution: 152.874056570411, scale: 577790.554289 },
                        { level: 11, resolution: 76.4370282850732, scale: 288895.277144 },
                        { level: 12, resolution: 38.2185141425366, scale: 144447.638572 },
                        { level: 13, resolution: 19.1092570712683, scale: 72223.819286 },
                        { level: 14, resolution: 9.55462853563415, scale: 36111.909643 },
                        { level: 15, resolution: 4.77731426794937, scale: 18055.954822 },
                        { level: 16, resolution: 2.38865713397468, scale: 9027.977411 }
                        
                    ]
                })
            })
        },
        properties: {
            copyright: {
                value: "",
                json: {
                    write: !0
                }
            },
            fullExtent: {
                json: {
                    write: !0
                }
            },
            legendEnabled: {
                json: {
                    read: {
                        source: ["showLegend"],
                        reader: function(a, b) {
                            return null != b.showLegend ? b.showLegend : !0
                        }
                    }
                }
            },
            levelValues: {
                dependsOn: ["tileInfo"],
                get: function() {
                    var a = [];
                    if (!this.tileInfo) return null;
                    this.tileInfo.lods.forEach(function(b) {
                        a[b.level] =
                            b.levelValue || b.level
                    }, this);
                    return a
                }
            },
            operationalLayerType: "WebTiledLayer",
            popupEnabled: {
                json: {
                    read: {
                        source: ["disablePopup"],
                        reader: function(a, b) {
                            return null != b.disablePopup ? !b.disablePopup : !0
                        }
                    }
                }
            },
            refreshInterval: {
                json: {
                    write: !0
                }
            },
            spatialReference: {
                type: SpatialReference,
                value: SpatialReference.WebMercator,
                json: {
                    read: {
                        source: ["spatialReference", "fullExtent.spatialReference"],
                        reader: function(a, b) {
                            return a || b.fullExtent && b.fullExtent.spatialReference && d.fromJSON(b.fullExtent.spatialReference)
                        }
                    }
                }
            },
            subDomains: {
                value: null,
                json: {
                    write: !0
                }
            },
            tileInfo: {
                type: TileInfo,
                json: {
                    write: !0
                }
            },
            tileServers: {
                value: null,
                dependsOn: ["urlTemplate", "subDomains"],
                get: function() {
                    var a="online1.map.bdimg.com";
                    return a
                }
            },
            type: {
                value: "web-tile",
                json: {
                    read: !1
                }
            },
            urlPath: {
                dependsOn: ["urlTemplate"],
                get: function() {
                   var a="baidu.layers"
                    return a
                }
            },
            urlTemplate: {
                get: function() {
                    var a="online1.map.bdimg.com";
                    return a
                }
            },
            url: {
                json: {
                    write: !1
                }
            }
        },
        getTileUrl: function (level,row, col) {
            var zoom =level- 1;
            var offsetX = Math.pow(2, zoom);
            var offsetY = offsetX - 1;
            var numX = col - offsetX;
            var numY = (-row) + offsetY;
            zoom =level+ 1;
            var url = "http://online1.map.bdimg.com/tile/?qt=tile&x=" + numX + "&y=" + numY + "&z=" + zoom + "&styles=pl";
            return url;
        }
        //     load: function() {
        //     var a = this.loadFromPortal({
        //         supportedTypes: ["WMTS"]
        //     }).then(function() {
        //     }.bind(this));
        //     this.addResolvingPromise(a);
        //     return this
        // }
        })
});