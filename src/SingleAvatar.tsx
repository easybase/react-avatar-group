import React from 'react';
import styled from '@emotion/styled';
import { IAvatar, AvatarGroupOptions } from './types';
import { colorFromName, cleanSearchParams, boxShadows } from './utils';

const Img = styled.img<AvatarGroupOptions & { isOverflowAvatar?: boolean }>`
    height: ${props => props.size}px;
    width: ${props => props.size}px;
    position: relative;
    transition: .2s ease;
    margin-left: -10px;
    border-radius: ${props => props.square ? '0px' : '50%'};
    user-select: none;
    user-drag: none;
    box-shadow: ${props => props.shadow ? boxShadows[props.shadow] : "none"};
`;


interface IPersonAvatar {
    avatar: string | IAvatar;
    options: AvatarGroupOptions;
    isOverflowAvatar?: boolean;
}

export default function PersonAvatar({ avatar, options, isOverflowAvatar }: IPersonAvatar) {
    const size = options.size || 25;
    let fontSize = options.fontSize || 0.66;
    if (isOverflowAvatar) {
        if ((avatar as string).length === 3) {
            if (!options.fontSize || options.fontSize > 0.42) {
                // If the custom font size is less than the minimum of 0.42, don't override it.
                fontSize = 0.42;
            }
        } else if ((avatar as string).length > 3) {
            if (!options.fontSize || options.fontSize > 0.32) {
                // If the custom font size is less than the minimum of 0.32, don't override it.
                fontSize = 0.32;
            }
        }
    }

    if (typeof avatar === "string") {
        const params = new URLSearchParams({
            size: `${size * 2}`,
            name: avatar,
            "font-size": `${fontSize}`,
            color: options.fontColor || "FFFFFF",
            background: options.backgroundColor || colorFromName(avatar).slice(1),
            bold: options.bold ? 'true' : '',
            uppercase: options.uppercase ? '' : 'false',
            length: isOverflowAvatar ? '5' : options.initialCharacters ? `${options.initialCharacters}` : '',
            rounded: options.square ? 'false ' : ''
        });
        
        cleanSearchParams(params);

        return (
            <Img
                draggable="false"
                alt={`ui-avatar-${avatar}`}
                src={`https://ui-avatars.com/api/?${params.toString()}`}
                size={size}
                square={!!options.square}
                isOverflowAvatar={isOverflowAvatar}
                shadow={options.shadow}
            />
        )
    } else {
        return <></>
    }
}
