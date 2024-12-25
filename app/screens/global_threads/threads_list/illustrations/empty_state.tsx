// Copyright (c) 2015-present TeamUp, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import Svg, {
    G,
    Path,
    Defs,
    ClipPath,
} from 'react-native-svg';

type Props = {
    theme: Theme;
};

function EmptyStateIllustration({theme}: Props) {
    return (
        <Svg
            width='228'
            height='201'
            viewBox='0 0 228 201'
            fill='none'
        >
            <Path
                d='M76.5 199.378C111.018 199.378 139 171.396 139 136.878C139 102.361 111.018 74.3785 76.5 74.3785C41.9822 74.3785 14 102.361 14 136.878C14 171.396 41.9822 199.378 76.5 199.378Z'
                fill={theme.centerChannelBg}
            />
            <Path
                d='M76.5 199.378C111.018 199.378 139 171.396 139 136.878C139 102.361 111.018 74.3785 76.5 74.3785C41.9822 74.3785 14 102.361 14 136.878C14 171.396 41.9822 199.378 76.5 199.378Z'
                fill={theme.centerChannelColor}
                fillOpacity='0.16'
            />
            <Path
                d='M89.6523 103.062C91.1459 102.792 92.6812 102.82 94.1631 103.145C95.6169 103.562 96.9528 104.751 97 106.213C96.9429 107.201 96.5757 108.15 95.947 108.932C94.0916 111.638 91.7369 113.992 89 115.878C89 115.878 89.3772 105.599 89.6523 103.062Z'
                fill='#FFBC1F'
            />
            <Path
                d='M61.8881 100.9C60.5985 100.621 59.2878 100.455 57.9702 100.402C57.2069 100.324 56.4364 100.443 55.7313 100.749C54.5522 101.361 54.0373 102.811 54 104.147C54.018 105.47 54.3127 106.773 54.8645 107.972C55.4163 109.171 56.2128 110.238 57.2015 111.103C59.1924 112.813 61.5051 114.097 64 114.878C63.1567 111.239 61.8881 100.9 61.8881 100.9Z'
                fill='#FFBC1F'
            />

            <G clipPath='url(#Mask0)'>
                <Path
                    d='M141 180.509C133.276 174.256 123.746 170.784 114.869 166.304C107.487 162.577 100.497 158.12 94.0041 153C90.476 150.21 86.9555 147.034 85.4987 142.781C83.7536 137.687 85.2863 132.123 86.7582 126.946C88.2757 121.574 89.7249 116.181 91.1057 110.769C92.6232 104.826 93.6399 97.2073 92.995 92.712C92.6763 90.4379 91.0147 86.5946 89.5579 84.3052C87.1427 80.639 83.4063 78.0435 79.1254 77.0583C76.8757 76.6614 74.5591 76.9247 72.4561 77.8163C69.5013 78.9728 66.8499 80.7882 64.704 83.124C62.5581 85.4598 60.9744 88.2543 60.0736 91.2945C56.6593 103.15 64.277 115.476 63.6927 127.802C63.493 131.435 62.6531 135.005 61.2117 138.347C60.2283 140.792 58.8293 143.048 57.0766 145.017C54.459 147.837 51.0067 149.664 47.5697 151.446L21.0747 165.265C18.0398 166.842 15.0049 168.419 12.1748 170.268C9.67857 178.607 34.178 208.33 68.9963 210.073C114.733 212.385 131.986 201.462 141 180.509Z'
                    fill={theme.centerChannelBg}
                />
                <Path
                    d='M141 180.509C133.276 174.256 123.746 170.784 114.869 166.304C107.487 162.577 100.497 158.12 94.0041 153C90.476 150.21 86.9555 147.034 85.4987 142.781C83.7536 137.687 85.2863 132.123 86.7582 126.946C88.2757 121.574 89.7249 116.181 91.1057 110.769C92.6232 104.826 93.6399 97.2073 92.995 92.712C92.6763 90.4379 91.0147 86.5946 89.5579 84.3052C87.1427 80.639 83.4063 78.0435 79.1254 77.0583C76.8757 76.6614 74.5591 76.9247 72.4561 77.8163C69.5013 78.9728 66.8499 80.7882 64.704 83.124C62.5581 85.4598 60.9744 88.2543 60.0736 91.2945C56.6593 103.15 64.277 115.476 63.6927 127.802C63.493 131.435 62.6531 135.005 61.2117 138.347C60.2283 140.792 58.8293 143.048 57.0766 145.017C54.459 147.837 51.0067 149.664 47.5697 151.446L21.0747 165.265C18.0398 166.842 15.0049 168.419 12.1748 170.268C9.67857 178.607 34.178 208.33 68.9963 210.073C114.733 212.385 131.986 201.462 141 180.509Z'
                    fill={theme.centerChannelColor}
                    fillOpacity='0.04'
                />
            </G>
            <Path
                d='M72.3684 169.667C94.0078 169.538 99.9495 161.228 102.107 158.84C99.3264 156.995 96.6215 155.039 93.9926 152.971C90.4595 150.181 86.9339 147.004 85.4751 142.75C83.7276 137.655 85.2624 132.09 86.7364 126.911C88.256 121.538 89.7072 116.144 91.0901 110.73C92.6097 104.786 93.6279 97.1658 92.982 92.6696C92.6629 90.3949 90.9989 86.5507 89.5401 84.2609C87.1214 80.5937 83.3798 77.9977 79.0927 77.0122C76.8398 76.6152 74.5199 76.8786 72.414 77.7705C69.4544 78.9263 66.7987 80.7417 64.6496 83.0782C62.5005 85.4146 60.9149 88.2103 60.0139 91.2517C56.5872 103.11 64.2233 115.439 63.6382 127.768C63.4382 131.402 62.5971 134.972 61.1536 138.315C60.1688 140.76 58.7679 143.018 57.0127 144.987C54.3913 147.808 50.9342 149.635 47.4923 151.417L43.6932 153.388C44.9621 155.284 52.2487 169.789 72.3684 169.667Z'
                fill='#FFBC1F'
            />
            <Path
                d='M84.9205 138.14C84.8876 137.284 84.9488 136.428 85.1028 135.585C85.1061 135.565 85.1061 135.545 85.1028 135.524C85.1001 133.503 85.5328 131.504 86.3717 129.663L86.2729 129.762C83.3029 132.637 79.3404 134.266 75.2025 134.311C73.5359 134.313 71.8803 134.041 70.3017 133.508C70.2068 133.475 70.1029 133.479 70.0112 133.52C69.9195 133.561 69.8468 133.635 69.8079 133.727V133.727C69.7785 133.797 69.77 133.873 69.7835 133.947C69.797 134.021 69.8319 134.09 69.8839 134.144C76.6386 140.301 84.7989 138.815 84.9433 138.633C84.9205 138.497 84.9205 138.315 84.9205 138.14Z'
                fill='#CC8F00'
            />
            <Path
                d='M74.3606 118.774C74.9163 119.24 75.5645 119.583 76.2626 119.78C76.9606 119.978 77.6927 120.025 78.4105 119.92C79.1284 119.815 79.8158 119.559 80.4273 119.169C81.0389 118.779 81.5608 118.265 81.9587 117.66C82.3158 117.098 81.4268 116.59 81.0773 117.144C80.7606 117.617 80.3487 118.018 79.8679 118.323C79.387 118.628 78.8478 118.83 78.2846 118.915C77.7213 119.001 77.1464 118.969 76.5964 118.82C76.0464 118.672 75.5334 118.411 75.09 118.054C74.5886 117.629 73.8591 118.349 74.3302 118.774H74.3606Z'
                fill='#66320A'
            />
            <Path
                d='M64.901 99.3407C66.9981 98.8934 70.3488 98.355 72.4307 99.2346C74.5126 100.114 74.0795 101.449 74.0035 103.094C73.9992 103.771 73.8543 104.44 73.578 105.058C73.1297 106.104 72.7118 106.233 71.6633 106.521C69.5358 107.12 66.0711 107.408 64.3539 105.801C63.0775 104.61 62.5684 99.7881 64.8554 99.3786C65.5012 99.2649 65.2277 98.2792 64.5819 98.393C64.0758 98.4575 63.6028 98.6787 63.2293 99.0255C62.8558 99.3724 62.6008 99.8274 62.5 100.326C62.1077 102.207 62.2687 104.161 62.9635 105.952C63.5941 107.257 65.2429 107.567 66.565 107.787C68.4492 108.102 70.3809 107.98 72.2104 107.431C73.6084 107.006 74.6721 106.385 74.9229 104.861C75.1508 103.458 75.5307 100.986 74.8469 99.6744C74.1631 98.3626 72.7194 98.2034 71.5037 98.0366C69.2103 97.7476 66.8842 97.8553 64.6275 98.355C63.9816 98.4915 64.2552 99.4772 64.901 99.3407V99.3407Z'
                fill={theme.centerChannelBg}
            />
            <Path
                d='M89.382 99.7047C87.1863 98.935 84.8706 98.5627 82.5437 98.6053C81.3205 98.6053 79.7932 98.7342 79.0562 99.8867C78.7236 100.598 78.5647 101.377 78.5927 102.161C78.4209 103.239 78.3699 104.333 78.4408 105.422C78.6611 106.84 79.9072 107.461 81.1229 107.954C83.4403 108.894 88.9793 110.009 90.3394 107.067C91.3195 104.959 92.3833 100.63 89.382 99.7199C89.2511 99.6837 89.111 99.7009 88.9928 99.7677C88.8745 99.8345 88.7877 99.9455 88.7514 100.076C88.7151 100.207 88.7324 100.347 88.7993 100.465C88.8663 100.583 88.9775 100.669 89.1085 100.706C91.3044 101.373 90.0355 106.514 88.5538 107.476C87.6876 108.038 85.8641 107.878 84.8612 107.803C83.6141 107.718 82.3907 107.42 81.2445 106.923C79.6337 106.21 79.4665 104.861 79.5805 103.291C79.6945 101.722 79.7552 100 81.5788 99.7199C84.134 99.4495 86.717 99.7873 89.1161 100.706C89.7391 100.918 90.0127 99.9473 89.3896 99.7274L89.382 99.7047Z'
                fill={theme.centerChannelBg}
            />
            <Path
                d='M74.8469 101.039C76.1119 100.68 77.4654 100.802 78.6459 101.38C79.231 101.676 79.7552 100.789 79.1626 100.501C77.7398 99.785 76.1003 99.6254 74.5658 100.053C74.4348 100.089 74.3232 100.174 74.2555 100.292C74.1878 100.409 74.1696 100.548 74.2048 100.679C74.2401 100.81 74.326 100.921 74.4435 100.989C74.5611 101.056 74.7007 101.074 74.8317 101.039H74.8469Z'
                fill={theme.centerChannelBg}
            />
            <Path
                d='M93.4622 102.04C92.5832 102.065 91.7337 102.362 91.0308 102.889C90.5066 103.276 91.0308 104.163 91.5475 103.769C92.0977 103.343 92.7664 103.096 93.4622 103.064C94.1156 103.064 94.1232 102.017 93.4622 102.04V102.04Z'
                fill={theme.centerChannelBg}
            />
            <Path
                d='M59.1492 100.857C60.1784 100.527 61.2937 100.589 62.2796 101.032C62.8723 101.305 63.3966 100.425 62.7963 100.152C61.5696 99.5763 60.1722 99.4763 58.8757 99.8715C58.8108 99.8894 58.7501 99.9199 58.6971 99.9612C58.6441 100.003 58.5997 100.054 58.5665 100.112C58.5334 100.171 58.5121 100.235 58.5038 100.302C58.4956 100.368 58.5006 100.436 58.5186 100.501C58.5365 100.566 58.5671 100.626 58.6085 100.679C58.6499 100.732 58.7014 100.776 58.7599 100.809C58.8185 100.842 58.883 100.864 58.9498 100.872C59.0166 100.88 59.0844 100.875 59.1492 100.857V100.857Z'
                fill={theme.centerChannelBg}
            />
            <Path
                d='M67.9402 103.61C68.7417 103.248 69.6279 103.114 70.5008 103.223C71.1542 103.299 71.1542 102.275 70.5008 102.207C69.4463 102.093 68.3809 102.274 67.4235 102.73C66.8233 103.011 67.34 103.89 67.9402 103.61V103.61Z'
                fill='#66320A'
            />
            <Path
                d='M83.6835 104.193C84.0466 104.158 84.413 104.199 84.7596 104.312C85.1061 104.426 85.4253 104.61 85.697 104.853C86.1832 105.293 86.9127 104.572 86.4188 104.133C86.0536 103.793 85.6223 103.533 85.1516 103.367C84.681 103.201 84.1812 103.134 83.6835 103.17C83.03 103.215 83.0224 104.239 83.6835 104.193V104.193Z'
                fill='#66320A'
            />
            <Path
                d='M75.7815 101.191C75.6143 104.11 75.2724 107.014 75.0217 109.933C74.8697 111.753 74.3227 114.968 77.4379 113.724C78.0381 113.482 77.7798 112.488 77.1643 112.739C75.5763 113.383 75.8574 112.428 75.9334 111.313C76.0094 110.199 76.1234 108.963 76.2298 107.795C76.4197 105.596 76.6628 103.405 76.792 101.206C76.83 100.546 75.8043 100.546 75.7663 101.206L75.7815 101.191Z'
                fill='#66320A'
            />
            <Path
                d='M95.9605 81.0128C95.8076 79.6869 95.3539 78.4132 94.6337 77.2885C93.9135 76.1639 92.9459 75.2179 91.8044 74.5224C88.6588 72.6496 84.7154 72.9377 81.0683 73.2941C81.3418 71.7776 79.5866 70.5721 78.029 70.4128C75.4381 70.155 72.9535 71.3909 70.6893 72.6875C67.917 74.1405 65.3976 76.03 63.228 78.2832C63.1423 78.3017 63.0637 78.3444 63.0017 78.4062C62.9397 78.4681 62.8969 78.5465 62.8784 78.632C62.875 78.6521 62.875 78.6726 62.8784 78.6926C61.8807 79.8823 61.0897 81.2304 60.5382 82.6809C60.2916 83.1174 60.1099 83.5874 59.9988 84.076C59.5914 85.6228 59.5783 87.2467 59.9608 88.7998C59.9642 89.0773 60.0635 89.3451 60.2419 89.558L60.3331 89.7476C60.2156 89.7368 60.0982 89.7684 60.0021 89.8365C59.9059 89.9047 59.8374 90.0049 59.8088 90.1191C59.7176 90.6423 59.6341 91.173 59.5429 91.6962C59.512 91.8277 59.5326 91.966 59.6003 92.083C59.6681 92.1999 59.778 92.2866 59.9076 92.3255C60.0376 92.3604 60.1761 92.3424 60.2928 92.2757C60.4096 92.2089 60.4951 92.0987 60.5306 91.9692C60.6218 91.4384 60.7054 90.9152 60.7966 90.3845C60.8176 90.2581 60.799 90.1284 60.7434 90.0129C60.7986 90.0238 60.8554 90.0238 60.9105 90.0129H60.9561C61.0647 90.0736 61.1917 90.0925 61.3132 90.066C63.9569 89.461 66.3073 87.9572 67.9616 85.8124C70.7957 85.2968 74.7011 85.6986 78.7661 86.1232C79.1896 86.6397 79.7047 87.0741 80.2857 87.4046C81.2329 87.858 82.2748 88.0789 83.3249 88.0491C84.9232 88.1033 86.5041 87.7036 87.8838 86.8966C87.9229 87.5975 88.2226 88.2587 88.7242 88.7508C89.2259 89.243 89.8933 89.5308 90.5963 89.558C90.974 89.5537 91.3476 89.4791 91.698 89.3381C92.1173 90.7068 92.3298 92.1302 92.3286 93.5614C92.3439 93.6864 92.4045 93.8016 92.499 93.885C92.5935 93.9685 92.7153 94.0146 92.8415 94.0146C92.9677 94.0146 93.0895 93.9685 93.184 93.885C93.2785 93.8016 93.3391 93.6864 93.3544 93.5614C93.3428 91.9575 93.0866 90.3647 92.5946 88.8377C92.8408 88.6649 93.0744 88.4749 93.2936 88.269C94.2643 87.3434 95.0095 86.208 95.4718 84.9501C95.9341 83.6922 96.1013 82.3453 95.9605 81.0128V81.0128Z'
                fill='#66320A'
            />
            <Path
                d='M59.9228 93.6145C59.8733 93.564 59.8142 93.524 59.7489 93.4966C59.6837 93.4693 59.6136 93.4552 59.5429 93.4552C59.4721 93.4552 59.4021 93.4693 59.3368 93.4966C59.2716 93.524 59.2125 93.564 59.163 93.6145C59.1115 93.6633 59.0705 93.7221 59.0425 93.7873C59.0145 93.8525 59 93.9227 59 93.9936C59 94.0645 59.0145 94.1347 59.0425 94.1998C59.0705 94.265 59.1115 94.3238 59.163 94.3727L59.277 94.4864C59.3752 94.577 59.5041 94.6273 59.6379 94.6273C59.7716 94.6273 59.9005 94.577 59.9988 94.4864C60.0503 94.4376 60.0913 94.3787 60.1193 94.3136C60.1473 94.2484 60.1618 94.1782 60.1618 94.1073C60.1618 94.0364 60.1473 93.9662 60.1193 93.901C60.0913 93.8359 60.0503 93.7771 59.9988 93.7282L59.9228 93.6145Z'
                fill='#66320A'
            />
            <Path
                d='M92.9897 94.3727C92.8546 94.3766 92.7262 94.4324 92.6314 94.5285C92.5365 94.6246 92.4825 94.7535 92.4806 94.8883V95.6466C92.4806 95.7813 92.5342 95.9105 92.6297 96.0058C92.7252 96.101 92.8547 96.1546 92.9897 96.1546C93.1247 96.1546 93.2542 96.101 93.3497 96.0058C93.4451 95.9105 93.4988 95.7813 93.4988 95.6466V94.8883C93.4969 94.7535 93.4429 94.6246 93.348 94.5285C93.2531 94.4324 93.1248 94.3766 92.9897 94.3727Z'
                fill='#66320A'
            />
            <Path
                d='M43.5 153.378C50.6949 164.128 58.5583 171.905 80.5 169.41'
                stroke='#66320A'
                strokeWidth='0.91'
                strokeMiterlimit='10'
                strokeLinecap='round'
            />
            <Path
                d='M128.698 24.8786H215.802C217.398 24.8726 218.979 25.1799 220.456 25.7831C221.933 26.3862 223.276 27.2733 224.408 28.3937C225.541 29.5141 226.441 30.8459 227.058 32.313C227.674 33.7801 227.994 35.3538 228 36.9443V92.1179C227.995 93.709 227.676 95.2835 227.06 96.7515C226.444 98.2195 225.544 99.5522 224.411 100.673C223.278 101.795 221.935 102.682 220.458 103.286C218.98 103.89 217.398 104.197 215.802 104.191H202.95V124.878L183.643 104.184H128.698C127.102 104.19 125.521 103.882 124.044 103.279C122.567 102.676 121.224 101.789 120.092 100.669C118.959 99.5481 118.059 98.2163 117.442 96.7492C116.826 95.2821 116.506 93.7084 116.5 92.1179V36.9443C116.506 35.3538 116.826 33.7801 117.442 32.313C118.059 30.8459 118.959 29.5141 120.092 28.3937C121.224 27.2733 122.567 26.3862 124.044 25.7831C125.521 25.1799 127.102 24.8726 128.698 24.8786V24.8786Z'
                fill={theme.buttonBg}
            />
            <Path
                d='M161.5 104.378H215.919C217.499 104.384 219.066 104.077 220.528 103.475C221.991 102.873 223.321 101.987 224.443 100.868C225.565 99.749 226.456 98.419 227.067 96.9539C227.677 95.4887 227.994 93.9171 228 92.3287V58.8785C228 58.8785 224.201 89.8115 223.524 92.5328C222.847 95.2542 221.493 99.3363 215.069 100.009C208.644 100.682 161.5 104.378 161.5 104.378Z'
                fill='black'
                fillOpacity='0.32'
            />
            <Path
                d='M141.5 56.8785C143.082 56.8785 144.629 57.3477 145.945 58.2267C147.26 59.1058 148.286 60.3552 148.891 61.817C149.497 63.2788 149.655 64.8874 149.346 66.4392C149.038 67.9911 148.276 69.4165 147.157 70.5353C146.038 71.6541 144.613 72.4161 143.061 72.7248C141.509 73.0334 139.9 72.875 138.439 72.2695C136.977 71.664 135.727 70.6386 134.848 69.323C133.969 68.0075 133.5 66.4607 133.5 64.8785C133.502 62.7574 134.346 60.7237 135.845 59.2239C137.345 57.724 139.379 56.8805 141.5 56.8785Z'
                fill={theme.centerChannelBg}
            />
            <Path
                d='M171.508 56.8785C173.09 56.88 174.636 57.3505 175.95 58.2305C177.265 59.1105 178.289 60.3604 178.893 61.8224C179.498 63.2843 179.655 64.8926 179.345 66.444C179.036 67.9953 178.273 69.42 177.154 70.5381C176.035 71.6561 174.61 72.4173 173.058 72.7253C171.506 73.0334 169.898 72.8745 168.437 72.2688C166.975 71.663 165.726 70.6377 164.848 69.3222C163.969 68.0068 163.5 66.4604 163.5 64.8785C163.5 63.8273 163.707 62.7863 164.11 61.8152C164.512 60.8441 165.102 59.9619 165.846 59.2189C166.59 58.4759 167.472 57.8868 168.444 57.4852C169.415 57.0836 170.457 56.8775 171.508 56.8785V56.8785Z'
                fill={theme.centerChannelBg}
            />
            <Path
                d='M201.5 56.8785C203.082 56.8785 204.629 57.3477 205.945 58.2267C207.26 59.1058 208.286 60.3552 208.891 61.817C209.497 63.2788 209.655 64.8874 209.346 66.4392C209.038 67.9911 208.276 69.4165 207.157 70.5353C206.038 71.6541 204.613 72.4161 203.061 72.7248C201.509 73.0334 199.9 72.875 198.439 72.2695C196.977 71.664 195.727 70.6386 194.848 69.323C193.969 68.0075 193.5 66.4607 193.5 64.8785C193.5 62.7567 194.343 60.7219 195.843 59.2216C197.343 57.7213 199.378 56.8785 201.5 56.8785Z'
                fill={theme.centerChannelBg}
            />
            <Path
                d='M125.898 47.7743C126.814 44.666 128.358 41.7626 130.441 39.2305C132.525 36.6984 135.107 34.5875 138.039 33.0188C138.207 32.9305 138.341 32.7917 138.421 32.6236C138.5 32.4555 138.521 32.2671 138.479 32.0868C138.438 31.9065 138.336 31.7441 138.191 31.624C138.045 31.5039 137.863 31.4328 137.671 31.4212C132.016 31.0972 120.594 32.2577 124.185 47.6914C124.223 47.8778 124.325 48.0466 124.474 48.1709C124.623 48.2952 124.811 48.3679 125.008 48.3774C125.205 48.3869 125.4 48.3327 125.561 48.2235C125.722 48.1142 125.841 47.9561 125.898 47.7743V47.7743Z'
                fill='white'
                fillOpacity='0.24'
            />
            <Path
                d='M73.4957 0.378531H9.02713C7.84566 0.374539 6.67498 0.602539 5.58192 1.04951C4.48886 1.49648 3.49483 2.15366 2.65658 2.98354C1.81833 3.81343 1.15228 4.79975 0.696467 5.8862C0.24065 6.97265 0.00399142 8.13796 0 9.31558V50.1544C0.00399142 51.332 0.24065 52.4973 0.696467 53.5838C1.15228 54.6702 1.81833 55.6565 2.65658 56.4864C3.49483 57.3163 4.48886 57.9735 5.58192 58.4204C6.67498 58.8674 7.84566 59.0954 9.02713 59.0914H18.5414V74.3785L32.8128 59.0914H73.4729C74.6543 59.0954 75.825 58.8674 76.9181 58.4204C78.0112 57.9735 79.0052 57.3163 79.8434 56.4864C80.6817 55.6565 81.3477 54.6702 81.8035 53.5838C82.2593 52.4973 82.496 51.332 82.5 50.1544V9.31558C82.4919 6.94123 81.5395 4.66697 79.8515 2.9916C78.1635 1.31623 75.8778 0.376508 73.4957 0.378531V0.378531Z'
                fill='#FFBC1F'
            />
            <Path
                d='M32.5 58.8784H73.4161C74.605 58.8823 75.783 58.6593 76.883 58.222C77.9829 57.7847 78.9832 57.1417 79.8267 56.3298C80.6702 55.5179 81.3405 54.5529 81.7991 53.49C82.2578 52.427 82.496 51.287 82.5 50.1349V25.8785C82.5 25.8785 79.6431 48.3089 79.1299 50.2833C78.6167 52.2577 77.598 55.2118 72.7727 55.7016C67.9473 56.1915 32.5 58.8784 32.5 58.8784Z'
                fill='black'
                fillOpacity='0.32'
            />
            <Path
                d='M19 23.8785C20.1867 23.8785 21.3467 24.2304 22.3334 24.8897C23.3201 25.5489 24.0892 26.486 24.5433 27.5824C24.9974 28.6787 25.1162 29.8851 24.8847 31.049C24.6532 32.2129 24.0818 33.282 23.2426 34.1211C22.4035 34.9602 21.3344 35.5317 20.1705 35.7632C19.0067 35.9947 17.8003 35.8759 16.7039 35.4218C15.6075 34.9676 14.6705 34.1986 14.0112 33.2119C13.3519 32.2252 13 31.0652 13 29.8785C12.999 29.0903 13.1535 28.3096 13.4546 27.5811C13.7558 26.8527 14.1977 26.1909 14.7551 25.6335C15.3124 25.0762 15.9743 24.6343 16.7027 24.3331C17.4311 24.0319 18.2118 23.8774 19 23.8785V23.8785Z'
                fill={theme.centerChannelBg}
            />
            <Path
                d='M41.5 23.8785C42.6867 23.8785 43.8467 24.2304 44.8334 24.8897C45.8201 25.5489 46.5892 26.486 47.0433 27.5824C47.4974 28.6787 47.6162 29.8851 47.3847 31.049C47.1532 32.2129 46.5818 33.282 45.7426 34.1211C44.9035 34.9602 43.8344 35.5317 42.6705 35.7632C41.5067 35.9947 40.3003 35.8759 39.2039 35.4218C38.1075 34.9676 37.1705 34.1986 36.5112 33.2119C35.8519 32.2252 35.5 31.0652 35.5 29.8785C35.499 29.0903 35.6535 28.3096 35.9546 27.5811C36.2558 26.8527 36.6977 26.1909 37.2551 25.6335C37.8124 25.0762 38.4743 24.6343 39.2027 24.3331C39.9311 24.0319 40.7118 23.8774 41.5 23.8785V23.8785Z'
                fill={theme.centerChannelBg}
            />
            <Path
                d='M63.9921 23.8785C65.1792 23.8769 66.34 24.2275 67.3277 24.8858C68.3154 25.5442 69.0857 26.4807 69.541 27.5769C69.9963 28.6731 70.1163 29.8798 69.8857 31.0442C69.6551 32.2086 69.0842 33.2784 68.2454 34.1183C67.4066 34.9582 66.3375 35.5305 65.1734 35.7626C64.0093 35.9948 62.8025 35.8764 61.7057 35.4225C60.6089 34.9686 59.6714 34.1996 59.0117 33.2127C58.3521 32.2259 58 31.0655 58 29.8785C57.999 29.0909 58.1532 28.3109 58.4539 27.583C58.7545 26.8551 59.1957 26.1936 59.7523 25.6363C60.3088 25.0791 60.9697 24.637 61.6972 24.3354C62.4247 24.0337 63.2046 23.8785 63.9921 23.8785V23.8785Z'
                fill={theme.centerChannelBg}
            />
            <Path
                d='M6.7637 16.9281C7.43137 14.6443 8.55997 12.5107 10.0845 10.6501C11.609 8.78959 13.4993 7.23886 15.6466 6.08727C15.7738 6.02514 15.8761 5.92399 15.9374 5.79966C15.9987 5.67533 16.0156 5.53486 15.9854 5.40026C15.9552 5.26565 15.8797 5.14452 15.7707 5.05584C15.6616 4.96717 15.5252 4.91596 15.3828 4.91024C11.2401 4.67033 2.87695 5.525 5.49915 16.8681C5.52681 17.0065 5.60175 17.132 5.71197 17.2244C5.8222 17.3168 5.96133 17.3708 6.10707 17.3777C6.25282 17.3846 6.39675 17.3441 6.51581 17.2625C6.63486 17.181 6.72215 17.0632 6.7637 16.9281V16.9281Z'
                fill='white'
                fillOpacity='0.32'
            />
            <Defs>
                <ClipPath
                    id='Mask0'
                >
                    <Path
                        d='M76.5 199.378C111.018 199.378 139 171.396 139 136.878C139 102.361 111.018 74.3784 76.5 74.3784C41.9822 74.3784 14 102.361 14 136.878C14 171.396 41.9822 199.378 76.5 199.378Z'
                        fill='#ffffff'
                        transform='translate(0 0)'
                    />
                </ClipPath>

            </Defs>
        </Svg>
    );
}

export default EmptyStateIllustration;
