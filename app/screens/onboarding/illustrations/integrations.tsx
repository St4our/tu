// Copyright (c) 2015-present TeamUp, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import Svg, {
    Rect,
    Path,
    Circle,
    Ellipse,
    Mask,
    G,
    Defs,
    LinearGradient,
    Stop,
} from 'react-native-svg';

import type {StyleProp, ViewStyle} from 'react-native';

type Props = {
    theme: Theme;
    styles: StyleProp<ViewStyle>;
};

const IntegrationsSvg = ({theme, styles}: Props) => {
    return (
        <Svg
            width={246}
            height={235}
            viewBox='0 0 246 235'
            fill='none'
            style={styles}
        >
            <Rect
                x={106.441}
                y={193.838}
                width={21.5027}
                height={3.68617}
                rx={1.84309}
                fill='#8D93A5'
            />
            <Path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M159.98 205.463c-2.405 2.461-5.833 4.348-9.594 4.348H84.614c-3.76 0-7.19-1.887-9.594-4.348-2.41-2.468-4.212-5.938-4.212-9.693V43.23c0-3.756 1.799-7.226 4.208-9.694 2.405-2.463 5.832-4.347 9.592-4.347h65.778c3.759 0 7.188 1.884 9.594 4.346 2.411 2.467 4.212 5.937 4.212 9.695v152.54c0 3.755-1.802 7.225-4.212 9.693zm-9.594.662c5.06 0 10.119-5.184 10.119-10.355V43.23c0-5.177-5.059-10.355-10.119-10.355H84.608c-5.06 0-10.113 5.178-10.113 10.355v152.54c0 5.171 5.06 10.355 10.119 10.355h65.772z'
                fill='#484D5B'
            />
            <Path
                d='M160.505 195.77c0 5.171-5.059 10.355-10.119 10.355H84.614c-5.06 0-10.12-5.184-10.12-10.355V43.23c0-5.177 5.054-10.355 10.114-10.355h65.778c5.06 0 10.119 5.178 10.119 10.355v152.54z'
                fill='#505667'
            />
            <Path
                d='M124.872 41.781c0 .51-.323.924-.731.924h-13.277c-.402 0-.736-.426-.736-.924 0-.498.334-.92.736-.92h13.255c.408 0 .753.414.753.92z'
                fill='#8D93A5'
            />
            <Path
                d='M156.819 51.92H78.181v135.774h78.638V51.92z'
                fill={theme.centerChannelBg}
            />
            <Circle
                cx={87.6638}
                cy={78.5625}
                r={5.31027}
                fill={theme.centerChannelColor}
                fillOpacity={0.24}
            />
            <Circle
                cx={87.6638}
                cy={110.424}
                r={5.31027}
                fill={theme.centerChannelColor}
                fillOpacity={0.24}
            />
            <Ellipse
                cx={87.6638}
                cy={142.286}
                rx={5.31027}
                ry={5.31027}
                fill={theme.centerChannelColor}
                fillOpacity={0.24}
            />
            <Rect
                x={95.0984}
                y={75.3763}
                width={36.1098}
                height={2.12411}
                rx={1.06205}
                fill={theme.centerChannelColor}
                fillOpacity={0.24}
            />
            <Rect
                x={95.0984}
                y={107.238}
                width={36.1098}
                height={2.12411}
                rx={1.06206}
                fill={theme.centerChannelColor}
                fillOpacity={0.24}
            />
            <Rect
                x={95.0984}
                y={139.1}
                width={36.1098}
                height={2.12411}
                rx={1.06205}
                fill={theme.centerChannelColor}
                fillOpacity={0.24}
            />
            <Rect
                x={95.0984}
                y={88.1208}
                width={50.9786}
                height={2.12411}
                rx={1.06205}
                fill={theme.centerChannelColor}
                fillOpacity={0.24}
            />
            <Rect
                x={95.0984}
                y={119.983}
                width={50.9786}
                height={2.12411}
                rx={1.06205}
                fill={theme.centerChannelColor}
                fillOpacity={0.24}
            />
            <Rect
                x={95.0984}
                y={151.844}
                width={50.9786}
                height={2.12411}
                rx={1.06205}
                fill={theme.centerChannelColor}
                fillOpacity={0.24}
            />
            <Rect
                x={95.0984}
                y={94.4933}
                width={25.4893}
                height={2.12411}
                rx={1.06205}
                fill={theme.centerChannelColor}
                fillOpacity={0.24}
            />
            <Rect
                x={95.0984}
                y={126.355}
                width={25.4893}
                height={2.12411}
                rx={1.06206}
                fill={theme.centerChannelColor}
                fillOpacity={0.24}
            />
            <Rect
                x={95.0984}
                y={158.217}
                width={25.4893}
                height={2.12411}
                rx={1.06205}
                fill={theme.centerChannelColor}
                fillOpacity={0.24}
            />
            <Rect
                x={95.0984}
                y={81.7488}
                width={55.2268}
                height={2.12411}
                rx={1.06205}
                fill={theme.centerChannelColor}
                fillOpacity={0.24}
            />
            <Rect
                x={95.0984}
                y={113.61}
                width={55.2268}
                height={2.12411}
                rx={1.06205}
                fill={theme.centerChannelColor}
                fillOpacity={0.24}
            />
            <Rect
                x={95.0984}
                y={145.472}
                width={55.2268}
                height={2.12411}
                rx={1.06205}
                fill={theme.centerChannelColor}
                fillOpacity={0.24}
            />
            <Path
                fill={theme.sidebarBg}
                d='M78.1808 51.9202H156.8191V66.6649H78.1808z'
            />
            <Rect
                opacity={0.4}
                x={91.0825}
                y={58.6782}
                width={25.8032}
                height={1.84308}
                rx={0.921542}
                fill={theme.sidebarText}
            />
            <Rect
                opacity={0.4}
                x={146.375}
                y={56.2208}
                width={6.14362}
                height={6.14362}
                rx={2}
                fill={theme.sidebarText}
            />
            <Rect
                opacity={0.4}
                x={82.4814}
                y={56.2208}
                width={6.14362}
                height={6.14362}
                rx={2}
                fill={theme.sidebarText}
            />
            <Mask
                id='a'
                maskUnits='userSpaceOnUse'
            >
                <Rect
                    x={71}
                    y={29}
                    width={93}
                    height={181}
                    rx={16}
                    fill='#fff'
                />
            </Mask>
            <G
                mask='url(#a)'
                fill='#000'
                fillOpacity={0.2}
            >
                <Circle
                    cx={182}
                    cy={125}
                    r={36}
                />
                <Circle
                    cx={56}
                    cy={85}
                    r={32}
                />
                <Circle
                    cx={67}
                    cy={180}
                    r={17}
                />
                <Circle
                    cx={162}
                    cy={203}
                    r={19}
                />
                <Circle
                    cx={159}
                    cy={36}
                    r={28}
                />
            </G>
            <Circle
                cx={182}
                cy={116}
                r={36}
                fill='#fff'
            />
            <Circle
                cx={182}
                cy={116}
                r={35.5}
                stroke='#3F4350'
                strokeOpacity={0.16}
            />
            <Path
                d='M181.911 93C169.259 93 159 103.315 159 116.04c0 10.179 6.565 18.816 15.668 21.862 1.145.213 1.565-.5 1.565-1.108 0-.55-.021-2.365-.031-4.29-6.374 1.394-7.719-2.718-7.719-2.718-1.042-2.663-2.543-3.371-2.543-3.371-2.079-1.43.156-1.401.156-1.401 2.301.163 3.512 2.374 3.512 2.374 2.044 3.523 5.36 2.504 6.668 1.916.205-1.49.799-2.506 1.454-3.081-5.089-.583-10.438-2.558-10.438-11.387 0-2.515.895-4.57 2.36-6.184-.237-.58-1.022-2.923.222-6.097 0 0 1.924-.619 6.303 2.362a21.784 21.784 0 015.734-.775c1.947.008 3.909.264 5.74.775 4.373-2.981 6.294-2.362 6.294-2.362 1.247 3.174.462 5.517.225 6.097 1.468 1.614 2.357 3.669 2.357 6.184 0 8.849-5.359 10.798-10.461 11.368.822.715 1.554 2.118 1.554 4.267 0 3.083-.027 5.564-.027 6.323 0 .613.413 1.331 1.574 1.105 9.098-3.05 15.655-11.683 15.655-21.859 0-12.725-10.258-23.04-22.911-23.04z'
                fill='#161614'
            />
            <Path
                d='M167.581 125.821c-.05.114-.23.148-.393.07-.166-.075-.259-.231-.205-.346.049-.118.228-.151.394-.072.167.075.262.233.204.348zm1.127 1.011c-.109.102-.323.054-.468-.107-.15-.16-.178-.375-.067-.479.113-.101.32-.054.47.107.15.163.179.376.065.479m.773 1.294c-.14.098-.37.006-.512-.199-.14-.205-.14-.451.003-.549.143-.099.369-.01.512.193.141.208.141.454-.003.555m1.308 1.498c-.126.139-.393.102-.589-.088-.2-.186-.256-.45-.13-.589.127-.139.396-.1.593.088.199.186.26.451.126.589m1.689.506c-.055.18-.312.262-.572.186-.259-.079-.429-.291-.376-.473.054-.182.312-.267.574-.185.258.079.428.288.375.472m1.923.214c.006.191-.214.348-.486.352-.274.006-.496-.148-.499-.335 0-.192.215-.348.489-.353.273-.005.496.148.496.336zm1.889-.072c.033.185-.157.375-.427.426-.266.049-.512-.065-.546-.249-.033-.19.16-.381.425-.43.271-.047.513.064.548.253z'
                fill='#161614'
            />
            <Circle
                cx={52}
                cy={77}
                r={32}
                fill='#fff'
            />
            <Circle
                cx={52}
                cy={77}
                r={31.5}
                stroke='#3F4350'
                strokeOpacity={0.16}
            />
            <Path
                d='M71.3342 72.8734L71.278 72.7297L65.8336 58.5212C65.7229 58.2427 65.5267 58.0064 65.2734 57.8463C65.0199 57.689 64.7242 57.6132 64.4262 57.6292C64.1282 57.6452 63.8424 57.7523 63.6072 57.9359C63.3746 58.1248 63.2059 58.3808 63.124 58.669L59.4479 69.9159H44.5625L40.8864 58.669C40.8067 58.3792 40.6376 58.122 40.4032 57.9338C40.168 57.7502 39.8822 57.6431 39.5842 57.6271C39.2862 57.6111 38.9905 57.6869 38.737 57.8443C38.4842 58.005 38.2883 58.241 38.1768 58.5191L32.722 72.7214L32.6679 72.8651C31.8842 74.9128 31.7874 77.1599 32.3923 79.2675C32.9971 81.375 34.2707 83.2288 36.0211 84.5493L36.0399 84.5639L36.0899 84.5993L44.3834 90.8101L48.4864 93.9154L50.9857 95.8024C51.278 96.0244 51.635 96.1445 52.0021 96.1445C52.3691 96.1445 52.7261 96.0244 53.0185 95.8024L55.5178 93.9154L59.6208 90.8101L67.9643 84.5618L67.9851 84.5451C69.7316 83.2244 71.0023 81.3725 71.6062 79.2678C72.2101 77.1631 72.1147 74.9192 71.3342 72.8734Z'
                fill='#E24329'
            />
            <Path
                d='M71.3342 72.8734L71.278 72.7297C68.6251 73.2743 66.1253 74.3979 63.9571 76.0205L52 85.0617C56.0718 88.1421 59.6166 90.8184 59.6166 90.8184L67.9601 84.5702L67.981 84.5535C69.7299 83.2328 71.0026 81.3797 71.6073 79.2732C72.2121 77.1667 72.1162 74.9208 71.3342 72.8734Z'
                fill='#FC6D26'
            />
            <Path
                d='M44.3833 90.8185L48.4863 93.9239L50.9856 95.8108C51.278 96.0328 51.6349 96.153 52.002 96.153C52.3691 96.153 52.726 96.0328 53.0184 95.8108L55.5177 93.9239L59.6207 90.8185C59.6207 90.8185 56.0717 88.1338 51.9999 85.0618C47.9281 88.1338 44.3833 90.8185 44.3833 90.8185Z'
                fill='#FCA326'
            />
            <Path
                d='M40.0408 76.0205C37.8743 74.3946 35.3751 73.268 32.722 72.7214L32.6679 72.8651C31.8842 74.9129 31.7874 77.16 32.3923 79.2675C32.9971 81.3751 34.2707 83.2289 36.0211 84.5494L36.0399 84.564L36.0899 84.5994L44.3834 90.8101C44.3834 90.8101 47.9241 88.1338 52 85.0534L40.0408 76.0205Z'
                fill='#FC6D26'
            />
            <Circle
                cx={65}
                cy={175}
                r={17}
                fill='#fff'
            />
            <Circle
                cx={65}
                cy={175}
                r={16.5}
                stroke='#3F4350'
                strokeOpacity={0.16}
            />
            <Path
                d='M75.997 174.727l-9.906-9.779-.96-.948-7.456 7.362-3.41 3.365a.897.897 0 000 1.272l6.813 6.726 4.054 4.002 7.455-7.362.116-.114 3.294-3.247a.896.896 0 00.269-.638.891.891 0 00-.27-.639zm-10.865 3.997l-3.404-3.361 3.404-3.36 3.402 3.36-3.402 3.361z'
                fill='#2684FF'
            />
            <Path
                d='M65.132 172.003a5.62 5.62 0 01-1.679-3.983 5.62 5.62 0 011.654-3.993l-7.447 7.35 4.053 4.001 3.419-3.375z'
                fill='url(#paint0_linear_571_6460)'
            />
            <Path
                d='M68.543 175.354l-3.411 3.37a5.622 5.622 0 011.678 4c0 1.5-.604 2.939-1.678 4l7.467-7.368-4.056-4.002z'
                fill='url(#paint1_linear_571_6460)'
            />
            <Circle
                cx={163}
                cy={199}
                r={19}
                fill='#fff'
            />
            <Circle
                cx={163}
                cy={199}
                r={18.5}
                stroke='#3F4350'
                strokeOpacity={0.16}
            />
            <Path
                d='M166.81 198.999l-1.658.246-2.237.254-1.447.035-1.412-.044-1.079-.333-.957-1.035-.745-2.114-.167-.456-.991-.333-.579-.956-.412-1.369.456-1.201 1.079-.377.868.412.412.912.5-.079.167-.21-.167-.957-.043-1.201.245-1.658-.009-.947.755-1.211 1.324-.956 2.316-.991 2.57.377 2.237 1.614 1.035 1.658.667 1.202.166 2.982-.5 2.57-.912 2.28-.859 1.22'
                fill='#F0D6B7'
            />
            <Path
                d='M165.406 206.165l-5.921.246v.991l.5 3.482-.245.29-4.141-1.413-.289-.499-.412-4.684-.974-2.807-.211-.667 3.316-2.28 1.035-.413.912 1.123.79.702.912.289.412.123.5 2.158.378.456.956-.333-.667 1.289 3.597 1.702-.448.245'
                fill='#335061'
            />
            <Path
                d='M155.582 191.71l1.079-.377.868.412.412.912.5-.079.123-.5-.245-.956.245-2.28-.21-1.246.745-.868 1.614-1.281-.456-.622-2.281 1.122-.956.746-.535 1.158-.824 1.122-.246 1.325.167 1.412z'
                fill='#6D6B6D'
            />
            <Path
                d='M157.284 187.816s.622-1.535 3.105-2.281c2.482-.745.123-.535.123-.535l-2.693 1.035-1.035 1.035-.457.825.957-.079zm-1.246 3.605s-.868-2.904 2.447-3.316l-.123-.5-2.28.535-.667 2.158.167 1.412.456-.289z'
                fill='#DCD9D8'
            />
            <Path
                d='M157.362 195.271l.544-.526s.246.026.29.316c.044.289.166 2.903 1.947 4.307.167.131-1.324-.211-1.324-.211l-1.325-2.07m7.491-2.605s.097-1.254.439-1.158c.342.097.342.439.342.439s-.825.526-.781.719zm3.439-4.596s-.685.14-.746.745c-.061.606.746.123.868.079m-5.131-.78s-.912.123-.912.701c0 .579 1.035.535 1.324.29m-6.044 1.702s-1.57-.957-1.736-.044c-.167.912-.535 1.57.245 2.526l-.535-.167-.5-1.281-.166-1.245.956-.991 1.079.079.622.5.036.623m.745-2.614s.702-3.649 4.263-4.351c2.93-.579 4.474.123 5.053.789 0 0-2.614-3.105-5.097-2.157-2.482.956-4.307 2.693-4.263 3.807.07 1.912.044 1.912.044 1.912m9.605-3.149s-1.202-.044-1.245 1.035c0 0 0 .166.079.333 0 0 .956-1.079 1.535-.5'
                fill='#F7E4CD'
            />
            <Path
                d='M162.88 188.342s-.21-1.649-1.614-.693c-.912.623-.825 1.491-.667 1.658.167.166.123.5.246.272.123-.228.088-.974.544-1.184.447-.211 1.202-.439 1.491-.053z'
                fill='#F7E4CD'
            />
            <Path
                d='M158.986 199.534l-3.895 1.737s1.614 6.42.789 8.411l-.579-.21-.044-2.447-1.079-4.631-.456-1.281 4.062-2.737 1.201 1.158m.395 3.552l.553.676v2.482h-.658s-.079-1.737-.079-1.947c0-.211.079-.956.079-.956m.123 3.28l-1.869.079.535.377 1.325.211'
                fill='#49728B'
            />
            <Path
                d='M165.775 206.209l1.535-.044.377 3.807-1.57.21-.342-3.973'
                fill='#335061'
            />
            <Path
                d='M166.187 206.209l2.316-.123s.956-2.403.956-2.526c0-.123.824-3.482.824-3.482l-1.868-1.947-.377-.334-.991.992v3.85l-.86 3.57z'
                fill='#335061'
            />
            <Path
                d='M167.222 205.92l-1.447.289.21 1.158c.535.245 1.448-.412 1.448-.412m-.167-8.289l2.903 2.158.079-.992-2.193-2.026-.789.86'
                fill='#49728B'
            />
            <Path
                d='M160.836 214.366l-.86-3.482-.429-2.57-.071-1.903 3.886-.211h2.413l-.22 4.351.377 3.359-.043.623-3.15.246-1.903-.413z'
                fill='#fff'
            />
            <Path
                d='M165.239 206.165s-.21 4.307.413 7.377c0 0-1.246.789-3.062.991l3.483-.123.412-.245-.5-6.789-.132-1.457'
                fill='#DCD9D8'
            />
            <Path
                d='M167.748 209.648l1.614-.457 3.062-.166.456-1.412-.825-2.448-.956-.122-1.324.412-1.264.623-.675-.123-.526.21'
                fill='#fff'
            />
            <Path
                d='M167.722 208.814s1.079-.5 1.246-.456l-.456-2.28.535-.211s.377 2.158.377 2.403c0 0 2.316.123 2.526.123 0 0 .5-.956.377-1.947l.456 1.324.044.746-.666.991-.746.167-1.246-.044-.412-.535-1.447.21-.456.167'
                fill='#DCD9D8'
            />
            <Path
                d='M166.09 205.876l-.912-2.316-.956-1.368s.211-.579.5-.579h.956l.912.333-.079 1.535-.421 2.395z'
                fill='#fff'
            />
            <Path
                d='M166.275 205.086s-1.158-2.236-1.158-2.57c0 0 .21-.5.5-.377.289.123.912.456.912.456v-.789l-1.412-.29-.956.123 1.614 3.824.333.044'
                fill='#DCD9D8'
            />
            <Path
                d='M161.205 199.622l-1.149-.123-1.079-.333v.377l.526.579 1.658.745'
                fill='#fff'
            />
            <Path
                d='M159.354 199.745s1.28.535 1.702.412l.043.5-1.158-.246-.701-.5.114-.166z'
                fill='#DCD9D8'
            />
            <Path
                d='M167.748 201.753a7.63 7.63 0 01-1.895-.263c.036-.228-.035-.447.027-.614.158-.114.412-.114.649-.14a1.114 1.114 0 00-.719-.079c-.009-.158-.079-.255-.123-.377.395-.141 1.324-1.062 1.851-.763.254.149.359.973.377 1.385.017.334-.035.667-.167.851zM164.389 200.604c0 .053 0 .105-.009.158-.219.14-.57.14-.816.263.351.018.632.105.877.219-.009.132-.009.272-.017.404-.404.272-.772.684-1.246.947-.228.123-1.009.439-1.245.377-.132-.035-.15-.201-.202-.359-.114-.333-.377-.877-.404-1.386-.026-.64-.096-1.719.597-1.588.561.106 1.21.36 1.64.597.272.158.421.333.825.368zM164.783 201.367c-.061-.351-.131-.447-.105-.754.939-.623 1.105 1.07.105.754'
                fill='#D33833'
            />
            <Path
                d='M166.134 201.648s-.289-.412-.079-.535c.211-.123.413 0 .535-.211.123-.21 0-.333.044-.579.044-.245.246-.289.456-.333.211-.044.79-.123.869.079l-.246-.746-.5-.166-1.57.912-.079.456v.912m-3.78 1.579l-.158-1.938c-.088-.965.228-.799 1.07-.799.131 0 .789.15.833.246.228.465-.377.36.263.711.535.289 1.491-.176 1.272-.834-.123-.149-.631-.044-.816-.14l-.973-.5c-.413-.211-1.36-.526-1.799-.228-1.114.754.071 2.649.465 3.438'
                fill='#EF3D3A'
            />
            <Path
                d='M162.88 188.342c-1.132-.263-1.693.474-2.035 1.237-.307-.07-.184-.491-.105-.702.201-.553 1.017-1.298 1.684-1.193.28.035.666.298.456.658zm5.5 1.28h.052c.255.527.474 1.088.799 1.562-.22.509-1.632.947-1.614.052.307-.131.833-.026 1.105-.201-.158-.43-.377-.798-.342-1.412m-4.93.017c.246.447.325.912.667 1.246.158.149.456.333.307.754-.035.096-.29.316-.439.36-.535.157-1.789.035-1.368-.641.447.018 1.044.29 1.377-.035-.254-.403-.711-1.21-.544-1.684zm4.728 4.508c-.807.518-1.711 1.088-3.044.957-.28-.246-.394-.799-.114-1.158.141.245.053.702.456.772.755.131 1.632-.465 2.176-.667.333-.57-.027-.772-.334-1.14-.622-.746-1.447-1.676-1.421-2.789.255-.185.272.28.307.359.325.754 1.141 1.728 1.728 2.377.15.158.386.316.413.421.079.298-.202.667-.167.869m-10.684-.544c-.254-.149-.316-.781-.614-.798-.43-.027-.351.824-.351 1.324-.289-.263-.342-1.088-.131-1.509-.246-.123-.351.132-.492.22.185-1.272 1.869-.588 1.588.763m11.193 1.079c-.377.719-.912 1.508-2.018 1.535-.026-.228-.044-.588 0-.728.851-.088 1.377-.518 2.018-.807zm-5.298.464c.701.369 2 .413 2.965.386.052.211.052.474.052.728-1.237.053-2.693-.254-3.017-1.114zm-.132.685c.491 1.228 2.167 1.087 3.579 1.052-.061.158-.193.351-.368.412-.457.185-1.702.325-2.334-.008-.394-.211-.658-.693-.877-.974-.096-.132-.623-.474 0-.482z'
                fill='#231F20'
            />
            <Path
                d='M168.117 202.595c-.571.983-1.123 1.991-1.799 2.851.281-.833.404-2.237.448-3.307.596-.281 1.105.062 1.351.456'
                fill='#81B0C4'
            />
            <Path
                d='M171.196 206.121c-.641.132-1.088.755-1.72.711.351-.483.948-.693 1.72-.711zm.28 1c-.526.053-1.14.141-1.666.097.254-.386 1.219-.246 1.666-.097zm.184.869c-.587.008-1.315 0-1.877-.044.334-.36 1.5-.132 1.877.044z'
                fill='#231F20'
            />
            <Path
                d='M167.011 210.358c.088.737.378 1.482.342 2.289-.324.105-.508.202-.947.202-.026-.684-.123-1.737-.096-2.395.21.018.526-.149.701-.096z'
                fill='#DCD9D8'
            />
            <Path
                d='M166.064 199.482c-.298.193-.544.429-.833.64-.632.035-.974-.044-1.43-.404.009-.026.052-.017.052-.052.676.298 1.535-.123 2.211-.184'
                fill='#F0D6B7'
            />
            <Path
                d='M162.538 204.069c.184-.798.912-1.219 1.57-1.658.675.86 1.088 1.965 1.544 3.035-1.079-.325-2.176-.842-3.114-1.377z'
                fill='#81B0C4'
            />
            <Path
                d='M166.31 210.463c-.027.658.061 1.702.096 2.395.439 0 .623-.097.948-.202.035-.807-.255-1.553-.342-2.289-.176-.062-.492.105-.702.096zm-6.772-3.719c.289 2.64.702 4.851 1.465 7.193 1.693.517 3.728.561 5.228.096-.272-1.316-.158-2.921-.316-4.333-.123-1.061-.061-2.123-.228-3.202-1.816-.377-4.377-.087-6.149.246zm6.579-.228c-.018 1.132.052 2.254.14 3.386.439-.062.728-.105 1.132-.202-.132-1.088-.114-2.324-.386-3.289-.307.009-.579 0-.886.105zm2.202-.184c-.211-.044-.448 0-.641 0 .097.921.316 1.938.395 2.912.307.009.474-.14.728-.184.018-.851-.07-2.026-.482-2.728zm3.342 3.052c.649-.158 1.052-.947.868-1.763-.123-.544-.333-1.579-.57-1.93-.167-.254-.632-.596-1.009-.359-.605.386-1.667.5-2.105.965.219.737.289 1.736.377 2.666.754.044 1.675-.21 2.307.062-.439.14-1 .14-1.377.35.316.15 1.035.123 1.509.009zm-6.018-3.938c-.456-1.07-.868-2.175-1.544-3.035-.658.439-1.377.86-1.57 1.658.948.535 2.044 1.052 3.114 1.377zm1.123-3.307c-.044 1.07-.167 2.474-.447 3.307.675-.868 1.228-1.868 1.798-2.851-.246-.394-.755-.737-1.351-.456zm-1.272-.447c-.254-.027-.474.298-.807.158-.079.087-.149.175-.228.263.737.894 1.079 2.158 1.649 3.201.307-1.008.272-2.105.342-3.201-.421.017-.658-.395-.956-.421zm-.816-1.079c-.026.307.044.403.105.754 1 .316.834-1.377-.105-.754zm-1.114-.368a6.038 6.038 0 00-1.64-.597c-.693-.131-.623.947-.597 1.588.027.508.29 1.043.404 1.386.053.157.07.324.202.359.237.053 1.026-.254 1.245-.377.474-.254.842-.667 1.246-.947.009-.132.009-.272.017-.404a2.113 2.113 0 00-.877-.219c.237-.123.597-.123.816-.263 0-.053 0-.105.009-.158-.404-.044-.553-.219-.825-.368zm-4.122-.746c-.36.368 1.008.86 1.438.886 0-.228.132-.447.105-.614-.517-.088-1.193-.026-1.543-.272zm4.421.167c0 .035-.044.026-.053.052.465.36.807.439 1.43.404.28-.202.535-.448.833-.641-.684.062-1.544.483-2.211.185h.001zm4.052 1.228c-.017-.404-.123-1.237-.377-1.386-.526-.307-1.456.623-1.851.763.044.123.114.219.123.377a1.12 1.12 0 01.719.079c-.237.026-.491.026-.649.14-.053.167.018.386-.026.614.552.158 1.193.237 1.894.263.132-.175.185-.508.167-.85zm-9.079-1.044c-.114-.079-.877-1.07-.982-1.026-1.377.543-2.667 1.482-3.816 2.377 1.097 2.359 1.544 5.245 1.623 8.025 1.254.588 2.359 1.439 4.07 1.527-.202-1.395-.377-2.649-.491-3.965-.43-.184-1.044.009-1.448-.053 0-.482.614-.21.667-.535.035-.245-.342-.263-.219-.649.316.114.482.369.816.465.307-.667 0-1.851.043-2.412.009-.105.053-.579.29-.5.21.07-.009 1.272.009 1.798.017.491-.062.956.14 1.263a47.232 47.232 0 015.114-.421c-.395-.166-.86-.324-1.368-.614-.281-.158-1.15-.482-1.228-.745-.132-.421.333-.641.412-1-.834.456-.991-.439-1.193-1.062-.176-.57-.281-1-.325-1.324-.728-.368-1.5-.711-2.114-1.149zm8.351-.912c1.149-.553 1.36 2.078.903 2.929.071.255.307.351.404.579-.64 1.149-1.351 2.219-2.009 3.351.483-.307 1.184-.053 1.755-.281.21-.079.359-.561.517-.947.439-1.053.895-2.386 1.097-3.386.043-.228.175-.728.14-.93-.053-.368-.544-.64-.798-.859-.465-.421-.755-.781-1.246-1.176-.184.29-.605.483-.763.72zm-10.974-10.184c-.543.605-.429 1.728-.368 2.535.991-.623 2.298.053 2.289 1.105.474-.009.176-.587.088-.965-.281-1.219.474-2.534.035-3.648-.851.07-1.544.412-2.044.973zm3.913-3.5c-1.237.351-2.825 1.255-3.334 2.369.395-.062.667-.255 1.053-.281.149-.009.342.061.509.018.333-.088.623-.843.877-1.123.246-.272.544-.395.746-.64.131-.062.324-.062.333-.255-.053-.061-.114-.105-.184-.088zm6.447.334c-1.289-.728-3.465-1.272-4.833-.588-1.106.553-2.597 1.465-3.106 2.614.474 1.114-.14 2.131-.184 3.263-.017.605.281 1.123.307 1.78-.166.272-.658.299-1 .281-.114-.579-.315-1.228-.912-1.298-.842-.097-1.465.605-1.5 1.333-.044.86.658 2.281 1.658 2.184.386-.035.482-.421.903-.421.228.456-.35.597-.412.921-.017.088.044.412.088.57.184.746.588 1.719.982 2.29.509.728 1.5.833 2.57.903.193-.412.895-.377 1.351-.272-.552-.219-1.061-.745-1.482-1.21-.483-.535-.974-1.105-1-1.807.921 1.272 1.675 2.386 3.342 2.947 1.263.421 2.737-.193 3.71-.877.404-.281.641-.737.93-1.14 1.07-1.544 1.57-3.737 1.465-5.868-.044-.877-.044-1.755-.342-2.342-.307-.614-1.351-1.176-1.965-.614-.114-.606.509-.974 1.237-.755-.518-.675-1.061-1.473-1.807-1.894zm2.403 19.832c1.009-.5 2.886-1.342 3.509 0 .237.5.509 1.333.623 1.85.167.72-.184 2.246-.93 2.483-.658.21-1.421.201-2.21.044a1.279 1.279 0 01-.272-.351c-.562-.018-1.097.026-1.535.263.043.421-.237.482-.509.57-.193.781.395 1.798.254 2.5-.096.508-.719.587-1.175.675-.018.281.017.518.052.754-.105.386-.57.606-1.017.658-1.465.176-3.684.255-5.088-.254-.394-.965-.701-2.131-1.026-3.228-1.368.149-2.482-.588-3.526-1.079-.36-.166-.86-.263-1-.552-.132-.281-.079-.816-.114-1.316-.079-1.289-.158-2.535-.491-3.851-.15-.596-.422-1.114-.606-1.684-.175-.526-.473-1.184-.552-1.71-.114-.781.622-.825 1.087-1.167.728-.526 1.299-.815 2.088-1.289.237-.14.939-.491 1.018-.658.158-.324-.272-.781-.386-1.035a3.098 3.098 0 01-.307-1.14 2.206 2.206 0 01-1.465-.939c-.5-.737-.851-2.096-.413-3.122.036-.079.202-.246.229-.369.052-.245-.097-.57-.106-.833-.044-1.342.228-2.5 1.132-2.903.368-1.465 1.684-1.947 2.921-2.676.465-.271.974-.447 1.5-.64 1.886-.693 4.789-.561 6.359.623.667.5 1.728 1.561 2.106 2.333 1.008 2.026.929 5.421.228 7.894-.097.334-.228.816-.421 1.219-.132.281-.544.834-.5 1.079.052.255.947.93 1.14 1.114.342.334 1 .772 1.052 1.193.062.447-.192 1.062-.324 1.491a57.589 57.589 0 01-1.325 4.053z'
                fill='#231F20'
            />
            <Path
                d='M162.266 195.455c.053-.07.351-.184.772.018 0 0-.5.079-.456.912l-.211-.044c.009.009-.21-.745-.105-.886z'
                fill='#F7E4CD'
            />
            <Path
                d='M165.897 202.578a.232.232 0 01-.228.228.232.232 0 01-.228-.228c0-.123.105-.228.228-.228.132 0 .228.105.228.228zm.228 1.061a.232.232 0 01-.228.228.233.233 0 01-.228-.228c0-.123.106-.228.228-.228.132 0 .228.097.228.228z'
                fill='#1D1919'
            />
            <Circle
                cx={155}
                cy={28}
                r={28}
                fill='#fff'
            />
            <Circle
                cx={155}
                cy={28}
                r={27.5}
                stroke='#3F4350'
                strokeOpacity={0.16}
            />
            <Path
                d='M155 46c9.941 0 18-8.059 18-18s-8.059-18-18-18-18 8.059-18 18 8.059 18 18 18z'
                fill='#4A8CFF'
            />
            <Path
                d='M143.451 22.365v8.459a3.461 3.461 0 003.475 3.444h12.33a.631.631 0 00.633-.625v-8.459a3.462 3.462 0 00-3.475-3.444h-12.327a.629.629 0 00-.636.625zm17.223 3.3l5.09-3.72c.442-.366.785-.274.785.39v11.339c0 .754-.419.663-.785.388l-5.09-3.711v-4.687z'
                fill='#fff'
            />
            <Defs>
                <LinearGradient
                    id='paint0_linear_571_6460'
                    x1={64.5224}
                    y1={168.603}
                    x2={59.8304}
                    y2={173.354}
                    gradientUnits='userSpaceOnUse'
                >
                    <Stop
                        offset={0.18}
                        stopColor='#0052CC'
                    />
                    <Stop
                        offset={1}
                        stopColor='#2684FF'
                    />
                </LinearGradient>
                <LinearGradient
                    id='paint1_linear_571_6460'
                    x1={65.7812}
                    y1={182.083}
                    x2={70.4641}
                    y2={177.341}
                    gradientUnits='userSpaceOnUse'
                >
                    <Stop
                        offset={0.18}
                        stopColor='#0052CC'
                    />
                    <Stop
                        offset={1}
                        stopColor='#2684FF'
                    />
                </LinearGradient>
            </Defs>
        </Svg>
    );
};

export default IntegrationsSvg;
