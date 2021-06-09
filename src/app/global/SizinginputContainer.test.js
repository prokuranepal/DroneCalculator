import React from 'react';
import { Paper, Typography, TextField, Container, Grid } from '@material-ui/core'
import { Button } from '../components/Button/Button'
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
import SizingInputContainer, {objToArray, parasiticDragCalc, dragClCalc, wingAreaCalc,calculatedVerticalTailTipChord,
    calculatedVerticalTailRootChord,
    calculatedVerticalTailSvt,calculatedHorizontalTailTipChord,calculatedHorizontalTailSht,calculatedWingTipChord,
    calculatedWingRootChord,calculatedHorizontalTailRootChord,
    capacityOfEachCell,cRating,
    currentCruise,powerCruise,rangeCruiseSpeed,rangeBatteryCapacity,
    flightTimeBatteryCapacity,flightTime,maxPower,maxLiftCoefficient,totalDragCoefficient,
    ostwaldEfficiency,massFraction,k,minPowerAirspeed,designLiftCoefficient,minDragAirspeed,liftToDragRatio,inducedDragCoefficient,totalDrag, meanAerodynamicChord,} from './SizingInputContainer';
// import EnzymeAdapter from 'enzyme-adapter-react-15';
import {title,SizingProp} from '../../data/data'

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

    // it('should render without issues', () => {
    //     const component = renderer.create(<Provider store={store}><SizingInputContainer /></Provider>);
    //     expect(component.toJSON()).toMatchSnapshot();
    //   });
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
        expect(drag).toEqual([10.6032624929746, 10.680092876041156, 11.036884980177081, 11.619610072193503, 12.391624540666342])
    })
    it("parasiticDragCalc Function Test",()=>{
        expect(parasiticDragCalc(SizingProp)).toEqual(0.11)
    })
    it("wingAreaCalc Function Test",()=>{
        expect(wingAreaCalc(SizingProp)).toBe(0.8450000000000001)
    })
    it('calculatedWingRootChord Function Test',()=>{
        expect(calculatedWingRootChord(SizingProp)).toBe(0.40625)
    })
    it('calculatedWingTipChord Function Test',()=>{
        expect(calculatedWingTipChord(SizingProp)).toBe(0.24375)
    })
    it('meanAerodynamicChord Function Test',()=>{
        expect(meanAerodynamicChord(SizingProp)).toBe(0.3317708333333333)
    })
    it('calculatedHorizontalTailSht Function Test',()=>{
        expect(calculatedHorizontalTailSht(SizingProp)).toBe(0.17388815902825636)
    })
    it('calculatedHorizontalTailRootChord Function Test',()=>{
        expect(calculatedHorizontalTailRootChord(SizingProp)).toBe(0.22730478304347235)
    })
    it('CalculatedHorizontalTailTipChord',()=>{
        expect(calculatedHorizontalTailTipChord(SizingProp)).toBe(0.24375)
    })
    it('calculatedVerticalTailSvt Function Test',()=>{
        expect(calculatedVerticalTailSvt(SizingProp)).toBe(0.10598897312198485)
    })
    it('calculatedVerticalTailRootChord',()=>{
        expect(calculatedVerticalTailRootChord(SizingProp)).toBe(0.2493858191105526)
    })
    it('calculatedVerticalTailTipChord',()=>{
        expect(calculatedVerticalTailTipChord(SizingProp)).toBe(0.1745700733773868)
    })
    it('MassFunction',()=>{
        expect(massFraction(SizingProp)).toBe(216.87500000000003)
    })
    it('ostwaldEfficiency',()=>{
        expect(ostwaldEfficiency(SizingProp)).toBe(0.9615384615384615)
    })
    it('k Function Test',()=>{
        expect(k(SizingProp)).toBe(0.041401273885350316)
    })
    it('minDragAirspeed',()=>{
        expect(minDragAirspeed(SizingProp)).toBe(11.252528992674344)
    })
    it('minPowerAirspeed Function test',()=>{
        expect(minPowerAirspeed(SizingProp)).toBe(8.550073082463134)
    })
    it('maxLiftCoefficient Function Test',()=>{
        expect(maxLiftCoefficient(SizingProp)).toBe(0.9172912557527942)
    })
    it('designLiftCoefficient Function Test',()=>{
        expect(designLiftCoefficient(SizingProp)).toBe(0.5159763313609467)
    })
    it('inducedDragCoefficient Function Test',()=>{
        expect(inducedDragCoefficient(SizingProp)).toBe(0.011022326333825218)
    })
    it('totalDragCoefficient Function Test',()=>{
        expect(totalDragCoefficient(SizingProp)).toBe(0.12102232633382522)
    })
    it('drag Function Test',()=>{
        expect(totalDrag(SizingProp)).toBe(1.876401206460226)
    })
    it('liftToDragRatio',()=>{
        expect(liftToDragRatio(SizingProp)).toBe(46.811926605504595)
    })
    it('maxPower',()=>{
        expect(maxPower(SizingProp)).toBe(2000)
    })
    it('powerCruise',()=>{
        expect(powerCruise(SizingProp)).toBe(368.14991670749635)
    })
    it('currentCruise',()=>{
        expect(currentCruise(SizingProp)).toBe(18.090904997911366)
    })
    it('flighttime',()=>{
        expect(flightTime(SizingProp)).toBe(1.24)
    })
    it('rangeBatteryCapacity',()=>{
        expect(rangeBatteryCapacity(SizingProp)).toBe(24925.246886011213)
    })
    it('rangeCruiseSpeed Function Test',()=>{
        expect(rangeCruiseSpeed(SizingProp)).toBe(89.28)
    })
    it('flighttimebatteryCapacity',()=>{
        expect(flightTimeBatteryCapacity(SizingProp)).toBe(24925.246886011213)
    })
    it('capacityOfEachCell',()=>{
        expect(capacityOfEachCell(SizingProp)).toBe(3671.4285714285716)
    })
    it('cRating Function Test',()=>{
        expect(cRating(SizingProp)).toBe(27.237354085603112)
    })



    it('Test Events and props in input component kVRating', () => {
        const component = renderer.create(<Provider store={store}><SizingInputContainer /></Provider>)
        const wrapper = component.root;
        let rangeInputComp= findByTestProps(wrapper, "rangeInputComp") 
        let flightTimeBatteryCapacity= findByTestProps(wrapper, "flightTimeBatteryCapacityInputComp") 
        let altitude=findByTestProps(wrapper,"altitudeInputComp")
        expect(rangeInputComp.props.data).toEqual({
            value:89.28,
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
       
        expect(altitude.props.data).toEqual({
            value:2500,
            unit:'m',
            input:true,
            field:'Altitude',
            name:'altitude',
            parent:'operatingEnvironment'
        });
        altitude.props.onChange({target:{value:3000}});
        expect(altitude.props.data).toEqual({
            value:3000,
            unit:'m',
            input:true,
            field:'Altitude',
            name:'altitude',
            parent:'operatingEnvironment'
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