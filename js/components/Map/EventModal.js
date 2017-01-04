import React from 'react';
import { Modal, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  modalView: {
    height: 500,
    width: 300,
    backgroundColor: 'white'
  }
});

const EventModal = props => (
  <Modal
    visible={props.map.modalVisibility}
    transparent
    animationType={'fade'}
    onRequestClose={() => props.mapActions.showEventModal(false)}
  >
    <View style={styles.modalView} />
  </Modal>
);

EventModal.propTypes = {
  map: React.PropTypes.shape({
    modalVisibility: React.PropTypes.bool.isRequired
  }),
  mapActions: React.PropTypes.objectOf(React.PropTypes.func)
};

export default EventModal;
