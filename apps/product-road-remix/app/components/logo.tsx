import { Box } from "@chakra-ui/react";

type LogoProps = {
  fill: string;
};

const Logo = ({ fill }: LogoProps) => {
  const fillColor = fill == "gray.800" ? "#1A202C" : "#ffffff";
  return (
    <Box boxSize="60px">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 228 269"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M77.5495 156.771C77.6241 156.784 77.7002 156.784 77.7761 156.797C77.9281 156.797 78.0788 156.824 78.2281 156.837C78.7534 156.931 79.2654 157.077 79.7494 157.304C80.2334 157.517 80.6881 157.811 81.0961 158.144C81.388 158.384 81.656 158.664 81.896 158.957C82.1854 159.304 82.432 159.691 82.632 160.104C82.8 160.437 82.9333 160.797 83.032 161.157C83.152 161.597 83.22 162.051 83.2347 162.504C83.2533 163.037 83.2 163.571 83.076 164.091C83.0414 164.237 83 164.384 82.9533 164.531C82.9306 164.597 82.904 164.677 82.88 164.744L74.8469 186.81C74.8189 186.89 74.7935 186.957 74.7642 187.023C74.6788 187.237 74.5802 187.45 74.4709 187.65C74.1416 188.25 73.7095 188.783 73.1976 189.237C72.8562 189.543 72.4803 189.797 72.079 190.023C71.7443 190.197 71.3936 190.343 71.0309 190.463C70.5963 190.597 70.147 190.677 69.6923 190.717C69.2376 190.743 68.7803 190.73 68.331 190.65C67.8057 190.57 67.2924 190.41 66.8084 190.197C66.2551 189.943 65.7417 189.61 65.2897 189.21C64.7258 188.69 64.2604 188.077 63.9258 187.397C63.5925 186.717 63.3912 185.97 63.3352 185.21C63.2925 184.61 63.3418 183.997 63.4818 183.41C63.5178 183.263 63.5578 183.117 63.6045 182.97C63.6285 182.89 63.6538 182.823 63.6792 182.757L71.7123 160.677C71.7843 160.491 71.8002 160.437 71.8842 160.264C72.0722 159.837 72.3083 159.451 72.5856 159.091C72.9562 158.611 73.4002 158.184 73.8975 157.837C74.4589 157.451 75.0869 157.157 75.7455 156.971C76.1122 156.877 76.4881 156.811 76.8668 156.784C77.0681 156.771 77.1188 156.771 77.3215 156.771H77.5495V156.771ZM113.243 60.0399C113.549 60.1065 113.858 60.1332 114.157 60.2266C114.757 60.3999 115.326 60.6665 115.842 61.0131C116.359 61.3598 116.818 61.7864 117.202 62.2798C117.715 62.9331 117.76 63.1598 118.103 63.9064L137.26 116.532C137.343 116.838 137.449 117.132 137.509 117.438C137.628 118.052 137.649 118.678 137.573 119.292C137.497 119.918 137.325 120.518 137.061 121.078C136.797 121.652 136.447 122.172 136.021 122.625C135.596 123.078 135.103 123.465 134.556 123.772C134.011 124.065 133.421 124.278 132.809 124.398C132.197 124.518 131.571 124.545 130.952 124.465C130.332 124.398 129.73 124.225 129.164 123.958C128.599 123.692 128.079 123.345 127.623 122.918C127.167 122.492 126.78 121.998 126.479 121.452C126.328 121.185 126.22 120.878 126.092 120.598L106.935 67.973C106.714 67.173 106.61 66.973 106.581 66.1463C106.559 65.5197 106.635 64.9064 106.807 64.2931C106.893 63.9998 107.002 63.7065 107.134 63.4265C107.397 62.8665 107.747 62.3464 108.173 61.8798C108.598 61.4265 109.093 61.0399 109.638 60.7332C110.183 60.4399 110.773 60.2265 111.386 60.1065C111.69 60.0399 112.003 60.0399 112.311 59.9999L113.243 60.0399"
          fill="#4299E1"
        />
        <path
          fillRule="evenodd"
          d="M181.254 190.77H155.786C155.705 190.77 155.624 190.77 155.541 190.757C155.377 190.757 155.214 190.744 155.052 190.717C154.32 190.637 153.606 190.397 152.958 190.05C152.454 189.784 151.99 189.437 151.585 189.024C151.296 188.73 151.036 188.424 150.812 188.077C150.544 187.664 150.326 187.224 150.166 186.757C149.9 185.984 149.797 185.144 149.865 184.33C149.912 183.77 150.042 183.197 150.25 182.664C150.518 181.984 150.916 181.344 151.414 180.797C151.914 180.264 152.514 179.811 153.177 179.491C153.765 179.197 154.401 179.011 155.052 178.931C155.214 178.904 155.377 178.891 155.541 178.891C155.624 178.877 155.705 178.877 155.786 178.877H181.254C181.336 178.877 181.418 178.891 181.499 178.891C181.582 178.891 181.663 178.891 181.744 178.904C181.908 178.917 182.071 178.931 182.232 178.971C182.879 179.077 183.506 179.291 184.083 179.597C184.731 179.944 185.312 180.424 185.788 180.984C186.265 181.544 186.635 182.197 186.875 182.891C187.06 183.437 187.168 184.01 187.191 184.584C187.225 185.397 187.088 186.224 186.789 186.984C186.492 187.744 186.035 188.45 185.456 189.024C185.051 189.437 184.587 189.784 184.083 190.05C183.434 190.397 182.72 190.637 181.99 190.717C181.827 190.744 181.663 190.757 181.499 190.757C181.418 190.77 181.336 190.77 181.254 190.77ZM190.199 168.691H147.753C147.444 168.678 147.13 168.678 146.824 168.624C146.208 168.531 145.612 168.331 145.056 168.051C144.5 167.771 143.993 167.398 143.552 166.958C143.111 166.518 142.743 166.011 142.459 165.451C142.176 164.891 141.981 164.304 141.884 163.678C141.787 163.064 141.787 162.438 141.884 161.824C141.981 161.211 142.176 160.611 142.459 160.051C142.743 159.504 143.111 158.998 143.552 158.544C143.993 158.104 144.5 157.744 145.056 157.464C145.612 157.171 146.208 156.984 146.824 156.878C147.13 156.838 147.444 156.838 147.753 156.811H190.199C190.509 156.838 190.819 156.864 191.128 156.878C191.431 156.958 191.74 157.011 192.035 157.104C192.331 157.198 192.62 157.318 192.897 157.464C193.452 157.744 193.96 158.104 194.401 158.544C194.841 158.998 195.211 159.504 195.493 160.051C195.635 160.331 195.755 160.624 195.851 160.918C196.043 161.504 196.141 162.131 196.141 162.758C196.141 163.371 196.043 163.998 195.851 164.584C195.657 165.184 195.373 165.744 195.007 166.251C194.64 166.744 194.196 167.198 193.692 167.558C193.44 167.744 193.173 167.904 192.897 168.051C192.341 168.331 191.744 168.531 191.128 168.624C190.821 168.678 190.509 168.678 190.199 168.691ZM154.976 146.625H70.0844C69.775 146.598 69.4617 146.598 69.1551 146.545C68.5391 146.451 67.9431 146.265 67.3871 145.971C66.8311 145.691 66.3245 145.318 65.8832 144.878C65.4418 144.438 65.0738 143.931 64.7898 143.385C64.5072 142.825 64.3126 142.225 64.2152 141.611C64.1179 140.998 64.1179 140.372 64.2152 139.758C64.3126 139.132 64.5072 138.545 64.7898 137.985C65.0738 137.425 65.4418 136.918 65.8832 136.478C66.3245 136.038 66.8311 135.665 67.3871 135.385C67.9431 135.105 68.5391 134.905 69.1551 134.812C69.4617 134.758 69.775 134.758 70.0844 134.745H154.976C155.285 134.758 155.596 134.785 155.905 134.812C156.208 134.878 156.516 134.932 156.812 135.025C157.108 135.132 157.397 135.252 157.673 135.385C158.229 135.665 158.737 136.038 159.177 136.478C159.618 136.918 159.987 137.425 160.27 137.985C160.411 138.265 160.531 138.545 160.627 138.852C160.819 139.438 160.918 140.052 160.918 140.678C160.918 141.305 160.819 141.918 160.627 142.518C160.434 143.105 160.149 143.665 159.783 144.171C159.417 144.678 158.973 145.118 158.469 145.491C158.217 145.678 157.95 145.838 157.673 145.971C157.118 146.265 156.521 146.451 155.905 146.545C155.598 146.598 155.285 146.598 154.976 146.625ZM93.3732 124.559H50.9275C50.6182 124.532 50.3049 124.532 49.9982 124.479C49.3822 124.385 48.7863 124.185 48.2303 123.905C47.6743 123.625 47.1676 123.252 46.7263 122.812C46.285 122.372 45.917 121.865 45.633 121.305C45.3504 120.745 45.1557 120.159 45.0583 119.545C44.961 118.919 44.961 118.292 45.0583 117.679C45.1557 117.065 45.3504 116.465 45.633 115.905C45.917 115.359 46.285 114.852 46.7263 114.412C47.1676 113.972 47.6743 113.599 48.2303 113.319C48.7863 113.039 49.3822 112.839 49.9982 112.746C50.3049 112.692 50.6182 112.692 50.9275 112.666H93.3732C93.6838 112.692 93.9931 112.719 94.3024 112.746C94.6051 112.812 94.9145 112.866 95.2091 112.959C95.5051 113.052 95.7944 113.172 96.0717 113.319C96.6264 113.599 97.1344 113.972 97.5757 114.412C98.0157 114.852 98.385 115.359 98.6677 115.905C98.809 116.185 98.929 116.479 99.025 116.772C99.217 117.372 99.3157 117.985 99.3157 118.612C99.3157 119.239 99.217 119.852 99.025 120.452C98.8316 121.039 98.5477 121.599 98.181 122.105C97.8144 122.612 97.3704 123.052 96.8664 123.412C96.6144 123.599 96.3477 123.759 96.0717 123.905C95.5157 124.185 94.9184 124.385 94.3024 124.479C93.9958 124.532 93.6838 124.532 93.3732 124.559ZM101.406 102.479H75.9403H75.6936C75.5309 102.466 75.3669 102.452 75.2043 102.439C74.4736 102.346 73.7603 102.119 73.111 101.759C72.607 101.493 72.143 101.146 71.7377 100.746C71.4484 100.452 71.1883 100.132 70.9643 99.7858C70.6964 99.3725 70.479 98.9326 70.319 98.4659C70.0537 97.6926 69.9497 96.8659 70.0177 96.0526C70.0644 95.4793 70.1951 94.906 70.4044 94.3727C70.6724 93.6927 71.0684 93.0527 71.5684 92.5193C72.067 91.9727 72.667 91.5194 73.3296 91.1994C73.919 90.9061 74.555 90.7194 75.2043 90.6394C75.3669 90.6261 75.5309 90.6128 75.6936 90.5995H75.9403H101.406H101.653C101.734 90.6128 101.816 90.6127 101.898 90.6127C102.061 90.6261 102.224 90.6527 102.385 90.6794C103.032 90.7861 103.66 90.9994 104.236 91.3061C104.883 91.6661 105.465 92.1328 105.941 92.6928C106.418 93.2661 106.787 93.906 107.027 94.6126C107.213 95.146 107.321 95.7194 107.345 96.2927C107.378 97.106 107.241 97.9326 106.942 98.7059C106.645 99.4659 106.189 100.159 105.609 100.746C105.204 101.146 104.74 101.493 104.236 101.759C103.586 102.119 102.873 102.346 102.142 102.439C101.98 102.452 101.816 102.466 101.653 102.479H101.406Z"
          fill={fillColor}
        />
        <path
          d="M24.0366 155.72C24.0366 139.934 23.5303 130.373 22.5176 127.037C21.5645 123.701 20.4028 121.646 19.0327 120.872C17.7222 120.038 15.9946 119.621 13.8501 119.621C11.8247 119.918 10.1567 119.472 8.84619 118.28C7.59521 117.089 6.96973 115.778 6.96973 114.349C6.96973 112.919 7.625 111.608 8.93555 110.417C10.3057 109.166 12.5098 108.541 15.5479 108.541C19.7178 107.647 22.4282 101.898 23.6792 91.2949C24.7515 82.1211 25.2876 64.0713 25.2876 37.1455C25.2876 19.5127 29.4873 8.81982 37.8867 5.06689C40.5674 3.87549 43.2183 3.27979 45.8394 3.27979C48.52 3.27979 50.3369 3.72656 51.29 4.62012C52.3027 5.51367 52.8091 6.52637 52.8091 7.6582C52.8091 8.79004 52.2729 9.83252 51.2007 10.7856C50.1284 11.6792 48.5498 12.126 46.4648 12.126C44.4395 12.126 42.6226 12.5132 41.0142 13.2876C39.4058 14.0024 38.0059 15.4619 36.8145 17.666C34.4316 22.3125 33.2402 30.8608 33.2402 43.311C33.2402 47.6001 33.27 52.3359 33.3296 57.5186C33.4487 62.7012 33.4487 67.9136 33.3296 73.1558C33.2104 78.3979 32.8828 83.4912 32.3467 88.4355C31.8701 93.3799 31.0361 97.7583 29.8447 101.571C27.7002 108.243 24.543 112.264 20.373 113.634C22.8154 114.051 24.7812 115.063 26.2705 116.672C28.2959 118.995 29.6958 122.331 30.4702 126.68C31.3042 131.028 31.7212 136.271 31.7212 142.406V162.779C31.7212 169.332 32.4658 173.949 33.9551 176.629C35.5039 179.31 37.2314 181.216 39.1377 182.348C41.1035 183.54 43.248 184.135 45.5713 184.135C49.6221 184.135 51.6475 185.386 51.6475 187.888C51.6475 189.02 51.0815 190.033 49.9497 190.926C48.8179 191.879 47.0605 192.356 44.6777 192.356C42.2949 192.356 39.8823 191.909 37.4399 191.016C34.9976 190.182 32.7637 188.663 30.7383 186.458C26.0322 181.276 23.7983 173.323 24.0366 162.601V155.72Z"
          fill="#4299E1"
        />
        <path
          d="M203.963 204.72C203.963 188.934 204.47 179.373 205.482 176.037C206.436 172.701 207.597 170.646 208.967 169.872C210.278 169.038 212.005 168.621 214.15 168.621C216.175 168.918 217.843 168.472 219.154 167.28C220.405 166.089 221.03 164.778 221.03 163.349C221.03 161.919 220.375 160.608 219.064 159.417C217.694 158.166 215.49 157.541 212.452 157.541C208.282 156.647 205.572 150.898 204.321 140.295C203.249 131.121 202.712 113.071 202.712 86.1455C202.712 68.5127 198.513 57.8198 190.113 54.0669C187.433 52.8755 184.782 52.2798 182.161 52.2798C179.48 52.2798 177.663 52.7266 176.71 53.6201C175.697 54.5137 175.191 55.5264 175.191 56.6582C175.191 57.79 175.727 58.8325 176.799 59.7856C177.872 60.6792 179.45 61.126 181.535 61.126C183.561 61.126 185.377 61.5132 186.986 62.2876C188.594 63.0024 189.994 64.4619 191.186 66.666C193.568 71.3125 194.76 79.8608 194.76 92.311C194.76 96.6001 194.73 101.336 194.67 106.519C194.551 111.701 194.551 116.914 194.67 122.156C194.79 127.398 195.117 132.491 195.653 137.436C196.13 142.38 196.964 146.758 198.155 150.571C200.3 157.243 203.457 161.264 207.627 162.634C205.185 163.051 203.219 164.063 201.729 165.672C199.704 167.995 198.304 171.331 197.53 175.68C196.696 180.028 196.279 185.271 196.279 191.406V211.779C196.279 218.332 195.534 222.949 194.045 225.629C192.496 228.31 190.769 230.216 188.862 231.348C186.896 232.54 184.752 233.135 182.429 233.135C178.378 233.135 176.353 234.386 176.353 236.888C176.353 238.02 176.918 239.033 178.05 239.926C179.182 240.879 180.939 241.356 183.322 241.356C185.705 241.356 188.118 240.909 190.56 240.016C193.002 239.182 195.236 237.663 197.262 235.458C201.968 230.276 204.202 222.323 203.963 211.601V204.72Z"
          fill={fillColor}
        />
      </svg>
    </Box>
  );
};

export default Logo;
