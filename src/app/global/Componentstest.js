// import React from 'react';
// import {shallow,mount,configure} from 'enzyme'
// import Header from './Header'
// import Typography from '@material-ui/core/AppBar'
// import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
// configure({adapter: new Adapter()});

// // import EnzymeAdapter from 'enzyme-adapter-react-15';

// // // it('Headers name',()=>{
// // //     const wrapper=shallow(<Header/>);
// // //         const 
// // // })

// // // describe("Header",()=>{
// // //     const fieldProps={
// // //         header:'Motor and Propeller Study'
// // //     }
// // // })

// // // const Composition=props=>{
// // //     return <Header {...fieldProps}/>
// // // }

// // // it('render',()=>{
// // //     const wrapper=mount(<Composition/>);
// // //     expect(wrapper.childAt(0).props().placeHolder).toEqual('Motor and Propeller Study');
// // // })

// it("h1",()=>{
//     const wrapper=shallow(<Header/>);
//     const h1=wrapper.find('h1');
//     const result=h1.text();
//     expect(result).toBe('Hi')
// })