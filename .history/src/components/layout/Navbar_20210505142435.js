import React from 'core-js/library/fn/reflect/es7/metadata';
import { GridItem, Box, Flex, Text } from '@chakra-ui/react';
import Link from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth'

const Navbar = () => {
    const {user, logout} = useAuth();

    return (
        <GridItem colStart={1} colSpan={3} p={3}>
            <Flex>
                {user && (
                    <>
                        <Link to='/'>
                            <Text fontSize='md' mr={8}>Dashboard</Text>
                        </Link>
                        <Box as="button" onClick={logout}>
                            <Text fontSize="md" mr={8}>
                                Logout
                            </Text>
                    </Box>
                    </>
                )}
                {}
            </Flex>
        </GridItem>
    )
}