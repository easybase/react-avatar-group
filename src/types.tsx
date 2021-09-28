export interface IAvatar {
    // Hex color for the image background, without the hash (#)
    backgroundColor?: string;
    // Hex color for the font, without the hash (#)
    fontColor?: string;
    avatar: string;
    style?: React.CSSProperties;
    // Custom text to put in the tooltip, rather than the `avatar` string
    tooltip?: string;
    // Font size in percentage of size. Between 0.1 and 1
    fontSize?: number;
}

export interface BaseAvatarGroup {
    // Click handler for individual avatars
    onAvatarClick?(avatar: string | IAvatar, index: number): any;
    // Limit the number of avatars that can be shown at once. If the avatar array length is greater than this number, an overflow avatar will be shown detailing how many avatars are hidden.
    max?: number;
    // If `max` is provided and displayAllOnHover is true, even the overflowing avatars will be shown when the mouse hovers over the group element
    displayAllOnHover?: boolean;
    // Should the avatars be square instead of rounded
    square?: boolean;
    // Avatar image size in pixels. Between: 16 and 512
    size?: number;
    // Array of Hex colors to choose from as background colors, without the hash (#). This will be overridden by `backgroundColor`
    randomBackgroundColors?: string[];
    // Box-shadow elevation as an integer from 1 to 5
    shadow?: number;
    style?: React.CSSProperties;
    // Styles applied to all individual avatar components
    avatarStyle?: React.CSSProperties;
    // Don't display a tooltip when the mouse hovers over an individual avatar
    hideTooltip?: boolean;
    // Styles applied to all tooltips
    tooltipStyle?: React.CSSProperties;
    // Display a small arrow on the tooltip
    tooltipArrow?: boolean;
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
    // Hex color for the image background, without the hash (#). Overrides `randomBackgroundColors`
    backgroundColor?: string;
    // Hex color for the font, without the hash (#)
    fontColor?: string;
}
