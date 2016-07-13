module objects {
    // CONTROL CLASS ++++++++++++++++++++++++++++++++++++++++++
    export class Control { 
        //PUBLIC INSTANCE VARIABLES +++++++++++++++++++++++++++
        public rotationSpeed:number;
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++
        constructor(rotationSpeed:number) {
           this.rotationSpeed = rotationSpeed;
        }
        
        //PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++
       //  zoom out to see all planets 
        public zoomPlanetOut(): void {
            zoomMars = false; 
            zoomEarth = false;
            zoomJupiter = false; 
            camera.position.set(0, 70, 180);
            camera.lookAt(scene.position);     
              
         } 
          // zoom planet with moon - Earth
         public zoomEarth(): void {
            camera.position.set(earth.planet.position.x - 50, earth.planet.position.y + 50, earth.planet.position.z + 50);
            camera.lookAt(earth.planet.position);
            zoomEarth = true;
         } 
          // zoom to Mars planet 
          public zoomMars(): void {
            camera.position.set(mars.planet.position.x - 50, mars.planet.position.y + 50, mars.planet.position.z + 50);
            camera.lookAt(mars.planet.position);
            zoomMars = true;
         } 
         // zoom to Jupiter planet 
          public zoomJupiter(): void {
            camera.position.set(jupiter.planet.position.x - 50, jupiter.planet.position.y + 50, jupiter.planet.position.z + 50);
            camera.lookAt(jupiter.planet.position);
            zoomJupiter = true;
         } 
         
         
     }
 }

