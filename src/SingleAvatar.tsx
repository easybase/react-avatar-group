import React from 'react';
import styled from '@emotion/styled';
import { IAvatar, AvatarGroupOptions } from './types';
import { colorFromName, cleanSearchParams, boxShadows, ANIMATION_EASING, BASE_AVATAR_STYLE } from './utils';
import Tippy from '@tippyjs/react';

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
    onClick?: React.MouseEventHandler<HTMLImageElement>;
}

export default function SingleAvatar({ avatar, options, hidden, onClick }: ISingleAvatar) {
    const size = options.size || 25;

    if (typeof avatar === "string") {
        const params = new URLSearchParams({
            size: `${size * 2}`,
            name: avatar,
            "font-size": `${options.fontSize || 0.66}`,
            color: options.fontColor || "FFFFFF",
            background: options.backgroundColor || colorFromName(avatar, options.randomBackgroundColors),
            bold: options.bold ? 'true' : '',
            uppercase: options.uppercase ? '' : 'false',
            length: options.initialCharacters ? `${options.initialCharacters}` : '',
            rounded: options.square ? 'false ' : ''
        });

        cleanSearchParams(params);

        return (
            <Tippy content={avatar} arrow={options.tooltipArrow} disabled={options.hideTooltip}>
                <Img
                    draggable="false"
                    alt={`ui-avatar-${avatar}`}
                    src={`https://ui-avatars.com/api/?${params.toString()}`}
                    size={size}
                    square={!!options.square}
                    shadow={options.shadow}
                    style={options.avatarStyle}
                    className={hidden ? "hidden" : ""}
                    onClick={onClick}
                />
            </Tippy>
        )
    } else {
        const params = new URLSearchParams({
            size: `${size * 2}`,
            name: avatar.avatar,
            "font-size": `${avatar.fontSize || options.fontSize || 0.66}`,
            color: avatar.fontColor || options.fontColor || "FFFFFF",
            background: avatar.backgroundColor || options.backgroundColor || colorFromName(avatar.avatar, options.randomBackgroundColors),
            bold: options.bold ? 'true' : '',
            uppercase: options.uppercase ? '' : 'false',
            length: options.initialCharacters ? `${options.initialCharacters}` : '',
            rounded: options.square ? 'false ' : ''
        });

        cleanSearchParams(params);

        return (
            <Tippy content={avatar.tooltip || avatar.avatar} arrow={options.tooltipArrow} disabled={options.hideTooltip}>
                <Img
                    draggable="false"
                    alt={`ui-avatar-${avatar.avatar}`}
                    src={`https://ui-avatars.com/api/?${params.toString()}`}
                    size={size}
                    square={!!options.square}
                    shadow={options.shadow}
                    style={avatar.style || options.avatarStyle}
                    className={hidden ? "hidden" : ""}
                    onClick={onClick}
                />
            </Tippy>
        )
    }
}
