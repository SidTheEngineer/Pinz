import React from 'react';
import {
  Modal,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { COLORS } from '../../constant';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(20, 20, 20, 0.8)'
  },
  modalContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 80,
    marginBottom: 80,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: 'white',
    borderColor: 'rgb(150,150,150)',
    borderStyle: 'solid',
    borderWidth: 0.5,
    borderRadius: 10
  },
  title: {
    flex: Platform.OS === 'ios' ? 0.10 : 0.05,
    marginTop: 25,
    color: COLORS.GRAY,
    fontSize: 18,
    fontWeight: 'bold'
  },
  description: {
    flex: Platform.OS === 'ios' ? 0.90 : 0.95,
    marginTop: 30,
    color: COLORS.GRAY,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 14,
    marginLeft: 20,
    marginRight: 20
  }
});

const formatTitle = title => (
  title.length > 40 ? `${title.substring(0, 40)}...` : title
);

const formatDescription = description => (
  description
    .replace(/<(?:.|\n)*?>/gm, '')
    .replace(/^\s*[\r\n]/gm, '')
    .trim()
);

const EventModal = props => (
  <Modal
    visible={props.map.modalVisibility}
    transparent
    animationType={'fade'}
    onRequestClose={() => props.mapActions.showEventModal(false, null)}
  >
    <View style={styles.background}>
      <View style={styles.modalContainer}>
        <Text style={styles.title}>
          {
            props.map.modalDetails
            ? formatTitle(props.map.modalDetails.title)
            : ''
          }
        </Text>
        <Text style={styles.description}>
          {
            props.map.modalDetails
            ? formatDescription(props.map.modalDetails.description)
            : ''
          }
        </Text>
      </View>
    </View>
  </Modal>
);

EventModal.propTypes = {
  map: React.PropTypes.shape({
    modalVisibility: React.PropTypes.bool.isRequired,
    modalDetails: React.PropTypes.shape({
      title: React.PropTypes.string,
      description: React.PropTypes.string
    }),
  }),
  mapActions: React.PropTypes.objectOf(React.PropTypes.func)
};

export default EventModal;
