import React, { Component } from 'react';
import axios from 'axios';

export default class CreateEtype extends Component {
  constructor(props) {
    super(props);

    this.onChangeEtype = this.onChangeEtype.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        exercisetype: ''
    }
  }

  onChangeEtype(e) {
    this.setState({
        exercisetype: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const etype = {
        exercisetype: this.state.exercisetype
    }

    console.log(etype);

    axios.post('http://localhost:5000/etype/add', etype)
      .then(res => console.log(res.data));

    this.setState({
        exercisetype: ''
    })
  }

  render() {
    return (
      <div>
        <h3>Create Exercise</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Exercise: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.exercisetype}
                onChange={this.onChangeEtype}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Create" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}