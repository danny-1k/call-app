import {useState} from 'react';
import AuthRoute from './routes/authRoute';
import CallRoute from './routes/callRoute';

export default function App({navigation}) {

  const [isAuthenticated,setIsAuthenticated] = useState(false);


  return (

    isAuthenticated? <CallRoute/> : <AuthRoute/>

    
    
  )
}