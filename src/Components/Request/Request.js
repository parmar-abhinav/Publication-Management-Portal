import React, {Component} from 'react';
import Navigation from '../Home/Navigation';
import '../Style.css';

class Request extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            articleid:'',
            authorid:''
        }
        this.handleSend=this.handleSend.bind(this);
        this.handlearticleid=this.handlearticleid.bind(this);
        this.handleauthorid=this.handleauthorid.bind(this);
    }
    handlearticleid(e)
    {
        this.setState({
            articleid: e.target.value,
            authorid: this.state.authorid
        })
    }
    handleauthorid(e)
    {
        this.setState({
            articleid: this.state.articleid,
            authorid: e.target.value
        })
    }
    handleSend()
    {
        alert("handle send");
    }
    render(){
        return(
            <div>
                <Navigation />
                <div>
                    <b style={{fontSize: '30px', marginTop: '10px', marginBottom: '10px'}}>Send Request</b>
                    <hr />
                <div className="login">
                 <div>
                    <label htmlFor='articleid'><strong>Article ID</strong></label>
                    <br />
                    <input value={this.state.articleid} onChange={this.handlearticleid} style={{fontSize:'15px', width: '250px',padding: '12px 20px', marginBottom: '10px', borderRadius: '4px'}} type="text" name="articleid" id="articleid" placeholder="Article ID"/>
                 </div>
                 <div>
                    <label htmlFor='authorid'><strong>Author ID</strong></label>
                    <br />
                    <input value={this.state.authorid} onChange={this.handleauthorid} style={{fontSize:'15px', width: '250px',padding: '12px 20px', marginBottom: '10px', borderRadius: '4px'}} type="text" name="authorid" id="authorid" placeholder="Author id"/>
                 </div>
                 <button onClick={this.handleSend} style={{fontSize: '15px', backgroundColor: '#4285F4',color: 'white',width: '300px',padding: '12px 20px', marginBottom: '10px', borderRadius: '4px'}}>Send</button>
            </div>
                </div>
            </div>
        )
    }
}
export default Request;