import React from 'react';
import Paragrapgh from './Paragraph'
// import Logo from '../Images/Logo.svg'
// import Image from './Image'

function Smallchops() {
  return (
    <section>
      <nav className="navbar rounded-4 mt-5 mx-5 text-light" style={{backgroundColor:"#A58544"}}>
        <div className="container-fluid">
          <div className='d-flex flex-row'>
            <h3 className="mt-4">A</h3>
            <h2 className="mx-5">HI,<br/>MUJIB</h2>
          </div>
          <button className="rounded-3 p-2 text-light bg-transparent border-light border-1">Navbar</button>
        </div>
      </nav>
      <div className="rounded-4 mt-2 mx-5" style={{backgroundColor:"#f1f1f1"}}>
        <div className="rounded-4 mx-5 p-4" style={{backgroundColor:"#A5854FAD"}}>
          <h2>Welcome to your account</h2>
          <Paragrapgh paraClass='p-3' paraSize="12px" paraText="It's always a good day to order a smallchops"/>
        </div>
        <div className="rounded-4 mt-5 mx-5 p-4 border border-2 border-warning">
          <div className='mt-0' style={{color:"#A5854FAD",backgroundColor:'rgb(173, 139, 76,0.5)'}}>
            <p>Personal Information</p>
          </div>
          <form>
            <label>Name</label><br/>
            <input type="text" placeholder='Your Name'></input><br/>
            <label>Email Address</label><br/>
            <input type="text" placeholder='example@gmail.com'></input>
            <br/>
            <br/>
            <label>Phone Number</label><br/>
            <input type="tel" pattern="[0-9]{11}" list="defaults"></input>
          </form>
          <p className='p-3'>One special day in a year where you get a little extra with you order. On this day, you <br/> get a free package with whatever you order. Could be your birthday or anniversiry,<br/> or whatever</p>
          <div>
            <label>Special Date</label> <br/>
            <input type='date'></input>
            <div style={{marginLeft:"990px"}}>
            <button className='text-light  border-0 rounded-2' style={{backgroundColor:"#A5854FAD"}}>Save Changes</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Smallchops;
