'use strict';

class Planet extends React.Component {
    constructor(props) {
        super(props);
        // state = {
        //     PlanetScale: 3,
        //     PlanetPosition: 600,
        // };
    }

    render() {
        return (
            <this.props.planet style={{
                width: '1040', aspectRatio: '1', position: 'fixed',
                left: '50%',  top: "0",
                transform: `translate(-50%, ${this.props.pos}px) scale(${this.props.scale})`,
                transformOrigin: 'top center',
            }}/>
        );
    }
}

class System extends React.Component {
    constructor() {
        super();

    }

    renderPlanet(planet, key, scale, pos) {
        return (
            <Planet planet={planet} key={key} scale={scale} pos={pos}/>
        )
    }

    // componentDidMount() {
    //     $(document).ready(function () {
    //         $(document).bind('mousewheel', function (e) {
    //             this.setState({PlanetScale: 3})
    //         });
    //     });
    // }
    //
    // componentDidUpdate() {
    //
    //     var delta = e.originalEvent.wheelDelta;
    //          if (delta > 0) {
    //              //go up
    //              tl.to(".planet", {
    //                  scaleY: "*=" + scaleDelta,
    //                  scaleX: "*=" + scaleDelta,
    //                  y: "*=" + positionDelta,
    //                  duration: 0
    //              })
    //
    //          } else {
    //              //go down
    //              tl.to(".planet", {
    //                  scaleY: "/=" + scaleDelta,
    //                  scaleX: "/=" + scaleDelta,
    //                  y: "/=" + positionDelta,
    //                  duration: 0
    //              })
    //          }
    // }

    render() {
        return ([
                this.renderPlanet(SvgEat2EatPlanet, 1,3*(scaleDelta),600*(positionDelta)),
                this.renderPlanet(SvgEat2EatPlanet, 2, 3,600),
                this.renderPlanet(SvgEat2EatPlanet, 3, 3/(scaleDelta),600/(positionDelta))
            ]);
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<System />);
