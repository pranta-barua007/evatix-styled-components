import styled from 'styled-components';

const appearance = {
   primary: 'E8F6EF',
   secondary: '1768AC',
   warning: 'FB9300',
   danger: 'F54748' 
};

const textColors = {
   primary: 'FFF5DA',
   secondary: '0A1931',
   warning: 'DA0037',
   danger: 'FFA900',
   disabled: '77ACF1'
};

const ButtonWrapper = styled.button`
    width: auto;
    height: 2rem;
    padding: 4px 10px;
    background-color: #${(props) => appearance[props.appearance]};
    border: 1px transparent;
    border-radius: 4px;
    color: #${(props) => textColors[props.textColor]};
    cursor: pointer;
    margin: 0 4px;
`;

export const Button = ({ children, ...otherProps }) => {
    return (
        <ButtonWrapper {...otherProps}>
            {children}
        </ButtonWrapper>
    );
};