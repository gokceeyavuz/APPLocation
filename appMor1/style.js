import {Dimensions,StyleSheet} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
    backGround:{
        flex:1,
        backgroundColor:'#A380E0',
    },
    gorResim:{
        width:110,
        height:110,
       alignSelf:'center',
       marginTop:67,
        
    },
    TextApp:{
    fontSize:35,
    fontWeight:'bold',
    color:'white',
    alignSelf:'center',
    
},
TextWelcome:{
    fontSize:30,
    fontWeight:'600',
    color:'white',
    justifyContent:'flex-start', 
    margin:19,
},
userAlani:{
    padding:1,
    width:windowWidth*0.9,
    backgroundColor:'white',
    alignSelf:'center',
    

},
usernameText:{
    marginLeft:'24'
},
userName:{
    fontSize:14,
    fontWeight:'250',
    color:'white',
   marginHorizontal:20,
},
userAlani2:{
    padding:1,
    width:windowWidth*0.9,
    backgroundColor:'white',
    marginVertical:7,
    alignSelf:'center',

},
password:{
    fontSize:15,
    fontWeight:'250',
    color:'white',
    marginLeft:12,
    
},   
passwordAlani:{
    marginVertical:37,
},
loginAlani:{
    padding:14,
    borderRadius:34,
    backgroundColor:'white',
    marginTop:49,
    alignSelf:'center',
    width:windowWidth*0.7,

},
loginText:{
    color:'#9E80DA',
    fontSize:19,
    fontWeight:'400',
    justifyContent:'center',
    width:windowWidth*0.7,
    textAlign:'center',
    alignSelf:'center',
},
textBar:{
    fontSize:10,
    fontWeight:'200',
    color:'white',
    alignSelf:'center',
    margin:8, 
},

createAlani:{
    padding:11,
    borderRadius:25,
    backgroundColor:'white',
    marginTop:10,
    alignSelf:'center',
    width:windowWidth*0.5,

},
createText:{
    fontSize:14,
    fontWeight:'300',
    color:'white',
    alignSelf:'center',
    margin:3, 
},
alan2:{
    margin:36,
}

});