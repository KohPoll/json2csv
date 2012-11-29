KISSY.ready(function () {
    var S = KISSY, DOM = S.DOM, Event = S.Event;
    var R = Raphael;
    var render = function (t, d) {
        return t.replace(/{([^}]+)}/g, function (all, k) { return d[k]; });
    };

    var paper = R('painter', DOM.viewportWidth(), DOM.viewportHeight());

    var commit = function (x, y, hash, parent) {
        var st, rect, text, path, bbox, pbbox;
        var w = 100, h = 40;
        var rectAttr = {'fill': '#ccffcc', 'stroke': '#80ff80', 'stroke-width': 4};
        var textAttr = {'font': '24px Fontin-Sans, Arial', 'fill': '#4c4c4c'};
        var arrowAttr = {'stroke': '#4c4c4c', 'stroke-width': 3};

        st = paper.set();
        rect = paper.rect(x, y, w, h, 5).attr(rectAttr);
        text = paper.text(x + w / 2, y + h / 2, hash).attr(textAttr);
        st.push(rect, text);

        if (parent) {
            bbox = rect.getBBox();
            pbbox = parent[0].getBBox();
            console.log(bbox, pbbox);
            path = paper.path(render('M{sx},{sy}L{ex},{ey}', {sx:bbox.x,sy:(bbox.y2-bbox.y)/2+y,ex:pbbox.x2,ey:(bbox.y2-bbox.y)/2+y})).attr(arrowAttr);
            paper.path(render('M{sx},{sy}L{ex},{ey}',{sx:pbbox.x2,sy:(bbox.y2-bbox.y)/2+y,ex:pbbox.x2+10,ey:(bbox.y2-bbox.y)/2+y+10})).attr(arrowAttr);
            paper.path(render('M{sx},{sy}L{ex},{ey}',{sx:pbbox.x2,sy:(bbox.y2-bbox.y)/2+y,ex:pbbox.x2+10,ey:(bbox.y2-bbox.y)/2+y-10})).attr(arrowAttr);
            st.push(path);
        }

        return st;

//        paper.rect(10, 10, 50, 50, 5).attr({fill: '#ccffcc', stroke: '#80ff80'}).click(function () {
//            this.animate({x: 1000}, 200);
//        });
    };

    var c1 = commit(10, 10, 'ed489');
    var c2 = commit(150, 10, 'da985', c1);
    var c3 = commit(290, 10, 'c10b9', c2);
});