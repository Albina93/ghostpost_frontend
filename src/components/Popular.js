import React, { Component } from 'react';


class Popular extends Component {
    constructor(props) {
      super();
      this.state = {
        error: null,
        isloaded: false,
        popular: [
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
      fetch("http://127.0.0.1:8000/api/post/highest_vote")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            popular: result
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
        const { error, isLoaded, popular } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
            <div>
            {this.state.popular.map(pop => (
          <ul key={pop.id}>

              { pop.is_roast ? 'Roasts' : 'Boasts'}
              <li>{pop.content}</li>
              <li>{pop.upvote}</li>
              <li>{pop.downvote}</li>
              <li>{pop.date_created}</li>
              <li>{pop.last_update}</li>
              <li>{pop.sec_key}</li>
</ul>
             
              ))}
            </div>
           
           
        );
      }
    }
  }
 
  
  export default Popular;