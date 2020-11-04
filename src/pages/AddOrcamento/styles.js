import styled from 'styled-components/native';
// import Input from '../../components/Input';
// import Button from '../../components/Button';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    background-color: #18b5;
    flex: 1;
    align-items: center;
`;

export const Form = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: { padding: 30 },
})`
    align-self: stretch;
`;
export const FormInput = styled.TextInput.attrs({
    placeholderTextColor: 'rgba(255,255,255,0.8)',
})`
    margin-bottom: 10px;
    flex: 1;
    height: 40px;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding: 0 15px;
    color: #fff;
`;

export const FormInputServico = styled.TextInput.attrs({
    placeholderTextColor: 'rgba(255,255,255,0.8)',
})`
    margin-bottom: 10px;
    flex: 1;
    height: 80px;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding: 0 15px;
    color: #fff;
`;

export const SubmitButton = styled(RectButton)`
    height: 46px;
    background: #3b9edd;
    border-radius: 4px;
    align-items: center;
    justify-content: center;
`;

export const ButtonTeste = styled.Button`
    height: 50px;
    background: #3b9edd;
    border-radius: 4px;
    align-items: center;
    justify-content: center;
`;

export const Text = styled.Text`
    color: #3b9edd;
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 5px;
`;
export const TextButton = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 16px;
`;
export const TextTitle = styled.Text`
    color: #5a798c;
    font-weight: bold;
    font-size: 20px;
    margin-top: 10px;
`;
export const NumOrcamento = styled.Text`
    color: #5a798c;
    font-weight: bold;
    font-size: 20px;
`;
export const TextNumOrcamento = styled.Text`
    color: #5a798c;
    font-weight: normal;
    font-size: 20px;
`;
export const Data = styled.Text`
    color: #5a798c;
    font-weight: bold;
    font-size: 20px;
`;
export const TextData = styled.Text`
    color: #5a798c;
    font-weight: normal;
    font-size: 20px;
`;

export const InfData = styled.View`
    flex: 1;
    flex-direction: row;
    margin-bottom: 10px;
`;
export const InfOrc = styled.View`
    flex: 1;
    flex-direction: row;
    margin-bottom: 10px;
`;
export const Separador = styled.View`
    height: 1px;
    background-color: rgba(0, 0, 0, 0.1);
    margin-bottom: 25px;
`;
