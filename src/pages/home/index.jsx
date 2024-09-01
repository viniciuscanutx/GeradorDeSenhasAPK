import { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, Pressable } from 'react-native';
import Slider from '@react-native-community/slider';
import { ModalPassword } from '../../../components/modal';

export function Home() {
  const [size, setSize] = useState(16)
  const [passwordValue, setPasswordValue] = useState("")
  const [modalVisible, setModalVisible] = useState(false)

  let charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@?;#$";

  function generatePassword() {
    let password = "";
    for (let i = 0, n = charset.length; i < size; i++) {
      password += charset.charAt(Math.floor(Math.random() * n))
    }
    setPasswordValue(password)
    setModalVisible(true)
  }


  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/logo.png")}
        style={styles.logo}
      />
      <Text
        style={styles.title}>{size} Caracteres</Text>
      <View
        style={styles.area}>
        <Slider
          style={{ heigh: 50 }}
          minimumValue={6}
          maximumValue={20}
          maximumTrackTintColor='#090C9B'
          minimumTrackTintColor='#090C9B'
          thumbTintColor='#090C9B'
          value={size}
          onValueChange={(value) => setSize(value.toFixed(0))}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={generatePassword}>
        <Text style={styles.buttonText}>Gerar senha</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType='fade' transparent={true}>
        <ModalPassword password={passwordValue} handleClose={ () => setModalVisible(false)}/>
      </Modal>

    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCFFFC",
    color: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    marginBottom: 40
  },
  title: {
    marginBottom: 20,
    color: '#080705',
  },
  area: {
    marginTop: 14,
    marginBottom: 14,
    width: "80%",
    backgroundColor: "#FCFFFC",
    borderRadius: 8,
    padding: 6,
  },
  button: {
    backgroundColor: "#090C9B",
    marginTop: 20,
    width: "80%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  buttonText: {
    color: '#ffff'
  },
  title: {
    marginBottom: 15,
    fontSize: 20,
    fontWeight: 'bold'
  }
})