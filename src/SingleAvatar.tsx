import React from 'react';
import styled from '@emotion/styled'

const randomAvatarColor = ["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#009688", "#ffc107", "#ff9800", "#ff5722", "#795548"];

function colorFromName(name: string) {
    let hash = 0
    let len = name.length;
    for (let i = 0; i < len; i++) {
        hash = ((hash << 5) - hash) + name.charCodeAt(i);
        hash |= 0;
    }
    return randomAvatarColor[Math.abs(hash) % randomAvatarColor.length];
}

const Img = styled.img`
    height: 25px;
    width: 25px;
    position: relative;
    transition: .2s ease;
    margin-left: -10px;
    border-radius: 50%;
    user-select: none;
    user-drag: none;
`;


interface IPersonAvatar {
    name: string;
    [x: string]: any;
}

export default function PersonAvatar(props: IPersonAvatar) {
    return (
        <Img 
            draggable="false"
            alt={`ui-avatar-${props.name.charAt(0).toUpperCase()}`}
            src={`https://ui-avatars.com/api/?name=${props.name.charAt(0).toUpperCase()}&size=50&font-size=0.66&color=FFFFFF&background=${colorFromName(props.name).slice(1)}`}
            {...props}
        />
    )
}
