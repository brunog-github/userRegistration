import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, Icon } from 'react-native-elements';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { UserList } from './screens/UserList';
import { UserForm } from './screens/UserForm';
import { UserDetails } from './screens/UserDetails';
import { UsersProviders } from './context/UsersContext';

const { Navigator, Screen } = createNativeStackNavigator()

export default function App() {
  return (
    <UsersProviders>
      <NavigationContainer>
        <StatusBar style="auto" />  

          <Navigator initialRouteName='UserList' screenOptions={screenOptions}>
            <Screen
              name='UserList'
              component={UserList}
              options={({ navigation }) => {
                return {
                  title: 'Lista de Usuários',
                  headerRight: () => (
                    <Button 
                      type='clear'
                      icon={<Icon name='add' size={25} color='white'/>}
                      onPress={() => navigation.navigate("UserForm")}
                    />
                  )
                }
              }}
            />
            <Screen
              name='UserForm'
              component={UserForm}
              options={{
                title: "Formulário de Usuário"
              }}
            />
            <Screen
              name='UserDetails'
              component={UserDetails}
              options={{
                title: "Detalhes do Usuário"
              }}
            />
          </Navigator>
      </NavigationContainer>
    </UsersProviders>
  );
}

const screenOptions = {
  headerStyle: {
    backgroundColor: '#f4511e'
  },
  headerTintColor: '#FFFFFF',
  headerTitleStyle: {
    fontWeight: 'bold'
  }
}