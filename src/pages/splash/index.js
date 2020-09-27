import React from 'react';
import { useHistory } from 'react-router-dom';


const Splash = () => {
  const history = useHistory();
  const navigate = ()=>{
    setTimeout(()=>{
      history.push('/login')
    },4000)
  }
  navigate()

  return (
      <div>
          <p className="text-center">Splash Screen</p>
      </div>
  );
}

export default Splash
