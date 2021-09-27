export interface IAvatar {
    // Hex color for the image background, without the hash (#)
    backgroundColor?: string;
    // Hex color for the font, without the hash (#)
    fontColor?: string;
    avatar: string;
    style?: React.CSSProperties;
}

export interface BaseAvatarGroup {
    onAvatarClick?(avatar: string, index: number): any;
    max?: number;
    // If `max` is provided and displayAllOnHover is true, even the overflowing avatars will be shown when the mouse hovers over the group element
    displayAllOnHover?: boolean;
    // Should the avatar be square instead of rounded
    square?: boolean;
    // Avatar image size in pixels. Between: 16 and 512
    size?: number;
    // Array of Hex colors to choose from as background colors, without the hash (#). This will be overridden by `backgroundColor`
    randomBackgroundColors?: string[];
    // Shadow elevation as an integer from 1 to 5
    shadow?: number;
    style?: React.CSSProperties;
    // Styles applied to all avatars
    avatarStyle?: React.CSSProperties;
}

export interface IImageAvatarGroup extends BaseAvatarGroup {
    // Array of urls or Avatar object for more control
    avatars: string[] | IAvatar[];
}

export interface AvatarGroupOptions extends BaseAvatarGroup {
    // Font size in percentage of size. Between 0.1 and 1
    fontSize?: number;
    // Decide if the API should uppercase the name/initials
    uppercase?: boolean;
    // Boolean specifying if the returned letters should use a bold font
    bold?: boolean;
    // Length of the generated initials
    initialCharacters?: number;
    // Hex color for the image background, without the hash (#). Overrides randomBackgroundColors
    backgroundColor?: string;
    // Hex color for the font, without the hash (#)
    fontColor?: string;
}
