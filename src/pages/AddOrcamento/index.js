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
    ContainerLinhas,
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
        contador: 0,
        servicos: [],
        valorTotal: '',
        servico: '',
        valor: '',
        telefone: '',
        numOrc: '',

        dia: new Date().getDate(),
        mes: new Date().getMonth() + 1,
        ano: new Date().getFullYear(),
    };

    handleAddOrcamento() {
        const { navigation, dispatch } = this.props;
        const {
            nome,
            telefone,
            dia,
            mes,
            ano,
            servicos,
            valorTotal,
        } = this.state;

        function isEmpty(obj) {
            return Object.keys(obj).length === 0;
        }

        if (isEmpty(servicos)) {
            return alert('Adicione um serviço antes de salvar...');
        }

        if (nome && telefone === '') {
            return alert('Preencha as informações de contato do cliente...');
        }
        const ID = uuidv1();

        const newOrcamento = {
            id: ID,
            nome,
            servicos,
            valorTotal,
            telefone,
            dia,
            mes,
            ano,
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
            servicos: [],
            valorTotal: '',
        });

        navigation.navigate('Orçamentos');
    }

    handleNewServico() {
        const {
            servico,

            valor,

            servicos,
            contador,
        } = this.state;

        function getTotal(total, item) {
            return total + parseInt(item.valor, 10);
        }

        if (servico === '' || valor === '') {
            alert('Preencha todos os campos...');
        } else {
            const contadorID = contador + 1;
            this.setState({ contador: contadorID });

            const soma = servicos
                .reduce(getTotal, parseInt(valor, 10))
                .toFixed(2);

            this.setState({ valorTotal: soma });

            const ServicoGeral = {
                id: contadorID,
                servico,
                valor,
            };

            this.setState({ servicos: [...servicos, ServicoGeral] });

            this.setState({ servico: '', valor: '' });
        }
    }

    handleCancelar() {
        /* const {
            servico,
            nome,
            listaServicos,
            listaValores,
            valor,
            telefone,
        } = this.state; */

        const { navigation } = this.props;

        this.setState({
            servico: '',
            nome: '',
            valorTotal: '',
            listaServicos: [],
            listaValores: [],
            valor: '',
            telefone: '',
        });
        navigation.navigate('Orçamentos');
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
                        <ContainerLinhas>
                            <ListaServico>
                                {this.state.servicos.map((s) => (
                                    <Servico key={s.id}>{s.servico}</Servico>
                                ))}
                            </ListaServico>
                            <ListaValor>
                                {this.state.servicos.map((s) => (
                                    <Valor key={s.id}>{`R$: ${s.valor}`}</Valor>
                                ))}
                            </ListaValor>
                        </ContainerLinhas>
                    </ContainerListas>
                    <Separador />
                    <ContainerValorTotal>
                        <Text>Valor Total: </Text>
                        <ValorTotal>R$ {valorTotal} </ValorTotal>
                    </ContainerValorTotal>

                    <ButtonTeste
                        title="SALVAR ORÇAMENTO"
                        onPress={() => this.handleAddOrcamento()}
                    />
                    <ButtonCancelar
                        title="CANCELAR"
                        onPress={() => this.handleCancelar()}
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
