/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/static-property-placement */
/* eslint-disable no-undef */
/* eslint-disable react/sort-comp */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-alert */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';

import { connect } from 'react-redux';

import uuidv1 from 'react-native-uuid';

import {
    Container,
    Form,
    FormInput,
    SubmitButton,
    Text,
    FormInputServico,
} from './styles';

class AddOrcamento extends Component {
    state = {
        nome: '',
        servico: '',
        valor: '',
    };

    handleTeste = () => {
        console.log('OK');
    };

    handleAddOrcamento = () => {
        const { navigation, dispatch } = this.props;
        const { nome, servico, valor } = this.state;

        const ID = uuidv1();

        const newOrcamento = {
            id: ID,
            nome,
            servico,
            valor,
            // createAt: new Date(),
        };

        dispatch({
            type: 'ADD_ORCAMENTO',
            newOrcamento,
        });

        navigation.navigate('Orçamentos');
    };

    render() {
        const { nome, servico, valor } = this.state;
        return (
            <Container>
                <Form>
                    <FormInput
                        icon="person-outline"
                        autoCorrect={false}
                        autoCapitalize="none"
                        placeholder="Nome do Cliente"
                        returnKeyType="done"
                        value={nome}
                        onChangeText={(text) => this.setState({ nome: text })}
                    />
                    <FormInputServico
                        icon="business"
                        autoCorrect={false}
                        autoCapitalize="none"
                        multiline="true"
                        placeholder="Descrição do Serviço"
                        value={servico}
                        onChangeText={(text) =>
                            this.setState({ servico: text })
                        }
                    />

                    <FormInput
                        icon="local-phone"
                        placeholder="Valor R$:"
                        value={valor}
                        keyboardType="numeric"
                        onSubmitEditing={() => this.handleAddOrcamento()}
                        onChangeText={(text) => this.setState({ valor: text })}
                    />
                    <SubmitButton onPress={this.handleTeste}>
                        <Text>Salvar Orçamento</Text>
                    </SubmitButton>
                </Form>
                <SubmitButton
                    onPress={() => this.handleAddOrcamento(this.state)}
                >
                    <Text>Salvar Orçamento</Text>
                </SubmitButton>
            </Container>
        );
    }
}

export default connect()(AddOrcamento);
