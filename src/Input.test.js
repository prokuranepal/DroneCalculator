import React from 'react';
import {shallow,mount,configure} from 'enzyme'
import {render,fireEvent} from '@testing-library/react'
import InputUnit from './components/InputUnit'
import MotorAndPropellerContainer from './components/MotorAndPropellerInputContainer'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

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
const dummyData={
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


describe('<Input/>', () => {
it(' check if input is present',()=>{
    const wrapper=setup(inputData);
    const input=findByTestAttr(wrapper,"testinput")
    // const input=wrapper.find('input');
    expect(input).toHaveLength(1)
})




if('check the calculated values in boxes',()=>{
    const wrapper=setup( calculatedInput);
    const calculatedInput=findByTestAttr(wrapper,"boxes");
    const data=calculatedInput.find('[data-test="box"]');
    console.debug(data)
    const value=data.text()
    expect(value).toEqual("dad");
})

it('check if calculated value boxes is present',()=>{
    const wrapper=setup(calculatedData);
    const calculatedInput=findByTestAttr(wrapper,"boxes")
    expect(calculatedInput).toHaveLength(1)

})


// it('check the value if it is correct or not when onChange is fired',()=>{
//     const wrapper=setup(inputData);
//     const input=findByTestAttr(wrapper,"testinput");
//     // fireEvent.change(input,{target:{value:100}})
//     input.simulate('change',{target:{value:100}})
//     // expect(data.data.value).toEqual(10)
//     // input.value=target.value
//     expect(inputData.data.value).toEqual(100)
// })

// it('check change handler',()=>{
//     const wrapper=setup(dummyData);
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
})