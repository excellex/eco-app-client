import React from 'react';
import {useHistory} from 'react-router-dom'

function Glass(props) {

  const history = useHistory();
  return (
    <div>
      <button type="button" className="btn btn-primary btn-sm" onClick={()=> history.push('/blic')}>Назад</button>
    <br/>
      <button type="button" className="btn btn-primary btn-sm" onClick={()=> history.push('/glass/container')}>Тара</button>
      <button type="button" className="btn btn-primary btn-sm" onClick={()=> history.push('/glass/glassbreak')}>Бой стекла</button>

      <br/>
      
    </div>
  );
}

export default Glass;
