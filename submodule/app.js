KISSY.ready(function () {
    var S = KISSY, DOM = S.DOM, Event = S.Event;
    var R = Raphael;

    var paper = R('painter', DOM.viewportWidth(), DOM.viewportHeight());
    var rect = paper.rect(10, 10, 50, 50, 5).attr({fill: '#ccffcc', stroke: '#80ff80'}).click(function () {
        this.animate({x: 1000}, 200);
    });
});