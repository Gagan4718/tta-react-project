import React from "react";
import "./App.css";
import Layout from "./componentss/Layout";

function App() {
  return (
    <div className="App">
     <Layout/>
         </div>
  );
}
export default App;
















//import { Button, Navbar } from 'react-bootstrap';
//import{BrowserRouter, Form, Route, Routes}from'react-router-dom'
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import Products from './components/Products';
// import Product from './components/Product';
// import Cart from './components/Cart';
// import Login from './components/Login';
// import Register from './components/Register';
// import About from './components/About';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
// import{Switch, Router,Routes, Route } from 'react-router-dom'; 
// function App()
// {
//   return(
//     <>
// <Navbar/>
//   <Routes>
//   <Route path='/' element={<Home/>} />
//       <Route path='/products' element={<Products/>}/>
//       <Route path='/products/:id' element={<Product/>}/>
//       <Route path='login'element={<Login/>}/>
//       <Route path='/register'element={<Register/>}/>
//       <Route path='/about' element={<About/>}/>
//       <Route path='/contact'element={<Contact/>}/>
//       <Route path='/cart' element={<Cart/>}/>
//      </Routes>
//      <Footer/>
//         </>
//   );
// }
// export default App;




 
















// import'./App.css';
// import React from 'react';
// //import { Button, Navbar } from 'react-bootstrap';
// import{BrowserRouter, Route, Routes}from'react-router-dom'
// import Addproduct from './component/Addproduct';
// import Register from './component/Register';
// import Updateproduct from './component/Updateproduct';
// import Login from './component/Login';
// import Productlist from './component/Productlist';
// import SearchProduct from './component/SearchProduct';
// import Footer from './component/Footer';
// import FooterStyles from './component/FooterStyles';
// //import Header from './component/Header';
// //import { Button, Navbar } from 'react-bootstrap';
// function App()
// {
//   return(
//   <div className="App">
  
//   <BrowserRouter>
//     <Routes>

//     <Route path="/login" element={<Login />} />
    
//     <Route path="/register" element={<Register />} />
    
//     <Route path="/add" element={<Addproduct />} />
        
//     <Route path="/update" element={<Updateproduct />} />
//     <Route path="/search" element={<SearchProduct />} />
    
//     <Route path="/"element={<Productlist/>} />

//         </Routes>    
                    

//     </BrowserRouter>
// <Footer/>
//         </div>
//   )
// }

// export default App;
 






















// import'./App.css';
// import React from 'react';
// //import Home from './Home';
// import HomeContainers from './containers/HomeContainers'
// function App()
// {
//   return(
//   <div className="App">
// <HomeContainers/>
//     </div>
//   )
// }

// export default App;





















// import'./App.css';
// import React from 'react';
// import User from './User';
// function App()
// {
//   return(
//   <div className="App">

//     <User data={{name: 'gagan', age:'25'}}/>
//     </div>
//   )
// }

// export default App;

































//  import'./App.css';
//  import React from 'react';
//  import{CommonContext} from './component/CommonContext'
//  import Main from './component/Main'
//  import UpdateButton from'./component/UpdateButton'
//  import Header from './component/Header';
// import Footer from './component/Footer';
//  class App extends React.Component{
//   constructor()
//   {
//     super()
//     this.updateColor=(color)=>{
//       this.setState({
//         color:color
//       })
//     }
//     this.state={
//       color:"green",
//      updateColor:this.updateColor
//     }
   
//   }

//  render(){
//   return(

// <CommonContext.Provider value={this.state}>
  
// <Header/>
// <CommonContext.Consumer>
//   {
//     ({color})=>(
//       <h1 style={{backgroundColor: color}}>Complete and easy example for context API </h1>
// )
//   }
  
// </CommonContext.Consumer>
// <Main/>
// <UpdateButton/>
// <Footer/>
//   </CommonContext.Provider>
//    )
//  }
//  }
//  export default App;



















// import'./App.css';
// import React, { useState } from 'react';
// //import User from './User';
// function App()
// {
//   const[data,setData]=React.useState({name:'gagan',age:28})
// return(
//   <div>
//     <h1>State object with hooks</h1>
//     <input type="text" placeholder="Enter name" value={data.name} 
//     onChange={(e)=>(setData({...data,name:e.target.value}))}/>  
        
        
//         <input type="text" placeholder="Enter age" value={data.age}
//          onChange={(e)=>(setData({...data,age: e.target.value}))}/>   
//     <h1>{data.name}</h1>
//         <h1>{data.age}</h1>
//     </div>
// )
// }
// export default App;












// import'./App.css';
// import React, { useState } from 'react';
// import User from './User';
// function App()
// {
//   const[count,setCount]=React.useState(0)
// return(
//   <div>
//     <User count={count}/>
//     <button onClick={()=>setCount(Math.floor(Math.random()*10))}>Update Counter</button>
//     </div>
// )
// }
// export default App;



















// import'./App.css';
// import React,{useState} from 'react';
// function App()
// {

