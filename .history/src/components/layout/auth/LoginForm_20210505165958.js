import React from 'react';
import {useForm} from 'react-hook-form'
import {
    Heading,
    GridItem,
    Alert,
    AlertIcon,
    FormLabel,
    FormControl,
    Input,
    Button,
} from '@chakra-ui/react';

import {useAuth} from '../../../hooks/useAuth'

const LoginForm = () => {
    const {handleSubmit, register, errors, setError, formState} = useForm()

    const {sendSignInLinkTo}
}
