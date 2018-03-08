import React from 'react';
import ReactTestUtils from 'react-dom/test-utils'; // ES6
import expect from 'expect'
import Home from '../home/Home';

describe('Home Component',()=>{
    it('should feel like home',()=>{
        const renderer=ReactTestUtils.createRenderer();
        renderer.render(Home)
        const output=renderer.getRenderOutput()
        console.log(output)
    })
})
