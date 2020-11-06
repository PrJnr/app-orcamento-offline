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
    ButtonCancelar,
    NumOrcamento,
    TextNumOrcamento,
    InfOrc,
    Data,
    TextData,
    InfData,
    ContainerListas,
    ListaServico,
    Servico,
    Valor,
    ListaValor,
    ContainerValorTotal,
    ValorTotal,
} from './styles';

class AddOrcamento extends Component {
    state = {
        nome: '',
        listaServicos: [],
        listaValores: [],
        valorTotal: '',

        servico: '',
        valor: '',
        telefone: '',
        numOrc:
            new Date().getDate() +
            new Date().getMinutes() +
            new Date().getSeconds(),
        dia: new Date().getDate(),
        mes: new Date().getMonth() + 1,
        ano: new Date().getFullYear(),
    };

    handleAddOrcamento() {
        const { navigation, dispatch } = this.props;
        const { nome, servico, valor, telefone, dia, mes, ano } = this.state;

        /*   if (nome || servico || valor || telefone === '') {
            return alert('Preencha todos os campos');
        } */
        const ID = uuidv1();

        const newOrcamento = {
            id: ID,
            nome,
            servico,
            valor,
            listaServicos,
            listaValores,
            telefone,
            dia,
            mes,
            ano,
            // createAt: new Date(),
        };

        dispatch({
            type: 'ADD_ORCAMENTO',
            newOrcamento,
        });
        this.setState({
            nome: '',
            servico: '',
            valor: '',
            telefone: '',
            listaServicos: [],
            listaValores: [],
        });

        navigation.navigate('Orçamentos');
    }

    handleNewServico() {
        const { servico, listaServicos, valor, listaValores } = this.state;
        const valores = listaValores.reduce(
            (total, numero) => total + parseInt(numero, 10),
            0,
        );

        this.setState({
            listaServicos: [...listaServicos, servico],
            listaValores: [...listaValores, valor],
        });

        this.setState({ valorTotal: valores });

        this.setState({ servico: '', valor: '' });
    }

    render() {
        const {
            nome,
            servico,
            valor,
            valorTotal,
            telefone,
            numOrc,
            dia,
            mes,
            ano,
        } = this.state;

        return (
            <Container>
                <TextTitle>NOVO ORÇAMENTO</TextTitle>

                <Form>
                    <InfOrc>
                        <TextNumOrcamento>Num. Orçamento: </TextNumOrcamento>
                        <NumOrcamento>{numOrc}</NumOrcamento>
                    </InfOrc>
                    <InfData>
                        <TextData>Data: </TextData>
                        <Data>{`${dia}/${mes}/${ano}`}</Data>
                    </InfData>
                    <Separador />
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

                    <Text>CADASTRAR SERVIÇO</Text>

                    <FormInputServico
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

                    <ButtonTeste
                        title="Adicionar Serviço"
                        onPress={() => this.handleNewServico()}
                    />

                    <Separador />
                    <Text>SERVIÇOS: </Text>
                    <ContainerListas>
                        <ListaServico>
                            {this.state.listaServicos.map((s) => (
                                <Servico key={s}>{s}</Servico>
                            ))}
                        </ListaServico>
                        <ListaValor>
                            {this.state.listaValores.map((s) => (
                                <Valor key={s}>{`R$: ${s}`}</Valor>
                            ))}
                        </ListaValor>
                    </ContainerListas>
                    <Separador />
                    <ContainerValorTotal>
                        <Text>Valor Total: </Text>
                        <ValorTotal>{valorTotal} </ValorTotal>
                    </ContainerValorTotal>

                    <ButtonTeste
                        title="SALVAR ORÇAMENTO"
                        onPress={() => this.handleAddOrcamento()}
                    />
                    <ButtonCancelar
                        title="CANCELAR"
                        onPress={() => this.handleAddOrcamento()}
                    />
                </Form>

                {/* <ButtonTeste
                    title="TESTE"
                    onPress={() => console.log(this.state.listaServicos)}
                /> */}
            </Container>
        );
    }
}

export default connect()(AddOrcamento);
