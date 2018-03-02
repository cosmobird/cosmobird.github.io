var context = d3.select("canvas").node().getContext("2d"),
    path = d3.geoPath().context(context);

d3.json("https://unpkg.com/us-atlas@1/us/10m.json", function(error, us) {
    if (error) throw error;

    context.beginPath();
    path(topojson.mesh(us));
    context.stroke();
});