//   const[count,setCount]=useState(1)
//   function updateCounter()
//   {
//     // let rand=Math.floor(Math.random()*10)
//     // setCount((pre)=>{
//     //   console.warn(pre)
//     //   if(pre<5)
//     //   {
//     //   alert ("Low value")
//     //   }
//     //   else{
//     //     return rand;
//     //   }
//     //     return rand;   
//     //   })
//     for(let i=0;i<5;i++)
//     {
//     setCount((pre)=>pre+1
//     )
//     }
//   }
//   return(
// <div className="App">
//   <h1>Previous State {count}</h1>
//   <button onClick={updateCounter}>click Me to Update counters</button>
// </div>
//   );
// }
// export default App;























// import { Button } from 'bootstrap';// API data update and detele used react js
// import'./App.css';
// import { Table } from 'react-bootstrap'
// import React, { useEffect,useState } from 'react';
// function App()
// {
//   //const[users,setData]=useState([])
//   const[name,setName]=useState("");
  
//   const[email,setEmail]=useState("");
  
//   const[Mobile,setMoblie]=useState("");

//   const users=[
//           {id:'1',name:'gagan', Moblie:'525', email:'@singh'},
//               {id:'2',name:'rajbir', Moblie:'001', email:'@singh'},
//               {id:'3',name:'karan', Moblie:'000', email:'@singh'}
//         ]
    
//   useEffect(()=>{
//     getUsers()
  
// },[])
// //console.warn(users)
// function getUsers()
// {
// fetch("http://localhost:3000").then((result)=> 
//   { 
//   result.json().then((resp)=>{
// //console.warn("result",resp)
//   getUsers(resp)
//   setName(resp[0].name)
//   setMoblie(resp[0].Moblie)
//   setEmail(resp[0].email)
//   })
//   })
// }
// function deleteUser(id){
//   fetch('http://localhost:3000/$(id)',{
//     method:'Delete'
// }).then((result)=>{

//   result.json().then((resp)=>{
//   //console.warn(resp)
//   getUsers()
//   })
// })
// }
// function selectUser(id){

//   console.warn(users[id-1])
  
//   setName(users[id-1].name)
//   setMoblie(users[id-1].email)
//   setEmail(users[id-1].Moblie)
// }
//   return(
//     <div className="App">
//       <h1>Delete data with APi cell</h1>
//            <Table striped variant="Dark">
//         <tbody>
// <tr>
//   <td>id</td>
//   <td>name</td>
//   <td>email</td>
//   <td>Moblie</td>
  
//   <td>Opeation</td>
// </tr>
// {
//   users.map((item,i)=>
//   <tr key={i}>
//     <td>{item.id}</td>
//   <td>{item.name}</td>
//   <td>{item.email}</td>
//   <td>{item.Moblie}</td>
//   <td><button onClick={()=> deleteUser(item.id)}>Delete</button></td>
//   <td><button onClick={()=> selectUser(item.id)}>Update</button></td>
  
//   </tr>
//   )
// }</tbody>
//       </Table>
//       <div>
//         <input type="text" value={name}/> <br></br>
//         <br/>
//         <input type="text"value={email}/> <br></br>
//         <br></br>
//         <input type="text" value={Mobile}/> <br></br>
//         <br/>
//         <button>Update user</button>
//         </div>
//       </div>

      
//   );
// }
// export default App;

























// import'./App.css'; // API Method 
// import React,{useEffect,useState} from 'react';
// function App(){
//   const[name,setName]=useState("");
//   const[email,setEmail]=useState("");
//   const[moblie,setMoblie]=useState("");
// function saveUser(){
//   console.warn({name,email,moblie});
//   //fetch(url)
// }

//   return(
//     <div className="App">
//       <h1>Post API Method</h1>
//       <input type="text"value={name} onChange={(e)=>{setName(e.target.value)}} name="name"></input><br></br>
//             <input type="text" value={email}onChange={(e)=>{setEmail(e.target.value)}}name="Email"></input><br></br>
//             <input type="text" value={moblie}onChange={(e)=>{setMoblie(e.target.value)}}name="Mobile"></input><br></br>
//             <button type="Button" onClick={saveUser}> Save New user</button>
//       </div>
//   );
// }
// export default App;




















// import React from 'react'; // all navigATE amd nested rounter allover topic
// import'./App.css';
// import { BrowserRouter, Route, Routes,Navigate } from'react-router-dom';
// import User from './User';
// import Home from './Home';
// import NavBar from './NavBar';
// import Page404 from './Page404';
// import About from './About';
// import Filter from './Filter';
// import Contact from './component/Contact';
// import Company from './component/Company';
// import Channel from './component/Channel';
// import Other from './component/Other';
// import Login from './component/Login';
// import Protected from './component/Protected';
// function App()
// {
//   return(
//     <div className="App">
//             <BrowserRouter>
      
//       <NavBar/>
  
//       <Routes>
//       <Route path="/"element={<Protected Component={Home}/>}/> <Route/>
//       <Route path="/Login"element={<Login/>}/> <Route/>
      
//       <Route path="/About"element={<Protected Component={About}/>}/> <Route/>   
//       <Route path="/User/:name"element={<User/>}/> <Route/>  
//       <Route path="/Filter"element={<Filter/>}/> <Route/> 
         
