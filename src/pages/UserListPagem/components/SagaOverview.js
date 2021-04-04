import { Box } from '@material-ui/core';
import React from 'react';

import UserCard from './UserCard/UserCard';


const SagaOverview = ({ users, isLoading, errors }) => {
    return (
        <Box>
            {users.map((user) => {
                return (
                    <Box >
                        <UserCard  name={user.login} avatar={user.avatar_url}/>
                    </Box>
                )
            })}
        </Box>
    );
};

export default SagaOverview;