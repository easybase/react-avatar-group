import React from 'react';
import styled from '@emotion/styled';
import SingleAvatar from './SingleAvatar';

const GroupDiv = styled.div`
    display: flex;
    justify-content: center;
    flex-grow: 1;
    flex-shrink: 1;
    overflow: hidden;
    padding-left: 15px;
    &:hover {
        overflow: visible;
    }
    &:hover img:nth-child(n+2) {
        margin-left: 3px;
    }
`

export default function AvatarGroup() {
    return (
        <GroupDiv>
        </GroupDiv>
    );
}
