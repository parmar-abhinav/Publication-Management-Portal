import React, {Component} from 'react';
import Navigation from '../Home/Navigation';
import RetrunType from './ReturnType';
import '../Style.css';

class Addarticle extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            type: "Journal"
        }
        this.handletype=this.handletype.bind(this);
        this.handleadd=this.handleadd.bind(this);
    }
    handleadd()
    {
        alert("handle add");
    }
    handletype(e)
    {
        this.setState({
            type: e.target.value
        })
    }
    render(){
        return(
            <div>
                <Navigation />
                <p style={{fontSize: '30px',color: 'green', marginTop: '10px', marginBottom: '15px'}}><strong>Add Article</strong></p>
                <div style={{textAlign: 'left'}}>
                    <div style={{display: 'inline-block', marginLeft: '50px', marginBottom: '10px'}}>
                        <label style={{fontSize: '20px', marginRight: '10px', marginBottom: '10px', display: 'block'}} htmlFor="articleid">Article ID</label>
                        <input style={{padding: '6px 20px', fontSize:'15px',  width: '500px', marginBottom: '10px', borderRadius: '4px'}} type="text" id="articleid" placeholder="Article ID" />
                    </div>
                    <br />
                    <div style={{display: 'inline-block', marginLeft: '50px', marginBottom: '10px'}}>
                        <label style={{fontSize: '20px', marginRight: '10px', marginBottom: '10px', display: 'block'}} htmlFor="type">Article Type</label>
                        <select onChange={this.handletype} id="ArticleType" name="ArticleType" style={{padding: '6px 20px', fontSize:'15px',  width: '550px', marginBottom: '10px', borderRadius: '4px'}}>
                            <option value="Journal">Journal</option>
                            <option value="Conference">Conference</option>
                            <option value="Book Chapter">Book Chapter</option>
                            <option value="Book">Book</option>
                        </select>  
                    </div>
                    <br />
                    <div style={{display: 'inline-block', marginLeft: '50px', marginBottom: '10px'}}>
                        <label style={{fontSize: '20px', marginRight: '10px', marginBottom: '10px', display: 'block'}} htmlFor="title">Title</label>
                        <input style={{padding: '6px 20px', fontSize:'15px',  width: '500px', marginBottom: '10px', borderRadius: '4px'}} type="text" id="title" placeholder="Title" />
                    </div>
                </div>
                <RetrunType type={this.state.type}/>
                <button onClick={this.handleadd} style={{fontSize: '15px', backgroundColor: '#4285F4',color: 'white',width: '200px',padding: '12px 20px', marginBottom: '10px', marginLeft: '10px', borderRadius: '4px',float: 'left'}}>Add Article</button>
            </div>
        )
    }
}
export default Addarticle;