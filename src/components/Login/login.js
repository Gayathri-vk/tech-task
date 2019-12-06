import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {connect} from 'react-redux'
import {userData} from '../../actions/postAction';
class login extends Component {

    constructor(props){
        super(props);
        this.state ={
            username: '',
            pwd:'',
            userlist:[],

        }
    }
    componentDidMount () {
     
        this.props.userData();
    }
    handleChange = (e) =>{
       this.setState ({
           [e.target.name]:e.target.value
       })
       
    }  
    handleSubmit = (e) =>{
        const emptylist = [];
      e.preventDefault();
      this.props.posts.forEach((item)=>{
        emptylist.push(item.name);
     
    })
    console.log(emptylist,'list');
     
    if(emptylist.includes(this.state.username) ){
        this.props.history.push('/employee');
    }
    else{
        alert('Enter an registered username');
    }
    
    }
    render() {
        const {username,pwd} = this.state;
        return (
            <div className="container login-page">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-element">
                      <label htmlFor="uname">UserName</label>
                      <input type="text" className ="form-control" value={username} onChange={this.handleChange} name="username" id="uname" required></input>
                    </div>
                    <div className="form-element">
                      <label htmlFor="pwd">Password</label>
                      <input type="password" className ="form-control" value={pwd} onChange={this.handleChange} name="pwd" id="pwd" required></input>
                    </div>
                    
                    <button type="submit" className="btn btn-success " > Submit</button>
                </form>

            </div>
        )
    }
}
const mapStateToProps = state =>({
    posts:state.posts.userList,
    
})
export default connect (mapStateToProps,{userData}) (login)