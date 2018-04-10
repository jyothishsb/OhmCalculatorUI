import React from 'react';
var BandColorDropDownComponent = (props) => {
    var bandColorList = Array.from(props.colorList).map(function (color, index) {
        return (<li><a id={index + ":" + color} onClick={props.bandSelectionCallback.bind(this, props.bandType.name, color)} >{color}</a></li>)
    }, this);

    var selectedColor = props.selectedColor
    return (
        <div> <label>{props.bandType.labelText}</label> <div className="updateSelectionlist" >
            <div className="dropdown">
                <button id="fieldSelectionDropdown-button" style={{ backgroundColor: props.bandType.selectedColor}} className="btn btn-primary dropdown-toggle"
                    type="button" data-toggle="dropdown" >{props.bandType.selectedColor}
                    <span id="dropdown-caret" className="caret"></span></button>
                <ul id="statusDropDownList" className="dropdown-menu">
                    {bandColorList}
                </ul>
            </div>
        </div>
        </div>)
};
export default BandColorDropDownComponent;