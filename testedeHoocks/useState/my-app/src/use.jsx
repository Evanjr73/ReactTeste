import React, { useState } from 'react';

function Example() {
  // Declarar uma nova variável de state, na qual chamaremos de "count"
  const [count, setCount] = useState();
  
  return (
    <div>
      <p>{count} </p>
      
      <button onClick={() => setCount('ola mundo')}>
        Clique aqui
      </button>
     <button onClick={()=> setCount('')}>
        voltar
     </button>
    </div>
  );
}
export default Example