import { StatusBar } from 'expo-status-bar';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

export default function App() {

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>

      <Modal
        animationType="fade"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>This is modal...</Text>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}>
            <Text style={styles.textStyle}>Close</Text>
          </Pressable>
        </View>
      </Modal>

      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text>Show modal message </Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalView: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fbfafb',
    marginTop: 200,
    elevation: 5,
  },
  modalText: {
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    borderRadius: 20,
    padding: 10,
  },
  textStyle: {
    fontWeight: 'bold'
  }

});
