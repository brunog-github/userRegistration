import React, { useContext, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import UsersContext from '../../context/UsersContext';

export function UserForm({ route, navigation }){
    const [user, setUser] = useState(route.params ? route.params : {})
    const { dispatch } = useContext(UsersContext)

    return (
        <View style={style.form}>
            <Text>Name:</Text>
            <TextInput
                onChangeText={name => setUser({...user, name})}
                placeholder='Informe o nome'
                value={user.name}
                style={style.input}
            />

            <Text>Telefone:</Text>
            <TextInput
                onChangeText={phone => setUser({...user, phone})}
                placeholder='(**) *****-****'
                value={user.phone}
                style={style.input}
                keyboardType='number-pad'
            />

            <Text>Cargo:</Text>
            <TextInput
                onChangeText={cargo => setUser({...user, cargo })}
                placeholder='ex: gerente'
                value={user.cargo}
                style={style.input}
            />
            <Button 
                title='Salvar'
                color='orange'
                accessibilityLabel="Esse botão salva os dados do úsuario"
                onPress={() => {
                    dispatch({
                        type: user.id ? 'updateUser' : 'createUser',
                        payload: user
                    })
                    navigation.goBack()
                }}
            />
        </View>
    );
}

const style = StyleSheet.create({
    form: {
        flex: 1,
        padding: 15,
        backgroundColor:'#ffffff'
    }, 

    input: {
        height: 40,
        borderColor: '#c4c4c4',
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
        borderRadius: 5
    }
})