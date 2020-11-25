import React from 'react';
import {useHistory} from 'react-router-dom'

function Plastic(props) {
  const history = useHistory()
  return (
    <div>
    <button type="button" className="btn btn-primary btn-sm" onClick={()=> history.push('/blic')}>Назад</button>
    <br/>
    <button type="button" className="btn btn-primary btn-sm" onClick={()=> history.push('/plastic/flakon')}>Флакон</button>
    <button type="button" className="btn btn-primary btn-sm" onClick={()=> history.push('/plastic/plasticbottle')}>Бутылки</button>
    <button type="button" className="btn btn-primary btn-sm" onClick={()=> history.push('/plastic/styrofoam')}>Пенопласт</button>
      
    </div>
  );
}

export default Plastic;
