import React, { useState } from 'react';
import AccumulateState from './AccumulateState';
import './App.css';
import Binding from './Binding';
import DefaultPropsComp from './DefaultProps';
import EventPropagation from './EventPropagation';
import Lifecycles from './Lifecycles';
import PropTypesComp from './PropTypes';
import { BookContext } from '../src/Context'
import ContextWrapper from './ContextWrapper';
import SimplifiedContext from './SImplifiedContext';
import AppliedErrorB from './AppliedErrorB';
import ErrorBoundaries from './ErrorBoundaries';



function App(props) {
  const [countProps, setCountProps] = useState(0)
  const [book, setBook] = useState('Native')
  const [animal, setanimal] = useState('dog')

  return (
    <BookContext.Provider value={{ book, setBook, animal }}>
      <div className="App">
        <AppliedErrorB />
        <ContextWrapper />
        <SimplifiedContext />
        <DefaultPropsComp />
        <PropTypesComp text='nice' age={3} disabled={props.disabled === true || props.disabled === 'true'} values={3} />
        <AccumulateState />
        <Binding />
        <EventPropagation />
        <Lifecycles countProps={countProps} callback={setCountProps} />
      </div>
    </BookContext.Provider>
  );
}


export default App;
