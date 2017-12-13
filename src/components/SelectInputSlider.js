import React from 'react';

import data from '../helpers/selectinputslider.json';

class SelectInputSlider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 0,
            data: data.inputrange
        }
    }

    SelectHandleOnChange(evt) {
        this.setState({ selected: evt.target.value});
    }

    inputHandleOnChange(evt) {
        this.setState({ selected: evt.target.value});
    }

    rangeHandleOnChange(evt) {
        this.setState({ selected: evt.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    maxValue(data) {
        const custom = [];
        data.map((item, key) => {
            return custom.push(item.value);
        })
        return Math.max(...custom);
    }

    minValue(data) {
        const custom = [];
        data.map((item, key) => {
            return custom.push(item.value);
        })
        return Math.min(...custom);
    }

    render() {
        return (
            <div className="react-select container">
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlSelect1">Select Number</label>
                        <select 
                            className="form-control" 
                            id="exampleFormControlSelect1"
                            value={this.state.selected}
                            onChange={(e) => this.SelectHandleOnChange(e)}>
                                {this.state.data.map((item, key) => {
                                    return <option key={key} value={item.value}>{item.name}</option>
                                })}
                        </select>
                        
                        <h4>{this.state.selected}</h4>

                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Enter Number</label>
                            <input 
                                type="text"
                                value={this.state.selected}
                                onChange={(e) => this.inputHandleOnChange(e)}
                                className="form-control" 
                                id="exampleInputEmail1" 
                                placeholder="Enter Number"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Change Range</label>
                            <input 
                                type="range" 
                                min={this.minValue(this.state.data)}
                                max={this.maxValue(this.state.data)}
                                step="1000"
                                onChange={(e) => this.rangeHandleOnChange(e)} 
                                value={this.state.selected}
                                className="slider" 
                                id="myRange"
                            />
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default SelectInputSlider;
