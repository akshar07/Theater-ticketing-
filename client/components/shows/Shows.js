import React,{Component} from 'react'
import { Switch, Route } from 'react-router-dom'
import axios from 'axios';
import {Purchase} from '../Purchase/Purchase'
import './Shows.css'
export class Shows extends Component{
    constructor(props){
        super(props)
        this.state={
            movies:[],
            show:"",
            time:""
        }
    }
    componentDidMount() {
        axios.get('/shows').then(movies=>movies.data).then(shows=>this.setState({movies:shows}))
            .then(()=>console.log(this.state))  
    }
    show(movie,st){
        this.setState({show:movie,time:st});
    }
    render(){
        let details=null;
      if(this.state.show.length>0){
        details=<div>
            <p>You have selected {this.state.show} at {this.state.time} </p>
            <Purchase />
        </div>
      }
        return (
            <div className="container">
            <ul className="movies">
                {this.state.movies.map((movie)=>{
                    return (
                        <li>
                            <div> 
                                <div className="col-lg-3 image">
                                    <img src={movie.url} />
                                </div>
                                <div className="col-lg-9 description">
                                    <p><b>Name:</b> {movie.name}</p>
                                    <p><b>Show Times: </b> {movie.showTimes.map((st)=><span onClick={()=>this.show(movie.name,st)} className="showTimes">{st}</span> )}</p>
                                   <p><b>Price: </b> {movie.price} $</p>
                                    <p><b>Rating: </b>{movie.rating}</p>
                                </div>
                                <div className="clearfix" />
                                <div>
                                {this.state.show===movie.name?details:null}
                               
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
            </div>
        )
    }
}

export default Shows;