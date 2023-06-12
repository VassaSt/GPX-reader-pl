const html = `
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="https://unpkg.com/togeojson@0.16.0/togeojson.js"></script>
<script>
let reearth, property, layers;
let gpxList

let styleGeoJON = {
  "style": {
    "fill": "red",
    "stroke-width": "3",
    "fill-opacity": 0.6
  }
}

var cesium;
let optionObj = {
  "enableHighAccuracy": true ,
  "timeout": 600000 ,
  "maximumAge": 1000,
} ;

const POINT_STYLE = 'point';
const ICON_STYLE = 'icon';
const MODEL_STYLE = 'model';
let styleType= POINT_STYLE;
let watchID;
let type;
let czmlId = 0;
let points = [];

function handleFileList(files) {

  for (const file of files) {
    const layerMatch = layers.find(layer => layer.title === file.id);
    if (file.gpx_url) {
      handleFileSelectFromURL(file.gpx_url)
        .then(data => {

          data.features.forEach(function (feature) {
            feature.properties.stroke = file.gpx_color || "yellow";
            feature.properties.fill = file.gpx_color || "yellow";
          })

          if (layerMatch) {
            handleGeojson(data, layerMatch.id, "override")
          } else {
            handleGeojson(data, file.id, "add")
          }
        });
    } else {
      if (layerMatch) {
        //override property to img url null, none, ""
        reearth.layers.overrideProperty(layerMatch.id, {
          default: {
            url: "",
            type: "geojson",
            clampToGround: true
          }
        })
      }
    }
  }
}


function handleFileSelectFromURL(url) {
  return fetch(url)
    .then(response => response.text())
    .then(gpxString => {
      const parser = new DOMParser();
      const gpxDocument = parser.parseFromString(gpxString, 'text/xml');

      const geoJson = toGeoJSON.gpx(gpxDocument);
      console.log("geojson: ", geoJson); // output GeoJSON object to console (optional)
      return geoJson
    });
}



function handleGeojson(geoJsonData, id, action) {
  console.log("Hanlde geoJsonData: ", geoJsonData)
  const geoJsonString = JSON.stringify(geoJsonData);
  const blob = new Blob([geoJsonString], { type: 'application/json' });
  const link = URL.createObjectURL(blob);

  if (action === "add") {
    reearth.layers.add({
      extensionId: "resource",
      isVisible: true,
      title: id,
      property: {
        default: {
          url: link,
          type: "geojson",
          clampToGround: true
        },
      },
    });
  } else if (action === "override") {
    reearth.layers.overrideProperty(id, {
      default: {
        url: link,
        type: "geojson",
        clampToGround: true
      },
    },
    );
  }
}


function hideLayers(list) {
  if (!list || 0 === list.length) {
    let filteredLayers = layers.filter(layer => layer.type === "resource" && layer.title !== "File")
    filteredLayers.forEach(layer => {
      reearth.layers.hide(layer.id)
    });
  }
  else {
    const list_id = list.map(obj => obj.id);
    //layers => layer.title !== list_id then do something
    let filteredLayers = layers.filter(layer => !list_id.includes(layer.title) && layer.type === "resource" && layer.title !== "File");

    filteredLayers.forEach(layer => {
      reearth.layers.hide(layer.id)
    });
  }

}

let newProperty;
parent.postMessage({ action: "initWidget", }, "*");
window.addEventListener("message", async function (e) {
  if (e.source !== parent) return
  reearth = e.source.reearth
  layers = reearth.layers.layers
  if (e.data.handle) {
    newProperty = e.data.property
    if (JSON.stringify(property) != JSON.stringify(newProperty)) {
      property = newProperty
      gpxList = property.gpx_list

      hideLayers(gpxList);
      handleFileList(gpxList);
    }
  }
});


window.addEventListener("message", function (e) {
  if (e.source !== parent) return;
    property = e.data.property;
    cesium = e.source.Cesium;
    reearth = e.source.reearth;


    // Update style 
    if(property?.hasOwnProperty("default") && property.default.style) {
      styleType = property.default.style;
      console.log("property: ", property);
    }
    
    if ((property?.hasOwnProperty("pointStyle") && styleType == POINT_STYLE) ||
      (property?.hasOwnProperty("iconStyle") && styleType == ICON_STYLE) ||
      (property?.hasOwnProperty("modelStyle") && styleType == MODEL_STYLE) ) {
      if (e) {
        navigator.geolocation.clearWatch(watchID);
        watchID = navigator.geolocation.watchPosition(successCallback, errorCallback, optionObj);
      } 
    }
    
});

function convertToRgbA(alphahex){
  var a, rgba=[];
  var hex = alphahex.slice(1);

  // Split to four channels
  var c = hex.match(/.{1,2}/g);

  // Function: to decimals (for RGB)
  var d = function(v) {
      return parseInt(v, 16);
  };

  // Function: to percentage (for alpha), to 3 decimals
  var p = function(v) {
      return parseFloat(parseInt((parseInt(v, 16)/255)*1000)/1000);
  };


  // Convert array into rgba values
  a = p(c[3])*255;
  $.each(c.slice(0,3), function(i,v) {
      rgba.push(d(v));
  });

  rgba.push(isNaN(a) ? 255 : a);
  return rgba;
}


function successCallback(position){
// Store location data
let myPosition = {
    latitude: position.coords.latitude,
    longitude: position.coords.longitude,
}

points.push([position.coords.longitude, position.coords.latitude])
console.log("points: ", points)

let czml, setting;

switch(styleType) {
  case POINT_STYLE:
    setting = {
      pointSize: property?.pointStyle?.pointSize || 10,
      pointColor: property?.pointStyle?.pointColor || "#ffffffff"
    }
    
    czml = createPointStyle(myPosition, setting);
    break;
  case ICON_STYLE:
    setting = {
      imageUrl: property?.iconStyle?.imageUrl || "https://img.icons8.com/color/512/place-marker--v1.png",
      imageSize: property?.iconStyle?.imageSize || 0.1
    }
    
    czml = createIconStyle(myPosition, setting);
    break;

    case MODEL_STYLE:
      setting = {
        modelUrl: property?.modelStyle?.modelUrl || "https://static.reearth.io/assets/01gkn5kjpxbhtnr8adpdmq3jaf.glb",
        modelHeading: property?.modelStyle?.modelHeading || 1,
        modelSize:  property?.modelStyle?.modelSize || 1
      }
      
      czml = createModelStyle(myPosition, setting);
      break;
  default:
    setting = {
      pointSize: property?.pointStyle?.pointSize || 10,
      pointColor: property?.pointStyle?.pointColor || "#ffffffff"
    }
    
    czml = createPointStyle(myPosition, setting);
    break;
}
}

function errorCallback(error){
  alert("位置情報が取得できませんでした");
};


function changePluginIconColor(color) {
let elms = document.getElementById("logo").querySelectorAll("svg > path");
elms.forEach(elm => {
  elm.setAttribute("stroke", color);
});
}


function createPointStyle(location, setting) {
czmlId++
let czml = [{
  "id" : "document",
  "name" : "CZML",
  "version" : "1.0"
  },{
  "id" : czmlId,
  "name" : "My Location",
  "position" : {
    "cartographicDegrees": [location.longitude, location.latitude, 1]
  },
  "point": {
    "color": {
        "rgba": convertToRgbA(setting.pointColor),
    },
    "pixelSize": setting.pointSize
  }
}];
return czml;
}

function createIconStyle(location, setting) {
czmlId++
let czml = [{
    "id" : "document",
    "name" : "CZML",
    "version" : "1.0"
  }, {
  "id" : czmlId,
  "name" : "My Location",
  "billboard" : {
    "image" : setting.imageUrl,
    "scale" : setting.imageSize
  },
  "position" : {
    "cartographicDegrees": [location.longitude, location.latitude, 1]
  }
}];

return czml;
}


function createModelStyle(location, setting) {
czmlId++;
let heading = setting.modelHeading - 90 ;
let headingRadian = cesium.Math.toRadians(heading);
let pitchRadians = cesium.Math.toRadians(-1);
let hpr = new cesium.HeadingPitchRoll(headingRadian, pitchRadians, 0);
let layerPositionCartesian = cesium.Cartesian3.fromDegrees(location.longitude, location.latitude, 1);
let orientation = cesium.Transforms.headingPitchRollQuaternion(layerPositionCartesian, hpr);
let czml = [{
    "id" : "document",
    "name" : "CZML",
    "version" : "1.0"
  }, {
  "id" : czmlId,
  "name" : "My Location",
  "model": {
    "gltf": setting.modelUrl,
    "scale": setting.modelSize,
    "heightReference": "RELATIVE_TO_GROUND",
  },  
  "position" : {
    "cartographicDegrees": [location.longitude, location.latitude, 1]
  },
  orientation: {
    unitQuaternion: [ orientation.x, orientation.y, orientation.z, orientation.w ]
  },
}];

return czml;
}

</script>
`;

const handles = {};

handles.initWidget = () => {
reearth.ui.postMessage({
handle: "initWidget",
title: "initWidget",
property: reearth.widget.property,
});
};

reearth.on("update", () => {
reearth.ui.postMessage({
handle: "handleWidget",
property: reearth.widget.property,
infobox: reearth.layers.overriddenInfobox,
});
});

reearth.on("message", (msg) => {
if (msg && msg.action) {
handles[msg.action]?.(msg.payload);
}
});

reearth.ui.show(html);