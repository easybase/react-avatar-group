const randomAvatarColor = ["f44336", "e91e63", "9c27b0", "673ab7", "3f51b5", "2196f3", "009688", "ffc107", "ff9800", "ff5722", "795548"];

export function colorFromName(name: string, avatarColors = randomAvatarColor) {
    let hash = 0
    let len = name.length;
    for (let i = 0; i < len; i++) {
        hash = ((hash << 5) - hash) + name.charCodeAt(i);
        hash |= 0;
    }
    return avatarColors[Math.abs(hash) % avatarColors.length];
}

export function cleanSearchParams(params: URLSearchParams) {
    Array.from(params.entries()).forEach(([key, value]) => {
        if (value === '') params.delete(key);
    });
}

// Based on @mui/material/Paper
export const boxShadows: Record<number, string> = {
    1: '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
    2: '0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)',
    3: '0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)',
    4: '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
    5: '0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)'
}

export const ANIMATION_EASING = ".2s ease-in-out";

export const BASE_AVATAR_STYLE = `
object-fit: cover;
opacity: 1;
user-select: none;
user-drag: none;
display: inline-block;
margin-left: -10px;
position: relative;
`
