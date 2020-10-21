import React, {useState} from 'react'
import {connect} from 'react-redux'
import {postDucks} from '../actions'

const DucksForm = (props) => {
    const [duck, setDuck] = useState({
        species: '',
        region: '',
        cookTime: ''
    })
    console.log("hello:", props)
    const submitHandler = event => {
        event.preventDefault();
        props.postDucks(duck)
    }

    const changeHandler = event => {
        setDuck({...duck, [event.target.name]: event.target.value})
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input
                    name='species'
                    type='text'
                    value={props.species}
                    onChange={changeHandler}
                    placeholder='enter species'
                />
                <input
                    name='region'
                    type='text'
                    value={props.region}
                    onChange={changeHandler}
                    placeholder='enter region'
                />
                <input
                    name='cookTime'
                    type='text'
                    value={props.cookTime}
                    onChange={changeHandler}
                    placeholder='enter cook time'
                />
                <button>add that duck!</button>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        ducks: state.ducks,
        isLoading: state.isLoading,
        error: state.error
    }
}

export default connect (mapStateToProps, {postDucks}) (DucksForm)