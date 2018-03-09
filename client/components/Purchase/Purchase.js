import React, {Component} from 'react'
import  axios  from "axios";

export class Purchase extends Component{
    constructor(props){
        super(props)
        this.state={
            email:"",
            password:""
        }
        this.handleEmail=this.handleEmail.bind(this)
        this.handlePass=this.handlePass.bind(this)
        this.signin=this.signin.bind(this)
    }
    handleEmail(e){
        let email=e.target.value;
        this.setState({email:email})
    }
    handlePass(e){
        let pass=e.target.value;
        this.setState({password:pass})
    }
    signin(){
        axios.post('/signin',{
            email:this.state.email,
            password:this.state.password
        }).then((bool)=>{
            if(bool){
                console.log(bool)
            }
        })
    }
    render(){
        return(
            <div>
                <div class="col-lg-3">
                    <label> Email </label>
                </div>
                <div class="col-lg-4">
                    <input type="text" onChange={this.handleEmail}/>
                </div>
                <div class="clearfix" />
                <div class="col-lg-3">
                    <label> Credit Card Number </label>
                </div>
                <div class="col-lg-4">
                    <input type="password" onChange={this.handlePass}/>
                </div>
                <div class="clearfix" />
                <div class="col-lg-3">
                    <label> CVV </label>
                </div>
                <div class="col-lg-4">
                    <input type="password" />
                </div>
                <div class="clearfix" />
                <button onClick={this.signin}>Log In</button>
            </div>
        )
    }
}

export default Purchase;