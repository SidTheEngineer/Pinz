import React from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity
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
    marginTop: 125,
    marginBottom: 125,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: 'white',
    borderColor: 'rgb(150,150,150)',
    borderStyle: 'solid',
    borderWidth: 0.5,
    borderRadius: 10
  },
  textContainer: {
    marginLeft: 25,
    marginRight: 25,
    alignItems: 'center'
  },
  title: {
    marginTop: 25,
    color: COLORS.GRAY,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    color: COLORS.GRAY,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 16,
  },
  back: {
    color: COLORS.LIGHT_GREEN,
    fontSize: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20
  },
  time: {
    marginTop: 30,
    fontWeight: 'bold',
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


const formatTime = time => (
  time
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
        <View style={styles.textContainer}>
          <Text style={styles.title}>
            {
              props.map.modalDetails
              ? formatTitle(props.map.modalDetails.title)
              : ''
            }
          </Text>
          <Text style={styles.time}>Starts: {
              props.map.modalDetails ? formatTime(props.map.modalDetails.starts) : ''
            }
          </Text>
          <Text style={styles.time}>Ends: {
              props.map.modalDetails ? formatTime(props.map.modalDetails.ends) : ''
            }
          </Text>
          <ScrollView style={{ marginTop: 15, marginBottom: 10 }}>
            <Text style={styles.description}>
              {
                props.map.modalDetails
                ? formatDescription(props.map.modalDetails.description)
                : ''
              }
            </Text>
          </ScrollView>
          <TouchableOpacity onPress={() => props.mapActions.showEventModal(false, null)}>
            <Text style={styles.back}>Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </Modal>
);

EventModal.propTypes = {
  map: React.PropTypes.shape({
    modalVisibility: React.PropTypes.bool.isRequired,
    modalDetails: React.PropTypes.shape({
      title: React.PropTypes.string,
      description: React.PropTypes.string,
      starts: React.PropTypes.string,
      ends: React.PropTypes.string
    }),
  }),
  mapActions: React.PropTypes.objectOf(React.PropTypes.func)
};

export default EventModal;
