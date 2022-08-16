$(document).ready(function() {
    $(document).bind('mousewheel', function (e) {
        const tl = gsap.timeline();
        var delta = e.originalEvent.wheelDelta;
        if (delta > 0) {
            //go up
            tl.to(".planet", {
                scaleY: "*=" + scaleDelta,
                scaleX: "*=" + scaleDelta,
                y: "*=" + positionDelta,
                duration: 0
            })

        } else {
            //go down
            tl.to(".planet", {
                scaleY: "/=" + scaleDelta,
                scaleX: "/=" + scaleDelta,
                y: "/=" + positionDelta,
                duration: 0
            })
        }

    });
});