import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';

//post function
export default class CreateBook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      author: '',
      price: 0,
      publisher: '',
      date: ''
    }
  }


  onSubmit(e) {
    e.preventDefault();

   const booksInfo = {
      title: this.state.title,
      author: this.state.author,
      price: this.state.price,
      publisher: this.state.publisher,
      date: this.state.date
    }

    axios.post('http://localhost:5000/bookRouter/add', booksInfo)
      .then(res => console.log(res.data));

    window.location = '/';
 }

  render() {
    return (
    <div>
      <h3>Log Exercise</h3>
     
    </div>
    )
  }
}
