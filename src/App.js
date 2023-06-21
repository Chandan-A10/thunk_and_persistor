import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {fetchcryptoData,fetchpost,fetchuserData } from "./slice/actions";

const App=()=> {
  const dispatch=useDispatch()

  const loading=useSelector(state=>state)
  
  useEffect(()=>{
    dispatch(fetchuserData())
    dispatch(fetchpost())
    dispatch(fetchcryptoData())
  },[dispatch])

  return (
    <>
    <table style={{border:'2px solid black'}}>
      <tr>
        <th> ID</th>
        <th>Photo</th>
        <th>Full Name</th>
        <th>Email</th>
      </tr>
      {loading.users.userData.length!==0 ? loading.users.userData[0].data.map((x)=>{
        return <tr><td>{x.id}</td><td><img src={x.avatar} alt='img'/></td> <td>{x.first_name+ ' '+x.last_name}</td><td>{x.email}</td></tr>
      }):<h1>sbfdkhfh</h1>}
    </table>

    <br></br>

    <table style={{border:'2px solid black'}}>
      <tr>
        <th>ID</th>
        <th>Title</th>
      </tr>
      {loading.post.posts.length!==0 ? loading.post.posts.map((x)=>{
       return (<tr><td>{x.id}</td><td>{x.title}</td></tr>)
       }):<h1>sbfdkhfh</h1>}
    </table>

    <br></br>

    <table style={{border:'2px solid black'}}>
      <tr>
        <th> Symbol</th>
        <th>High Price</th>
        <th>low Price</th>
        <th>Volume</th>
      </tr>
        {loading.crypto.cryptoData.length!==0 ? loading.crypto.cryptoData.map((x)=>{
        return <tr><td>{x.symbol}</td><td>{x.highPrice}</td> <td>{x.lowPrice}</td><td>{x.volume}</td></tr>
        }):<h1>sbfdkhfh</h1>}
    </table>
    </>
  );
}

export default App;
