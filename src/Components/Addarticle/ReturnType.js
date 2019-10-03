import React, {Component} from 'react';
import '../Style.css';

class ReturnType extends Component
{
    constructor(props)
    {
        super(props)
    }
    render(){
        if(this.props.type==="Journal")
        {
            return(
                <div style={{textAlign: 'left'}}>
                    <div style={{display: 'inline-block', marginLeft: '50px', marginBottom: '10px'}}>
                        <label style={{fontSize: '20px', marginRight: '10px', marginBottom: '10px', display: 'block'}} htmlFor="type">Indexing</label>
                        <select onChange={this.handletype} id="Indexing" name="Indexing" style={{padding: '6px 20px', fontSize:'15px',  width: '550px', marginBottom: '10px', borderRadius: '4px'}}>
                            <option value="SCI">SCI</option>
                            <option value="SCOPUS">SCOPUS</option>
                            <option value="PubMed">PubMed</option>
                            <option value="ICI">ICI</option>
                            <option value="other">other</option>
                        </select>  
                    </div>
                    <div>
                        <div style={{display: 'inline-block', marginLeft: '50px', marginBottom: '10px'}}>
                            <label style={{fontSize: '20px', marginRight: '10px', marginBottom: '10px', display: 'block'}} htmlFor="journalname">Journal Name</label>
                            <input style={{padding: '6px 20px', fontSize:'15px',  width: '500px', marginBottom: '10px', borderRadius: '4px'}} type="text" id="journalname" placeholder="Journal Name" />
                        </div>
                    </div>
                    <div>
                        <div style={{display: 'inline-block', marginLeft: '50px', marginBottom: '10px'}}>
                            <label style={{fontSize: '20px', marginRight: '10px', marginBottom: '10px', display: 'block'}} htmlFor="volno">Volume Number</label>
                            <input style={{padding: '6px 20px', fontSize:'15px',  width: '500px', marginBottom: '10px', borderRadius: '4px'}} type="number" id="volno" placeholder="Volume Number" />
                        </div>
                    </div>
                    <div>
                        <div style={{display: 'inline-block', marginLeft: '50px', marginBottom: '10px'}}>
                            <label style={{fontSize: '20px', marginRight: '10px', marginBottom: '10px', display: 'block'}} htmlFor="Issue">Issue Number</label>
                            <input style={{padding: '6px 20px', fontSize:'15px',  width: '500px', marginBottom: '10px', borderRadius: '4px'}} type="number" id="Issue" placeholder="Issue Number" />
                        </div>
                    </div>
                    <div>
                        <div style={{display: 'inline-block', marginLeft: '50px', marginBottom: '10px'}}>
                            <label style={{fontSize: '20px', marginRight: '10px', marginBottom: '5px', display: 'block'}} htmlFor="pageno">Page Number</label>
                            <label style={{fontSize: '15px', marginRight: '10px', marginBottom: '10px'}} htmlFor="from">From</label>
                            <input style={{padding: '6px 20px', fontSize:'15px',  width: '190px', marginRight: '10px', marginBottom: '10px', borderRadius: '4px'}} type="number" id="from" placeholder="Start Page Number" />
                            <label style={{fontSize: '15px', marginRight: '10px', marginBottom: '10px'}} htmlFor="to">To</label>
                            <input style={{padding: '6px 20px', fontSize:'15px',  width: '190px', marginRight: '10px', marginBottom: '10px', borderRadius: '4px'}} type="number" id="to" placeholder="Ending Page Number" />
                        </div>
                    </div>
                </div>
            )
        }
        else if(this.props.type==="Conference")
        {
            return(
                <div style={{textAlign: 'left'}}>
                    <div>
                    <div style={{display: 'inline-block', marginLeft: '50px', marginBottom: '10px'}}>
                        <label style={{fontSize: '20px', marginRight: '10px', marginBottom: '10px', display: 'block'}} htmlFor="type">Indexing</label>
                        <select onChange={this.handletype} id="Indexing" name="Indexing" style={{padding: '6px 20px', fontSize:'15px',  width: '550px', marginBottom: '10px', borderRadius: '4px'}}>
                            <option value="SCOPUS">SCOPUS</option>
                            <option value="other">other</option>
                        </select>  
                    </div>
                    <div>
                        <div style={{display: 'inline-block', marginLeft: '50px', marginBottom: '10px'}}>
                            <label style={{fontSize: '20px', marginRight: '10px', marginBottom: '10px', display: 'block'}} htmlFor="conferencename">Conference Name</label>
                            <input style={{padding: '6px 20px', fontSize:'15px',  width: '500px', marginBottom: '10px', borderRadius: '4px'}} type="text" id="conferencename" placeholder="Conference Name" />
                        </div>
                    </div>
                    <div>
                        <div style={{display: 'inline-block', marginLeft: '50px', marginBottom: '10px'}}>
                            <label style={{fontSize: '20px', marginRight: '10px', marginBottom: '10px', display: 'block'}} htmlFor="location">Location</label>
                            <input style={{padding: '6px 20px', fontSize:'15px',  width: '500px', marginBottom: '10px', borderRadius: '4px'}} type="text" id="location" placeholder="Location" />
                        </div>
                    </div>
                    <div>
                        <div style={{display: 'inline-block', marginLeft: '50px', marginBottom: '10px'}}>
                            <label style={{fontSize: '20px', marginRight: '10px', marginBottom: '10px', display: 'block'}} htmlFor="date">Date</label>
                            <input style={{padding: '6px 20px', fontSize:'15px',  width: '500px', marginBottom: '10px', borderRadius: '4px'}} type="date" id="date" placeholder="Date" />
                        </div>
                    </div>
                    </div>
                    <div>
                        <div style={{display: 'inline-block', marginLeft: '50px', marginBottom: '10px'}}>
                            <label style={{fontSize: '20px', marginRight: '10px', marginBottom: '5px', display: 'block'}} htmlFor="pageno">Page Number</label>
                            <label style={{fontSize: '15px', marginRight: '10px', marginBottom: '10px'}} htmlFor="from">From</label>
                            <input style={{padding: '6px 20px', fontSize:'15px',  width: '190px', marginRight: '10px', marginBottom: '10px', borderRadius: '4px'}} type="number" id="from" placeholder="Start Page Number" />
                            <label style={{fontSize: '15px', marginRight: '10px', marginBottom: '10px'}} htmlFor="to">To</label>
                            <input style={{padding: '6px 20px', fontSize:'15px',  width: '190px', marginRight: '10px', marginBottom: '10px', borderRadius: '4px'}} type="number" id="to" placeholder="Ending Page Number" />
                        </div>
                    </div>
                </div>
            )
        }
        else if(this.props.type==="Book Chapter")
        {
             return(
            <div style={{textAlign: 'left'}}>
                <div style={{display: 'inline-block', marginLeft: '50px', marginBottom: '10px'}}>
                        <label style={{fontSize: '20px', marginRight: '10px', marginBottom: '10px', display: 'block'}} htmlFor="type">Indexing</label>
                        <select onChange={this.handletype} id="Indexing" name="Indexing" style={{padding: '6px 20px', fontSize:'15px',  width: '550px', marginBottom: '10px', borderRadius: '4px'}}>
                            <option value="SCOPUS">SCOPUS</option>
                            <option value="other">other</option>
                        </select>  
                    </div>
                <div>
                    <div style={{display: 'inline-block', marginLeft: '50px', marginBottom: '10px'}}>
                        <label style={{fontSize: '20px', marginRight: '10px', marginBottom: '10px', display: 'block'}} htmlFor="publicationhouse">Publication House</label>
                        <input style={{padding: '6px 20px', fontSize:'15px',  width: '500px', marginBottom: '10px', borderRadius: '4px'}} type="text" id="publicationhouse" placeholder="Publication House" />
                    </div>
                </div>
                <div>
                        <div style={{display: 'inline-block', marginLeft: '50px', marginBottom: '10px'}}>
                            <label style={{fontSize: '20px', marginRight: '10px', marginBottom: '10px', display: 'block'}} htmlFor="location">Location</label>
                            <input style={{padding: '6px 20px', fontSize:'15px',  width: '500px', marginBottom: '10px', borderRadius: '4px'}} type="text" id="location" placeholder="Location" />
                        </div>
                    </div>
                    <div>
                        <div style={{display: 'inline-block', marginLeft: '50px', marginBottom: '10px'}}>
                            <label style={{fontSize: '20px', marginRight: '10px', marginBottom: '10px', display: 'block'}} htmlFor="date">Date</label>
                            <input style={{padding: '6px 20px', fontSize:'15px',  width: '500px', marginBottom: '10px', borderRadius: '4px'}} type="date" id="date" placeholder="Date" />
                        </div>
                    </div>
            </div>
             )
        }
        else
        {
            return(
                <div style={{textAlign: 'left'}}>
                    <div style={{display: 'inline-block', marginLeft: '50px', marginBottom: '10px'}}>
                        <label style={{fontSize: '20px', marginRight: '10px', marginBottom: '10px', display: 'block'}} htmlFor="type">Indexing</label>
                        <select onChange={this.handletype} id="Indexing" name="Indexing" style={{padding: '6px 20px', fontSize:'15px',  width: '550px', marginBottom: '10px', borderRadius: '4px'}}>
                            <option value="SCOPUS">SCOPUS</option>
                            <option value="other">other</option>
                        </select>  
                    </div>
                   <div>
                    <div style={{display: 'inline-block', marginLeft: '50px', marginBottom: '10px'}}>
                        <label style={{fontSize: '20px', marginRight: '10px', marginBottom: '10px', display: 'block'}} htmlFor="publicationhouse">Publication House</label>
                        <input style={{padding: '6px 20px', fontSize:'15px',  width: '500px', marginBottom: '10px', borderRadius: '4px'}} type="text" id="publicationhouse" placeholder="Publication House" />
                    </div>
                </div>
                <div>
                        <div style={{display: 'inline-block', marginLeft: '50px', marginBottom: '10px'}}>
                            <label style={{fontSize: '20px', marginRight: '10px', marginBottom: '10px', display: 'block'}} htmlFor="date">Date</label>
                            <input style={{padding: '6px 20px', fontSize:'15px',  width: '500px', marginBottom: '10px', borderRadius: '4px'}} type="date" id="date" placeholder="Date" />
                        </div>
                    </div>
                    <div>
                        <div style={{display: 'inline-block', marginLeft: '50px', marginBottom: '10px'}}>
                            <label style={{fontSize: '20px', marginRight: '10px', marginBottom: '10px', display: 'block'}} htmlFor="Isbnno">Isbn Number</label>
                            <input style={{padding: '6px 20px', fontSize:'15px',  width: '500px', marginBottom: '10px', borderRadius: '4px'}} type="number" id="Isbnno" placeholder="Isbn Number" />
                        </div>
                    </div>
                    <div>
                        <div style={{display: 'inline-block', marginLeft: '50px', marginBottom: '10px'}}>
                            <label style={{fontSize: '20px', marginRight: '10px', marginBottom: '10px', display: 'block'}} htmlFor="accno">Accession Number</label>
                            <input style={{padding: '6px 20px', fontSize:'15px',  width: '500px', marginBottom: '10px', borderRadius: '4px'}} type="number" id="accno" placeholder="Accession Number" />
                        </div>
                    </div>
                </div>
            )
        }
    }
} 
export default ReturnType;