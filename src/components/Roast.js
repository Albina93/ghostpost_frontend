import React, { Component } from 'react';


class Roast extends Component {
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
      fetch("http://127.0.0.1:8000/api/post/roasts")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            roasts: result
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
            {this.state.roasts.map(roast => (
          <ul key={roast.id}>

              { roast.is_roast ? 'Roasts' : 'Boasts'}
              <li>{roast.content}</li>
              <li>{roast.upvote}</li>
              <li>{roast.downvote}</li>
              <li>{roast.date_created}</li>
              <li>{roast.last_update}</li>
              <li>{roast.sec_key}</li>
</ul>
             
              ))}
            </div>
           
           
        );
      }
    }
  }
 
  
  export default Roast;