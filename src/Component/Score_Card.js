import React from "react";


const ScoreCard = ({whosTurn,winnerPoint}) => {
    console.log('winnerPoint', winnerPoint)
    return(
        <>
            <div className="scoreCard">
                <div className={`playerContainer-X ${whosTurn ? "active" : null}`}>
                <h3>Player 1 || X </h3>
                <h3>{winnerPoint.xScore}</h3>
                </div>
                <div className={`playerContainer ${!whosTurn ? "active" : null}`}>
                <h3>Player 2 || O </h3>
                <h3>{winnerPoint.oScore}</h3>
                </div>
            </div>
        </>
    )
}

export default ScoreCard;