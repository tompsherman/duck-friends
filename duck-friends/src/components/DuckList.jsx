import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchDucks} from '../actions'
import DuckCard from './DuckCard'

const DucksList = (props) => {
    const {fetchDucks} = props
    useEffect(() => {
        fetchDucks()
    }, [fetchDucks])
    return (
        <div> this is a list
            {
                props.ducks.map(item => (
                    <DuckCard key={item.id} duck={item}/>
                ))
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        ducks: state.ducks,
        isLoading: state.isLoading,
        errors: state.errors
    }
}

export default connect (mapStateToProps, {fetchDucks}) (DucksList)