import React, { Component } from 'react';
import { connect } from "react-redux";

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/actions';

class Counter extends Component {
    state = {
        counter: 0
    }

    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter} />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractCounter} />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Results</button>
                <ul>
                    {this.props.storedResults.map(storedResult => {
                        return (<li key={storedResult.id} onClick={() => this.props.onDeleteResult(storedResult.id)}>{storedResult.value}</li>)
                    })}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => {
            return dispatch({ type: actionTypes.INCREMENT });
        },
        onDecrementCounter: () => {
            return dispatch({ type: actionTypes.DECREMENT })
        },
        onAddCounter: () => {
            return dispatch({ type: actionTypes.ADD, value: 5 })
        },
        onSubtractCounter: () => {
            return dispatch({ type: actionTypes.SUBTRACT, value: 5 })
        },
        onStoreResult: (result) => {
            return dispatch({ type: actionTypes.STORE_RESULT, value: result })
        },
        onDeleteResult: (id) => {
            return dispatch({ type: actionTypes.DELETE_RESULT, id: id })
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);