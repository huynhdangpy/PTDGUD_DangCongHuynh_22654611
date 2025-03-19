import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);  
  const [loading, setLoading] = useState(true);  
  const [error, setError] = useState(null);  

  useEffect(() => {
    const fetchData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/'); 
        const result = await response.json();
        setData(result); 
    };

    fetchData(); 
  }, []);
  return (
    <>
    <div>
      {data.map(item=>(
        <div key={item.id} style={{marginTop :'15px', backgroundColor: '#00BFFF'}} >
          <p>id: {item.id}</p>
          <p>title: {item.title}</p>
          <p>{item.completed ? "completed" : "No completed"} </p>
        </div>
      ))}
    </div>


  </>
  );
}

export default App;


