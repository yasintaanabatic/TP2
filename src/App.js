import React, { Component } from "react";
import logo from "./assets/nctdream.png";
import "./App.css";
import ReCAPTCHA from "react-google-recaptcha";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Routes, Route, useNavigate} from 'react-router-dom';
import About from "./components/About";

function onChange(value) {
  console.log("Captcha value:", value);
}
const MySwal = withReactContent(Swal)
class App extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.email.value);
    
    let count = Number(localStorage.getItem('count'))
    if (!e.target.email.value) {
      toast.error("Email is required");
    } else if (!e.target.email.value) {
      toast.error("Valid email is required");
    } else if (!e.target.password.value) {
      toast.error("Password is required");
    } else if (e.target.email.value !== "yasinta@example.com" &&
    e.target.password.value !== "12345678"){
      //alert("Wrong email or password combination");
      localStorage.setItem('count', ++count)
      if(count < 3){
        toast.error("Username/Password salah");
        }else{
        let timerInterval
        MySwal.fire({
            title: 'Too many failed attempts!',
            allowOutsideClick: false,
            html:
            'Unavailable login because too many failed attempts. Try again after <strong></strong> seconds.<br/><br/>',
            timer: 30000,
            didOpen: () => {
            MySwal.showLoading()

            timerInterval = setInterval(() => {
                MySwal.getHtmlContainer().querySelector('strong')
                .textContent = (MySwal.getTimerLeft() / 1000)
                .toFixed(0)
            }, 100)
            },
            willClose: () => {
            clearInterval(timerInterval)
            }
        }).then((result) => {
            localStorage.removeItem('count')
            window.location.reload(false);
            /* Read more about handling dismissals below */
            if (result.dismiss === MySwal.DismissReason.timer) {
            }
        })
        }
    }else{
      alert("Successfully logged in");
      useNavigate("/components/About");
      // <Route path="/about" component={About} />
      // e.target.email.value = "";
      // e.target.password.value = "";
    }
    
  };

  render() {
    return (
      <div className="App">
        <img src={logo} className="logo" alt="Business view - Reports" />
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="input email" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="input password"/>
          </div>
          <ReCAPTCHA
            sitekey="6LcBpxYkAAAAABCV4MyJXv7rBrq0DuIVs-74Kkce"
            onChange={onChange}
            style={{marginLeft : 100, marginBottom:15}}
          />
          <button className="primary">LOGIN</button>
        </form>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          />
      </div>
    );
  }
}

export default App;