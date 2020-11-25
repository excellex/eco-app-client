import React from 'react';
import {useHistory} from 'react-router-dom'


function Blic(props) {
  const history =useHistory()
  return (
  
          <>
       <div className="back-btn"><button type="button" className="btn btn-primary btn-sm" onClick={()=>history.push('/')}>Назад</button></div>
      <br/>
  <div className="nav-btns">
      <button type="button" className="btn btn-primary btn-sm " onClick={()=> history.push('/tires') } >Шины</button>
      <button type="button" className="btn btn-primary btn-sm " onClick={()=> history.push('/clothing') } >Одежда</button>
      <button type="button" className="btn btn-primary btn-sm " onClick={()=> history.push('/products') } >Продкты</button>
      <button type="button" className="btn btn-primary btn-sm" onClick={()=> history.push('/plastic') } >Пластик</button>
      <button type="button" className="btn btn-primary btn-sm" onClick={()=> history.push('/tetrapac') } >Тетра-Пак</button>
      <button type="button" className="btn btn-primary btn-sm" onClick={()=> history.push('/glass') } >Стекло</button>
      <button type="button" className="btn btn-primary btn-sm" onClick={()=> history.push('/metal') } >Металл</button>
      <button type="button" className="btn btn-primary btn-sm" onClick={()=> history.push('/paper') } >Бумага</button>
      <button type="button" className="btn btn-primary btn-sm" onClick={()=> history.push('/lightbulbs') } >Лампочки</button>
      <button type="button" className="btn btn-primary btn-sm" onClick={()=> history.push('/batteries') } >Батарейки</button>
      <button type="button" className="btn btn-primary btn-sm" onClick={()=> history.push('/hazardouswaste') } >Опасные отходы</button>
    </div>
    </>
  );
}

export default Blic;
