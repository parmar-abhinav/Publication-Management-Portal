import React, {Component} from 'react';
import '../Style.css';

class Newuser extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            gender: "Male",
            post: 'HOD',
            dept: 'CSE'
        }
        this.handlegender=this.handlegender.bind(this);
        this.handlepost=this.handlepost.bind(this);
        this.handledept=this.handledept.bind(this);
    }
    handlegender(e)
    {
        this.setState({
            gender: e.target.value,
            post: this.state.post,
            dept: this.state.dept
        },()=>{alert(this.state.gender)})
    }
    handlepost(e)
    {
        this.setState({
            gender: this.state.gender,
            post: e.target.value,
            dept: this.state.dept
        },()=>{alert(this.state.post)})
    }
    handleregister()
    {
        alert("register")
    }
    handledept(e)
    {
        this.setState({
            gender: this.state.gender,
            post: this.state.post,
            dept: e.target.value
        },()=>{alert(this.state.dept)})
    }
    render(){
        return(
            <div>
                <img src="https://www.juet.ac.in/images/Header2.jpg" />
                <p style={{fontSize: '30px'}}>Register</p>
                <div style={{textAlign: 'left'}}>
                        <div>
                        <div style={{display: 'inline-block', marginLeft: '400px', marginBottom: '10px'}}>
                            <label style={{fontSize: '20px', marginRight: '10px', marginBottom: '10px', display: 'block'}} htmlFor="enrollment">Enrollment Number</label>
                            <input style={{padding: '6px 20px', fontSize:'15px',  width: '500px', marginBottom: '10px', borderRadius: '4px'}} type="text" id="enrollment" placeholder="Enrollment Number" />
                        </div>
                        </div>
                        <div>
                        <div style={{display: 'inline-block', marginLeft: '400px', marginBottom: '10px'}}>
                            <label style={{fontSize: '20px', marginRight: '10px', marginBottom: '10px', display: 'block'}} htmlFor="name">Name</label>
                            <input style={{padding: '6px 20px', fontSize:'15px',  width: '500px', marginBottom: '10px', borderRadius: '4px'}} type="text" id="name" placeholder="Name" />
                        </div>
                        </div>
                        <div>
                        <div style={{display: 'inline-block', marginLeft: '400px', marginBottom: '10px'}}>
                            <label style={{fontSize: '20px', marginRight: '10px', marginBottom: '10px', display: 'block'}} htmlFor="date">Date of Birth</label>
                            <input style={{padding: '6px 20px', fontSize:'15px',  width: '500px', marginBottom: '10px', borderRadius: '4px'}} type="date" id="dob"/>
                        </div>
                        </div>
                        <div style={{display: 'inline-block', marginLeft: '400px', marginBottom: '10px'}}>
                        <label style={{fontSize: '20px', marginRight: '10px', marginBottom: '10px', display: 'block'}} htmlFor="type">Gender</label>
                        <select onChange={this.handlegender} id="gender" name="gender" style={{padding: '6px 20px', fontSize:'15px',  width: '550px', marginBottom: '10px', borderRadius: '4px'}}>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>  
                        </div>
                        <div>
                        <div style={{display: 'inline-block', marginLeft: '400px', marginBottom: '10px'}}>
                            <label style={{fontSize: '20px', marginRight: '10px', marginBottom: '10px', display: 'block'}} htmlFor="mobno">Mobile Number</label>
                            <input style={{padding: '6px 20px', fontSize:'15px',  width: '500px', marginBottom: '10px', borderRadius: '4px'}} type="number" id="mobno" placeholder="Mobile Number" min='1000000000' max="9999999999"/>
                        </div>
                        </div>
                        <div>
                        <div style={{display: 'inline-block', marginLeft: '400px', marginBottom: '10px'}}>
                            <label style={{fontSize: '20px', marginRight: '10px', marginBottom: '10px', display: 'block'}} htmlFor="email">Email</label>
                            <input style={{padding: '6px 20px', fontSize:'15px',  width: '500px', marginBottom: '10px', borderRadius: '4px'}} type="text" id="email" placeholder="Email" />
                        </div>
                        </div>
                        <div style={{display: 'inline-block', marginLeft: '400px', marginBottom: '10px'}}>
                        <label style={{fontSize: '20px', marginRight: '10px', marginBottom: '10px', display: 'block'}} htmlFor="dept">Department</label>
                        <select onChange={this.handledept} id="dept" name="dept" style={{padding: '6px 20px', fontSize:'15px',  width: '550px', marginBottom: '10px', borderRadius: '4px'}}>
                            <option value="CSE">Computer Science Engineering (CSE)</option>
                            <option value="CIVIL">Civil Engineering</option>
                            <option value="CE">	Chemical Engineering (CE)</option>
                            <option value="ECE">Electronics And Communication Engineering</option>
                            <option value="ME">Mechanical Engineering (ME)</option>
                            <option value="CHEMISTRY">Chemistry</option>
                            <option value="HSS">Humanities And Social Sciences</option>
                            <option value="Maths">Mathematics</option>
                            <option value="Physics">Physics</option>
                        </select>  
                        </div>
                        <div>
                        <div style={{display: 'inline-block', marginLeft: '400px', marginBottom: '10px'}}>
                        <label style={{fontSize: '20px', marginRight: '10px', marginBottom: '10px', display: 'block'}} htmlFor="post">Post</label>
                        <select onChange={this.handlepost} id="post" name="post" style={{padding: '6px 20px', fontSize:'15px',  width: '550px', marginBottom: '10px', borderRadius: '4px'}}>
                            <option value="HOD">Head Of Department</option>
                            <option value="Assoc">Associate Professor</option>
                            <option value="Asst">Assistant Professor</option>
                            <option value="Lect">Lecturer</option>
                        </select>  
                        </div>
                        </div>
                       <div>
                       <div style={{display: 'inline-block', marginLeft: '400px', marginBottom: '10px'}}>
                            <button onClick={this.handleregister} style={{fontSize: '15px', backgroundColor: '#4285F4',color: 'white',width: '150px',padding: '12px 20px', marginBottom: '10px', borderRadius: '4px'}}>Register</button>
                        </div>
                       </div>
                </div>
            </div>
        )
    }
}
export default Newuser;