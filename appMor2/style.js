import {Dimensions,StyleSheet} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
    backgrounddddd:{
        backgroundColor:'#EEEDF2',
        flex: 1,
    },
    alan1:{
        backgroundColor:'#B69AEB',
        width:windowWidth*1,
        height:windowWidth*0.9,
        borderBottomLeftRadius:82,
        borderBottomRightRadius:82,
    },
    alan1icons:{
        flexDirection:'row',
        justifyContent:'space-between',
        margin: 21,
    },
    geriIcon:{
        width:25,
        height:25,
        tintColor:'white',
        justifyContent:'flex-start',
    },
    moreIcon:{
        width:25,
        height:25,
        tintColor:'white',
        justifyContent:'flex-end',
    },
    alan1gorup2:{
        flexDirection:'row',
        marginTop :87,
        marginLeft:32,
        justifyContent:'space-around',
        marginBottom: 87,
    },
    textLocation:{
        fontSize:23,
        fontWeight:'bold',
        color:'white',
    },
    exchangeIcon:{
      width:25,
      height:25,
      tintColor:'white',
    },
    alan2:{
        backgroundColor:'white',
        width:windowWidth*0.9,
        height:windowWidth*0.5,
        borderRadius:24,
        alignSelf:'center',
        
    },
    alan2konum:{
        flexDirection:'row',
        justifyContent:'space-around',
        margin:18,

    },
    telegramİcons:{
        width:35,
        height:35,
        

    },
   telegramText:{
    fontSize:16,
    fontWeight:'500',
    color:'black',
   },
   textDate:{
    fontSize:10,
    fontWeight:'300',
    color:'black',
   },
   alan2group2:{
    flexDirection:'row',
    gap:7,
   }, 
  
   Buttonn:{
   padding:16,
   borderRadius:17,
   backgroundColor:'#B69AEB',
   height:25,
  width: windowWidth*0.3,
  alignSelf:'flex-end',
  marginRight:24,
  
   },
   butonText:{
    textAlign:'center',
    color:'black',
    fontSize:12,
    fontWeight:'700',
    alignSelf:'flex-end'
   },
   createAlani:{
    padding:8,
    borderRadius:25,
    backgroundColor:'#B69AEB',
    alignSelf:'flex-end',
    width:windowWidth*0.3,
    marginRight:24,
    marginBottom:140

},
loginText:{
    fontSize:14,
    fontWeight:'bold',
    color:'white',
   textAlign:'center',
    margin:3, 
    alignItems:'center'

},
alan3:{
    backgroundColor:'white',
    width:windowWidth*0.9,
    height:windowWidth*0.5,
    borderRadius:24,
    alignSelf:'center',
    margin:120,
    
},

});