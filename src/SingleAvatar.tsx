import React from 'react';
import styled from '@emotion/styled';
import { IAvatar, AvatarGroupOptions } from './types';
import { colorFromName, cleanSearchParams, boxShadows, ANIMATION_EASING, BASE_AVATAR_STYLE } from './utils';

const Img = styled.img<AvatarGroupOptions & { isOverflowAvatar?: boolean }>`
    height: ${props => props.size}px;
    width: ${props => props.size}px;
    transition: margin-left ${ANIMATION_EASING}, opacity ${ANIMATION_EASING}, width ${ANIMATION_EASING};
    border-radius: ${props => props.square ? '0px' : '50%'};
    box-shadow: ${props => props.shadow ? boxShadows[props.shadow] : 'none'};
    ${BASE_AVATAR_STYLE}
`;

interface ISingleAvatar {
    avatar: string | IAvatar;
    options: AvatarGroupOptions;
    hidden?: boolean;
}

export default function SingleAvatar({ avatar, options, hidden }: ISingleAvatar) {
    const size = options.size || 25;

    if (typeof avatar === "string") {
        let fontSize = options.fontSize || 0.66;

        const params = new URLSearchParams({
            size: `${size * 2}`,
            name: avatar,
            "font-size": `${fontSize}`,
            color: options.fontColor || "FFFFFF",
            background: options.backgroundColor || colorFromName(avatar).slice(1),
            bold: options.bold ? 'true' : '',
            uppercase: options.uppercase ? '' : 'false',
            length: options.initialCharacters ? `${options.initialCharacters}` : '',
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
                shadow={options.shadow}
                style={options.avatarStyle}
                className={hidden ? "hidden" : ""}
            />
        )
    } else {
        return <></>
    }
}
