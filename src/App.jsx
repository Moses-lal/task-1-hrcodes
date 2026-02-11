import React from 'react'



const App = () => {

  const [data, setData] = React.useState([]);

  const post = fetch("https://jsonplaceholder.typicode.com/posts");
  post.then((response) => response.json())
  .then((data) => setData(data))  
  



  return (
    <>
    
    <div className='bg-gray-300 min-h-screen gap-3 p-15 grid grid-cols-3 '>

      <div className='w-300 h-150 ml-30 bg-blue-300 overflow-scroll grid grid-cols-3 gap-5 p-5 '>

         {data.map((item) => (
        <div key={item.id} className='bg-white p-5 rounded-lg shadow-md hover:shadow-black'>
          <h2 className='text-xl font-bold mb-2'>{item.title}</h2>
          <p className='text-gray-700'>{item.body}</p>
          <img src="img2.jpg" className='mt-4' />
        </div>
      ))}

      </div>
     

    </div>
    
    
    
    
    </>
  )
}

export default App
