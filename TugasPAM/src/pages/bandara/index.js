import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import Jadwal from '../../components/daftar';

const Bandara = ({navigation, route}) => {
  return (
    <View style={styles.tampilan_bandara}>
      <View style={styles.background_hijau}>
        <View style={styles.background_hijau.ikon_judul}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={styles.background_hijau.ikon_judul.ikon_kembali}
              source={require('../../icon/ep_back.png')}
            />
          </TouchableOpacity>
          <Text style={styles.background_hijau.ikon_judul.judul}>
            Hiling.id
          </Text>
          <Image
            style={styles.background_hijau.ikon_judul.ikon_profil}
            source={require('../../icon/Profil.png')}
          />
        </View>
        <View style={styles.background_hijau.ikon_judul.dimensi}>
          <Text style={styles.background_hijau.ikon_judul.deskripsi}>
            Hasil Pencarian Penerbangan
          </Text>
          <Text style={styles.background_hijau.ikon_judul.deskripsi}>
            (Tanggal Keberangkatan)
          </Text>
        </View>
      </View>
      <ScrollView>
        <Jadwal
          berangkat={route.params.data.berangkat}
          tujuan={route.params.data.tujuan}
          tanggal={route.params.data.tanggal}
        />
      </ScrollView>
      <Text style={styles.hak_cipta}>
        Copyright Putu Ary Kusuma Yudha-119140098
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tampilan_bandara: {
    flex: 1,
    backgroundColor: '#C9CCC9',
  },
  background_hijau: {
    width: '100%',
    height: 142,
    backgroundColor: '#27A62C',

    ikon_judul: {
      flexDirection: 'row',
      alignSelf: 'center',

      ikon_kembali: {
        marginRight: '23%',
        marginTop: 19,
        width: 47,
        height: 23,
      },

      judul: {
        marginTop: 19,
        fontSize: 24,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: 'white',
      },

      ikon_profil: {
        width: 28,
        height: 28,
        marginLeft: '23%',
        marginTop: 19,
      },
      dimensi: {
        width: 200,
        height: 50,
        alignSelf: 'center',
        alignItems: 'center',
      },

      deskripsi: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'white',
      },
    },
  },
  hak_cipta: {alignSelf: 'center', fontWeight: 'bold'},
});

export default Bandara;
