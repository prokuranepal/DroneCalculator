import React from 'react';
import {shallow,mount,configure} from 'enzyme'
import {render,fireEvent} from '@testing-library/react'
import MotorAndPropellerContainer from './app/global/MotorAndPropellerInputContainer'
configure({adapter: new Adapter()});
import Adapter from 'enzyme-adapter-react-16';


const setup = (props = {}, state = null) => {
    return (shallow( < MotorAndPropellerContainer {...props} />)
    )
}

const findByTestAttr=(wrapper, val)=>{
    return wrapper.find(`[data-test='${val}']`)
}
const function_click=jest.fn()

// it('check change handler',()=>{
//     const wrapper=setup();
//     // const wrapper=shallow(<MotorAndPropellerContainer/>)
//     const input=findByTestAttr(wrapper,"inputUnit")
//     expect(input.at(0).props().key).toEqual('kvRating')
//     expect(input.at(0).props().data).toEqual({ 
//         value: 830,
//         field: 'KV Rating',
//         unit: 'kv',
//         name: 'kvRating',
//         input:true })

//     // expect(input.at(0).props().onChange("e",dummyData.data,dummyData.id))
//     expect(input.at(0).props().onChange('event'));
//     expect(function_click).toHaveBeenCalledTimes(1)

// })

it('InputUnit Components exist',()=>{
    const wrapper=setup();
    const input=findByTestAttr(wrapper,'testinputunit')
    input.props().onChange()
    expect(function_click).toHaveBeenCalledTimes(1)
    expect(input).toHaveBeenCalledTimes(1)
})


