import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Keyboard, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-community/async-storage';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import {
  Container,
  Form,
  Input,
  SubmitButton,
  List,
  User,
  Avatar,
  Name,
  Bio,
  ProfileButton,
  ProfileButtonText,
  ErrorText,
} from './styles';

class Main extends Component {
  static navigationOptions = {
    title: 'User',
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    userFound: PropTypes.func.isRequired,
    userNotFound: PropTypes.func.isRequired,
    error: PropTypes.bool.isRequired,
  };

  state = {
    username: '',
    loading: false,
  };

  async componentDidMount() {
    try {
      const users = await AsyncStorage.getItem('users');

      if (users) {
        this.setState({ users: JSON.parse(users) });
      }
    } catch (error) {
      console.tron.log(error);
    }
  }

  componentDidUpdate(_, prevState) {
    const { users } = this.state;
    if (prevState.users !== users) {
      try {
        AsyncStorage.setItem('users', JSON.stringify(users));
      } catch (error) {
        console.tron.log(error);
      }
    }
  }

  handleNavigate = user => {
    const { navigation } = this.props;
    navigation.navigate('User', { user });
  };

  handleAddUser = async () => {
    const { newUser } = this.state;
    const { userFound, userNotFound } = this.props;

    this.setState({
      loading: true,
    });

    Keyboard.dismiss();
  };

  render() {
    const { username, loading } = this.state;
    const { error } = this.props;
    return (
      <Container>
        <Form>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Add new user"
            value={username}
            onChangeText={text => this.setState({ username: text })}
            returnKeyType="send"
            onSubmitEditing={this.handleAddUser}
          />
          <SubmitButton loading={loading} onPress={this.handleAddUser}>
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Icon name="add" size={20} color="#fff" />
            )}
          </SubmitButton>
          {error && <ErrorText>User not found</ErrorText>}
        </Form>
        <List
          data={users}
          keyExtractor={user => user.login}
          renderItem={({ item }) => (
            <User>
              <Avatar source={{ uri: item.avatar }} />
              <Name>{item.name}</Name>
              <Bio>{item.bio}</Bio>

              <ProfileButton onPress={() => this.handleNavigate(item)}>
                <ProfileButtonText>See profile</ProfileButtonText>
              </ProfileButton>
            </User>
          )}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  user: state.login.user,
  error: state.login.error,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(UserActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
