import React from 'react'
import { Route,NativeRouter,Routes ,useNavigate} from 'react-router-native'
import { View,Text,Button} from 'react-native'
import Home from './Home'


function HomeRoutes() {
    
    const Mehkama =()=>{
        const navigate = useNavigate();
        return <View>
            <Text>
                l7abs
            </Text>
            <Button  title='Back' onPress={()=>{console.log("comiii");navigate('/')}} />
        </View>
    }
    const Comissaria =()=>{
        const navigate = useNavigate();
        return <View>
            <Text>
                PJ
            </Text>
            <Button  title='Back' onPress={()=>{console.log("comiii");navigate('/')}} />
        </View>
    }
    return (
        <NativeRouter>
        <Routes>
            <Route  path='/' element={<Home/>} />
            <Route  path='/comisaria' element={<Comissaria/>} />
            <Route  path='/Me7kama' element={<Mehkama/>} />
            {/* <Route exact path='/create' element={<NewProduct/>} />
            <Route exact path='/edit' element={<EditProduct/>} />
            <Route exact path='/read' element={<ReadProduct/>} /> */}
        </Routes>
      </NativeRouter>
    )
  }
  
  export default HomeRoutes