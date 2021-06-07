import React from 'react';
import { Paper, Typography, TextField, Container, Grid } from '@material-ui/core'
import { Button } from '../Button'
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
const mockStore = configureStore([]);
import * as actions from '../store/actions';

import {
    configure,
    shallow,
    mount
} from 'enzyme';
import { Provider } from 'react-redux';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import SizingInputContainer, {objToArray, parasiticDragCalc, dragClCalc, wingAreaCalc} from './SizingInputContainer';
// import EnzymeAdapter from 'enzyme-adapter-react-15';
import {title,SizingProp} from '../data/data'

// JestHook.mock('expo-font');
configure({
    adapter: new EnzymeAdapter
})

const objToArrayData={
    specs: {
        style: null,
        input:{
            kvRating: {
                value: 830,
            },
            maxPower: {
                name: 'maxPower',
                input:true,

            },
           
        }
    },
        diameter:{
            style:null,
            input:{
            cp1:{            
                name:'cp1',
                
            }

        }}
}

export  const findByTestAttr=(wrapper, val)=>{
    return wrapper.find(`[data-test='${val}']`)
}
export const findByTestProps=(wrapper,val)=>{
    return wrapper.findByProps({"data-test": val})
}

const functionSubmit=jest.fn()
const preventDefaultFunction=jest.fn()
const pushFunction=jest.fn()

describe('<SizingInputContainer/>', () => {
    let store;
    beforeEach(() => {
        store = mockStore({
            reducer:{sizingPropsR:null}})
            store.dispatch=functionSubmit;
        })

    it('should render without issues', () => {
        const component = renderer.create(<Provider store={store}><SizingInputContainer /></Provider>);
        expect(component.toJSON()).toMatchSnapshot();
      });
    it('Test for Header Component issues', () => {
        const component = renderer.create(<Provider store={store}><SizingInputContainer /></Provider>)
        const wrapper = component.root;
        let headingComp= findByTestProps(wrapper, "headerComp") 
        expect(headingComp.props.header).toEqual('Sizing Study');
    });
   
    test.each(["Mission Requirement", "Operating Requirement", "Mass", "Wing", "Calculated Wing","Horizontal Tail","Calculated Horizontal Tail","Vertical Tail","Calculated Vertical Tail",  "Drag",  "General",  'Motor and Battery'])("title test",a=>{
        const component = renderer.create(<Provider store={store}><SizingInputContainer /></Provider>)
        const wrapper = component.root;
        
        let TypoComp= findByTestProps(wrapper, `${a}TypoComp`) 
        expect(TypoComp.props.children).toEqual(a);

    })

    it("objToArray Function Test",()=>{
        expect(objToArray(objToArrayData)).toStrictEqual([{"data": [{"data": null}, {"data": {"kvRating": {"value": 830}, "maxPower": {"input": true, "name": "maxPower"}}}], "title": undefined}, {"data": [{"data": null}, {"data": {"cp1": {"name": "cp1"}}}], "title": undefined}]
        )
    })

    it("dragClCalc Function Test",()=>{
        let {cl, drag}=dragClCalc(SizingProp,[11,12,13,14,15],0.11)
        expect(cl).toEqual([1.7057068805320552, 1.433267587113741, 1.2212457547004656, 1.0530129211447892, 0.9172912557527942])
        expect(drag).toEqual([10.600452866201794, 10.677732009100119, 11.034873353907793, 11.61787555770621, 12.390113585824077])
    })
    it("parasiticDragCalc Function Test",()=>{
        expect(parasiticDragCalc(SizingProp)).toEqual(0.11)
    })
    it("wingAreaCalc Function Test",()=>{
        expect(wingAreaCalc(SizingProp)).toBe(0.8450000000000001)
    })

    it('Test Events and props in input component kVRating', () => {
        const component = renderer.create(<Provider store={store}><SizingInputContainer /></Provider>)
        const wrapper = component.root;
        let rangeInputComp= findByTestProps(wrapper, "rangeInputComp") 
        let flightTimeBatteryCapacity= findByTestProps(wrapper, "flightTimeBatteryCapacityInputComp") 
        expect(rangeInputComp.props.data).toEqual({
            value:89.28,
            unit:'km',
            input:true,
            field:'Range',
            name:'range',
            parent:'missionRequirement',
        })
        expect(flightTimeBatteryCapacity.props.data).toEqual({
            value:27762.886574606317,
            unit:'mAh',
            input:false,
            field:'Battery Capacity',
            name:'flightTimeBatteryCapacity',
            parent:'motorAndBattery',
        });
        rangeInputComp.props.onChange({target:{value:90}});
        expect(rangeInputComp.props.data).toEqual({
            value:90,
            unit:'km',
            input:true,
            field:'Range',
            name:'range',
            parent:'missionRequirement',
        })
        expect(flightTimeBatteryCapacity.props.data).toEqual({
            value:24925.246886011213,
            unit:'mAh',
            input:false,
            field:'Battery Capacity',
            name:'flightTimeBatteryCapacity',
            parent:'motorAndBattery',
        });
    });

    it('Test for Submit Component', () => {
        const component = renderer.create(<Provider store={store}><SizingInputContainer history={{push:pushFunction}}/></Provider>)
        const wrapper = component.root;
        let submitComp= findByTestProps(wrapper, "submitComp") 
        submitComp.props.submitHandler({preventDefault:preventDefaultFunction})
        expect(preventDefaultFunction).toHaveBeenCalledTimes(1)
        expect(functionSubmit).toHaveBeenCalledTimes(1)
        expect(pushFunction).toHaveBeenCalledTimes(1)
        expect(pushFunction).toHaveBeenCalledWith('/')
        expect(functionSubmit).toHaveBeenCalledWith(actions.updateSizingPropValues(SizingProp))
    });

      it('Test for Chart Component', () => {
        const component = renderer.create(<Provider store={store}><SizingInputContainer history={{push:pushFunction}}/></Provider>)
        const wrapper = component.root;
        let velocity=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36];
        let {cl, drag}=dragClCalc(SizingProp,velocity,parasiticDragCalc(SizingProp))
        let chartComp= findByTestProps(wrapper, "chartComp") 
        expect(chartComp.props.cl).toEqual(cl);
        expect(chartComp.props.drag).toEqual(drag);
        expect(chartComp.props.velocity).toEqual(velocity);        
      });

})