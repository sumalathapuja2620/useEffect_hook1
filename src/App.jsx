// import React, { useEffect, useState } from 'react'

// const App = () => {
//   const [data,setData]=useState([])
//   const [fildata,setFilData]=useState([])
//   useEffect(()=>{
//     fetch("https://fakestoreapi.com/products").then(res=>res.json()).then(res=>{
//       // console.log(res)
//       setData(res)
//       setFilData(res)
//     })
//   },[])
//   const handleCategoryData=(products)=>{
//     const filterData=data.filter(x=>x.category===products)
//     console.log(filterData)
//     setFilData(filterData)
//   }
//   return (
//     <div>
//       <button onClick={()=>handleCategoryData("electronics")}>Electronics</button>
//       <button onClick={()=>handleCategoryData("jewelery")}>Jewelery</button>
//       <button onClick={()=>handleCategoryData("men's clothing")}>Men's clothing</button>
//       <button onClick={()=>handleCategoryData("women's clothing")}>Women's clothing</button>
//       {fildata.map((p)=>{
//         return(
//           <>
//           <img src={p.image}/>
//           <h4>{p.title}</h4>
//           <h3>{p.price}</h3>
//           </>
//         )
//       })}
//     </div>
//   )
// }

// export default App







import React, { useEffect, useState } from 'react'
import './App.css'

const App = () => {
  const [data, setData] = useState([])
  const [fildata, setFilData] = useState([])

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(res => {
        setData(res)
        setFilData(res)
      })
  }, [])

  const handleCategoryData = (category) => {
    const filterData = data.filter(item => item.category === category)
    setFilData(filterData)
  }

  return (
    <div className="container">
      <div className="category-buttons">
        <button onClick={() => handleCategoryData("electronics")}>Electronics</button>
        <button onClick={() => handleCategoryData("jewelery")}>Jewelery</button>
        <button onClick={() => handleCategoryData("men's clothing")}>Men's clothing</button>
        <button onClick={() => handleCategoryData("women's clothing")}>Women's clothing</button>
      </div>

      <div className="products-grid">
        {fildata.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.title} />
            <h4>{product.title}</h4>
            <h3>${product.price}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
