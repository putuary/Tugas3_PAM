import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

const daftar_maskapai = [
  'Air Asia',
  'Lion Air',
  'Garuda Indonesia',
  'Citilink',
  'Batik Air',
  'Wings Air',
];

let maskapai = [];
function display() {
  let random = Math.random() * 5 + 0;
  maskapai = [];
  for (let i = 0; i <= random; i++) {
    maskapai.push(daftar_maskapai[i]);
  }
}

const Jadwal = ({berangkat, tujuan, tanggal}) => {
  display();
  return maskapai.map(item => {
    return (
      <View style={styles.daftar}>
        <Text style={styles.daftar.jurusan}>
          {berangkat} - {tujuan}
        </Text>
        <View style={styles.daftar.item}>
          <Image
            style={styles.daftar.ikon_maskapai}
            source={require('../icon/ri_plane-fill.png')}
          />
          <Text style={styles.daftar.nama_maskapai}>{item}</Text>
          <Text style={styles.daftar.tanggal}>{tanggal}</Text>
        </View>
      </View>
    );
  });
};

const styles = StyleSheet.create({
  daftar: {
    width: '90%',
    height: 131,
    marginTop: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignSelf: 'center',

    jurusan: {
      fontSize: 14,
      fontWeight: 'bold',
      margin: 20,
    },

    item: {
      flexDirection: 'row',
      alignSelf: 'center',
      width: '100%',
      flex: 1,
    },

    ikon_maskapai: {marginLeft: 10},

    nama_maskapai: {
      fontSize: 14,
      fontWeight: 'bold',
      marginTop: 10,
      marginLeft: 20,
    },
    tanggal: {
      fontSize: 14,
      fontWeight: 'bold',
      marginTop: 10,
      marginLeft: 50,
    },
  },
});

export default Jadwal;
