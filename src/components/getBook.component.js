import React, { Component } from 'react';
import axios from 'axios';

export default class GetBook extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeReps = this.onChangeReps.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      description: '',
      reps: 0,
      duration: 0,
      users: [],
      exercisetypes: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/exercises/stats')
    .then(response => {
      this.setState({ exercises: response.data })
    })
    .catch((error) => {
      console.log(error);
    })
    axios.get('http://localhost:5000/users/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map(user => user.username),
            username: response.data[0].username
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })
    axios.get('http://localhost:5000/etype/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            exercisetypes: response.data.map(etype => etype.exercisetype),
            description: response.data[0].description
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
  }

  onChangeDuration(e) {
    this.setState({
      duration: e.target.value
    })
  }

  onChangeReps(e) {
    this.setState({
      reps: e.target.value
    })
  }

  onSubmit(e) {

    e.preventDefault();
    
    const stats = {
      username: this.state.username,
      description: this.state.description
    }
    
    console.log(stats);

    axios.post('http://localhost:5000/getReduce', stats)
      .then(res => console.log(res.data));

      this.setState({duration:this.state.d})
      this.setState({reps:this.state.r})

  }

  render() {
    return (
    <div>
      <h3>User Statistics</h3>
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
          <input type="submit" value="Get Statistics" className="btn btn-primary" />
        </div>
        <div className="form-group">
          <label>Total Duration (in minutes): </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.duration}
              onChange={this.onChangeDuration}
              />
        </div>
        <div className="form-group">
          <label>Total Repetations: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.reps}
              onChange={this.onChangeReps}
              />
        </div>
      </form>
    </div>
    )
  }
}