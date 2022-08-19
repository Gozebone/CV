'use strict';

const planets = [
    SvgEat2EatPlanet,
    SvgEat2EatPlanet,
    SvgEat2EatPlanet,
    SvgEat2EatPlanet,
    SvgEat2EatPlanet,
    SvgEat2EatPlanet,
    SvgEat2EatPlanet,
    SvgEat2EatPlanet
]

var mask = [2, 3, 4, 5, 6]

class Planet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            PlanetScale: 3,
            PlanetPosition: 600,
        };
        this.delta;
    }

    componentDidMount() {
        $(document).ready(function () {
            $(document).bind('mousewheel', function (e) {
                this.delta = e.originalEvent.wheelDelta;
                this.setState({PlanetScale: 4})
            }.bind(this));
        }.bind(this));
    }

    componentDidUpdate() {
        const tl = gsap.timeline();
        const id = this.props.id
        if (this.delta > 0) {
            //go up
            gsap.to(q(`#${id}`), {
                scaleY: "*=" + scaleDelta,
                scaleX: "*=" + scaleDelta,
                y: "*=" + positionDelta,
                duration: 0
            })
        } else {
            //go down
            gsap.to(q(`#${id}`), {
                scaleY: "/=" + scaleDelta,
                scaleX: "/=" + scaleDelta,
                y: "/=" + positionDelta,
                duration: 0
            })
        }
    }

    render() {
        return <this.props.planet id={this.props.id} style={{
                width: '1040', aspectRatio: '1', position: 'fixed',
                left: '50%',  top: "0",
                transform: `translate(-50%, ${this.props.pos}px) scale(${this.props.scale})`,
                transformOrigin: 'top center',
        }}/>
    }
}

class System extends React.Component {
    renderPlanet(planet, key, scale, pos) {
        return (
            <Planet planet={planet} id={key} key={key} scale={scale} pos={pos}/>
        )
    }

    render() {
        return planets.map((planet, index) => (
            this.renderPlanet(planet, index, 3, 600)
        ))
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<System />);
