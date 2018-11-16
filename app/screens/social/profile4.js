import React from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
} from 'react-native';
import {
  RkText,
  RkTextInput,
  RkAvoidKeyboard,
  RkTheme,
  RkStyleSheet,
} from 'react-native-ui-kitten';
import { data } from '../../data';
import {
  Avatar,
  SocialSetting,
  GradientButton,
} from '../../components';
import { FontAwesome } from '../../assets/icons';

export class ProfileV4 extends React.Component {
  static navigationOptions = {
    title: 'Profile V4'.toUpperCase(),
  };

  profile = data.getProfile();

  state = {
    fullName: this.profile.fullName,
    phone: this.profile.phone,
    email: this.profile.email,
    careOf: this.profile.careOf,
    address: this.profile.address,
  };

  onFullNameInputChanged = (text) => {
    this.setState({ fullName: text });
  };

  onPhoneInputChanged = (text) => {
    this.setState({ phone: text });
  };

  onEmailInputChanged = (text) => {
    this.setState({ email: text });
  };

  onCareOfInputChanged = (text) => {
    this.setState({ careOf: text });
  };

  onAddressInputChanged = (text) => {
    this.setState({ address: text });
  };

  render = () => (
    <ScrollView style={styles.root}>
      <RkAvoidKeyboard>
        <View style={styles.header}>
          <Avatar img={this.profile.photo} rkType='big' />
        </View>
        <View style={styles.section}>
          <View style={[styles.row, styles.heading]}>
            <RkText rkType='header6 primary'>CONTACT</RkText>
          </View>
          <View style={styles.row}>
            <RkTextInput
              label='Full Name'
              value={this.state.fullName}
              rkType='right clear'
              onChangeText={this.onFullNameInputChanged}
            />
          </View>
          <View style={styles.row}>
            <RkTextInput
              label='Phone'
              value={this.state.phone}
              onChangeText={this.onPhoneInputChanged}
              rkType='right clear'
            />
          </View>
          <View style={styles.row}>
            <RkTextInput
              label='Email'
              value={this.state.email}
              onChangeText={this.onEmailInputChanged}
              rkType='right clear'
            />
          </View>
        </View>
        <View style={styles.section}>
          <View style={[styles.row, styles.heading]}>
            <RkText rkType='primary header6'>GENDER</RkText>
          </View>
          <View style={styles.row}>
            <SocialSetting name='Male' icon={FontAwesome.twitter} tintColor={RkTheme.current.colors.twitter} />
          </View>
          <View style={styles.row}>
            <SocialSetting name='Female' icon={FontAwesome.google} tintColor={RkTheme.current.colors.google} />
          </View>
          <View style={styles.row}>
            <SocialSetting name='Other' icon={FontAwesome.facebook} tintColor={RkTheme.current.colors.facebook} />
          </View>
        </View>
        <View style={styles.section}>
          <View style={[styles.row, styles.heading]}>
            <RkText rkType='primary header6'>LOCATION</RkText>
          </View>
          <View style={styles.row}>
            <RkTextInput
              label='Care Of/ Shop/ Office Name'
              value={this.state.careOf}
              rkType='right clear'
              secureTextEntry
              onChangeText={this.onCareOfInputChanged}
            />
          </View>
          <View style={styles.row}>
            <RkTextInput
              label='Address'
              value={this.state.address}
              rkType='right clear'
              secureTextEntry
              onChangeText={this.onAddressInputChanged}
            />
          </View>
        </View>
        <View style={styles.section}>
          <View style={[styles.row, styles.heading]}>
            <RkText rkType='primary header6'>CONNECT YOUR ACCOUNT</RkText>
          </View>
          <View style={styles.row}>
            <SocialSetting name='Twitter' icon={FontAwesome.twitter} tintColor={RkTheme.current.colors.twitter} />
          </View>
          <View style={styles.row}>
            <SocialSetting name='Google' icon={FontAwesome.google} tintColor={RkTheme.current.colors.google} />
          </View>
          <View style={styles.row}>
            <SocialSetting name='Facebook' icon={FontAwesome.facebook} tintColor={RkTheme.current.colors.facebook} />
          </View>
        </View>
        <GradientButton rkType='large' style={styles.button} text='SAVE' />
      </RkAvoidKeyboard>
    </ScrollView>
  );
}

const styles = RkStyleSheet.create(theme => ({
  root: {
    backgroundColor: theme.colors.screen.base,
  },
  header: {
    backgroundColor: theme.colors.screen.neutral,
    paddingVertical: 25,
  },
  section: {
    marginVertical: 25,
  },
  heading: {
    paddingBottom: 12.5,
  },
  row: {
    flexDirection: 'row',
    paddingHorizontal: 17.5,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.border.base,
    alignItems: 'center',
  },
  button: {
    marginHorizontal: 16,
    marginBottom: 32,
  },
}));
