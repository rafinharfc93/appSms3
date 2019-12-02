import React, { omponent } from 'react';
import {Platform, StyleSheet, Text, View, NativeModules} from 'react-native';

var DirectSms = NativeModules.DirectSms;
export default class App extends Component {
// async function to call the Java native method
sendDirectSms() {
  try {
      const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.SEND_SMS,
          {
              title: 'YourProject App Sms Permission',
              message:
              'YourProject App needs access to your inbox ' +
              'so you can send messages in background.',
              buttonNeutral: 'Ask Me Later',
              buttonNegative: 'Cancel',
              buttonPositive: 'OK',
          },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          DirectSms.sendDirectSms('0935...', 'This is a direct message');
      } else {
          console.log('SMS permission denied');
      }
  } catch (err) {
      console.warn(err);
  }
}
render() {
return (
        <View>
            <TouchableOpacity onPress={() => this.sendDirectSms()}>
                <Text>send SMS</Text>
            </TouchableOpacity>
        </View>
       );
    }
}