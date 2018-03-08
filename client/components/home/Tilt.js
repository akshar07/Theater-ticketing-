import React,{Component} from 'react';
import './tilt.css'
export class Tilt extends Component{
    componentDidMount() {
        VanillaTilt.init(this.rootNode, {
          max: 25,
          speed: 400,
          glare: true,
          'max-glare': 0.5,
        })
      }
   render(){
       return(
           <div ref={node=>(this.rootNode=node)} className="tilt-root">
                <div className="tilt-child">
                    <div {...this.props} />
                </div>
           </div>
       )
   }
}

export default Tilt;