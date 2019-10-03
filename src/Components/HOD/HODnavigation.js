import React, {Component} from 'react';
import '../Style.css';

class Navigation extends Component
{
    constructor(props)
    {
        super(props)
        this.state={

        }
        this.handleHome=this.handleHome.bind(this);
        this.handleArticle=this.handleArticle.bind(this);
        this.handleRequest=this.handleRequest.bind(this);
        this.handleAlert=this.handleAlert.bind(this);
        this.handleMyProfile=this.handleMyProfile.bind(this);
        this.handleLogOut=this.handleLogOut.bind(this);
        this.handleYourArticles=this.handleYourArticles.bind(this);
        this.handledept=this.handledept.bind(this);
    }
    handleYourArticles()
    {
        alert("your articles");
    }
    handleMyProfile()
    {
        alert("profile");
    }
    handleLogOut()
    {
        alert("logout");
    }
    handleArticle()
    {
        alert("article");
    }
    handleHome()
    {
        alert("home");
    }
    handleRequest()
    {
        alert("request");
    }
    handleAlert()
    {
        alert("alert");
    }
    handleYourArticles()
    {
        alert("your articles");
    }
    handledept()
    {
        alert("handle dept");
    }
    render(){
        return(
            <div>
                <img src="https://www.juet.ac.in/images/Header2.jpg" width="100%"/>
                <div className="navbar">
                    <a onClick={this.handleHome}>Home</a>
                    <a onClick={this.handleYourArticles}>Your Articles</a>
                    <a onClick={this.handleArticle} >Add Article</a>
                    <a onClick={this.handleRequest} >Request</a>
                    <a onClick={this.handleAlert}>Alert</a>
                    <a onClick={this.handledept}>Manage Dept</a>
                    <div className="dropdown">
                        <button className="dropbtn">Profile</button>
                        <div className="dropdown-content">
                            <a onClick={this.handleMyProfile}>My Profile</a>
                            <a id="logout" onClick={this.handleLogOut}>Log Out</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Navigation;