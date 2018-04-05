let Vue = require ('vue/dist/vue');
let ham = require ('./modules/hamburger');
let loader = require ('./modules/preloader');

loader.init();

ham.init();

Vue.component('skills-item', {
    template: "#skills-item",
    props: ['skill']
  });
  
  Vue.component("skills-list", {
    template: "#skills-list",
    props: ['items'],
    data() {
      return {
      }
    },
  });
  
  const skills = new Vue({
    data: {
      frontend: { title: 'Frontend', 
                  skills: [ {name : 'HTML', level: 90}, 
                            {name: 'CSS', level: 80}, 
                            {name: 'JavaScript & jQuery', level: 50}]}, 
      backend: { title : 'Backend', 
                  skills: [ { name: 'PHP', level: 15}, 
                            { name: 'mySQL', level: 15}, 
                            { name: 'Node.js & npm', level: 15}, 
                            { name: 'MongoDB', level: 15}]}, 
      workflow: { title : 'Workflow', 
                  skills: [ {name: 'Git', level: 50}, 
                            {name: 'Gulp', level: 40}, 
                            {name: 'Bower', level: 35}]}
    }
  }); // Vue end
  
  skills.$mount("#skills");

window.initMap = function() {
    var uluru = {lat: 55.671998, lng: 37.492849}; 
    var me = {lat: 55.676241, lng: 37.505222}; 

    var styledMapType = new google.maps.StyledMapType( 
        [
            {
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#f5f5f5"
                }
              ]
            },
            {
              "elementType": "labels.icon",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#616161"
                }
              ]
            },
            {
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#f5f5f5"
                }
              ]
            },
            {
              "featureType": "administrative.land_parcel",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#bdbdbd"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#eeeeee"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "labels.text",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#757575"
                }
              ]
            },
            {
              "featureType": "poi.business",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#e5e5e5"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#9e9e9e"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#ffffff"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "labels.icon",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "road.arterial",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#757575"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#dadada"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#616161"
                }
              ]
            },
            {
              "featureType": "road.local",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#9e9e9e"
                }
              ]
            },
            {
              "featureType": "transit",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "transit.line",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#e5e5e5"
                }
              ]
            },
            {
              "featureType": "transit.station",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#eeeeee"
                }
              ]
            },
            {
              "featureType": "water",
              "stylers": [
                {
                  "color": "#86a77a"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#c9c9c9"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#86a77a"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#9e9e9e"
                }
              ]
            }
          ],
          {name: 'Styled Map'});


    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: uluru,
        mapTypeControlOptions: {
            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                    'styled_map']
          }
    });
    var marker = new google.maps.Marker({
        position: me,
        map: map
    });

    map.mapTypes.set('styled_map', styledMapType);
        map.setMapTypeId('styled_map');

};