import React from "react"
import PropTypes from "prop-types"

import Card from "../card"

const styles = {
    'display': 'flex',
    'justifyContent': 'space-around',
    'flexWrap': 'wrap',
}

export default function Board ({cards, handleClick, clicked}){
    return (
    <div className="board" style={styles}>
        {cards.map((card)=> (
             <Card
             key= {card.id}
             id={card.id}
             type={card.type}
             front={card.front}
            //  width={card.width}
            //  height={card.height}
            //  clicked={clicked.includes(card.id)}
             handleClick={handleClick}
             />
                      ))}
                      </div>
    )
}

Board.proptTypes = {
    cards: PropTypes.arrayOf(PropTypes.shape({})),
    flipped: PropTypes.arrayOf(PropTypes.number).isRequired,
    handleClick: PropTypes.func.isRequired
}
