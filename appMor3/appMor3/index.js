import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import style from './style';
import icons from '../../assets/icons';

const index = () => {
  return (
    <View style={style.backgrounddddd}>
      <View style={style.alan1}>
        <View style={style.alan1icons}>
          <Image style={style.geriIcon} source={icons.more}></Image>
          <Image style={style.moreIcon} source={icons.user}></Image>
        </View>
        <View>
          <Text style={style.text1}>Hİ,GÖKÇE</Text>
          <Text style={style.TextBus}>Bus</Text>
        </View>
        <View style={style.alan2}>
          <View style={{flexDirection: 'row', gap: 15}}>
            <View style={style.alan2group1}>
              <Image
                source={icons.telegram}
                style={style.telegramİcons}></Image>
              <View>
                <Text style={style.textDate}>Date</Text>
                <Text style={style.telegramText}>Location</Text>
              </View>
              <View style={style.alan2group2}>
                <Image
                  source={icons.leftrightarrows}
                  style={style.leftandrightarrows}></Image>
              </View>
            </View>
          </View>
          <View style={style.alan2group3}>
            <Image source={icons.circle} style={style.telegramİcons}></Image>
            <View>
              <Text style={style.textDate}>Date</Text>
              <Text style={style.telegramText}>Location</Text>
            </View>
          </View>
        </View>
        <View style={style.alan3}>
          <View style={style.alan2group1}>
            <View style={style.daire}></View>
            <View>
              <Text style={style.textDate}>Passenger</Text>
              <Text style={style.telegramText}>Location1</Text>
            </View>
            <View style={{alignSelf: 'flex-end'}}>
              <Text style={style.textDate}>Type</Text>
              <Text style={style.telegramText}>Type</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={style.alan3}>
        <View style={style.alan2group1}>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <View style={style.daire}></View>
            <View>
              <Text style={style.textDate}>Passenger</Text>
              <Text style={style.telegramText}>01</Text>
            </View>
          </View>
          <View style={{justifyContent: 'space-between', marginRight: 17}}>
            <Text style={style.textDate}>Type</Text>
            <Text style={style.telegramText}>Type</Text>
          </View>
        </View>
        <View style={style.alan2group1}>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <View style={style.daire1}></View>
            <View>
              <Text style={style.textDate}>Dater</Text>
              <Text style={style.telegramText}>Sun 3 Jun 2021</Text>
            </View>
          </View>
        </View>
      </View>
      <TouchableOpacity style={style.butonn}>
        <Text style={style.butonText}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
