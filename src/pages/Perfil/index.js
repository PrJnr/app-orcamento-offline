/* eslint-disable no-alert */
/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/state-in-constructor */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

import {
    Container,
    Avatar,
    Form,
    FormInput,
    SubmitButton,
    Text,
} from './styles';

export default class Perfil extends Component {
    state = {
        newNome: '',
        nome: [],
    };

    handleSubmit = () => {
        // eslint-disable-next-line no-undef
        alert(`${this.state.newNome}`);
    };

    render() {
        const { newNome, nome } = this.state;
        return (
            <Container>
                <Avatar
                    source={{
                        uri: `https://api.adorable.io/avatar/70/jnr.png`,
                    }}
                />
                <Form>
                    <FormInput
                        icon="person-outline"
                        autoCorrect={false}
                        autoCapitalize="none"
                        placeholder="Nome Completo"
                        returnKeyType="next"
                        value={newNome}
                        onChangeText={(text) =>
                            this.setState({ newNome: text })
                        }
                    />
                    <FormInput
                        icon="business"
                        autoCorrect={false}
                        autoCapitalize="none"
                        placeholder={this.state.newNome}
                        // value={email}
                        // onChangeText={setEmail}
                    />

                    <FormInput
                        icon="local-phone"
                        placeholder="Seu telefone"
                        // value={oldPassword}
                        // onChangeText={setOldPassword}
                    />
                    <SubmitButton onPress={this.handleSubmit}>
                        <Text>Atualizar Perfil</Text>
                    </SubmitButton>
                </Form>
            </Container>
        );
    }
}
