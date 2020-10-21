import React from 'react'

const DuckCard = (props) => {
    const {duck} = props
    console.log(duck)
    return (
        <div>
            <h2>{duck.species}</h2>
        </div>
    )
}

export default DuckCard
