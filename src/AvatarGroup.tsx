import React from 'react';
import styled from '@emotion/styled';
import SingleAvatar from './SingleAvatar';
import { AvatarGroupOptions, IAvatar } from './types';

const GroupDiv = styled.div`
    display: block;
    padding-left: 15px;
    &:hover img:nth-child(n+2) {
        margin-left: 3px;
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
    if (props.avatars.length === 0) {
        return <></>;
    } else if (props.avatars.length === 1) {
        return <SingleAvatar avatar={props.avatars[0]} options={props} />;
    } else {
        if (props.max && props.avatars.length > props.max) {
            return (
                <GroupDiv>
                    {props.avatars.slice(0, props.max).map(ele => <SingleAvatar avatar={ele} options={props} />)}
                    <SingleAvatar avatar={`+${props.avatars.length - props.max}`} options={props} isOverflowAvatar />
                </GroupDiv>
            );
        } else {
            return (
                <GroupDiv>
                    {props.avatars.map(ele => <SingleAvatar avatar={ele} options={props} />)}
                </GroupDiv>
            );
        }
    }
}
