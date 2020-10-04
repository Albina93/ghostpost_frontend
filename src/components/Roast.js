import React, { Component } from 'react';
import moment from 'moment';


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


    handleUpvote = (e, id) => { 
      e.preventDefault() 
      fetch("http://127.0.0.1:8000/api/post/" + id + "/upvote/", {
          method: 'post',
          headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify('')
      })
      .then(res => res.json())
      .then(res => {
          // console.log(res)
          fetch("http://127.0.0.1:8000/api/post/")
      .then(res => res.json())
      .then(
          (result) => {
              // console.log(result)
              this.setState({
                  isLoaded: true,
                  posts: result
              });
          },
          (error) => {
              this.setState({
                  isLoaded: true,
                  error
              });
          }
          )

      })
      
     }
 
  
     handleDownvote = (e, id) => { 
      e.preventDefault() 
      fetch("http://127.0.0.1:8000/api/post/" + id + "/downvote/", {
          method: 'post',
          headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify('')
      })
      .then(res => res.json())
      .then(res => {
          
          fetch("http://127.0.0.1:8000/api/post/")
      .then(res => res.json())
      .then(
          (result) => {
            
              this.setState({
                  isLoaded: true,
                  posts: result
              });
          },
          (error) => {
              this.setState({
                  isLoaded: true,
                  error
              });
          }
          )

      })
      
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
              <li>Content: {roast.content}</li>
              <li>Total votes: {roast.total_votes}</li>
              <li>Upvote:<button onClick={(e) => this.handleUpvote(e, roast.id)}>{roast.upvote}</button>
             == Downvote <button onClick={(e) => this.handleDownvote(e, roast.id)}>{roast.downvote}</button></li>
             <li>Date Created: {moment(roast.date_created).format('MMMM Do YYYY, h:mm:ss a')}</li>
              <li>Last Update: {moment(roast.last_update).format('MMMM Do YYYY, h:mm:ss a')}</li>
              <li>{roast.sec_key}</li>
</ul>
             
              ))}
            </div>
           
           
        );
      }
    }
  }
 
  
  export default Roast;