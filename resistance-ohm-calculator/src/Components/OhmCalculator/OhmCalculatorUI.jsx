import React, { Component } from 'react';
import AppHeader from '../AppHeader/appHeader';
import BandColorDropDownComponent from './BandColorComponent'
import BandComponent from './BandComponent';
import { apiClient } from "../Common/apiClient";
import './OhmCalculatorUI.css';


var bandTypes = [
    { name: "bandOne", labelText: "Color of First Band" },
    { name: "bandTwo", labelText: "Color of Second Band" },
    { name: "bandThree", labelText: "Color of Multiplier Band" },
    { name: "bandFour", labelText: "Color of Tolerance Band" }];

export default class OhmCalculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false,
            message: 'Enter the band color',
            bandTypes: bandTypes,
            isResistanceLabelHidden: true,
        }
    }

    bandSelectionCallback = (bandType, color, event) => {
        var bandTypesSelected = this.state.bandTypes;
        for (const band of bandTypesSelected) {
            if (band.name == bandType) {
                band.selectedColor = color;
                break;
            }
        }
        this.setState({
            bandTypes: bandTypesSelected
        })
    }

    calculateResistance = () => {
        var bandA = this.state.bandTypes[0].selectedColor;
        var bandB = this.state.bandTypes[1].selectedColor;
        var bandC = this.state.bandTypes[2].selectedColor;
        var bandD = this.state.bandTypes[3].selectedColor;
        var url = process.env.REACT_APP_OHM_SERVICE_URL + bandA + '/' + bandB + '/' + bandC + '/' + bandD;

        apiClient(url, "GET", (response) => {
            console.log(response);
            if (response.status === '200'&& response.response.Success) {
                this.setState({
                    message: 'Resistance  is ' + response.response.Resistance +' Ohms',
                    isResistanceLabelHidden: false,
                    error: '',
                });
            }
            else if (response.status === '200'&& !response.response.Success) {
                this.setState({
                    message: response.response.Error,
                    isResistanceLabelHidden: false,
                    error: 'error',
                });
            }
            else {
                this.setState({
                    message: 'Some error occured!',
                    error: 'error',
                    isResistanceLabelHidden: true
                });
            }
        });
        
    }
    render() {
        return (
            <div>
                <AppHeader error={this.state.error} message={this.state.message} />
                <BandComponent bandSelectionCallback={this.bandSelectionCallback} bandTypes={this.state.bandTypes} />
                <div className="calculateResistance" >
                    <button type="button" className="btn btn-primary calculateResistanceButton" onClick={this.calculateResistance}>Calculate Resistance</button>
                    <label className="resistanceLabel" hidden={this.state.isResistanceLabelHidden}> {this.state.message}</label>
                </div>
            </div>
        )
    }
}