//       {/* <Route path="/*"element={<Page404/>}/> <Route/> 
//            */}
                 
//       <Route path="/*"element={<Navigate to="/"/>}/> <Route/> 
//       <Route path="/Contact/"element={<Contact/>}></Route>
//       <Route path="/Company/"element={<Company/>}></Route>
//       <Route path="Channel"element={<Channel/>}></Route>   
//       <Route path="Other"element={<Other/>}></Route>   
          
//              </Routes>
//       </BrowserRouter>
//       </div>
//   );
// }
// export default App;

































// import'./App.css';
// import React, { useEffect,useState } from 'react';
// function App()
// {
//   const[data,setData]=useState([])
//   useEffect(()=>{
//   fetch("http://localhost:3000/").then((result)=> 
//   { 
//   result.json().then((resp)=>{
//   //console.warn("result",resp)
//   setData(resp)
//   })
//   })
// },[])
// console.warn(data)
//   return(
//     <div className="App">
//       <h1>APL Cell</h1>
//       <table border="1">
//         <tbody>
// <tr>
//   <td>id</td>
//   <td>name</td>
//   <td>email</td>
//   <td>Moblie</td>
// </tr>
// {
//   data.map((item)=>
//   <tr>
//   <td>id</td>
//   <td>name</td>
//   <td>email</td>
//   <td>Moblie</td>
//   </tr>
//   )
// }</tbody>
//       </table>
      
//       </div>
//   );
// }
// export default App;



















// import './App.css';
// //import User from './User';
//  import React from 'react'
//  import CountryCard from './CountryCard';
//  import Header from './component/Header';
//  import App from './component/App';
 
//  function App()
//   {

//     return(
//      <div className="App"> 
//      <h1> router Dynamic </h1>
//      <CountryCard/>
//      <Header/>
//      <App/>
     

//         </div>
//  );
// }
// export default App;


























//import './App.css';
// import User from './User';
//  import React from 'react'
//  import{BrowserRouter as Router,Link, Route, Routes} from 'react-router-dom'
//  function App()
//   {
// let users =[
//    {id:1, name:'gagan', email: 'deep@gmail.com'},
//    {id:2, name:'deep', email: 'deep@gmail.com'},
//    {id:3, name:'singh', email: 'singh@gmail.com'},
//    {id:4, name:'karan', email: 'kar@gmail.com'},
//    {id:5, name:'bir', email: 'bir@gmail.com'},
// ]
//     return(
//      <div className="App"> 
//      <Router>
//      <h1> router Dynamic </h1>
//      {
//       users.map((item)=>
//       <div><Link to={"/users/"+item.name}><h3>{item.name}</h3></Link></div>)
//      }
//      <Routes>
//      <Route path="/users/:name"><User/> 
//      </Route>
//      </Routes>
//      </Router>
//     </div>
//  );
// }
// export default App;






















// import './App.css';
// import React from 'react'
// import{BrowersRouter as Router,link, Route} from'react-router-dom'
// function App()
//  { 
//   let users=[
//   {id:1, name:'gagan', email: 'deep@gmail.com'},
//   {id:2, name:'deep', email: 'deep@gmail.com'},
//   {id:3, name:'singh', email: 'singh@gmail.com'},
//   {id:4, name:'karan', email: 'kar@gmail.com'},
//   {id:5, name:'bir', email: 'bir@gmail.com'},
// ]
// return(
//    <div className="App"> 
//    <h1>Dynamic routing component</h1>
//    {
//     users.map((item)=>
//     <div>{item.name}<div/>)







//  import './App.css';
// import User from './User';
//  import React from 'react'
//  import { Link, Route} from 'react-router-dom'
//  import Nav from './Nav';

//  function App()
//   {
// return(
//      <div className="App"> 
//      <Nav/>
//      <Route path="/Home"><Home/></Route>
//      <Route path="/About"><About/></Route>
     
//     </div>
//  );
// }
// function Home()
// {
//   return(
//     <div>
//     <h1>Home page</h1>
//     <p>this is home page</p>

//     </div>
//   );
// }

// function About()
// {
//   return(
//     <div>
//     <h1>About page</h1>
//         <p>this is about page</p>

//     </div>
//   );
// }
// export default App;


//import logo from './logo.svg'; // Use routing etc.
// import './App.css';
// //import User from './User';
// import React from 'react'
// import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

// function App()
//  {
// return(
//      <div className="App"> 
//      <Router>
//       <Link to="/Home">Home page</Link>
//       <br/>
//       <Link to="/About"> About page </Link> 
//       <Route path="/Home"></Route>
//       <Route path="/About"></Route>
//       </Router>
//     </div>
//  );
// }
// function Home()
// {
//   return(
//     <div>
//     <h1>Home page</h1>
//     <p>this is home page</p>

//     </div>
//   );
// }

// function About()
// {
//   return(
//     <div>
//     <h1>About page</h1>
//         <p>this is about page</p>

//     </div>
//   );
// }
// export default App;


