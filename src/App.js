import './App.css';
import FormExpense from './Components/Expenses/index';
import FormIncomes from './Components/Incomes/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import ViewTransactions from './Components/ViewTransactions/index';
import Dashboard from './Components/Dashboard/index';
import Login from './Components/Security/Login';
import Profile from './Components/Profile/index'
import Register from './Components/Security/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFoundPage from './Components/NotFoundPage/NotFoundPage';
import PrivateRoute from './Components/PrivateRoute';
import HomeRoute from './Components/HomeRoute';
import Footer from './Components/Footer';
import { useEffect } from 'react';
import { useState, useEffect } from 'react';
const express = require('express');
const app = express();



function App() {
  const [apiMessage, setApiMessage] = useState("No ha cargado");
  

  useEffect(() =>{
    const getApiInfo = async () => {
      const response = await fetch(
        `&{process.env.REACT_APP_API_BASE_URL}/test`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      const parsedResponse = await response.json();
      setApiMessage(parsedResponse.message);
    };
    getApiInfo();  
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>La respuesta de la API es:</p>
        <p>{apiMessage}</p>
      </header>
    </div>
  )

// Define your routes and middleware here

  return (
    
    <>
    <div id='general__container'>
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<HomeRoute><Login/></HomeRoute>}index={true} />
        <Route path="/profile" element={<PrivateRoute><Profile/></PrivateRoute>} />
        <Route path="/register" element={<HomeRoute><Register/></HomeRoute>} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}/>
        <Route path="/expenses" element={<PrivateRoute><FormExpense/></PrivateRoute>} />
        <Route path="/incomes" element={<PrivateRoute><FormIncomes/></PrivateRoute>} />
        <Route path="/viewTransactions" element={<PrivateRoute><ViewTransactions/></PrivateRoute>}/>
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    </BrowserRouter>
    
  </div>
  <Footer/>
  </>
  
  );
}

export default App;
