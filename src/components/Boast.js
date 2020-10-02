import React, { Component } from 'react';


class Boast extends Component {
    constructor(props) {
      super();
      this.state = {
        error: null,
        isloaded: false,
        roasts: [
          {
            "is_roast": true,
            "content": "Aldo",
            "upvote": 3,
            "downvote": 2,
            "date_created": "2020-09-28",
            "last_update": "2020-09-28",
            "sec_key": "abcdef"
        }
  
        ]
      };
  
    }
  
    componentDidMount() {
      fetch("http://127.0.0.1:8000/api/post/boasts")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            boasts: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  
    }
    
  
    render() {
        const { error, isLoaded, roasts } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
            <div>
            {this.state.boasts.map(boast => (
          <ul key={boast.id}>

              { boast.is_roast ? 'Roasts' : 'Boasts'}
              <li>{boast.content}</li>
              <li>{boast.upvote}</li>
              <li>{boast.downvote}</li>
              <li>{boast.date_created}</li>
              <li>{boast.last_update}</li>
              <li>{boast.sec_key}</li>
</ul>
             
              ))}
            </div>
           
           
        );
      }
    }
  }
 
  
  export default Boast;