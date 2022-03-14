import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  Image,
} from 'react-native';

const Home = ({navigation, route}) => {
  const [berangkat, setDataBerangkat] = React.useState(null);

  const [tujuan, setDataTujuan] = React.useState(null);
  const [tanggal, setTanggal] = React.useState(null);

  return (
    <View style={styles.tampilan_home}>
      <View style={styles.background_hijau}>
        <View style={styles.background_hijau.ikon_judul}>
          <Image
            style={styles.background_hijau.ikon_judul.ikon_menu}
            source={require('../../icon/eva_menu-outline.png')}
          />
          <Image
            style={styles.background_hijau.ikon_judul.ikon_profil}
            source={require('../../icon/Profil.png')}
          />
        </View>
        <Text style={styles.background_hijau.ikon_judul.judul}>Hiling.id</Text>
      </View>
      <View style={styles.background_putih}>
        <Text style={styles.background_putih.judul1}>Lokasi Keberangkatan</Text>
        <View style={styles.background_putih.box}>
          <Image
            style={styles.background_putih.box.ikon}
            source={require('../../icon/takeoff.png')}
          />
          <TextInput
            style={styles.background_putih.box.input}
            onChangeText={setDataBerangkat}
            value={berangkat}
            placeholder="Masukkan Lokasi Keberangkatan"
          />
        </View>
        <Text style={styles.background_putih.judul2_3}>Lokasi Tujuan</Text>
        <View style={styles.background_putih.box}>
          <Image
            style={styles.background_putih.box.ikon}
            source={require('../../icon/landing.png')}
          />
          <TextInput
            style={styles.background_putih.box.input}
            onChangeText={setDataTujuan}
            value={tujuan}
            placeholder="Masukkan Lokasi Tujuan"
          />
        </View>
        <Text style={styles.background_putih.judul2_3}>
          Tanggal Keberangkatan
        </Text>
        <View style={styles.background_putih.box}>
          <Image
            style={styles.background_putih.box.ikon}
            source={require('../../icon/date.png')}
          />
          <TextInput
            style={styles.background_putih.box.input}
            onChangeText={setTanggal}
            value={tanggal}
            placeholder="Masukkan Tanggal Keberangkatan"
          />
        </View>
        <TouchableOpacity
          style={styles.tombol}
          onPress={() =>
            navigation.navigate('Bandara', {
              data: {
                berangkat: berangkat,
                tujuan: tujuan,
                tanggal: tanggal,
              },
            })
          }>
          <Text style={styles.tombol.tulisan}>Cari</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.hak_cipta}>
        Copyright Putu Ary Kusuma Yudha-119140098
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tampilan_home: {
    flex: 1,
    backgroundColor: '#C9CCC9',
  },
  background_hijau: {
    width: '100%',
    height: 559,
    backgroundColor: '#27A62C',

    ikon_judul: {
      flexDirection: 'row',
      alignSelf: 'center',

      ikon_menu: {
        marginRight: '35%',
        marginTop: 19,
        width: 38,
        height: 38,
      },
      ikon_profil: {
        width: 28,
        height: 28,
        marginLeft: '35%',
        marginTop: 19,
      },
      judul: {
        fontSize: 24,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: 'white',
      },
    },
  },
  background_putih: {
    width: 297,
    height: 436,
    alignSelf: 'center',
    marginTop: -365,
    backgroundColor: 'white',
    borderRadius: 10,

    judul1: {
      color: 'black',
      fontSize: 14,
      fontWeight: 'bold',
      marginLeft: 28,
      marginTop: 33,
      marginBottom: -16,
    },
    judul2_3: {
      color: 'black',
      fontSize: 14,
      fontWeight: 'bold',
      marginLeft: 28,
      marginTop: -10,
      marginBottom: -16,
    },
    box: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#fff',
      height: 40,
      margin: 30,
      borderWidth: 1,
      borderRadius: 5,

      ikon: {marginLeft: 10},

      input: {fontSize: 12, marginLeft: 10},
    },
  },
  tombol: {
    marginBottom: 60,
    marginLeft: 28,
    marginRight: 28,
    backgroundColor: '#F54F08',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,

    tulisan: {color: 'white', fontWeight: 'bold'},
  },

  hak_cipta: {marginTop: 70, alignSelf: 'center', fontWeight: 'bold'},
});

export default Home;
