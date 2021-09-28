import React, { useState } from 'react';
import styled from '@emotion/styled';
import SingleAvatar from './SingleAvatar';
import OverflowAvatar from './OverflowAvatar';
import { AvatarGroupOptions, IAvatar } from './types';
import TooltipStyles from './TooltipStyles';

const GroupDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    & img:first-of-type {
        margin-left: 3px;
    }
    &:hover img:nth-of-type(n+2) {
        margin-left: 3px;
    }
    &:hover .overflow-hidden {
        opacity: 0;
    }
    &:not(:hover) .hidden {
        opacity: 0;
        width: 0;
        margin-left: 0;
    }
`

interface IAvatarGroup extends AvatarGroupOptions {
    // Array of strings with avatar names or Avatar object for more control
    avatars: (string | IAvatar)[];
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
                                onClick={_ => props.onAvatarClick && props.onAvatarClick(ele, i)}
                            />)
                        }
                        <OverflowAvatar avatar={`+${props.avatars.length - props.max}`} options={props} key="avatar-overflow" hidden={overrideMax} />
                        {!props.hideTooltip && <TooltipStyles tooltipStyle={props.tooltipStyle} />}
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
                                onClick={_ => props.onAvatarClick && props.onAvatarClick(ele, i)}
                            />)
                        }
                        <OverflowAvatar avatar={`+${props.avatars.length - props.max}`} options={props} key="avatar-overflow" />
                        {!props.hideTooltip && <TooltipStyles tooltipStyle={props.tooltipStyle} />}
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
                            onClick={_ => props.onAvatarClick && props.onAvatarClick(ele, i)}
                        />)
                    }
                    {!props.hideTooltip && <TooltipStyles tooltipStyle={props.tooltipStyle} />}
                </GroupDiv>
            );
        }
    }
}
