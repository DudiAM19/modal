import React, {useState} from 'react';
import {View, Text, Modal, TouchableOpacity, SafeAreaView, StyleSheet} from 'react-native';
import ModalPicker from './component/ModalPicker';


const App = () => {
  
  const [chooseData, setchooseData] = useState('Pilih paket ...');
  const [isModalVisible, setisModalVisible] = useState(false);

  const changeModalVisibility = (bool) => {
    setisModalVisible(bool)
  }

  const setData = (option) => {
    setchooseData(option);
  }

  return(
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.touchableOpacity} onPress={() => changeModalVisibility(true)}>
        <Text style={styles.text}>{chooseData}</Text>
      </TouchableOpacity>
      <Modal 
        transparent={true}
        animationType='fade'
        visible={isModalVisible}
        onRequestClose={() => changeModalVisibility(false)}
      >
      <ModalPicker 
        changeModalVisibility={changeModalVisibility}
        setData={setData}
      />  
      </Modal>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink'
  },
  touchableOpacity: {
    alignSelf: 'stretch',
    paddingHorizontal: 20,
    backgroundColor: 'beige',
    borderRadius: 30,
    width: 350,
    marginHorizontal: 5
  },
  text: {
    marginVertical: 20,
    fontSize: 25
  }
})

export default App;