import React, { useRef, useEffect } from 'react';
import {
  Animated,
  Button,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { useNavigate } from 'react-router-native';





function Welcome(): JSX.Element{

  const navigate = useNavigate();
  const titleOpacity = useRef(new Animated.Value(0)).current;
  const descriptionPosition = useRef(new Animated.ValueXY({ x: 200, y: 0 })).current;
  const imagePosition = useRef(new Animated.ValueXY({ x: -200, y: 0 })).current;
  const iconesPosition = useRef(new Animated.ValueXY({ x: 0, y: 200 })).current;

  useEffect(() => {
     
    Animated.timing(titleOpacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    
    Animated.timing(imagePosition, {
      toValue: { x: 0, y: 0 },
      duration: 1000,
      useNativeDriver: true,
    }).start();


    Animated.timing(descriptionPosition, {
      toValue: { x: 0, y: 0 },
      duration: 1000,
      useNativeDriver: true,
    }).start();


    Animated.timing(iconesPosition, {
      toValue: { x: 0, y: 0 },
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (

    <View style={styles.container}>
        <Animated.View style={[styles.titleView, { opacity: titleOpacity }]}>
            <Text style={styles.titleText}>
            تطبيق آمنة
            </Text>
        </Animated.View>
        <View style={styles.bodyView}>
            <Animated.View style={[styles.imageView, { transform: imagePosition.getTranslateTransform() }]}>
              <Image 
                source={require('../Utils/image1.jpg')}
                resizeMode='stretch'
                style={styles.image}
              />
            </Animated.View>
            <Animated.View style={[styles.descriptionView, { transform: descriptionPosition.getTranslateTransform() }]}>
              <Text style={styles.descriptionText}>
              تطبيق آمنة هو تطبيق يساعد النساء في العثور بسهولة على المستندات الرسمية المطلوبة من الدوائر الحكومية، دون الحاجة إلى مستوى دراسي محدد. يوفر التطبيق واجهة بسيطة وسهلة الاستخدام للبحث عن المستندات الرسمية المتعلقة بالقضايا المتعلقة بالحالة المدنية والصحة والتعليم والعمل وغيرها من المجالات. كما يتيح التطبيق إمكانية تحميل وحفظ المستندات بشكل آمن ومرتب للرجوع إليها في أي وقت
              </Text>
            </Animated.View>
        </View>
        <Animated.View style={[styles.buttonView, { opacity: titleOpacity }]}>
            <Pressable style={styles.button} onPress={()=>{navigate('/Home')}}>
              <Text style={styles.buttonText}>تصفح</Text>
            </Pressable>
        </Animated.View>
        <Animated.View style={[styles.iconesView, { transform: iconesPosition.getTranslateTransform() }]}>
          <Image 
                  source={require('../Utils/icone1.png')}
                  resizeMode='stretch'
                  style={styles.icone}
          />
          <Image 
                  source={require('../Utils/icone1.png')}
                  resizeMode='stretch'
                  style={styles.icone}
          />
          <Image 
                  source={require('../Utils/icone1.png')}
                  resizeMode='stretch'
                  style={styles.icone}
          />
          <Image 
                  source={require('../Utils/icone1.png')}
                  resizeMode='stretch'
                  style={styles.icone}
          />
          <Image 
                  source={require('../Utils/icone1.png')}
                  resizeMode='stretch'
                  style={styles.icone}
          />
          <Image 
                  source={require('../Utils/icone1.png')}
                  resizeMode='stretch'
                  style={styles.icone}
          />

        </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff'
  },
  titleView:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',

  },
  titleText:{
    color:'#000',
    fontSize:50,
  },
  bodyView:{
    flex:3,
    flexDirection:'row',
  },
  imageView:{
    flex:1,
  },
  image:{
    width:'100%',
    height:'100%',
  },
  descriptionView:{
    flex:1.7,
    margin:20,
    borderRadius:20,
    borderColor:'#f00',
    borderWidth:5,
    alignItems:'center',
    justifyContent:'center'
  },
  descriptionText:{
    color:'#000',
    margin:10,
    fontSize:14.5,
    textAlign:'center',
    fontWeight:'bold'

  },
  buttonView:{
    flex:1,
    alignItems:'center',

  },
  button:{
    backgroundColor:'#ff6666',
    borderRadius:25,
  },
  buttonText:{
    color:'#000',
    margin:10,
    marginHorizontal:20,
    fontSize:20,
    fontWeight:'bold'
  },
  iconesView:{
    flex:1.2,
    flexDirection:'row',
    flexWrap: 'wrap',
    alignItems:'center',
    justifyContent:'center'
    
  },
  rowView:{
    flexDirection:'row',
  },
  icone:{
    width:80,
    height:'50%',
    marginHorizontal:5
  },
});

export default Welcome;