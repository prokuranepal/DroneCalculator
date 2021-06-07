import React from 'react';
import {shallow,mount,configure} from 'enzyme'
import {render,fireEvent} from '@testing-library/react'
import MotorAndPropellerContainer from './components/MotorAndPropellerInputContainer'
configure({adapter: new Adapter()});
import Adapter from 'enzyme-adapter-react-16';


const setup = (props = {}, state = null) => {
    return (shallow( < MotorAndPropellerContainer />)
    )
}

const findByTestAttr=(wrapper, val)=>{
    return wrapper.find(`[data-test='${val}']`)
}

