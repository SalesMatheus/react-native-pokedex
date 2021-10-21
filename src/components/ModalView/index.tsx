import React, { ReactNode } from 'react';
// import {
//     Modal,
//     ModalProps,
//     TouchableWithoutFeedback,
// } from 'react-native';

import {
    Container,
    Header,
    About,
    Divider
} from './styles';

interface Props {
    children: ReactNode;
}

export function ModalView({ children }: Props) {
    return (
        <Container>
            <Header>
                <About>About</About>
                <Divider />
            </Header>
        </Container>
    );
}