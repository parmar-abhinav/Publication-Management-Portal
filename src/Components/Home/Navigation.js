import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
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
    render(){
        return(
            <div>
                <img src="https://www.juet.ac.in/images/Header2.jpg" width="100%"/>
                <div className="navbar">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/Yourarticles">Your Articles</NavLink>
                    <NavLink to="/Addarticle">Add Article</NavLink>
                    <NavLink to="/Request">Request</NavLink>
                    <NavLink to="/Alert">Alert</NavLink>
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