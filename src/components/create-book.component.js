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
      date: '',
      books: [],
      authors: []
    }
  }


  onSubmit(e) {
    e.preventDefault();

   const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      reps: this.state.reps,
      date: this.state.date
    }

    console.log(exercise);

    axios.post('http://localhost:8000/exercises/add', exercise)
      .then(res => console.log(res.data));

    window.location = '/';
 }

  render() {
    return (
    <div>
      <h3>Log Exercise</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Member: </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}>
              {
                this.state.users.map(function(user) {
                  return <option 
                    key={user}
                    value={user}>{user}
                    </option>;
                })
              }
          </select>
        </div>
        <div className="form-group"> 
          <label>Exercise: </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}>
              {
                this.state.exercisetypes.map(function(etype) {
                  return <option 
                    key={etype}
                    value={etype}>{etype}
                    </option>;
                })
              }
          </select>
        </div>
        <div className="form-group">
          <label>Duration (in minutes): </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.duration}
              onChange={this.onChangeDuration}
              />
        </div>
        <div className="form-group">
          <label>Repetations: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.reps}
              onChange={this.onChangeReps}
              />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>
        </div>

        <div className="form-group">
          <input type="submit" value="Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}