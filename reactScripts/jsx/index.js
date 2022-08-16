'use strict';

class Planet extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <SvgEat2EatPlanet style={{
                width: '1040', aspectRatio: '1', position: 'fixed',
                left: '50%',  top: "0",
                transform: `translate(-50%, ${this.props.pos}px) scale(${this.props.scale})`,
                transformOrigin: 'top center',
            }}/>
        );
    }
}

class System extends React.Component {
    renderPlanet(key, scale, pos) {
        return (
            <Planet key={key} scale={scale} pos={pos}/>
        )
    }

    render() {
        return ([
                this.renderPlanet(1,3*(scaleDelta),600*(positionDelta)),
                this.renderPlanet(2,3,600),
                this.renderPlanet(3, 3/(scaleDelta),600/(positionDelta))
            ]);
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<System />);
