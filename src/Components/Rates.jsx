import React,{Component} from 'react';

const rates = [
  {id:1,coverage:'$25,000',total:'',installments:'3',down:'',insAmount:'',first:'2/3/2019',select:''},
  {id:2,coverage:'$50,000',total:'',installments:'3',down:'',insAmount:'',first:'2/3/2019',select:''},
  {id:3,coverage:'$100,000',total:'',installments:'3',down:'',insAmount:'',first:'2/3/2019',select:''},
  {id:4,coverage:'$300,000',total:'',installments:'3',down:'',insAmount:'',first:'2/3/2019',select:''}
];

class Rates extends Component{
  render(){
    console.log(this.props.state.dogs, this.props.state.addIns);
    const list = rates.map((x => {
      return <tr key={x.id}>
        <td>{x.coverage}</td>
        <td>{x.total}</td>
        <td>{x.installments}</td>
        <td>{x.down}</td>
        <td>{x.insAmount}</td>
        <td>{x.first}</td>
        <td><input type='radio'></input></td>
      </tr>
    }));
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
          <tbody>
            {list}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Rates
