import React from "react";
import Box from "./Box";

const Board = ({board,onClick}) => {

    // const [board,setBoard] = useState(Array(9).fill(1))

    

    return(
        <>
            {/* <h1>Board</h1> */}
            <div className="board">
                {
                    board.map((value,index) => {
                        
                        console.log(value)
                        return <Box value={value} onClick={() => value ? null : onClick(index)}/>
                        
                    })
                }
            </div>
        </>
    )
}

export default Board