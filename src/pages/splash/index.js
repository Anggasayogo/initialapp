import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Splash = () => {
  const history = useHistory();

  useEffect(()=>{
      setTimeout(()=>{
        history.push('/login')
      },4000)
  },[])

  return (
      <div>
          <p className="text-center">Splash Screen</p>
      </div>
  );
}

export default Splash
