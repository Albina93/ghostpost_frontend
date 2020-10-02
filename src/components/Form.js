import React, { Component } from 'react';


class Form extends Component {
    constructor(props) {
        super();
        this.state = {
              "is_roast": "---",
              "content": "",
              "sec_key": ""
          }
    
          
      }

      handlechange = event => {
          this.setState({
              content: event.target.value
          });
          console.log(this.state)
      }


      postchange = event => {
          this.setState({
              is_roast: event.target.value
          });
          console.log(this.state)
      }


     
     

      handlesubmit = event => {
        event.preventDefault()
        fetch("http://127.0.0.1:8000/api/post/", {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
        .then(res => res.json())
        .then(res => console.log(res))

        this.setState({
            "is_roast": "",
             "content": ""
              
        })
        
    }



    randomString = (len, charSet) => {
        charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var randomString = '';
        for (var i = 0; i < len; i++) {
            var randomPoz = Math.floor(Math.random() * charSet.length);
            randomString += charSet.substring(randomPoz, randomPoz + 1);
        }
        return randomString;
    }

    componentDidMount() {

        var sk = this.randomString(6)
        this.setState({ sec_key: sk })

    }

    render(){
        return (
            <div>
                <form onSubmit={this.handlesubmit}>
                    <div>
                        <label>Create Post</label>
                        <textarea type='text' value={this.state.content} onChange={this.handlechange}></textarea>
                    </div>
        
                    <div>
                        <label>Is Roast</label>
                        <select value={this.state.is_roast} onChange={this.postchange}>
                            <option value="---">---</option>
                            <option value="true" >Roast</option>
                            <option value="false">Boast</option>

                        </select>   
                    </div>
                    <br></br>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Form;