// import logo from './logo.svg'; // Use HOC compoentst etc.
// import './App.css';
// //import User from './User';
// import React,{useRef,useState} from'react'

// function App()
//  {
// return(
//      <div className="App"> 
//      <h1> HOC </h1>
//      <HOC cmp={Counter}/>
     
//      <HOCgreen cmp={Counter}/>
     
//      <HOCblue cmp={Counter}/>

//     </div>
//  );
// }
// function HOC(props){
//   return (
//     <h2 style={{backgroundColor:'red',width:100}}>red<props.cmp/></h2>
//   )
// }
// function HOCgreen(props){
//   return (
//     <h2 style={{backgroundColor:'green',width:100}}>green<props.cmp/></h2>
//   )
// }
// function HOCblue(props){
//   return (
//     <h2 style={{backgroundColor:'blue',width:100}}>blue<props.cmp/></h2>
//   )
// }

// function Counter(){
//   const[count,setCount]=useState(0)
//   return(
//   <div>
//     <h3>{count}</h3>
//     <button onClick={()=> setCount(count+1)}>submit</button>
//     </div>
//   );
// }
//  export default App;

// import logo from './logo.svg'; // Use un-controlled compoentst etc.
// import './App.css';
// //import User from './User';
// import React,{useRef} from'react'

// function App()
//  {
//   let inputRef=useRef(null)
//   let inputRef1=useRef(null)
  
//       function submitform(e){
//     e.preventDefault()
//     console.warn("input filed 1 value:",inputRef.current.value)
//         console.warn("input filed 1 value:",inputRef1.current.value)
//         let input2=document.getElementById('input2').value
//         console.warn("input filed 2 value:",input2)  
//   }

// return(
//      <div className="App"> 
//      <h1> controlled component </h1>
//      <form onSubmit={submitform}>
//       <input ref={inputRef}type="text"/><br/><br/>
//      <input ref ={inputRef1}type="text"/><br/><br/>
//     <input id="input2" type="text"/><br/><br/>
//      <button>submit</button>
//  </form>
 
//    </div>
//  );
// }
//  export default App;


 // import logo from './logo.svg'; // Use controlled compoentst etc.
// import './App.css';
// //import User from './User';
// import React,{useState} from'react'

// function App()
//  {
//   let [val,setVal]=useState("")
//   let [item,setitem]=useState("")
  
 
// return(
//      <div className="App"> 
//      <h1> controlled component </h1>
//  <input type="text" value={val} onChange={(e)=>setVal(e.target.value)}/>
 
//  <h3> value= {val}</h3>
//  <input type="text" value={item} onChange={(e)=>setitem(e.target.value)}/>
 
//  <h3> item= {item}</h3>
//    </div>
//  );
// }
//  export default App;


// import logo from './logo.svg'; // Use foraward ref react etc.
// import './App.css';
// import User from './User';
// import React,{useRef} from'react';

// function App()
//  {
//   let inputRef=useRef(null);
//   function updateInput()
//   {
//     inputRef.current.value="1000"
//     inputRef.current.style.color="red"
//     inputRef.current.focus()
//   }
// return(
//      <div className="App"> 
//      <h1> forward Ref in react </h1>
// <User ref={inputRef}/>
// <button onClick={updateInput}>update input</button>
//    </div>
//  );
// }
//  export default App;

// import logo from './logo.svg'; // Use memo Hook in react etc.
// import './App.css';
// //import User from './User';
// import React,{createRef} from'react';

// class App extends React.Component{
// constructor(){
//  super();
//   this.inputRef=createRef();
// }
//    componentDidMount()
//    {
// //console.warn(this.inputRef.current.value="1000")
//    }

//    getval()
//    {
//     console.warn(this.inputRef.current.value)
//     this.inputRef.current.style.color="red"
    
//     this.inputRef.current.style.backgroundColor="yellow"
//    }
//    render()
//    {
// return(
//      <div className="App"> 
//      <h1> Ref in react </h1>
//   <input type="text" ref={this.inputRef}/>  
//   <button onClick={()=>this.getval()} >check ref </button>
//    </div>
//  );
// }
// }     
//  export default App;

//  import logo from './logo.svg'; // Use memo Hook in react etc.
//  import './App.css';
//  //import User from './User';
//  import react,{useState,useMemo} from 'react'
//  function App()
// { 
//    const[count,setCount]=useState(0);
//       const[item,setitem]=useState(10);
//       const multiCountMemo=useMemo(function multiCountMemo(){
// console.warn("Multicount")
//       return count*5
//       },[count])
//    return (
//       <div className="App"> 
//       <h1>  use Hook in react </h1>
//       <h2>count: {count}</h2>
//       <h2>item: {item}</h2>
//       <h2>{multiCountMemo}</h2>
//         <button onClick={()=>setCount(count+1)}>update</button>
        
//         <button onClick={()=>setitem(item+10)}>update item</button>
    
//     </div>
//   );
//  }      
//   export default App;


