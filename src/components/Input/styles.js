import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;

    align-self: stretch;
`;

export const TInput = styled.TextInput.attrs({
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
