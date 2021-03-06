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

    const {sendSignInLinkToEmail} = useAuth()

    const onSubmit = (data) => {
        try{
            await sendSignInLinkToEmail(data.email)
        } catch (error) {
            setError('email'), {
                type: 'manual',
                message: error.message
            }
        }
    }

    return (
        <GridItem
                colStart={[1, null, null, 2, null, null]}
                colSpan={[3, null, null, 1, null, null]}
                p={6}>
                    <Heading as="h1" mb={6}>Login</Heading>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FormControl>
                            <FormLabel htmlFor='email'>Email</FormLabel>
                            <Input name="email" placeholder="Email" ref={register()}/>
                            <Button mt={4} colorScheme="'teal" isLoading={formS}>Submit</Button>
                        </FormControl>
                    </form>
                </GridItem>
    )
}
