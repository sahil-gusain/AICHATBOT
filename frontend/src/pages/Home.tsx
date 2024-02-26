import { useAuth } from '../context/AuthContext';

const Home = () => {
  console.log(useAuth()?.isLoggedIn)
  return (
    <>
      <div>Home</div>
    </>
   
  )
}

export default Home;