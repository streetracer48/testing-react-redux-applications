import React, {Component} from 'react'
import moment from 'moment'
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize'


const now = moment();

console.log(now.format())

class InputForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
        description: props.expense ? props.expense.description:'',
        note:props.expense ? props.expense.note:'',
        amount:props.expense ? (props.expense.amount/100).toString():'',
        createdAt:props.expense? moment(props.expense.createdAt): moment(),
        calendarFocused: false,
        error: ''
    };

    }

 


    onChangeDiscriptions = (e) => {
        const description = e.target.value;
        this.setState ({
            description
        })

    }


    onChangeNote = (e) => {
        const note = e.target.value;
        this.setState ({
            note
        })

    }

    onChangeAmount = (e) => {
        const amount = e.target.value;
        if (amount.match(/^\d*(\.\d{0,2})?$/)) {
            this.setState ({
            amount
            })

        }
      

    }


    onDateChange = (createdAt) => {
         this.setState({
             createdAt
         }) 
    }


    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
      };  // PropTypes.func.isRequired

      onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.description || !this.state.amount) {
          this.setState(() => ({ error: 'Please provide description and amount.' }));
        } else {
          this.setState(() => ({ error: '' }));
          this.props.onSubmit({
            description: this.state.description,
            amount: parseFloat(this.state.amount, 10) * 100,
            createdAt: this.state.createdAt.valueOf(),
            note: this.state.note
          });
        }
      };

     render () {
        const {} = this.props;
          return ( 
              <div> 

                  <h4>Input form</h4>
                  {this.state.error && <p>{this.state.error}</p>}
                  <form onSubmit={this.onSubmit}>
                  <input
                  type="text"
                  placeholder="Dscriptions"
                  value={this.state.description}
                  onChange={this.onChangeDiscriptions}
                  autoFocus
                  />
                  <br/>
                  <br/>
                  <input
                  type="number"
                  placeholder="Amount"
                  value={this.state.amount}
                  onChange={this.onChangeAmount}
                  />
                  <br/>
                  <br/>
                  <SingleDatePicker
  date={this.state.createdAt} // momentPropTypes.momentObj or null
  onDateChange={this.onDateChange} // PropTypes.func.isRequired
  focused={this.state.calendarFocused} // PropTypes.bool
  onFocusChange={this.onFocusChange}// PropTypes.func.isRequired
  numberOfMonths={1}
  isOutsideRange={() => false}

/>
<br/>
<br/>
                <textarea
                  placeholder="Add a note for your expense"
                  value={this.state.note}
                  onChange={this.onChangeNote}
                  />
                  <br/>
                  <br/>
                  <button>Add Expense</button>
                  
                  </form>
              </div>
          )

          
     }

}

export default InputForm