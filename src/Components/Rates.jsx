import React,{Component} from 'react';

class Rates extends Component{
  render(){
    console.log(this.props.state.dogs, this.props.state.addIns);
    return(
      <div className='container'>
        <h3>Please Choose your coverage Limit, Premium for your Annual Policy</h3>
        <small>NOTE: Installments are always billed on the 3rd day of the month</small>
        <table>
          <thead>
            <tr>
              <th>Coverage Limit</th>
              <th>Total</th>
              <th># Installments</th>
              <th>Down Payment</th>
              <th>Installment Amount</th>
              <th>First Bill</th>
              <th>Select Coverage</th>
            </tr>
          </thead>
        </table>
      </div>
    )
  }
}

export default Rates
