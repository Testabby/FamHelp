import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';

const ConfirmPopup = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalFLex}>
          <View style={styles.modalView}>
          <Text  style={[styles.modalText,{fontSize:18}]}>{props.title}</Text>
           
            <Pressable
              style={[styles.buttonClose]}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Text style={styles.textStyle}>{props.Close}</Text>

            </Pressable>
            <Text style={[styles.modalText,{fontWeight:'normal'}]}>{props.para}</Text>
            <Pressable
              style={[styles.button]}
              onPress={props.opt1Act}><Text style={styles.textStyle} >{props.opt1}</Text></Pressable>

          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>{props.title}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,

  },
  modalFLex: {
    flex: 1,
    // flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
    // height:'50%',
  },
  modalView: {
    margin: 10,
    backgroundColor: '#e6ffe6',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "90%",
  },
  button: {
    borderRadius: 20,
    paddingHorizontal: 40,
    paddingVertical:10,
    elevation: 2,
    backgroundColor:'green'
  },
  buttonOpen: {
    backgroundColor: 'green',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 50,
    elevation: 2,
  },
  buttonClose: {
    position: 'absolute',
    top: 8,
    right: 10,
    backgroundColor: 'red',
    borderRadius: 14,
    padding:8,
    // width: 60,
    // height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },

  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    margin: 10,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  
});

export default ConfirmPopup;