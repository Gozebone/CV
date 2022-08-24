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

class Planet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            PlanetScale: 3,
            PlanetPosition: 600,
        };
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
    constructor() {
        super();
        this.delta = 0;
    }
    renderPlanet(planet, key, scale, pos) {
        return (
            <Planet planet={planet} id={key} key={key} scale={scale} pos={pos}/>
        )
    }

    componentDidMount() {
        $(document).ready(function () {
            $(document).bind('mousewheel', function (e) {
                this.delta = e.originalEvent.wheelDelta;
                if (this.delta < 0){
                    mask = increaseKeys(mask)
                } else if (this.delta > 0) {
                    mask = decreaseKeys(mask)
                }
                console.log(mask)
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
        return planets.map((planet, index) => {
            const minimal = Object.keys(mask)[0], maximum = Object.keys(mask)[4]
            if (index <= minimal) {
                return this.renderPlanet(planet, index, mask[minimal].scale, mask[minimal].pos)
            } else if (index < maximum) {
                return this.renderPlanet(planet, index, mask[index].scale, mask[index].pos)
            }
            return this.renderPlanet(planet, index, mask[maximum].scale, mask[maximum].pos)
        })
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<System />);
