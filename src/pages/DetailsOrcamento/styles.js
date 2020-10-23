import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    flex: 1;
    background-color: #18b5;
`;
export const OrcamentoContainer = styled.View`
    align-items: center;
    margin: 10px 20px 30px;
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 10px;
    height: 100px;
`;

export const Cliente = styled.Text`
    font-size: 14px;
    color: #333;
    font-weight: bold;
    margin-top: 0px;
    text-align: center;
`;
export const Servico = styled.Text`
    font-size: 14px;
    line-height: 18px;
    color: #999;
    margin-top: 5px;
    text-align: center;
`;
export const Id = styled.Text``;
export const Valor = styled.Text`
    font-size: 14px;
    color: #333;
    font-weight: bold;
    margin-top: 4px;
    text-align: center;
    margin-bottom: 6px;
`;

export const ExcluirButton = styled(RectButton)`
    margin-top: 0px;
    margin: 10px 20px 30px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.6);
    justify-content: center;
    align-items: center;
    height: 50px;
`;

export const Text = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: #999;
    text-transform: uppercase;
`;
