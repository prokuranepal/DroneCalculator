import React from 'react';
import {shallow,mount,configure} from 'enzyme'
import {render,fireEvent} from '@testing-library/react'
import InputUnit from '../components/inputUnit/InputUnit'
import MotorAndPropellerContainer from './MotorAndPropellerInputContainer'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Output from '../components/output/Output'
configure({adapter: new Adapter()});
// import Adapter from '@wojtekmaj/enzyme-adapter-react-17';



const function_click=jest.fn()

const setup = (props = {}, state = null) => {
    return (shallow( < InputUnit {...props}  />)
    )
}

const findByTestAttr=(wrapper, val)=>{
    return wrapper.find(`[data-test='${val}']`)
}

const inputData={
    data:{
        value: 830,
        field: 'KV Rating',
        unit: 'kv',
        name: 'kvRating',
        input:true
    }
}
const calculatedData={
    data:{
        value: 830,
        field: 'KV Rating',
        unit: 'kv',
        name: 'kvRating',
        input:false 
    },
}
const dummyDataKVRating={
    key:'kvRating',
    data:{
        value: 830,
        field: 'KV Rating',
        unit: 'kv',
        name: 'kvRating',
        input:true 
    },
    id:'kvRating',
    onChange:function_click
}
const dummyDataCellsInSeries={
    key:'cellsInSeries',
    data:{
        value: 5,
        field: 'Cells in Series',
        unit: '',
        name: 'cellsInSeries',
        input:true 
    },
    id:'cellsInSeries',
    onChange:function_click
}

const output={
    value:'100',
    message:'Range'
}

describe('<Input/>', () => {
it(' check if input is present',()=>{
    const wrapper=setup(dummyDataKVRating);
    let input=findByTestAttr(wrapper,"testinputkvRating")
     input=findByTestAttr(wrapper,"testinputkvRating")
    expect(input.props().value).toEqual(830)
})
it('check if kv rating change handler is fired',()=>{
    const wrapper=setup(dummyDataKVRating);
    let input=findByTestAttr(wrapper,"testinputkvRating")
    expect(input).toHaveLength(1)
    expect(input.props().value).toEqual(830)
    expect(input.props().id).toEqual('kvRating')
    input.props().onChange('event')
    expect(function_click).toHaveBeenCalledTimes(1);
})

it('check if cells in series change handler is fired',()=>{
    const wrapper=setup(dummyDataCellsInSeries);
    let input=findByTestAttr(wrapper,"testinputcellsInSeries")
    expect(input).toHaveLength(1)
    expect(input.props().value).toEqual(5)
    expect(input.props().id).toEqual('cellsInSeries')
    input.props().onChange('event')
    expect(function_click).toHaveBeenCalledTimes(1);
})





it('check the calculated values and message in boxes',()=>{
    const wrapper=shallow( < Output {...output}/> )
    let calculatedInput=findByTestAttr(wrapper,"box");
    const div=wrapper.find('div')
    const p=wrapper.find('p').text()
    expect(p).toBe('Range')
    expect(div).toHaveLength(1)
    const value=calculatedInput.text()
    expect(value).toEqual("100");
})



it('check if calculated value boxes is present',()=>{
    const wrapper=setup(calculatedData);
    const calculatedInput=findByTestAttr(wrapper,"boxes")
    expect(calculatedInput).toHaveLength(1)

})
it('check if values are present in calculated value boxes ',()=>{
    const wrapper=setup(calculatedData);
    const calculatedInput=findByTestAttr(wrapper,"boxes")
    expect(calculatedInput.props().value).toBeTruthy()
})

})
