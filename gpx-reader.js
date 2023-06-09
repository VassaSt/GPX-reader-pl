const html = `

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

  // let property;
  // var cesium, reearth;
  let optionObj = {
    "enableHighAccuracy": true ,
    "timeout": 600000 ,
    "maximumAge": 1000,
  } ;
  
  // const POINT_STYLE = 'point';
  // const ICON_STYLE = 'icon';
  // const MODEL_STYLE = 'model';
  // let styleType= POINT_STYLE;
  let watchID;
  // let type;
  // let czmlId = 0;

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
      navigator.geolocation.clearWatch(watchID);
      watchID = navigator.geolocation.watchPosition(successCallback, errorCallback, optionObj);
  });

  let points = []

function successCallback(position){
  // Store location data
  let myPosition = {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
  }

  points.push([position.coords.longitude, position.coords.latitude])
  console.log("points: ", points)
};

  function errorCallback(error){
    alert("位置情報が取得できませんでした");
};


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