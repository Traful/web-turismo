import React, { Component } from 'react';

class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            data: [],
            index: 0,
            count: 0,
            time: 2000
        }
        this.carouselTimer = this.carouselTimer.bind(this);
    }

    carouselTimer() {
        let indice = this.state.index;
        this.setState({
            index: indice++
        });
        if(this.state.index > this.state.data.length) {
            this.setState({
                index: 0
            });
        }
        let oldData = Object.assign([], this.state.data);
        oldData = oldData.map((d) => {
            return {...d, estilo: {display: "none"}}
        });
        let newDataItem = oldData[this.state.index];
        newDataItem["estilo"] = {display: "block"};
        oldData[this.state.index] = newDataItem;
        this.setState({
            data: oldData
        }, () => {
            setTimeout(this.carouselTimer(), this.props.time);
        });
    }

    componentDidMount() {
        
    }

    componentWillMount() {
        if(this.props.data.length) {
            let visible_one = false;
            this.setState({
                data: this.props.data.map((item) => {
                    if(!visible_one) {
                        visible_one = true;
                        return {...item, estilo: {display: "block"}}
                    } else {
                        return {...item, estilo: {display: "none"}}
                    }
                    
                }),
                count: this.props.data.length,
                time: this.props.time
            }, () => {
                setTimeout(this.carouselTimer(), this.props.time);
                /*
                this.setState({
                    timerFunc: setTimeout(this.carouselTimer(), this.props.time)
                });
                */
            });
        }
    }

    render() {
        const items = this.state.data.map((item) => {
            return(
                <div key={`ci-${item.id}`} className="carousel-item" style={item.estilo}>
                    {item.detalle}
                </div>
            );
        });
        return (
            <div className="Carousel">
                {items}
            </div>
        );
    }
}

export default Carousel;