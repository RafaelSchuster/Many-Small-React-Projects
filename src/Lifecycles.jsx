import React, { Component } from 'react'
import LifecyclesMsgHook from './LifecyclesMsgHook'
import Message from './Message'

let externalCount = 0

export default class Lifecycles extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0,
            display: true,
            deriving: 'false'

        }
    }
    handleClick = () => {
        externalCount++
        // this.forceUpdate()
        this.setState({ display: !this.state.display }, () => {
            this.setState(state => ({ count: ++state.count }))
        })
        this.props.callback(this.props.countProps + 1)

    }
    componentDidMount = () => {
        console.log('Did mount');
    }
    componentDidUpdate = () => {
        console.log('Did update');
    }
    shouldComponentUpdate(newProps, newState) {
        console.log(newProps);
        console.log(newState);
        if (newProps.countProps === 6) return false
        if (!newState.display) return false
        return true
    }
    static getDerivedStateFromProps(props, state) {
        console.log('Derived props:' + props.countProps + ' ' + 'State :' + state.count);
        if (props.countProps === state.count) {
            return {
                count: state.count + 1,
                deriving: 'true'
            }
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick} >Forcing</button>
                <h2>{externalCount}</h2>
                {this.state.display && <Message msg="Show message" />}
                {this.state.display && <LifecyclesMsgHook msg="Function Hooks LCs" />}
                <h1>Props Counter : {this.props.countProps}</h1>
                <h1>State Counter : {this.state.count} {this.state.deriving}</h1>

            </div>
        )
    }
}