// import logo from './logo.svg'; // pure componmemt etc.
//  import './App.css';
// import User from './User';
//  import React, { PureComponent } from 'react'
// class App extends React.Component{
//    constructor()
//   {
//    super();
//     this.state={
//     count:1
//   }
// }
// render()
// {
//     return(
//       <div className="App">
//         <User count= {this.state.count}/>
     
//       <button onClick={()=>this.setState({count:1})}>Update</button>
//    </div>
//   );
// } 
// } 
//  export default App;

// import logo from './logo.svg'; // send data child to parent componmemt etc.
//  import './App.css';
// // import User from './User';
//  import React, { PureComponent } from 'react'
// class App extends PureComponent{
//    constructor()
//   {
//    super();
//     this.state={
//     count:1
//   }
// }
// render()
// {
//   console.warn("check-rerendering")
//   return(
//       <div className="App">
//       <h1> Pure component{this.state.count}</h1>
//       <button onClick={()=>this.setState({count:this.state.count+1})}>Update</button>
//    </div>
//   );
// } 
// } 
//  export default App;


// import logo from './logo.svg'; // Resuse componmemt etc.
//  import './App.css';
//  //import User from './User';
//  import React from 'react';
//  import Cols from './component/Cols';
//  function App()
// { 
//    return(
//     //<React.Fragment>    // i.e react.fragment meaning for multiple display krn li
//       <div>
//       <h1>  React fragment component </h1>
//       <table>
//         <tbody>
// <tr>
//   <Cols/>
//   </tr>

//         </tbody>
//       </table>
//    </div>
//   );
//  }      
//  export default App;


 // import logo from './logo.svg'; // Resuse componmemt etc.
//  import './App.css';
//  import User from './User';
//  function App()
// { 
//    const users=[
//      {name:'gagan', Moblie:'525', email:'@singh'},
//          {name:'rajbir', Moblie:'001', email:'@singh'},
//          {name:'karan', Moblie:'000', email:'@singh'}
//    ]
//    return(
//       <div className="App"> 
//       <h1>  use Resuse component </h1>
//     { 
//     users.map((item, i)=> /// that mean child 
//     <User data={item}/>
//     )
//       }        
    
//     </div>
//   );
//  }      
//  export default App;




// import logo from './logo.svg'; // list nested list Bootsrap and unique key in React etc.
// import './App.css';
// import React from 'react'
// import { Table } from 'react-bootstrap'
// function App() {
//       const users = [
//             {
//                   name:'gagan', Moblie: '525', address: [
//                         { H: "10", city: 'dehli', counrty: 'india' },
//                         { H: "11", city: 'ASR', counrty: 'india' },
//                         { H: "12", city: 'jal', counrty: 'india' },
//                         { H: "13", city: 'batala', counrty: 'india' },

//                   ]
//             },

//             {
//                   name:'rajbir', Moblie: '001', address: [
//                         { H: "10", city: 'dehli', counrty: 'india' },
//                         { H: "11", city: 'ASR', counrty: 'india' },
//                         { H: "12", city: 'jal', counrty: 'india' },
//                         { H: "13", city: 'batala', counrty: 'india' },

//                   ]
//             },


//             {
//                   name:'karan', Moblie: '000', address: [
//                         { H: "10", city: 'dehli', counrty: 'india' },
//                         { H: "11", city: 'ASR', counrty: 'india' },
//                         { H: "12", city: 'jal', counrty: 'india' },
//                         { H: "13", city: 'batala', counrty: 'india' },

//                   ]
//             },
//       ]
//       return (
//             <div className="App">
//                   <h1> list with nested </h1>
//                   <Table striped>
//                               <tbody>
//                               <tr>
//                                     <td>S.no.</td>
//                                     <td>name</td>
//                                     <td>Moblie</td>
//                                     <td>address</td>
//                               </tr>
//                         </tbody>
//                         {
//                               users.map((item,i)=>  
//                                     <tr key={i}>
// <td>{i}</td>
//                                           <td>{item.name}</td>
//                                           <td>{item.Moblie}</td>
//                                           <td>
//                                           <Table striped variant="dark">                                                      <tbody>{
//                                                             item.address.map((data) =>
//                                                                   <tr>
//                                                                         <td>{data.H}</td>
//                                                                         <td>{data.city}</td>
//                                                                         <td>{data.counrty}</td>
//                                                                   </tr>
//                                                             )}
//                                                       </tbody>
//                                                 </Table>
//                                           </td>
//                                     </tr>
//                               )
//                         }
//                         </Table>
//             </div>
            
//       )  
// }
// export default App;

                         






 {/* import logo from './logo.svg'; // list array Bootsrap and unique key in React etc.
 import './App.css';
 import React from 'react'
 import {Table} from 'react-bootstrap'
 function App()
 
   const users=[
     {name:'gagan', Moblie:'525', email:'@singh'},
    
     {name:'rajbir', Moblie:'001', email:'@singh'},
    
     {name:'karan', Moblie:'000', email:'@singh'}
   ]
   return(
      <div className="App"> 
      <h1> list with bootstrap </h1>
     <Table striped variant="dark">
       <tbody>
     <tr>
     <td>name</td>
     <td>Moblie</td>
       <td>email</td>
       </tr> */} 
    
