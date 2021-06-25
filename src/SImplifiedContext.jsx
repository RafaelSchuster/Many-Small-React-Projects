import React, { Component } from 'react'
import { BookContext } from './Context'

export default class SimplifiedContext extends Component {
    static contextType = BookContext

    render() {
        return (
            <div>
                {this.context.book}
            </div>
        )
    }
}
