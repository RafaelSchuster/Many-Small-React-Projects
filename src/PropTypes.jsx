import React, { Component } from 'react'
import Proptypes from 'prop-types'

export default class PropTypesComp extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}
PropTypesComp.propTypes = {
    text: Proptypes.string,
    age: Proptypes.number,
    male: Proptypes.bool,
    func: Proptypes.func,
    card: Proptypes.object,
    pets: Proptypes.array,
    disabled: Proptypes.oneOfType([Proptypes.bool, Proptypes.string]),
    values: Proptypes.oneOf([2, 3, 4])

}