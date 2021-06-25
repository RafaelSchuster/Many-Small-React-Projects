import React, { Component } from 'react'
import { BookContext } from './Context'
import Contexting from './Contexting'

export default class ContextWrapper extends Component {
    render() {
        return (
            <BookContext.Consumer>
                {contextData =>
                    <Contexting contInfo={contextData.book} animal={contextData.animal} callback={contextData.setBook} />
                }

            </BookContext.Consumer>
        )
    }
}
