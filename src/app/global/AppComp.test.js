import React from 'react';
import {shallow,mount,configure} from 'enzyme'
// import {render,fireEvent} from '@testing-library/react'
// import MotorAndPropellerInputContainer from './app/global/MotorAndPropellerInputContainer'
// import SizingInputContainer from './app/global/SizingInputContainer'
configure({adapter: new Adapter()});
import Adapter from 'enzyme-adapter-react-16';

import App from '../../App'



const setup = (props = {}, state = null) => {
    return (shallow( < App {...props}  />)
    )
}
const findByTestAttr=(wrapper, val)=>{
    return wrapper.find(`[data-test='${val}']`)
}


it('Checks if <App/> renders correctly',()=>{
    const wrapper =setup()
    expect(wrapper.find('#motor')).toHaveLength(2)
    expect(wrapper.find('#sizing')).toHaveLength(1)
    expect(wrapper.find('.App')).toHaveLength(1)

    
})

