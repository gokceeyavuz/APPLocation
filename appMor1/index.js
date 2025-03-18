import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import style from './style';
import icons from '../../assets/icons';
import {RoutesName} from '../../config';

const index = ({navigation}) => {
  return (
    <View style={style.backGround}>
      <View>
        <Image style={style.gorResim} source={icons.resim1}></Image>
      </View>
      <View>
        <Text style={style.TextApp}>APP</Text>
      </View>
      <View>
        <Text style={style.TextWelcome}>Welcome</Text>
      </View>
      <View>
        <TextInput style={style.usernameText}>
          <Text style={style.userName}>Username </Text>
        </TextInput>
      </View>
      <View style={style.userAlani}></View>
      <View style={style.passwordAlani}>
        <View style={style.usernameText}>
          <TextInput>
            <Text style={style.password}>Password</Text>
          </TextInput>
        </View>
        <View style={style.userAlani2}></View>
        <TouchableOpacity
          style={style.loginAlani}
          onPress={() => navigation.navigate('buttomTabLocation')}>
          <Text style={style.loginText}>Log İn</Text>
        </TouchableOpacity>
        <View>
          <Text style={style.textBar}>Forget your password?</Text>
        </View>
      </View>
      <View style={style.alan2}>
        <View>
          <Text style={style.createText}>Dont have any account?</Text>
        </View>
        <TouchableOpacity style={style.createAlani}>
          <Text style={style.loginText}>Create</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
