import { faChevronCircleDown, faChevronCircleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Selector = ({ChangeOpenValue, TextValue, IsOpen, Options, ChangeFN, ClassName, IsForPhone}) => {

     const ChangeFunction = (data) => {
          ChangeFN(data.text)
          if(IsForPhone) ChangeFN(data.text, data.phone)
     }

  return <div className={ClassName ? ClassName : 'selector'} onClick={ChangeOpenValue}>
       <span className='select'>
            <strong>
                 {TextValue}
            </strong>
            <FontAwesomeIcon icon={IsOpen ? faChevronCircleUp : faChevronCircleDown}/>
       </span>
       {
           (IsOpen && Options.length > 0) && Options.map((data, idx) => {
                 return <em 
                              onClick={() => ChangeFunction(data)}
                              key={idx} type='button' >
                      {data.text}
                 </em>
            })
       }
  </div>;
};

export default Selector;
