import React from 'react'
import { useNavigate} from 'react-router-native'
import { View,Text,Button} from 'react-native'



function Home() {
    const navigate = useNavigate(); 

    return (
        <View>
            <Button  title='Comissariya' onPress={()=>{navigate('/comisaria')}} />
            <Button  title='me7kama' onPress={()=>{navigate('/Me7kama')}} />
        </View>
    )
  }
  
  export default Home