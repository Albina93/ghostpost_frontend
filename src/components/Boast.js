import React, { Component } from 'react';
import moment from 'moment';

class Boast extends Component {
    constructor(props) {
      super();
      this.state = {
        error: null,
        isloaded: false,
        boasts: [
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
        const { error, isLoaded, boasts } = this.state;
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
              <li>Content: {boast.content}</li>
              <li>Total votes: {boast.total_votes}</li>
              <li>Upvote:<button onClick={(e) => this.handleUpvote(e, boast.id)}>{boast.upvote}</button>
             == Downvote <button onClick={(e) => this.handleDownvote(e, boast.id)}>{boast.downvote}</button></li>
             <li>Date Created: {moment(boast.date_created).format('MMMM Do YYYY, h:mm:ss a')}</li>
              <li>Last Update: {moment(boast.last_update).format('MMMM Do YYYY, h:mm:ss a')}</li>
              <li>{boast.sec_key}</li>
</ul>
             
              ))}
            </div>
           
           
        );
      }
    }
  }
 
  
  export default Boast;