
import React,{useEffect} from 'react';
import './style.css'

const loader = document.querySelector('.loader');

// if you want to show the loader when React loads data again
const showLoader = () => loader.classList.remove('loader--hide');

const hideLoader = () => loader.classList.add('loader--hide');
const Loader = ({ hideLoader }) => {
  useEffect(hideLoader, []);
  
  return (
    <div>I'm the app</div>
  ); 
}

export default Loader
