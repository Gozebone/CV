import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Eat2EatPlanet from './planetsComponents/Eat2EatPlanet';

class Planet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            vertical: 0,
            scale: 1
        };
    }

    render() {
        return (
            <Eat2EatPlanet style={{
                width: '1040', height: '1040', position: 'fixed',
                left: '50%',  top: this.props.value,
                transform: `translate(-50%, ${this.state.vertical}) scale(${this.state.scale})`,
                transformOrigin: 'top center'
            }}/>
        );
    }
}

class System extends React.Component {
    renderPlanet(vars) {
        return (
            <Planet value={vars} />
        )
    }
    render() {
        return ([
                this.renderPlanet("0"),
                this.renderPlanet("0"),
                this.renderPlanet("0")
            ]);
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<System />);