//     {
//        users.map((item,i)=> /// that mean child 
//        //item.Moblie==='000'? // it is fiter apply mean 000 show item only 
//      <tr key={i}>
//       <td>{item.name}</td> 
//       <td>{item.Moblie}</td>
//       <td>{item.email}</td>
//       </tr>
//       )
//      }
//      </tbody>
//       </Table>
      
//       </div>
//   );
// }      
// export default App;








// import logo from './logo.svg'; // use array Handle in React etc.
// import './App.css';
// import React from 'react'
// function App(){
//   const students=[
//     {name:'gagan', Moblie:'525', email:'@singh'},
    
//     {name:'rajbir', Moblie:'123', email:'@singh'},
    
//     {name:'karan', Moblie:'565', email:'@singh'}
//   ]
//   //const students=['gagan','deep','singh'];
//   //map function
//   // students.map((item)=>{
//   //   console.warn("My is gagan",item)
//   // }
//   // );
//   // for(let i=0;i<students.length;i++){
    
//   //   console.warn("in for loop",students[i])
//   // }
//   return(
//      <div className="App"> 
//      <h1> Handle of array </h1>
//      <table border = "1">
//         <tr>
//         <td>name</td>
// <td>email</td>
// <td>moblie</td>
//       </tr> 
//      {
// students.map((data)=>
// <tr>
// <td>{data.name}</td>
// <td>{data.email}</td>
// <td>{data.Moblie}</td>
// </tr>
// )
//      }
//      </table>
// </div>
//   );
//   }
// export default App;


// import logo from './logo.svg'; // use install bootstrap in React etc.
// import './App.css';
// import React from 'react'
// import{Button,Alert} from 'react-bootstrap'
// function App(){
//   return(
//      <div className="App"> 
//      <h1> install bootstap</h1>
//      {
//         <Alert variant="warning">
//           This is a warning alert—check it out!
//      </Alert>
// } 
// </div>
//   );
// }
// export default App;

     {/* <button onClick={()=>alert("Hello")}>click on </button>
     <Button variant="primary">Primary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="success">Success</Button>{' '}
      <Button variant="warning">Warning</Button>{' '}
      <Button variant="danger">Danger</Button>{' '}
      <Button variant="info">Info</Button>{' '}
      <Button variant="light">Light</Button>{' '}
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button> */}

//      </div>
//      );
// }
// export default App;



//  import logo from './logo.svg'; // use styles sheet in React etc.
//  import './App.css';
//  import'./Style.css'
//  import Style from'./Custom.module.css' // i.e module css type of  react define 
//  import React from 'react'
//  function App(){
//    return(
//       <div className="App"> 
//       <h1 className="primary"> use of styles type 1 in react js</h1>
//     <h1 style={{color:"red",backgroundColor:"black"}}> use of styles type 1 in react js</h1> // i.e inline style
//     <h1 className={Style.success}> use of styles type 1 in react js</h1>  // module sheet css type define react
      
//       </div>
//       );
//  }
// export default App;




// import logo from './logo.svg'; // use effect with specifed state & props etc.
// import './App.css';
// import React, { useEffect,useState} from'react'
// import User from './User';
// function App(){
//   const[data,setData]=useState(10);
//   const[count,setCount]=useState(100);

//    // useEffect(()=>{
//    //    console.warn("use of effect")
//    // },[data])

//    // useEffect(()=>{
//    //    alert("count" +count)
//    // },[count])
   
//    return(
//       <div className="App">
//          <User count={count} data={data}/>
// <button onClick={()=>setCount(count+1)}>Update counter</button>
// <button onClick={()=>setData(data+1)}>Update data</button>

//          </div>
//    )
// }

// export default App;

// import logo from './logo.svg'; // use effect used components etc.
// import './App.css';
// import React, { useEffect, useState } from'react'
// function App(){
//    const [count,setCount]=useState(0)

//    useEffect(()=>{
//       console.warn("use of effect")
//    })
//    return(
//       <div className="App">
// <h1>use of effect {count}</h1>
// <button onClick={()=>setCount(count+1)}>Update counter</button>
//          </div>
//    )
// }

// export default App;

// import logo from './logo.svg'; // Hooks mean that use word define components etc.
// import './App.css';
// import React, { useState } from'react'
// function App(){
//    const[data,setData]=useState("gagan")
//    return(
//       <div className="App">
// <h1>{data}</h1>
// <button onClick={()=>setData("deep")}> Update data</button>
//          </div>
//    )
// }

// export default App;

// import logo from './logo.svg'; // should component update with class with render methtod used
// import './App.css';
// import React from'react'
// import Student from './Student';

// class App extends React.Component{
//    constructor(){
//       super();
//       this.state ={
//          show:true
//       }
//    }
//    render()
//    {
//       return(
//       <div className="App">
//          {
//          this.state.show? <Student/>:<h1>child component remove</h1>
//    }
//          <button onClick={()=>this.setState({show:!this.state.show})}>Toggle child component</button>
//          </div>
//    );
//    }
//    }
// export default App;

