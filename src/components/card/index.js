import React from "react"
import PropTypes from "prop-types"
//import "./style.css"

export default function Card({ handleClick, id, front, height, width}){
    return <div
    className={"click-container"}
    style={{
       width: '200px',
       height: '200px',
       'flexBasis': '30%'
    }}
    onClick={()=> handleClick(id)}
    >
    <div className = "clicked">
    <img
    // style={{
    //     height, width
    // }}
    src={front}
    /> 
    <p>{front}</p>
        </div>
        </div>
}

Card.propTypes = {
    handleClick: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    front: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired
}