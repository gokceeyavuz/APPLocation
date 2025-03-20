import {Dimensions, StyleSheet} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  backgrounddddd: {
    backgroundColor: '#EFEDF1',
    flex: 1,
  },
  alan1: {
    backgroundColor: '#B69AEB',
    width: windowWidth * 1,
    height: windowWidth * 0.9,
    borderBottomLeftRadius: 82,
    borderBottomRightRadius: 82,
  },
  alan1icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 21,
  },
  geriIcon: {
    width: 25,
    height: 25,
    tintColor: 'white',
    justifyContent: 'flex-start',
  },
  moreIcon: {
    width: 25,
    height: 25,
    tintColor: 'white',
    justifyContent: 'flex-end',
  },
  TextBus: {
    fontSize: 45,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    alignSelf: 'flex-start',
    marginLeft: 32,
  },
  text1: {
    fontSize: 12,
    fontWeight: '200',
    color: 'white',
    marginTop: 45,
    alignSelf: 'flex-start',
    marginLeft: 32,
  },

  telegramİcons: {
    width: 35,
    height: 35,
  },
  telegramText: {
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
    marginLeft: 13,
  },
  textDate: {
    fontSize: 10,
    fontWeight: '300',
    color: 'black',
    marginLeft: 13,
  },
  alan2: {
    backgroundColor: 'white',
    width: windowWidth * 0.9,
    height: windowWidth * 0.5,
    borderRadius: 24,
    alignSelf: 'center',
  },
  alan2group1: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20,
  },
  alan2group2: {
    marginLeft: 78,
    marginTop: 46,
  },
  leftandrightarrows: {
    width: 54,
    height: 54,
  },
  GROUP1: {
    flexDirection: 'row',
    gap: 12,
  },
  daire: {
    padding: 15,
    maxHeight: 5,
    borderRadius: 34,
    backgroundColor: '#5DC89B',
    width: 8,
    marginTop: 5,
  },
  alan3: {
    backgroundColor: 'white',
    width: windowWidth * 0.9,
    height: windowWidth * 0.4,
    borderRadius: 24,
    alignSelf: 'center',
    margin: 67,
  },
  alan2group3: {
    justifyContent: 'space-around',
    flexDirection: 'row',
  },

  loginText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    margin: 3,
    alignItems: 'center',
  },
  alan2group3: {
    marginBottom: 56,
    flexDirection: 'row',
    gap: 10,
    marginLeft: 20,
  },
  butonn: {
    width: windowWidth * 0.6,
    padding: 20,
    borderRadius: 28,
    backgroundColor: '#B69AEB',
    alignSelf: 'center',
  },
  butonText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 21,
    textAlign: 'center',
    alignItems: 'center',
  },
  daire1: {
    padding: 15,
    maxHeight: 5,
    borderRadius: 34,
    backgroundColor: '#B69AEB',
    width: 8,
    marginTop: 5,
  },
});
