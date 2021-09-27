import React, { useState } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import SingleAvatar from './SingleAvatar';
import { AvatarGroupOptions, IAvatar } from './types';
import { ANIMATION_EASING } from './utils';

const opacityAnimationReverse = keyframes`
    0% {
        display: none;
        opacity: 0;
    }
    100% {
        display: inline-block;
        opacity: 1;
    }
`;

const GroupDiv = styled.div`
    display: block;
    &:hover img:nth-of-type(n+2) {
        margin-left: 3px;
    }
    &:hover .overflow-hidden {
        opacity: 0;
    }
    &:hover .hidden {
        // animation: ${opacityAnimationReverse} ${ANIMATION_EASING};
        display: inline-block;
        opacity: 1;
    }
    & .hidden {
        display: none;
        opacity: 0;
    }
`

// export function ImageAvatarGroup({ avatars, onAvatarClick, max }: IImageAvatarGroup) {
//     if (avatars.length === 0) {
//         return <></>;
//     } else if (avatars.length === 1) {
//         return <SingleAvatar  />;
//     } else {
//         return (
//             <GroupDiv>
//                 {avatars.map(ele => <SingleAvatar  />)}
//             </GroupDiv>
//         );
//     }
// }
interface IAvatarGroup extends AvatarGroupOptions {
    // Array of strings with avatar names or Avatar object for more control
    avatars: string[] | IAvatar[];
}

export default function AvatarGroup(props: IAvatarGroup) {
    const [overrideMax, setOverrideMax] = useState<boolean>(false);

    if (props.avatars.length === 0) {
        return <></>;
    } else {
        if (props.max && props.avatars.length > props.max) {
            if (props.displayAllOnHover) {
                return (
                    <GroupDiv style={props.style} onMouseEnter={_ => setOverrideMax(true)} onMouseLeave={_ => setOverrideMax(false)}>
                        {props.avatars.map((ele, i) =>
                            <SingleAvatar
                                avatar={ele}
                                options={props}
                                hidden={i >= (props.max as number)}
                                key={"avatar-max-" + i}
                            />)
                        }
                        <SingleAvatar avatar={`+${props.avatars.length - props.max}`} options={props} isOverflowAvatar key="avatar-overflow" hidden={overrideMax} />
                    </GroupDiv>
                );
            } else {
                return (
                    <GroupDiv style={props.style}>
                        {props.avatars.slice(0, props.max).map((ele, i) =>
                            <SingleAvatar
                                avatar={ele}
                                options={props}
                                key={"avatar-max-" + i}
                            />)
                        }
                        <SingleAvatar avatar={`+${props.avatars.length - props.max}`} options={props} isOverflowAvatar key="avatar-overflow" />
                    </GroupDiv>
                );
            }
        } else {
            return (
                <GroupDiv style={props.style}>
                    {props.avatars.map((ele, i) =>
                        <SingleAvatar
                            avatar={ele}
                            options={props}
                            key={"avatar-nomax-" + i}
                        />)
                    }
                </GroupDiv>
            );
        }
    }
}
