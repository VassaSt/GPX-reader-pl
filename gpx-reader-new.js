reearth.ui.show(
  `
  <style>
    @font-face {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 500;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9fBBc4AMP6lQ.woff2) format("woff2");
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
        U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
        U+2215, U+FEFF, U+FFFD;
    }
  
    @font-face {
      font-family: "Noto Sans";
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/notosans/v27/o-0IIpQlx3QUlC5A4PNr5TRASf6M7Q.woff2) format("woff2");
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
        U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
        U+2215, U+FEFF, U+FFFD;
    }
  
    html,
    body {
      margin: 0;
      /* Change here for your specific plugin's width */
      overflow: hidden;
    }
  
    #wrapper {
      display: block;
      gap: 20px;
      max-width: 208px;
      background: #171618;
      overflow: hidden;
      border-radius: 4px;
    }
  
    div#content {
      margin-bottom: 18px;
      margin-left: 15px;
      margin-right: 15px;
      width: 179px;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
      color: white;
    }
  
    p,
    h3,
    span,
    label {
      color: #bfbfbf;
    }
  
    #title {
      font-family: "Roboto" !important;
      font-style: normal;
      font-size: 14px;
      line-height: 22px;
      margin: 0px;
      height: 30px;
      background: #171618;
      border-radius: 4px 4px 0px 0px;
      font-weight: 500;
      display: flex;
      justify-content: start;
      align-items: center;
      cursor: pointer;
      padding-bottom: 16px;
    }
  
    .group-div:first-child .group-title {
      margin-top: 0px;
    }
  
    .height-44 {
      height: 44px;
      border-radius: 4px;
    }
  
    .section .extendedh,
    .extendedh {
      width: 100%;
      cursor: pointer;
    }
  
    .section .extendedv,
    .extendedv {
      height: 100%;
    }
  
    #wrapper {
      box-sizing: border-box;
    }
  
    .extendedh body,
    .extendedh #wrapper {
      width: 100%;
      border-radius: 4px;
    }
  
    .extendedv body,
    .extendedv #wrapper {
      height: 44px;
      min-height: 44px;
      overflow: hidden;
    }
  
    span#logo {
      margin-right: 14px;
      margin-left: 12px;
      margin-top: 19px;
    }
  
    span#closed-logo svg {
      margin-top: 8px;
      margin-left: 8px;
    }
  
    h3#title p {
      margin-top: 27px;
    }
  
    #location-datatable {
      width: 100%;
      font-size: 12px;
      font-weight: 500;
      font-family: "Noto Sans";
      font-style: normal;
      color: #c7c5c5;
    }
  
    #location-datatable tr td {
      padding-bottom: 8px;
    }
  
    .btn-wrap {
      display: flex;
    }
  
    .secondary-btn {
      font-size: 12px;
      font-family: "Noto Sans";
      line-height: 22px;
      text-align: center;
      color: #3b3cd0;
      background-color: #171618;
      border: solid 1px #3b3cd0;
      border-radius: 4px;
      height: 32px;
      width: 100%;
      max-width: 175px;
      flex-grow: 1;
      margin: 2px;
      cursor: pointer;
    }
  
    .col-data {
      float: right;
    }
  
    .secondary-btn:hover {
      background-color: #3b3cd0;
      color: #c7c5c5
    }
  </style>
  
  <div class="height-44" id="wrapper">
    <h3 id="title" onclick="handleCloseOpenPopup(event)">
      <span id="logo">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 16.875C13.797 16.875 16.875 13.797 16.875 10C16.875 6.20304 13.797 3.125 10 3.125C6.20304 3.125 3.125 6.20304 3.125 10C3.125 13.797 6.20304 16.875 10 16.875Z"
            stroke="#BFBFBF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M10 1.5625V4.6875" stroke="#BFBFBF" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
          <path d="M1.5625 10H4.6875" stroke="#BFBFBF" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
          <path d="M10 18.4375V15.3125" stroke="#BFBFBF" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
          <path d="M18.4375 10H15.3125" stroke="#BFBFBF" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
          <path
            d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
            stroke="#BFBFBF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </span>
  
      <p class="title-p" id="plugin-name">GPX Reader</p>
      <span id="close" data-stt="0"></span>
  
    </h3>
  
    <div id="content">
      <input type="hidden" id="my-location" data-location="" data-style="" data-property="">
      <table id="location-datatable">
        <tr>
          <td>Date</td>
          <td class="col-data" id="current-date"></td>
        </tr>
        <tr>
          <td>Time</td>
          <td class="col-data" id="time-zone"></td>
        </tr>
        <tr>
          <td>Latitude</td>
          <td class="col-data" id="latitude"></td>
        </tr>
        <tr>
          <td>Longitude</td>
          <td class="col-data" id="longitude"></td>
        </tr>
      </table>
      <div class="btn-wrap">
        <button class="secondary-btn" id="fly-btn" onclick="handleFly()">Fly</button>
        <button class="secondary-btn" id="follow-btn" onclick="handleFollow()">Follow</button>
      </div>
    </div>
  
  </div>
  <script src="https://unpkg.com/togeojson@0.16.0/togeojson.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  
  <script>
  
    let reearth;
    let property;
    let gpxproperty;
    let userproperty;
    let layers;
    let gpxList;
    let newProperty;
  
    var layerId;
    let expanded = false;
    let wapperElm = document.getElementById("wrapper");
    let heightWp = wapperElm.offsetHeight < 470 ? 470 : wapperElm.offsetHeight;
    let textColor = "#c7c5c5";
    let bgColor = "rgb(23, 22, 24)";
    let primaryColor = "#3b3cd0";
  
    var cesium;
    let optionObj = {
      "enableHighAccuracy": true,
      "timeout": 600000,
      "maximumAge": 1000,
    };
  
    let myLocationElm = document.getElementById("my-location");
    const POINT_STYLE = 'point';
    const ICON_STYLE = 'icon';
    const MODEL_STYLE = 'model';
    let styleType = POINT_STYLE;
    let watchID;
    let type;
    let czmlId = 0;
  
    let followBtnElm = document.getElementById("follow-btn");
  
  
    parent.postMessage({ action: "initWidget", }, "*");
    window.addEventListener("message", async function (e) {
      if (e.source !== parent) return
  
      reearth = e.source.reearth
      cesium = e.source.Cesium;
      layers = reearth.layers.layers
  
      if (e.data.handle) {
        // getting property for gpx file
        newProperty = e.data.property;
  
        // console.log("1 newProperty : ", newProperty)
  
        if (JSON.stringify(property) != JSON.stringify(newProperty)) {
          gpxproperty = newProperty
          // property = newProperty  //KN
          gpxList = gpxproperty.gpx_list
          hideLayers(gpxList);
          handleFileList(gpxList);
          // console.log("3 gpxproperty: ", gpxproperty)
        }
  
        userproperty = e.data.property;
        // console.log("1 userproperty : ", userproperty)
  
        //Get ID of layer that show my location
        if (e.data.hasOwnProperty("layerId")) {
          if (e.data.layerId) {
            layerId = e.data.layerId;
          }
        }
  
        // Update style 
        if (property?.hasOwnProperty("default") && property.default.style) {
          styleType = property.default.style;
          myLocationElm.setAttribute("data-style", styleType);
        }
  
        // 
        if (userproperty) {
          myLocationElm.setAttribute("data-property", JSON.stringify(userproperty));
          // console.log("4 JSON.stringify userproperty: ", userproperty)
        }
  
        if ((property?.hasOwnProperty("pointStyle") && styleType == POINT_STYLE) ||
          (property?.hasOwnProperty("iconStyle") && styleType == ICON_STYLE) ||
          (property?.hasOwnProperty("modelStyle") && styleType == MODEL_STYLE)) {
          if (type && type == "follow") {
            navigator.geolocation.clearWatch(watchID);
            watchID = navigator.geolocation.watchPosition(successCallback, errorCallback, optionObj);
          } else if (type && type == "fly") {
            handleFly();
          }
        }
  
      };
  
    });
  
  
    // set properties for converted gpx file
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
            //override roperty to img url null, none, ""
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
  
    // converting gpx file to JSON
    function handleFileSelectFromURL(url) {
      return fetch(url)
        .then(response => response.text())
        .then(gpxString => {
          const parser = new DOMParser();
          const gpxDocument = parser.parseFromString(gpxString, 'text/xml');
  
          const geoJson = toGeoJSON.gpx(gpxDocument);
          console.log("geoJson: ", geoJson); // output GeoJSON object to console (optional)

           let geoJsonValues = Object.values(geoJson)[1];
           let geoJsonValuesLength = Object.values(geoJsonValues).length;
           console.log(geoJsonValuesLength);


          return geoJson
        });
    }

  
    function handleGeojson(geoJsonData, id, action) {
      // console.log("Hanlde geoJsonData: ", geoJsonData)
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
        let filteredLayers = layers.filter(layer => !list_id.includes(layer.title) && layer.type === "resource" && (layer.title !== "File" && layer.title !== "CZML"));
  
        filteredLayers.forEach(layer => {
          reearth.layers.hide(layer.id)
        });
      }
    }
  
  
  
    function handleCloseOpenPopup(e) {
      let wapperElm = document.getElementById("wrapper");
      if (e.target.id == "title" || e.target.classList.contains("title-p") ||
        (document.getElementById(e.target.id) !== null && document.getElementById(e.target.id).parentNode.id == "title")) {
        parent.postMessage({ type: "resize", expanded, heightWp }, "*");
        if (wapperElm !== null) {
          wapperElm.classList.remove("height-44");
        }
        if (expanded) {
          document.documentElement.classList.add("extendedh", "extendedv");
        } else {
          document.documentElement.classList.remove("extendedh", "extendedv");
        }
        expanded = !expanded
      } else {
        if (e.target.tagName === "path" || e.target.tagName === "svg" || e.target.tagName === "g") {
          if (e.target.closest("#title")) {
            parent.postMessage({ type: "resize", expanded, heightWp }, "*");
            if (wapperElm !== null) {
              wapperElm.classList.remove("height-44");
            }
            if (expanded) {
              document.documentElement.classList.add("extendedh", "extendedv");
            } else {
              document.documentElement.classList.remove("extendedh", "extendedv");
            }
            expanded = !expanded
          }
        }
      }
    }
  
  
    // Handle Update IFrame Size
    function updateIframeSize() {
      let newWrapperElm = document.getElementById("wrapper");
      let heightWp = newWrapperElm.offsetHeight;
      let expanded = false;
      parent.postMessage({ type: "resize", expanded, heightWp }, "*");
    }
  
    // Handle when clicking Fly button
    function handleFly() {
      //Reset follow button
      if (type && type == 'follow') {
        handleFollow();
      }
      type = "fly";
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    }
  
    // Handle when clicking Follow button
    function handleFollow() {
      if (followBtnElm.textContent == "Follow") {
        followBtnElm.textContent = "Following";
        watchID = navigator.geolocation.watchPosition(successCallback, errorCallback, optionObj);
        type = "follow";
  
        // Set hover effect for 
        followBtnElm.style.backgroundColor = primaryColor;
        followBtnElm.style.color = textColor;
  
        followBtnElm
          .addEventListener('mouseout', function handleMouseOut() {
            followBtnElm.style.backgroundColor = primaryColor;
            followBtnElm.style.color = textColor;
          });
      } else {
        followBtnElm.textContent = "Follow";
        console.log("geogeo: ", geojsonData)
        navigator.geolocation.clearWatch(watchID);
        watchID = null;
        type = null;
        followBtnElm.style.backgroundColor = bgColor;
        followBtnElm.style.color = primaryColor;
  
        setHoverEffectForButton(followBtnElm);
      }
    }
  
    function getMyLocationData() {
      return JSON.parse(myLocationElm.getAttribute("data-location"));
    }
  
  
    // Convert 8-digit hex colors to rgba colors
    function convertToRgbA(alphahex) {
      var a, rgba = [];
      var hex = alphahex.slice(1);
  
      // Split to four channels
      var c = hex.match(/.{1,2}/g);
  
      // Function: to decimals (for RGB)
      var d = function (v) {
        return parseInt(v, 16);
      };
  
      // Function: to percentage (for alpha), to 3 decimals
      var p = function (v) {
        return parseFloat(parseInt((parseInt(v, 16) / 255) * 1000) / 1000);
      };
  
  
      // Convert array into rgba values
      a = p(c[3]) * 255;
      $.each(c.slice(0, 3), function (i, v) {
        rgba.push(d(v));
      });
  
      rgba.push(isNaN(a) ? 255 : a);
      return rgba;
    }
  
  
    let points = []
    let geojsonData;
  
  
    function assignGeojsonData(gdata) {
      geojsonData = gdata
    }
  
    //create path by turfjs
    function createPathGeojson(pointArr) {
      let dataStructure
      if (pointArr.length > 1) {
        dataStructure = {
          "type": "FeatureCollection",
          "features": [
            {
              "type": "Feature",
              "properties": {
                "stroke": "#FFFFFF",
                "stroke-width": "1",
                "fill": "#FFFFFF"
              },
              "geometry": {
                "type": "GeometryCollection",
                "geometries": [
                  {
                    "type": "LineString",
                    "coordinates": pointArr
                  }
                ]
              }
            }
          ]
        }
      }
  
      return dataStructure
    }
  
  
    // getting users latitude and longitude, push date to json function to draw a path
    function successCallback(position) {
      // Store location data
      let myPosition = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        heading: position.coords.heading === null ? 0 : position.coords.heading
      }
  
      // console.log("myPosition: ", myPosition)
      points.push([position.coords.longitude, position.coords.latitude]);
  
      // console.log("points: ", points)
  
      let pathGeojson = createPathGeojson(points);
      // console.log("pathGeojson: ", pathGeojson)
  
      assignGeojsonData(pathGeojson);
  
      parent.postMessage({ type: "showPath", pathGeojson }, "*");
  
      myLocationElm.setAttribute("data-location", JSON.stringify(myPosition));
  
      // Show current date
      let currentDate = position.timestamp;
      if (typeof (currentDate) == "number") {
        currentDate = new Date(currentDate);
        let dateArr = currentDate.toString().trim().split(" ");
        let date = dateArr[0] + " " + dateArr[1] + " " + dateArr[2];
        let time = dateArr[4] + " " + dateArr[5].slice(0, dateArr[5].length - 2);
  
        document.getElementById('current-date').innerHTML = date;
        document.getElementById('time-zone').innerHTML = time;
      }
  
      // Show the current position's latitude
      document.getElementById("latitude").innerHTML = myPosition.latitude;
  
      // Show the current position's longitude
      document.getElementById("longitude").innerHTML = myPosition.longitude;
  
      let czml, setting;
      property = JSON.parse(myLocationElm.getAttribute("data-property"));
  
      switch (styleType) {
        case POINT_STYLE:
          setting = {
            pointSize: property?.pointStyle?.pointSize || 10,
            pointColor: property?.pointStyle?.pointColor || "#ffffffff"
          }
  
          czml = createPointStyle(getMyLocationData(), setting);
          break;
        case ICON_STYLE:
          setting = {
            imageUrl: property?.iconStyle?.imageUrl || "https://img.icons8.com/color/512/place-marker--v1.png",
            imageSize: property?.iconStyle?.imageSize || 0.1
          }
  
          czml = createIconStyle(getMyLocationData(), setting);
          break;
  
        case MODEL_STYLE:
          setting = {
            modelUrl: property?.modelStyle?.modelUrl || "https://static.reearth.io/assets/01gkn5kjpxbhtnr8adpdmq3jaf.glb",
            modelHeading: property?.modelStyle?.modelHeading || 1,
            modelSize: property?.modelStyle?.modelSize || 1
          }
  
          czml = createModelStyle(getMyLocationData(), setting);
          break;
        default:
          setting = {
            pointSize: property?.pointStyle?.pointSize || 10,
            pointColor: property?.pointStyle?.pointColor || "#ffffffff"
          }
  
          czml = createPointStyle(getMyLocationData(), setting);
          break;
      }
  
      // reearth.layers.overrideProperty(layerId, {
      //   default: {
      //     url: [],
      //   },
      // });
  
      //parent.postMessage({ myPosition, type , czml}, "*");
      handleLayerReearth(myPosition, type, czml)
      //updateIframeSize();
    };
  
    let styleLayerId;
    let onFollow = false;
    function handleLayerReearth(myPosition, type, czml) {
      if (myPosition) {
        let cameraHeight = 200;
        if (type == "follow") {
          if (!onFollow) {
            onFollow = true;
          } else {
            cameraHeight = reearth.camera.position.height;
          }
  
        } else if (type == "fly") {
          onFollow = false;
        }
  
        reearth.camera.flyTo({
          lat: myPosition.latitude,
          lng: myPosition.longitude,
          height: cameraHeight,
          heading: myPosition.heading * (Math.PI / 180),
          pitch: -(90 * (Math.PI / 180)),
          roll: 0,
        }, {
          duration: 1
        });
  
        if (styleLayerId) {
          reearth.layers.overrideProperty(styleLayerId, {
            default: {
              url: [],
            },
          });
          // override
          reearth.layers.overrideProperty(styleLayerId, {
            default: {
              url: czml
            },
          });
        }
        else {
          styleLayerId = reearth.layers.add({
            extensionId: "resource",
            isVisible: true,
            title: 'CZML',
            property: {
              default: {
                url: czml,
                type: "czml",
                clampToGround: true
              },
            },
          });
        }
      }
    }
  
    function errorCallback(error) {
      alert("位置情報が取得できませんでした");
    };
  
    function changePrimaryColor(color) {
      primaryColor = color;
      let elmArray = ["fly-btn", "follow-btn"];
      elmArray.forEach(elm => {
        document.getElementById(elm).style.borderColor = color;
        document.getElementById(elm).style.color = color;
      });
  
      // Set style when hover on button
      setHoverEffectForButton(document.getElementById("fly-btn"));
  
      if (followBtnElm.innerText == "Follow") {
        setHoverEffectForButton(followBtnElm);
      }
    }
  
    // Set hover effect for [Follow] button
    // buttonElm = document.getElementById("...")
    function setHoverEffectForButton(buttonElm) {
      buttonElm.addEventListener('mouseover', function handleMouseOver() {
        buttonElm.style.backgroundColor = primaryColor;
        buttonElm.style.color = textColor;
      });
  
      buttonElm.addEventListener('mouseout', function handleMouseOut() {
        buttonElm.style.backgroundColor = bgColor;
        buttonElm.style.color = primaryColor;
      });
    }
  
    function createPointStyle(location, setting) {
      czmlId++
      let czml = [{
        "id": "document",
        "name": "CZML",
        "version": "1.0"
      }, {
        "id": czmlId,
        "name": "GPX Reader",
        "position": {
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
  
    // function createIconStyle(location, setting) {
    //   czmlId++
    //   let czml = [{
    //       "id" : "document",
    //       "name" : "CZML",
    //       "version" : "1.0",
    //       "id" : czmlId,
    //     }, {
    //     "name" : "GPX Reader",
    //     "billboard" : {
    //       "image" : setting.imageUrl,
    //       "scale" : setting.imageSize
    //     },
    //     "position" : {
    //       "cartographicDegrees": [location.longitude, location.latitude, 1]
    //     }
    //   }];
  
    //   return czml;
    // }
  
    function createIconStyle(location, setting) {
      czmlId++
      let czml = [{
      "id" : "document",
      "name" : "CZML",
      "version" : "1.0",
    }, {
     "id" : czmlId,
     "name" : "GPX Reader",
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
      let heading = setting.modelHeading - 90;
      let headingRadian = cesium.Math.toRadians(heading);
      let pitchRadians = cesium.Math.toRadians(-1);
      let hpr = new cesium.HeadingPitchRoll(headingRadian, pitchRadians, 0);
      let layerPositionCartesian = cesium.Cartesian3.fromDegrees(location.longitude, location.latitude, 1);
      let orientation = cesium.Transforms.headingPitchRollQuaternion(layerPositionCartesian, hpr);
      let czml = [{
        "id": "document",
        "name": "CZML",
        "version": "1.0"
      }, {
        "id": czmlId,
        "name": "GPX Reader",
        "model": {
          "gltf": setting.modelUrl,
          "scale": setting.modelSize,
          "heightReference": "RELATIVE_TO_GROUND",
        },
        "position": {
          "cartographicDegrees": [location.longitude, location.latitude, 1]
        },
        orientation: {
          unitQuaternion: [orientation.x, orientation.y, orientation.z, orientation.w]
        },
      }];
  
      return czml;
    }
  
  
  
  </script>
  `,
  { width: 44, height: 44 }
  );

  
  var styleLayerId;
  let onFollow = false;
  
  
  reearth.on("message", (msg) => {
  if(msg.type === "showPath"){
  reearth.layers.add({
  extensionId: "resource",
  isVisible: true,
  title: "Path",
  property: {
  default: {
  url: msg.pathGeojson,
  type: "geojson",
  clampToGround: true
  },
  },
  })
  }
  })
  
  reearth.on("message", (msg) => {
  if (msg.type === "resize") {
  reearth.ui.resize?.(
  msg.expanded ? 44 : 208,
  msg.expanded ? 44 : msg.heightWp,
  msg.expanded ? undefined : false
  );
  }
  
  if (msg.myPosition) {
  let cameraHeight = 500;
  if(msg.type == "follow") {
  if(!onFollow) {
  onFollow = true;
  } else {
  cameraHeight = reearth.camera.position.height;
  }
  
  } else if (msg.type == "fly") {
  onFollow = false;
  }
  
  reearth.visualizer.camera.flyTo({
  lat: msg.myPosition.latitude,
  lng: msg.myPosition.longitude,
  height: cameraHeight,
  heading: msg.myPosition.heading * (Math.PI / 180),
  pitch: -(90 * (Math.PI / 180)),
  roll: 0,
  }, {
  duration: 1
  });
  
  if(styleLayerId) {
  // override
  reearth.layers.overrideProperty(styleLayerId, {
  default: {
  url: msg.czml
  },
  });
  }
  else {
  styleLayerId = reearth.layers.add({
  extensionId: "resource",
  isVisible: true,
  title: `CZML`,
  property: {
  default: {
  url: msg.czml,
  type: "czml",
  clampToGround: true
  },
  },
  });
  
  reearth.ui.postMessage({
  layerId: styleLayerId,
  });
  }
  }
  });
  
  // update date just for gpx file
  const handles = {}
  
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
  handles[msg.action]?.(msg.payload)
  }
  })