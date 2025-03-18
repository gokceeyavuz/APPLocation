import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import style from './style';
import icons from '../../assets/icons';

const index = () => {
  return (
    <View>
      <View style={style.backgrounddddd}>
        <View style={style.alan1}>
          <View style={style.alan1icons}>
            <Image style={style.geriIcon} source={icons.back}></Image>
            <Image style={style.moreIcon} source={icons.more}></Image>
          </View>
          <View style={style.alan1gorup2}>
            <Text style={style.textLocation}>Location 1</Text>
            <Image source={icons.exchange} style={style.exchangeIcon}></Image>
            <Text style={style.textLocation}>Location 2</Text>
          </View>
          <View style={style.alan2}>
            <View style={style.alan2konum}>
              <Image
                source={icons.telegram}
                style={style.telegramİcons}></Image>
              <View>
                <Text style={style.telegramText}>Location1</Text>
                <Text style={style.textDate}>Date</Text>
              </View>
              <View>
                <View style={style.alan2group2}>
                  <Text style={style.textDate}>Price 1</Text>
                  <Text style={{color: 'green', fontSize: 10}}> 15.6</Text>
                </View>
                <View style={style.alan2group2}>
                  <Text style={style.textDate}>Price 2</Text>
                  <Text style={{color: 'green', fontSize: 10}}> 10.8</Text>
                </View>
              </View>
            </View>
            <View style={style.alan2konum}>
              <Image source={icons.circle} style={style.telegramİcons}></Image>
              <View>
                <Text style={style.telegramText}>Location2</Text>
                <Text style={style.textDate}>Date</Text>
              </View>
              <View>
                <View style={style.alan2group2}>
                  <Text style={style.textDate}>Price 1</Text>
                  <Text style={{color: 'green', fontSize: 10}}> 15.6</Text>
                </View>
                <View style={style.alan2group2}>
                  <Text style={style.textDate}>Price 2</Text>
                  <Text style={{color: 'green', fontSize: 10}}> 10.8</Text>
                </View>
                <View style={style.alan2group2}>
                  <Text style={{marginTop: 8, fontSize: 10}}>Total Price</Text>
                  <Text
                    style={{
                      marginTop: 4,
                      fontSize: 15,
                      fontWeight: 'bold',
                      color: 'green',
                    }}>
                    $1.50
                  </Text>
                </View>
              </View>
            </View>
            <TouchableOpacity style={style.createAlani}>
              <Text style={style.loginText}>Buy Ticket</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={style.alan3}>
          <View style={style.alan2konum}>
            <Image source={icons.telegram} style={style.telegramİcons}></Image>
            <View>
              <Text style={style.telegramText}>Location1</Text>
              <Text style={style.textDate}>Date</Text>
            </View>
            <View>
              <View style={style.alan2group2}>
                <Text style={style.textDate}>Price 1</Text>
                <Text style={{color: 'green', fontSize: 10}}> 15.6</Text>
              </View>
              <View style={style.alan2group2}>
                <Text style={style.textDate}>Price 2</Text>
                <Text style={{color: 'green', fontSize: 10}}> 10.8</Text>
              </View>
            </View>
          </View>
          <View style={style.alan2konum}>
            <Image source={icons.circle} style={style.telegramİcons}></Image>
            <View>
              <Text style={style.telegramText}>Location2</Text>
              <Text style={style.textDate}>Date</Text>
            </View>
            <View>
              <View style={style.alan2group2}>
                <Text style={style.textDate}>Price 1</Text>
                <Text style={{color: 'green', fontSize: 10}}> 15.6</Text>
              </View>
              <View style={style.alan2group2}>
                <Text style={style.textDate}>Price 2</Text>
                <Text style={{color: 'green', fontSize: 10}}> 10.8</Text>
              </View>
              <View style={style.alan2group2}>
                <Text style={{marginTop: 8, fontSize: 10}}>Total Price</Text>
                <Text
                  style={{
                    marginTop: 4,
                    fontSize: 15,
                    fontWeight: 'bold',
                    color: 'green',
                  }}>
                  $2.75
                </Text>
              </View>
            </View>
          </View>
          <TouchableOpacity style={style.createAlani}>
            <Text style={style.loginText}>Buy Ticket</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
