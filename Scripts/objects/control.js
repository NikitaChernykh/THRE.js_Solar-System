
var objects;
(function (objects) {
    // CONTROL CLASS ++++++++++++++++++++++++++++++++++++++++++
    var Control = (function () {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++
        function Control(rotationSpeed) {
            this.rotationSpeed = rotationSpeed;
        }
        //PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++
        //  zoom out to see all planets 
        Control.prototype.zoomPlanetOut = function () {
            zoomMars = false;
            zoomEarth = false;
            zoomJupiter = false;
            camera.position.set(0, 70, 180);
            camera.lookAt(scene.position);
        };
        // zoom planet with moon - Earth
        Control.prototype.zoomEarth = function () {
            camera.position.set(earth.planet.position.x - 50, earth.planet.position.y + 50, earth.planet.position.z + 50);
            camera.lookAt(earth.planet.position);
            zoomEarth = true;
        };
        // zoom to Mars planet 
        Control.prototype.zoomMars = function () {
            camera.position.set(mars.planet.position.x - 50, mars.planet.position.y + 50, mars.planet.position.z + 50);
            camera.lookAt(mars.planet.position);
            zoomMars = true;
        };
        // zoom to Jupiter planet 
        Control.prototype.zoomJupiter = function () {
            camera.position.set(jupiter.planet.position.x - 50, jupiter.planet.position.y + 50, jupiter.planet.position.z + 50);
            camera.lookAt(jupiter.planet.position);
            zoomJupiter = true;
        };
        return Control;
    })();
    objects.Control = Control;
})(objects || (objects = {}));
//# sourceMappingURL=control.js.map