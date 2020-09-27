import React from 'react'
import { PacmanLoader } from 'react-spinners';
import './loading.css';

const Loading = () => {
    return (
        <div className="sweet-loading">
        <PacmanLoader
          size={20}
          color={"#36D7B7"}
          loading={true}
        />
      </div>
    )
}

export default Loading
