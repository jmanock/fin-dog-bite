import React,{Component} from 'react';
import Select from './FormComponents/Select';

class EventForm extends Component{
	state = {
		event:{
			name:'',color:'',state:'',age:''
		}
	};

	componentDidMount(){
		if(this.props.selectedEvent !== null){
			this.setState({
				event:this.props.selectedEvent
			});
		}
	}

	componentWillReceiveProps(nextProps){
		if(nextProps.selectedEvent !== this.props.selectedEvent){
			this.setState({
				event:nextProps.selectedEvent || {
					name:'',color:'',state:'',age:''
				}
			});
		}
	}

	onFormSubmit = e =>{
		e.preventDefault();
		const clone = this.state.event;

		if(this.state.event.id){
			this.props.updateEvent(this.state.event);
		}else{
			this.props.createEvent(clone);
			this.setState({
				event:{name:'',age:'',color:'',state:''}
			});
		}
	}

	onInputChange = e =>{
		const newEvent = this.state.event;
		newEvent[e.target.name] = e.target.value;

		this.setState({
			event:newEvent
		});
	}

	onSelectChange = e =>{
		const newEvent = this.state.event;
		newEvent[e.target.name] = e.target.value;

		this.setState({
			event:newEvent
		});
	}

	render(){
		return(
			<div className='container'>
				<form onSubmit={this.onFormSubmit}>
					<input name='name' onChange={this.onInputChange} value={this.state.event.name} type='text' placeholder='NaMe' />
					<Select title={'Color'} name={'color'} options={['Black','White','Orange','Brown']} value={this.state.event.color} handleChange={this.onSelectChange} placeholder={'Color'} />
					<Select title={'State'} name={'state'} options={['West Virgina','Nebraska','Iowa','Florida']} value={this.state.event.state} handleChange={this.onSelectChange} placeholder={'State'} />
					<input name='age' onChange={this.onInputChange} value={this.state.event.age} type='number' placeholder='Age' />
					<button type='submit' className='btn btn-danger'>Add Dog</button>
				</form>
			</div>
		)
	}
}

export default EventForm;
