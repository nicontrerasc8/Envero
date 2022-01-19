import { faStore } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const LoadingComponent = () => {
  return <div className='loading'>
       <FontAwesomeIcon icon={faStore}/>
  </div>;
};

export default LoadingComponent;
