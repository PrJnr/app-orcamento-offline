/* eslint-disable consistent-return */
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
import ErrorAwesomeAlert from 'react-native-awesome-alerts';

import {
    Container,
    Form,
    FormInput,
    // SubmitButton,
    Text,
    // TextButton,
    FormInputServico,
    Separador,
    TextTitle,
    ButtonTeste,
} from './styles';

class AddOrcamento extends Component {
    state = {
        nome: '',
        servico: '',
        valor: '',
        telefone: '',
    };

    handleAddOrcamento() {
        const { navigation, dispatch } = this.props;
        const { nome, servico, valor, telefone } = this.state;

        if (nome || servico || valor || telefone === '') {
            return alert('Preencha todos os campos');
        }

        const ID = uuidv1();

        const newOrcamento = {
            id: ID,
            nome,
            servico,
            valor,
            telefone,
            // createAt: new Date(),
        };

        dispatch({
            type: 'ADD_ORCAMENTO',
            newOrcamento,
        });
        this.setState({ nome: '', servico: '', valor: '', telefone: '' });

        navigation.navigate('Orçamentos');
    }

    render() {
        const { nome, servico, valor, telefone } = this.state;
        return (
            <Container>
                <TextTitle>NOVO ORÇAMENTO</TextTitle>
                <Form>
                    <Text>INFORMAÇÕES DO CLIENTE:</Text>
                    <FormInput
                        autoCorrect={false}
                        autoCapitalize="none"
                        placeholder="Nome do Cliente"
                        returnKeyType="done"
                        value={nome}
                        onChangeText={(text) => this.setState({ nome: text })}
                    />
                    <FormInput
                        autoCorrect={false}
                        autoCapitalize="none"
                        placeholder="Telefone"
                        returnKeyType="done"
                        keyboardType="number-pad"
                        value={telefone}
                        onChangeText={(text) =>
                            this.setState({ telefone: text })
                        }
                    />

                    <Separador />

                    <Text>SERVIÇOS:</Text>

                    <FormInputServico
                        icon="business"
                        autoCorrect={false}
                        autoCapitalize="none"
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
                        // onSubmitEditing={() => this.handleAddOrcamento()}
                        onChangeText={(text) => this.setState({ valor: text })}
                    />
                    <Separador />

                    <ButtonTeste
                        title="SALVAR ORÇAMENTO"
                        onPress={() => this.handleAddOrcamento()}
                    />
                </Form>
            </Container>
        );
    }
}

export default connect()(AddOrcamento);
