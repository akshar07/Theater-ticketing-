import React, {Component} from 'react';
import {Tilt} from './Tilt'


export class Home extends Component{
    render(){
        return(
            <div className="full">
            <Tilt>
                <div className="totally-centered">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/qmxMAdV6s4U" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                </div>
            </Tilt>

        </div>
        )
    }
}

export default Home;