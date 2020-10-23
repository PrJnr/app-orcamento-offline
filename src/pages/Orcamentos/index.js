/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
/* eslint-disable react/static-property-placement */
/* eslint-disable no-alert */
/* eslint-disable react/state-in-constructor */
import React from 'react';

import { connect } from 'react-redux';

import {
    Container,
    List,
    Orcamento,
    Nome,
    Servico,
    Valor,
    OrcamentoButton,
    ButtonText,
    // Id,
} from './styles';

function Orcamentos({ orc, navigation }) {
    handleNavigate = (item) => {
        navigation.navigate('Detalhes', {
            screen: 'Detalhes',
            id: item.id,
            nome: item.nome,
            servico: item.servico,
            valor: item.valor,
        });
    };
    return (
        <Container>
            <List
                data={orc} // Funcionando
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Orcamento>
                        <OrcamentoButton onPress={() => handleNavigate(item)}>
                            <Nome>Cliente: {item.nome}</Nome>
                            <Servico>Serviço: {item.servico}</Servico>
                            <Valor> Valor: R$ {item.valor}</Valor>
                            <ButtonText>Ver Detalhes</ButtonText>
                        </OrcamentoButton>
                    </Orcamento>
                )}
            />
        </Container>
    );
}

const mapStateToProps = (state) => ({
    orc: state.orcamento,
});

export default connect(mapStateToProps)(Orcamentos);
