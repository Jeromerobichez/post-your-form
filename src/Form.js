import React  from 'react';
import './Form.css';

class Form extends React.Component {
    constructor(props){
        super(props);
        this.state= {
           name: '',
           poster: '',
           text: '' 
        }
    }
    onChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        });
      };
      submitForm = (e) => {
        e.preventDefault();
        const config = {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(this.state)
        };

        const url = " https://post-a-form.herokuapp.com/api/movies";
        fetch(url, config)
          .then((res) => res.json())
          .then((res) => {
            if (res.error) {
              alert(res.error);
            } else {
              alert(`your movie has been successfully added!`);
            }
          })
          .catch((e) => {
            console.error(e);
            alert("Sorry something went wrong.");
          });
      };

    render() {
        return (
            <div className= 'Form'>
<h1>Submit your favorite movie</h1>

<form onSubmit={this.submitForm}>
  <fieldset>
    <legend>Information</legend>
    <div className="form-data">
      <label htmlFor="title">Movie title</label>
      <input
        type="text"
        id="title"
        name="title"
        onChange={this.onChange}
        value={this.state.title}
      />
    </div>

    <div className="form-data">
      <label htmlFor="poster">the poster of the movie</label>
      <input
        type="text"
        id="poster"
        name="poster"
        onChange={this.onChange}
        value={this.state.poster}
      />
    </div>

    <div className="form-data">
      <label htmlFor="text">Your comment on the movie</label>
      <input
        type="textarea"
        id="comment"
        name="comment"
        onChange={this.onChange}
        value={this.state.comment}
      />
    </div>
    <hr />
    <div className="form-data">
      <input type="submit" value="Send" />
    </div>
  </fieldset>
</form>

            </div>
        )
    }}
    export default Form ; 