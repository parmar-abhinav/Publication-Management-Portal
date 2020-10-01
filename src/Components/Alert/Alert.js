import React, {Component} from 'react';
import Navigation from '../Home/Navigation';
import '../Style.css';

class Alert extends Component
{
    render(){
        return(
            <div>
                <Navigation />
                <p style={{color: '#FF6347', fontSize: '30px', marginTop: '10px', marginBottom: '10px', marginLeft: '10px'}}><strong>Alerts for commit</strong></p>
                <div style={{textAlign: 'center'}}>
                    <div style={{display: 'inline-block'}}>
                    <table style={{border: '1px solid black', borderCollapse: 'collapse'}}>
                    <tr className="tr">
                        <th>Number</th>
                        <th>Article ID</th>
                        <th>Author ID</th>
                    </tr>
                </table>
                    </div>
                </div>
                <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            </div>
    
        )
    }
}
export default Alert;
