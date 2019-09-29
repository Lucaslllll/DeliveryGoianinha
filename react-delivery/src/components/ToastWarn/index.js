import React from 'react';

import {  
  Toast, 
  ToastBody, 
  ToastHeader } from 'reactstrap';


import './styles.css';

export default function ToastWarn(props) {

  function handleToastError(error){
    if(error){
      return 'text-white bg-danger';
    }else{
      return 'text-white bg-success';
    }
  }

  return (
    <div className="toastWarn fixed-top">
          <div className="toastWarn__Toast">
            <Toast>
                <ToastHeader className={`ToastHeader ${handleToastError(props.toastError)}`}>
                  DeliveryGO
                </ToastHeader>
                <ToastBody>
                  { props.msg }
                </ToastBody>
                <div className={`toastWarn--barProgress ${handleToastError(props.toastError)}`}></div>

            </Toast>
          </div>
    </div>
  );
}
