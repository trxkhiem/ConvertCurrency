import React from 'react';
import { Button, Modal, View } from 'react-native';

const DisplayModal = ({ isVisible, onClose, component }) => {
  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {component}
        <Button title="Close" onPress={onClose} />
      </View>
    </Modal>
  );
};

export default DisplayModal;
