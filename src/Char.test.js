import React from 'react';
import {shallow,mount,configure} from 'enzyme'
import {render,fireEvent} from '@testing-library/react'
import Chart from './app/components/chart/Chart'
configure({adapter: new Adapter()});
import Adapter from 'enzyme-adapter-react-16';

const setup = (props = {}, state = null) => {
    return (shallow( < Chart {...props} />)
    )
}

const findByTestAttr=(wrapper, val)=>{
    return wrapper.find(`[data-test='${val}']`)
}

it('check chart component',()=>{
    const wrapper=setup();
    const line=wrapper.find('.chart')
    expect(line).toHaveLength(1)
})