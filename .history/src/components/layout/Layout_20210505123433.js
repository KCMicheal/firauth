import React from 'react';
import { Grid } from '@chakra-ui/react';

import {ColorModeSwitcher} from './ColorModeSwitcher'

const Layout =({ children }) => {
    return (
        <Grid min>
            <ColorModeSwitcher position='absolute' top={3} right={3}/>
            {children}
        </Grid>
    )
}