// import logo from './logo.svg'; // should component update with class with render methtod used
// import './App.css';
// import React from'react'

// class App extends React.Component{
//    constructor(){
//       super();
//       this.state={ 
//          count:0
//       }
//       //console.warn("Constructor")
//    }
//    shouldComponentUpdate()
//    {
//     console.warn("shouldComponentUpdate",this.state.count);
//     if(this.state.count>5 && this.state.count<10)
//     {
//       return true;

//     }

//    }
//    render()
//    {
//      // console.warn("render")
//    return(
//       <div className="App">
//          <h1>should component update {this.state.count}</h1>
//          <button onClick={()=>{this.setState({count:this.state.count+1})}}>Update counter</button>
//          </div>
//    );
//    }
//    }
// export default App

// import logo from './logo.svg'; // ConstructorDid update with class with render methtod used
// import './App.css';
// import React from'react'

// class App extends React.Component{
//    constructor(){
//       super();
//       this.state={ 
//          count:0
//       }
//       //console.warn("Constructor")
//    }
//    componentDidUpdate(preProps,preState,snapsshot)
//    {
//       console.warn("componentDidUpdate",preState.count,this.state.count)
//       if(preState.count,this.state.count)
//       {
//          alert("data is same")
//       }
      
//    }
//    render()
//    {
//      // console.warn("render")
//    return(
//       <div className="App">
//          <h1>component Did update{this.state.count}</h1>
//          <button onClick={()=>{this.setState({count:1})}}>Update name</button>
//          </div>
//    );
//    }
//    }
// export default App

// import logo from './logo.svg'; // ConstructorDid mount with class with render methtod used
// import './App.css';
// import React from'react'

// class App extends React.Component{
//    constructor(){
//       super();
//       this.state={ 
//          name: "gagan"
//       }
//       //console.warns("Constructor")
//    }
//    componentDidMount()
//    {
//       console.warn("componentDidMount")
//    }
//    render()
//    {
//       console.warn("render")
//    return(
//       <div className="App">
//          <h1>component Did Mount{this.state.name}</h1>
//          <button onClick={()=>{this.setState({name:"deep"})}}>Update name</button>
//          </div>
//    );
//    }
//    }
// export default App

// //import {useState} from 'react'
// import logo from './logo.svg'; // class with render methtod used
// import './App.css';
// import User from './User'
// import React from 'react';
//  function App(){
      
// const[name,setName]=React.useState("gagan")
//     return(  
//      <div className="App">
// <h1>Render Method</h1>
// <User name={name}/>
// <button onClick={()=>setName("deep")}>Update Name</button>
// </div>
// );
// }

// export default App;

// import {useState} from 'react'
// import logo from './logo.svg'; // pass  function as props
// import './App.css';
// import User from './User'
//  function App(){
//    function getData()
//    {
//       alert("hello from data")
//    }
//     return(  
//      <div className="App">
// <User data={getData}/>
// </div>
// );
// }
// export default App;


// import logo from'./logo.svg';
// import './App.css';
// import Profile from'./Profile login';
// function App(){
//     return(
//         <div className="App">
//             <Profile/>
//             </div>
//     )
// }
// export default App;


// import logo from './logo.svg'; // GEt handle form basic
// import './App.css';
// import {useState} from'react'
//  function App(){
//     const[name,setName]=useState("");
//         const[Tnc,setTnc]=useState(false);
//     const[Interest,setInterest]=useState("");
//     function getformData(e)
//     {
//         console.warn(name,Tnc, Interest)
//         e.preventDefault()
//     }
//     return(  
//      <div className="App">
//         <h1>handle form is react</h1>
//         <form onSubmit={getformData}>
//         <input type="Text" placeholder="enter name" onChange={(e)=>setName(e.target.value)}/><br></br>
//   <select onChange={(e)=>setInterest(e.target.value)}>
//     <option>Select option</option>
//     <option> Marval</option>
// <option>BC</option>
//   </select><br></br>
//   <input type="checkbox"onChange={(e)=>setTnc(e.target.checked)}></input><span>Accept Terms & conditon</span><br></br>
//   <button type="submit">submit</button>
//         </form>
// </div>
// );
// }
// export default App;


// import logo from './logo.svg'; // GEt hide element and show elemnt
// import './App.css';


// import logo from './logo.svg'; // GEt counter tye code
// import './App.css';
// import Myname,{Third} from "./component/Button";
// import { Header, Second } from "./component/Header";
// import Counter from './component/Counter';

// function sum(num1, num2){
//     return num1+num2
// }
//  console.log(sum(10,5))
//  console.log(sum(5,5))
//  console.log(sum(6,3))



// function App(){
// return (
//     <div>
//         <div className='App'>
//             <Counter number={10}/>
//             <Counter number={0}/>
//             <Counter number={5}/>
//             <Counter number={100}/>
//             <Header/>
//           </div></div>
// );
// }
// export  default App;


/* <Header/>
<Second/>
<Third/> */

