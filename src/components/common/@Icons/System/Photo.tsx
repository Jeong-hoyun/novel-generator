import { Icon, IconProps } from '@chakra-ui/react';

const PhotoIcon = ({ ...props }: IconProps) => {
  return (
    <Icon viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M19 5.5H5C3.61929 5.5 2.5 6.61929 2.5 8V17C2.5 18.3807 3.61929 19.5 5 19.5H19C20.3807 19.5 21.5 18.3807 21.5 17V8C21.5 6.61929 20.3807 5.5 19 5.5Z"
        stroke="currentColor"
      />
      <path
        d="M17.435 12.24C18.6771 12.24 19.684 11.2331 19.684 9.99099C19.684 8.7489 18.6771 7.74199 17.435 7.74199C16.1929 7.74199 15.186 8.7489 15.186 9.99099C15.186 11.2331 16.1929 12.24 17.435 12.24Z"
        fill="currentColor"
      />
      <path
        d="M14.313 14.338L13.498 15.749C13.4497 15.8327 13.3801 15.9022 13.2964 15.9505C13.2127 15.9988 13.1177 16.0242 13.0211 16.0242C12.9244 16.0242 12.8294 15.9988 12.7457 15.9505C12.6619 15.9022 12.5924 15.8327 12.544 15.749L9.95502 11.265C9.90677 11.1813 9.83737 11.1118 9.75372 11.0634C9.67007 11.0151 9.57512 10.9897 9.47852 10.9897C9.38191 10.9897 9.28702 11.0151 9.20337 11.0634C9.11972 11.1118 9.05026 11.1813 9.00201 11.265L4.71002 18.7C4.66147 18.7837 4.63584 18.8787 4.63574 18.9754C4.63565 19.0722 4.66109 19.1673 4.70947 19.251C4.75786 19.3348 4.82747 19.4044 4.91132 19.4526C4.99516 19.5009 5.09026 19.5262 5.18701 19.526H17.308C17.4048 19.5262 17.4999 19.5009 17.5837 19.4526C17.6676 19.4044 17.7372 19.3348 17.7856 19.251C17.834 19.1673 17.8594 19.0722 17.8593 18.9754C17.8592 18.8787 17.8336 18.7837 17.785 18.7L15.267 14.338C15.2188 14.254 15.1494 14.1843 15.0656 14.1358C14.9819 14.0873 14.8868 14.0618 14.79 14.0618C14.6933 14.0618 14.5982 14.0873 14.5145 14.1358C14.4307 14.1843 14.3612 14.254 14.313 14.338Z"
        fill="currentColor"
      />
    </Icon>
  );
};

export default PhotoIcon;
