import React, { Component } from 'react'
import ErrComp1 from './ErrComp1'
import ErrComp2 from './ErrComp2'
import ErrorBoundaries from './ErrorBoundaries'

export default class AppliedErrorB extends Component {
    render() {
        return (
            <div>
                <ErrorBoundaries>
                    <ErrComp1 />
                    <ErrComp2 />
                </ErrorBoundaries>

            </div>
        )
    }
}
