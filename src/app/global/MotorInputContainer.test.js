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
import MotorAndPropellerInputContainer,{nominalVoltage,diameter1,diameter2,maxRPM,maxWorkingRPM,pitch1,pitch2,objToArray} from './MotorAndPropellerInputContainer'
import {motorProp} from '../../data/data'

configure({
    adapter: new EnzymeAdapter
})

const objToArrayData={
    specs: {
        style: null,
        input:{
            kvRating: {
                value: 830,
                field: 'KV Rating',
                unit: 'kv',
                name: 'kvRating',
                input:true
            },
            cellsInSeries: {
                value: 5,
                field: 'Cells in series',
                name: 'cellsInSeries',
                input:true
            }
        }
    },
     diameter:{
          style:null,
            input:{
            cp1:{
                 value:0.04,
                 field:'CP1',
                 name:'cp1',
                 input:true
                    
                },
            cp2:{
                value:0.09,
                 field:'CP2',
                 name:"cp2",
                 input:true
                },
        }
      }
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


describe('<MotorInputContainer/>', () => {
    let store;
    beforeEach(() => {
        store = mockStore({
            reducer:{motorPropsR:null}})
            store.dispatch=functionSubmit;
        })

        it('Test for Header Component issues', () => {
            const component = renderer.create(<Provider store={store}><MotorAndPropellerInputContainer /></Provider>)
            const wrapper = component.root;
            let headingComp= findByTestProps(wrapper, "motorHeaderComp") 
            expect(headingComp.props.header).toEqual('Motor and Propeller Study');
        });

        test.each(["specs","diameter","environment","pitch"])("title test",a=>{
            const component = renderer.create(<Provider store={store}><MotorAndPropellerInputContainer /></Provider>)
            const wrapper = component.root;
            
            let TypoComp= findByTestProps(wrapper, `${a}TypoComp`) 
            expect(TypoComp.props.children).toEqual(a);
    
        })
        // it("objToArray Function Test",()=>{
        //     expect(objToArray(objToArrayData)).toStrictEqual([{"id": [{"data": null}, {"id": {"kvRating": {"value": 830}, "maxPower": {"input": true, "name": "maxPower"}}}], "id": "specs"}, {"data": [{"data": null}, {"data": {"cp1": {"name": "cp1"}}}], "title": "diameter"}]
        //     )
        // })

        it('niminalVoltage Function Test',()=>{
            expect(nominalVoltage(motorProp)).toBe(18.5)
        })
        it('diameter1 Function Test',()=>{
            expect(diameter1(motorProp)).toBe(11.340091785602759)
        })
        it('diameter2 Function test',()=>{
            expect(diameter2(motorProp)).toBe(9.642287268468687)
        })
        it('pitch1 Function Test',()=>{
            expect(pitch1(motorProp)).toBe(4.886664819587804)
        })
        it('pitch2 Function Test',()=>{
            expect(pitch2(motorProp)).toBe(7.818663711340486)
        })
        it('maxPower Function test',()=>{
            expect(maxRPM(motorProp)).toBe(15355)
        })
        it('maxWorkingRPM Function Test',()=>{
            expect(maxWorkingRPM(motorProp)).toBe(13051.75)
        })

        it('Test Events and props in input component kVRating', () => {
            const component = renderer.create(<Provider store={store}><MotorAndPropellerInputContainer/></Provider>)
            const wrapper = component.root;
            let kvRating= findByTestProps(wrapper, "kvRatingInputComp") 
            let cellsInSeries= findByTestProps(wrapper, "cellsInSeriesInputComp") 
            let cp1=findByTestProps(wrapper,"cp1InputComp")
            expect(kvRating.props.data).toEqual({
                value: 830,
                field: 'KV Rating',
                unit: 'kv',
                name: 'kvRating',
                input:true
            })
            expect(cellsInSeries.props.data).toEqual({
                value: 5,
                field: 'Cells in series',
                name: 'cellsInSeries',
                input:true
            });
            kvRating.props.onChange({target:{value:90}});
            expect(kvRating.props.data).toEqual({
                value: 90,
                field: 'KV Rating',
                unit: 'kv',
                name: 'kvRating',
                input:true
            })
            cellsInSeries.props.onChange({target:{value:6}});
            expect(cellsInSeries.props.data).toEqual({
                value: 6,
                field: 'Cells in series',
                name: 'cellsInSeries',
                input:true
            });
            expect(cp1.props.data).toEqual({
                value:0.04,
                field:'CP1',
                name:'cp1',
                input:true
            })
            cp1.props.onChange({target:{value:0.07}});
            expect(cp1.props.data).toEqual({
                value:0.07,
                field:'CP1',
                name:'cp1',
                input:true
            })
        });

        it('Test for Submit Component', () => {
            const component = renderer.create(<Provider store={store}><MotorAndPropellerInputContainer history={{push:pushFunction}}/></Provider>)
            const wrapper = component.root;
            let submitComp= findByTestProps(wrapper, "submitComp") 
            submitComp.props.submitHandler({preventDefault:preventDefaultFunction})
            expect(preventDefaultFunction).toHaveBeenCalledTimes(1)
            expect(functionSubmit).toHaveBeenCalledTimes(1)
            expect(pushFunction).toHaveBeenCalledTimes(1)
            expect(pushFunction).toHaveBeenCalledWith('/sizing')
            expect(functionSubmit).toHaveBeenCalledWith(actions.updateMotorPropValues(motorProp))
        });
    
    })
 


