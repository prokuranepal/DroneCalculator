import React from 'react';
import {shallow,mount,configure} from 'enzyme'
import {render,fireEvent} from '@testing-library/react'
import InputUnit from './components/InputUnit'

configure({adapter: new Adapter()});
import Adapter from 'enzyme-adapter-react-16';

import Header from './components/Header'

// // it('Headers name',()=>{
// //     const wrapper=shallow(<Header/>);
// //         const 
// // })

// // describe("Header",()=>{
// //     const fieldProps={
// //         header:'Motor and Propeller Study'
// //     }
// // })

// // const Composition=props=>{
// //     return <Header {...fieldProps}/>
// // }

// // it('render',()=>{
// //     const wrapper=mount(<Composition/>);
// //     expect(wrapper.childAt(0).props().placeHolder).toEqual('Motor and Propeller Study');
// // })

const dummyData={
    header:'header'
}

const setup = (props = {}, state = null) => {
    return (shallow( < Header {...props}  />)
    )
}

const findByTestAttr=(wrapper, val)=>{
    return wrapper.find(`[data-test='${val}']`)
}



it('should render title name in Navbar',()=>{
    const wrapper=setup(dummyData)
    const header=findByTestAttr(wrapper,"header")
    // const wrapper=shallow(<Header header="header"/>);
    // const {getByTestId}=render(<Header/>);
    const headerCheck=header.text();
    // const header = wrapper.find('[data-testid="header"]').text();

    // const header=getByTestId('header')
    // const result=header.text();
    expect(headerCheck).toBe('header');
})

