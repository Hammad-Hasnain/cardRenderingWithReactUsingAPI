import axios from "axios";
import React, { useEffect, useState } from "react";
import './App.css'
import Card from './components/card_data/Card'

function App() {
  // console.log(axios)

  const [apiData, setApiData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const setData = () => {
    axios.get("https://fakestoreapi.com/products")
      .then(response => {
        console.log(response.data)
        setApiData(response.data)
        setIsLoading(true)
      })
      .catch(error => {
        console.log("Error =====>", error)
        setIsLoading(false)
      })


  }

  useEffect(() => {
    console.log("useeffect");
    setData()
  }, [])

  // console.log(apiData);
  return (
    <div className="App">

      {/* {apiData.map((e, i) => <h4>{e.id}</h4>)} */}
      {/* {isLoading ? console.log("okay") : console.log("not okay")} */}
      {/* <Button />
      <Card /> */}
      {isLoading ? apiData.map(e => <React.Fragment>
        <Card id={e.id}
          image={e.image} title={e.title}
          category={e.category}
          description={e.description}
          price={e.price}
          rate={e.rating.rate}
          count={e.rating.count}
        />
      </React.Fragment>

        //  <div key={e.id} className="card">
        //   <div className="img-div">
        //     <img src={e.image} />
        //   </div>
        //   <div>
        //     <h3>{e.id}. {e.title}</h3>
        //   </div>
        //   <div>
        //     <h4>{e.category}</h4>
        //   </div>
        //   <div>
        //     <h5>{e.description}</h5>
        //   </div>
        //   <div>
        //     <h5>{e.price} $</h5>
        //     <h5>{e.rating.rate}</h5>
        //     <h5>{e.rating.count}</h5>
        //   </div>
        //   <div className="buy-btn-div">
        //     {/* <button >Buy</button> */}
        //     <Button />
        //   </div>
        // </div>

      ) : <img src="https://i.gifer.com/ZZ5H.gif" alt="Loading......." />
      }

    </div>
  );
}

export default App;
