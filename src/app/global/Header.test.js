import React from 'react';
import {shallow,mount,configure} from 'enzyme'
import {render,fireEvent} from '@testing-library/react'
import InputUnit from '../components/inputUnit/InputUnit'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({adapter: new Adapter()});
// import EnzymeAdapter from 'enzyme-adapter-react-15';

import Header from '../components/Header/Header'


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