// import logo from './logo.svg'; // GEt hide element and show elemnt
// import './App.css';
// import React from'react'
//  function App(){
//     const [status,setstatus]= React.useState(true)
//     return(  
//      <div className="App">
//         {
//             status?
//            <h1>Hello world !</h1>
//             :null
//         }
// <button onClick={()=>setstatus(!status)}>Toggle</button>

// {/* <button onClick={()=>setstatus(true)}>show</button>
// <button onClick={()=>setstatus(true)}>show</button> */}

// </div>
// );
// }
// export default App;


// import React, {useState} from 'react'
// import logo from './logo.svg'; // GEY input box value
// import './App.css';
//  function App(){
//     const [data,setData]=useState(null)
//     const [print,setprint]=useState(false)    
//     function getData(val)
//     {
//         console.warn(val.target.value)
//         setData(val.target.value)
//         setprint(false)
//     }
//     return(  
//      <div className="App">
//         {
//             print?
//             <h1>{data}</h1>
//             :null
//         }
// < input type="text" onChange={getData}/>
// <button onClick={()=>setprint(true)}>print Data</button>

// </div>
// );
// }
// export default App;





// import logo from './logo.svg'; //i.e props is components mean class
//  import './App.css';
//  import Student from './Student'
// import React from 'react';
//  class App extends React.Component{
//  constructor(){
//     super();
//     this.state={
//         name:"gagan"
//     }
// }
//     render() 
//     {

//     return(
//         <div className="App">
//             <h1> Props !</h1>
//             <Student name={this.state.name} email="gagan@gmail.com"></Student>
//             <button onClick={()=>this.setState({name:"deep"})}>update name</button>
//             </div>
//     );
// }
// } 
// export default App;




// import React,{useState} from 'react'
// import logo from './logo.svg'; //i.e props is components mean data pass exp/ students throght function
// import './App.css';
// import Student from './Student'
// function App(){
//     const [Name,setName]=useState("gagan")
//     return(
//         <div className="App">
//             <h1> Props in react</h1>
//             <Student Name={Name}/>
//             <button onClick={()=>(setName("deep"))}>Update Name</button>
//             </div>
//     );
  // }
// export default App;

/* <Student Name="gagan" email="gagan@gmail.com" other={{address:'asr',moblie:'000'}}/>  
         <Student Name="deep" email="deep@gmail.com"other={{address:'jal', moblie:'122'}}/>
          <Student Name="singh" email="deep@gmail.com"other ={{address:'lDu', moblie:'11'}}/>         */
            
//import User from './User'

// import React,{Component} from 'react'
// import logo from './logo.svg'; 
// import './App.css';

//  class App extends Component  i.e class // State in clASS components
//  {
//     constructor()
//     {
//     super();
//     this.state={
//         data:1
//     }
// }
//   apple()
// {
//     //alert("apple")
//     this.setState({data:this.state.data+1})
// }
//     render()
//     {
//     return(  
//      <div className="App">
// <h1>{this.state.data} </h1>
// <button onClick={()=>this.apple()}>update Data</button>
// </div>
// );
// }
//  }
 
// export default App;


// import {useState} from 'react'
// import logo from './logo.svg'; // State and function update BUTTON USED FUCNTION AND CALL
// import './App.css';
// //import User from './User'
//  function App(){
//     const [data,setData]=useState(0)
//     function updateData()
//     {
//         setData(data+1)
//     }
//     console.warn(" _____ ");
//     return(  
//      <div className="App">
// <h1> {data}</h1>
// <button onClick={updateData}>Update data </button>

// </div>
// );
// }
// export default App;



// import logo from './logo.svg'; // click events and function BUTTON USED FUCNTION AND CALL
// import './App.css';
// //import User from './User'
//  function App(){
// let data ="gagan"
//     function Apple()
//     {
//         alert("function called");
//     }
//  return(  
//      <div className="App">
// <h1> {data}</h1>
// <button onClick={()=>Apple()}>click Me</button>

// </div>
// );
// }
// export default App;

/*  <button onClick={()=>alert("helo")}>click Me</button>*/

// //import logo from './logo.svg'; i.e funcion in function code
// import './App.css';
// import User from './User'
//  function App(){

//     function Apple(){
//         return(<div> Apple component</div>)
//     }
//  return(  
//      <div className="App">
// <h1> Hello us</h1>
// <User />
// <Apple/>
// </div>
// );
// }

// export default App;

/* // import logo from './logo.svg';
// import './App.css';
// function App()
// return(  
//     <div className="App">
//      <header className="App-header">
        
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1> hello name </h1>
//       <p>
//         Edit <code>src/App.js</code> and save to reload.
//        </p>
//       <a className="App-link" href="https://reactjs.org"
//          target="_blank"
//         rel="noopener noreferrer">
//         Learn React hello
//        </a>
//      </header>
//     </div>
// );
// }
// export default App;   */


// import logo from"./logo.svg";
// import"./App.css";
// import myname, {Third} from"./Components/Button";
// import{Header,Second} from"./Components/Header";

// function App()
// {
// let name="alex"
//   return (
//     <div>
//       <div className="App">
//         App
// <Myname/>
// <Header/>
// <Second/>
// <Third/>
//     </div>


