import React from 'react';
import BandColorDropDownComponent from './BandColorComponent'
import * as COLOR_CONSTANTS from '../Constants/bandColorConstants';
import './BandColorComponent.css';  


var BandComponent = (props) => {
    var bandColList = props.bandTypes.map((bandType, index) => {
        var colorList;
        if ((bandType.name === "bandOne") || bandType.name === "bandTwo") {
            colorList = COLOR_CONSTANTS.significantColorList;
        } else if (bandType.name === "bandThree") {
            colorList = COLOR_CONSTANTS.multiplierColorList;
        } else if (bandType.name === "bandFour") {
            colorList = COLOR_CONSTANTS.toleranceColorList;
        }
        return (
            <td>
                <BandColorDropDownComponent colorList={colorList} bandType={bandType}
                    bandSelectionCallback={props.bandSelectionCallback}
                />
            </td>
        );
    });
    return (
        <table className="bandtable">
            <tbody>
                <tr>
                    {bandColList}
                </tr>
            </tbody>
        </table>
    );
};
export default BandComponent;