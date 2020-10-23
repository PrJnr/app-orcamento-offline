import styled from 'styled-components/native';
// import Input from '../../components/Input';
// import Button from '../../components/Button';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    background-color: #18b5;
    flex: 1;
    align-items: center;
`;

export const Avatar = styled.Image`
    margin-top: 20px;
    width: 70px;
    height: 70px;
    border-radius: 35px;
    background-color: #fff;

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

export const SubmitButton = styled(RectButton)`
    height: 46px;
    background: #3b9edd;
    border-radius: 4px;
    align-items: center;
    justify-content: center;
`;

export const Text = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 16px;
`;
