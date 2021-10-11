import React, { useContext } from 'react';
import { Alert, View } from 'react-native';
import { Button, Icon, ListItem } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';

import UsersContext from '../../context/UsersContext';

export function UserList({ navigation }){

    const { state, dispatch } = useContext(UsersContext)

    function deleteUser(user) {
        Alert.alert('Excluir Usuário', 'Deseja excluir o usuário ?', [
            {
                text: 'Sim',
                onPress() {
                    dispatch({
                        type: 'deleteUser',
                        payload: user
                    })
                }
            },
            {
                text: 'Não'
            }
        ])
    }


    function getUserItem ({ item: user }) {
        return (
            <ListItem.Swipeable
                key={user.id}
                bottomDivider
                leftContent={
                    <Button
                        onPress={() => deleteUser(user)}
                        type='clear'
                        icon={<Icon name='delete' size={25} color='white'/>}
                        buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
                    />
                }
                rightContent={
                    <Button
                        onPress={() => navigation.navigate('UserForm', user)}
                        type='clear'
                        icon={<Icon name='edit' size={25} color='white'/>}
                        buttonStyle={{ minHeight: '100%', backgroundColor: '#f4511e' }}
                    />
                }
                onPress={() => {navigation.navigate('UserDetails'), user}}
            >
                <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.cargo}{'\n'}{user.phone}</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem.Swipeable>
        )
    }

    return (
        <View>
            <FlatList
                data={state.users}
                keyExtractor={(item) => item.id.toString()}
                renderItem={getUserItem}
            />
        </View>
    );
}