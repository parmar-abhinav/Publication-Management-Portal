import React, {Component} from 'react';
import '../Style.css';

class Loginn extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            userid:'',
            password:''
        }
        this.handleforgotpassword=this.handleforgotpassword.bind(this);
        this.handlesignin=this.handlesignin.bind(this);
        this.handleuserid=this.handleuserid.bind(this);
        this.handlepassword=this.handlepassword.bind(this);
    }
    handleuserid(e)
    {
        this.setState({
            userid: e.target.value,
            password: this.state.password
        })
    }
    handlepassword(e)
    {
        this.setState({
            userid: this.state.userid,
            password: e.target.value
        })
    }
    handleforgotpassword()
    {
        alert("forgot password");
    }
    handlesignin()
    {
        alert("handle sign in");
    }
    render(){
        return(
            <div className="login">
                 <img src="https://www.juet.ac.in/images/Header2.jpg" />
                 <p style={{fontSize: '30px'}}>Publication Portal</p>
                 <input value={this.state.userid} onChange={this.handleuserid} style={{width: '250px',padding: '12px 20px', marginBottom: '10px', borderRadius: '4px'}} type="text" name="userid" placeholder="User ID"/>
                 <br />
                 <input value={this.state.password} onChange={this.handlepassword} style={{width: '250px',padding: '12px 20px', marginBottom: '10px', borderRadius: '4px'}} type="password" name="password" placeholder="Password"/>
                 <br />
                 <button onClick={this.handlesignin} style={{fontSize: '15px', backgroundColor: '#4285F4',color: 'white',width: '300px',padding: '12px 20px', marginBottom: '10px', borderRadius: '4px'}}>Sign in</button>
                 <br />
                 <button onClick={this.handleforgotpassword} style={{fontSize: '15px', backgroundColor: '#4285F4',color: 'white', width: '300px',padding: '12px 20px', marginBottom: '10px', borderRadius: '4px'}}>Forgot Password</button>
            </div>
        )
    }
}
export default Loginn;