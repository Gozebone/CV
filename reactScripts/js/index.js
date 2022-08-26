'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var planets = [SvgEat2EatPlanet, SvgEat2EatPlanet, SvgEat2EatPlanet, SvgEat2EatPlanet, SvgEat2EatPlanet, SvgEat2EatPlanet, SvgEat2EatPlanet, SvgEat2EatPlanet];

var Planet = function (_React$Component) {
    _inherits(Planet, _React$Component);

    function Planet(props) {
        _classCallCheck(this, Planet);

        var _this = _possibleConstructorReturn(this, (Planet.__proto__ || Object.getPrototypeOf(Planet)).call(this, props));

        _this.state = {
            PlanetScale: 3,
            PlanetPosition: 600
        };
        return _this;
    }

    _createClass(Planet, [{
        key: 'render',
        value: function render() {
            return React.createElement(this.props.planet, { id: this.props.id, style: {
                    width: '1040', aspectRatio: '1', position: 'fixed',
                    left: '50%', top: "0",
                    transform: 'translate3d(-50%, ' + this.props.pos + 'px, ' + this.props.pos + 'px) scale(' + this.props.scale + ')',
                    transformOrigin: 'top center'
                } });
        }
    }]);

    return Planet;
}(React.Component);

var System = function (_React$Component2) {
    _inherits(System, _React$Component2);

    function System() {
        _classCallCheck(this, System);

        var _this2 = _possibleConstructorReturn(this, (System.__proto__ || Object.getPrototypeOf(System)).call(this));

        _this2.state = {
            offset: 0,
            mask: {
                2: { scale: 0, pos: 0 },
                3: { scale: 0.02, pos: 4 },
                4: { scale: 0.2, pos: 40 },
                5: { scale: 3, pos: 600 },
                6: { scale: 15, pos: 3000 }
            }
        };
        _this2.ref = React.createRef([]);
        return _this2;
    }

    _createClass(System, [{
        key: 'renderPlanet',
        value: function renderPlanet(planet, key, scale, pos) {
            return React.createElement(Planet, { planet: planet, id: key, key: key, scale: scale, pos: pos });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            $(document).ready(function () {
                $(document).bind('mousewheel', function (e) {
                    var delta = e.originalEvent.wheelDelta;
                    if (delta < 0) {
                        this.setState({ mask: decreaseKeys(this.state.mask) });
                    } else if (delta > 0) {
                        this.setState({ mask: increaseKeys(this.state.mask) });
                    }
                    console.log(this.state.mask);
                }.bind(this));
            }.bind(this));
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            // for (let key in Object.keys(this.state.mask)){
            //     gsap.to(this.ref.current[key], {
            //         duration:1,
            //         y: this.state.mask[key].position,
            //         scaleX: this.state.mask[key].scale,
            //         scaleY: this.state.mask[key].scale
            //     })
            // }
            console.log("triggered");
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return planets.map(function (planet, index) {
                var minimal = Object.keys(_this3.state.mask)[0],
                    maximum = Object.keys(_this3.state.mask)[4];
                if (index <= minimal) {
                    return _this3.renderPlanet(planet, index, _this3.state.mask[minimal].scale, _this3.state.mask[minimal].pos);
                } else if (index < maximum) {
                    return _this3.renderPlanet(planet, index, _this3.state.mask[index].scale, _this3.state.mask[index].pos);
                }
                return _this3.renderPlanet(planet, index, _this3.state.mask[maximum].scale, _this3.state.mask[maximum].pos);
            });
        }
    }]);

    return System;
}(React.Component);

var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(System, null));