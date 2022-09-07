import React, { Component } from 'react';
import {withRouter} from 'react-router'

class CountryDetails extends Component {
    state = {  } 
    
    render() { 
        const code = this.props.match.params.code
        return (<div>country details;</div>);
    }
}
 
export default withRouter(CountryDetails);