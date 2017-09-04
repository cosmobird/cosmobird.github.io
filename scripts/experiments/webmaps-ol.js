
/*
	A Map in Openlayers in made of	:	"layers"
					:	"view" 		-	to visualize "layers"
					:	"interactions"	-	to modify content
					:	"controls"	-	with UI Components
*/
var OLmap = new ol.Map( {
		target: 'omap',
		layers: [
			new ol.layer.Tile({
				source: new ol.source.OSM()
			})
			],
		view: new ol.View({
			center: ol.proj.fromLonLat([0.00, 0.00]),
			zoom: 4
		})
	});

/*	TRYING OUT FROM OPENLAYER WORKSHOP - http://openlayers.org/workshop/en/ 	*/


/*ZOOMING TO THE CURRENT USER LOCATION*/
//-------------------------------------
// Default CRS	: Web Mercator
//		: EPSG 3857
navigator.geolocation.getCurrentPosition(function(pos) {
	const coords = ol.proj.fromLonLat([pos.coords.longitude, pos.coords.latitude]);
	OLmap.getView().animate({center: coords, zoom: 5});
});
