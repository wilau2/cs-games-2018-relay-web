import React from 'react';
import { call, put, takeLatest } from 'redux-saga/effects';
import request from '../../api/request';
import Deferred from '../Deferred';

export default class CurrentAmount extends React.Component{
    getCurrentPrice(){
        return request('/api/price');  
    }

    render() {
       return (
       <div>
            <Deferred promise={this.getCurrentPrice()} then={v => <span><b>Current Price:</b> {v} PGG/CAD</span>} />
              </div>
        )
       }
 }