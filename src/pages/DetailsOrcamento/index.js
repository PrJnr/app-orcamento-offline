/* eslint-disable no-undef */
import React from 'react';
import { connect } from 'react-redux';

import {
    Container,
    OrcamentoContainer,
    Cliente,
    Servico,
    Valor,
    ExcluirButton,
    Text,
} from './styles';

function DetailsOrcamento({ route, dispatch, navigation }) {
    handleDeleteOrcamento = () => {
        const id = route.params;
        dispatch({ type: 'DELETE_ORCAMENTO', id });

        navigation.navigate('Orçamentos');
    };
    const { nome, servico, valor } = route.params;

    return (
        <Container>
            <OrcamentoContainer>
                <Cliente>Cliente: {nome} </Cliente>
                <Servico>Servico: {servico}</Servico>
                <Valor>Valor: {valor} </Valor>
            </OrcamentoContainer>
            <ExcluirButton onPress={() => handleDeleteOrcamento()}>
                <Text>Excluir</Text>
            </ExcluirButton>
        </Container>
    );
}

export default connect()(DetailsOrcamento);
