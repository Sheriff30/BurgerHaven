import React from "react";

export default function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.0"
      width="160"
      viewBox="0 0 300.000000 95.000000"
      preserveAspectRatio="xMidYMid meet"
      className="logo-svg"
    >
      <style>
        {`
          .logo-svg {
            opacity: 0;
            animation: fadeIn 0.5s ease-in forwards;
          }

          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          .main-path {
            stroke-dasharray: 2000;
            stroke-dashoffset: 2000;
            animation: drawPath 2s ease-in-out forwards;
          }

          .decorative-path {
            opacity: 0;
            animation: fadeInPath 0.3s ease-in forwards;
          }

          @keyframes drawPath {
            to {
              stroke-dashoffset: 0;
            }
          }

          @keyframes fadeInPath {
            to {
              opacity: 1;
            }
          }

          .path-1 { animation-delay: 0.1s; }
          .path-2 { animation-delay: 0.2s; }
          .path-3 { animation-delay: 0.3s; }
          .path-4 { animation-delay: 0.4s; }
          .path-5 { animation-delay: 0.5s; }
          .path-6 { animation-delay: 0.6s; }
          .path-7 { animation-delay: 0.7s; }
          .path-8 { animation-delay: 0.8s; }
          .path-9 { animation-delay: 0.9s; }
          .path-10 { animation-delay: 1s; }
          .path-11 { animation-delay: 1.1s; }
          .path-12 { animation-delay: 1.2s; }
          .path-13 { animation-delay: 1.3s; }
          .path-14 { animation-delay: 1.4s; }
          .path-15 { animation-delay: 1.5s; }
          .path-16 { animation-delay: 1.6s; }
          .path-17 { animation-delay: 1.7s; }
          .path-18 { animation-delay: 1.8s; }
          .path-19 { animation-delay: 1.9s; }
          .path-20 { animation-delay: 2s; }
          .path-21 { animation-delay: 2.1s; }
          .path-22 { animation-delay: 2.2s; }
          .path-23 { animation-delay: 2.3s; }
          .path-24 { animation-delay: 2.4s; }
          .path-25 { animation-delay: 2.5s; }
          .path-26 { animation-delay: 2.6s; }
          .path-27 { animation-delay: 2.7s; }
          .path-28 { animation-delay: 2.8s; }
          .path-29 { animation-delay: 2.9s; }
          .path-30 { animation-delay: 3s; }
          .path-31 { animation-delay: 3.1s; }
          .path-32 { animation-delay: 3.2s; }
          .path-33 { animation-delay: 3.3s; }
          .path-34 { animation-delay: 3.4s; }
          .path-35 { animation-delay: 3.5s; }
          .path-36 { animation-delay: 3.6s; }
          .path-37 { animation-delay: 3.7s; }
          .path-38 { animation-delay: 3.8s; }
          .path-39 { animation-delay: 3.9s; }
          .path-40 { animation-delay: 4s; }
        `}
      </style>
      <g
        transform="translate(0.000000,95.000000) scale(0.100000,-0.100000)"
        fill="#ffff"
        stroke="none"
      >
        <path
          className="main-path"
          d="M1535 928 c-16 -6 -32 -14 -35 -18 -3 -4 -33 -21 -67 -39 -191 -96 -306 -305 -276 -502 21 -131 95 -250 180 -285 47 -20 150 -17 199 5 82 38 134 135 134 254 0 51 2 58 16 53 14 -5 16 -1 11 30 -9 55 -31 80 -87 99 -57 19 -72 15 -47 -13 10 -10 14 -22 10 -25 -3 -4 -1 -7 5 -7 7 0 12 -11 12 -25 0 -16 6 -25 15 -25 35 0 6 -105 -46 -163 -35 -41 -39 -42 -97 -42 -52 0 -65 4 -99 31 -44 36 -80 100 -89 161 l-6 42 58 4 59 3 -58 2 -59 2 7 43 c17 101 67 194 167 309 54 63 88 82 183 103 l60 13 -60 0 c-33 0 -73 -4 -90 -10z"
        />
        <path
          className="decorative-path path-1"
          d="M1823 933 c15 -2 37 -2 50 0 12 2 0 4 -28 4 -27 0 -38 -2 -22 -4z"
        />
        <path
          className="decorative-path path-2"
          d="M1943 923 c9 -2 23 -2 30 0 6 3 -1 5 -18 5 -16 0 -22 -2 -12 -5z"
        />
        <path
          className="decorative-path path-3"
          d="M2028 913 c6 -2 18 -2 25 0 6 3 1 5 -13 5 -14 0 -19 -2 -12 -5z"
        />
        <path
          className="decorative-path path-4"
          d="M2088 903 c6 -2 18 -2 25 0 6 3 1 5 -13 5 -14 0 -19 -2 -12 -5z"
        />
        <path
          className="decorative-path path-5"
          d="M2148 893 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z"
        />
        <path
          className="decorative-path path-6"
          d="M2198 883 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z"
        />
        <path
          className="decorative-path path-7"
          d="M2420 816 c25 -13 54 -33 64 -45 19 -21 19 -21 -16 -21 -23 0 -38 -6 -42 -15 -3 -8 -12 -15 -21 -15 -8 0 -20 -12 -25 -26 -14 -35 -13 -44 5 -44 12 0 13 -4 3 -25 -6 -14 -14 -25 -17 -25 -4 0 -7 -8 -8 -17 0 -10 -4 -41 -8 -68 -7 -46 -5 -54 20 -83 33 -40 74 -62 113 -62 86 0 190 246 138 325 -10 15 -37 35 -61 45 -23 10 -46 23 -49 29 -9 15 -85 57 -116 65 -14 4 -5 -4 20 -18z m141 -212 c11 -9 19 -26 19 -38 0 -21 -110 -136 -131 -136 -15 0 -6 118 12 169 11 31 14 33 47 28 19 -4 43 -14 53 -23z"
        />
        <path
          className="decorative-path path-8"
          d="M1898 743 c-16 -2 -28 -11 -28 -19 0 -8 -11 -19 -24 -25 -19 -9 -32 -33 -57 -105 -31 -88 -35 -94 -61 -94 l-28 0 21 -37 c18 -31 19 -42 10 -79 -23 -92 0 -95 33 -5 10 28 24 51 31 51 7 0 34 3 60 6 l47 7 -4 -60 -3 -61 29 29 c17 16 33 29 38 29 4 0 8 11 8 25 0 14 11 37 25 51 14 14 25 33 25 44 0 10 6 21 13 23 7 4 4 8 -9 12 -19 6 -22 16 -27 102 -3 52 -7 97 -9 99 -8 7 -63 12 -90 7z m-8 -115 c0 -18 3 -49 6 -69 l6 -36 -43 -6 c-24 -3 -44 -5 -46 -4 -5 6 60 147 68 147 5 0 9 -15 9 -32z"
        />
        <path
          className="decorative-path path-9"
          d="M2073 744 c-8 -3 -13 -24 -13 -48 0 -50 22 -76 63 -76 24 0 27 -4 27 -34 0 -19 -6 -37 -12 -39 -7 -3 -8 -6 -3 -6 7 -1 8 -32 2 -97 -5 -52 -7 -98 -4 -100 2 -3 18 9 35 25 22 20 40 54 58 110 15 44 32 81 38 81 8 0 8 2 0 8 -6 4 -14 22 -17 40 -6 32 -6 32 34 32 35 0 40 2 34 18 -4 9 -10 27 -12 39 -4 16 -17 26 -42 33 -43 13 -171 22 -188 14z"
        />
        <path
          className="decorative-path path-10"
          d="M2723 738 c-44 -11 -55 -30 -27 -46 13 -7 14 -15 5 -48 -6 -21 -11 -87 -11 -145 0 -88 3 -108 16 -113 27 -10 34 -7 34 17 0 28 15 53 24 39 3 -6 40 -24 81 -41 l75 -32 35 28 34 27 -80 42 c-45 23 -92 53 -106 66 l-25 23 24 6 c13 4 50 8 83 8 104 2 108 5 103 69 -4 38 -11 59 -23 69 -46 33 -171 49 -242 31z m182 -98 c37 -14 25 -25 -51 -44 -85 -22 -87 -22 -79 17 4 17 10 36 12 41 7 10 77 2 118 -14z"
        />
        <path
          className="decorative-path path-11"
          d="M572 733 c-46 -9 -97 -73 -128 -160 -21 -60 -33 -83 -46 -83 -25 0 -29 -13 -12 -45 19 -38 10 -75 -26 -110 -17 -16 -30 -33 -30 -37 0 -5 11 4 25 19 24 28 24 28 25 5 0 -28 17 -20 31 14 5 14 24 32 41 40 30 14 31 14 6 9 -28 -5 -34 1 -20 21 9 14 110 26 117 14 3 -5 -3 -11 -12 -13 -16 -4 -16 -5 1 -6 15 -1 17 -8 14 -46 -2 -32 0 -42 7 -32 5 7 22 21 37 31 15 10 28 27 30 39 2 16 12 24 38 28 l35 6 -35 2 c-35 2 -35 2 -12 18 15 11 22 25 22 50 0 19 -4 32 -9 29 -4 -3 -11 40 -14 96 -4 55 -8 102 -9 104 -7 6 -55 11 -76 7z m-19 -160 l5 -62 -40 -6 c-22 -4 -41 -5 -43 -3 -2 1 11 36 27 76 17 40 34 69 38 65 4 -4 10 -36 13 -70z"
        />
        <path
          className="decorative-path path-12"
          d="M57 715 c-20 -19 -47 -173 -47 -264 0 -59 4 -77 17 -87 25 -19 30 -17 37 14 4 15 16 58 28 97 l20 70 40 -80 c22 -44 47 -88 56 -97 22 -26 48 -22 61 10 17 41 49 198 57 277 7 65 6 69 -9 56 -10 -7 -17 -25 -17 -40 0 -30 -36 -164 -52 -194 -10 -19 -12 -19 -23 -3 -7 9 -18 53 -25 97 -9 57 -18 83 -31 93 -11 8 -17 20 -14 28 4 11 -3 19 -26 27 -42 15 -55 14 -72 -4z"
        />
        <path
          className="decorative-path path-13"
          d="M895 610 c-80 -137 -74 -138 -116 18 -12 45 -26 82 -31 82 -5 0 -13 -10 -19 -23 -10 -22 5 -145 27 -224 5 -17 1 -22 -18 -26 -20 -4 -19 -4 6 -6 25 -1 27 -4 22 -25 -5 -20 0 -29 24 -46 27 -19 32 -20 51 -6 30 21 91 96 125 153 23 39 28 61 30 118 1 61 -10 105 -26 105 -3 0 -36 -54 -75 -120z"
        />
        <path
          className="decorative-path path-14"
          d="M1053 673 c-14 -41 -17 -67 -11 -88 4 -16 5 -51 2 -77 -6 -43 -9 -48 -33 -49 -22 -2 -23 -2 -5 -6 16 -3 24 -14 28 -38 4 -19 17 -41 29 -50 22 -15 22 -15 36 35 9 33 19 50 30 50 13 0 13 2 2 9 -11 7 -10 25 9 103 l23 95 -22 37 c-16 25 -30 36 -46 36 -19 0 -26 -9 -42 -57z"
        />
        <path
          className="decorative-path path-15"
          d="M2300 580 c-20 -6 -21 -8 -5 -8 11 0 29 3 40 8 25 11 -1 11 -35 0z"
        />
        <path
          className="decorative-path path-16"
          d="M2073 533 c9 -2 23 -2 30 0 6 3 -1 5 -18 5 -16 0 -22 -2 -12 -5z"
        />
        <path
          className="decorative-path path-17"
          d="M1448 473 c17 -2 47 -2 65 0 17 2 3 4 -33 4 -36 0 -50 -2 -32 -4z"
        />
        <path
          className="decorative-path path-18"
          d="M498 393 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z"
        />
        <path
          className="decorative-path path-19"
          d="M2103 253 c9 -2 25 -2 35 0 9 3 1 5 -18 5 -19 0 -27 -2 -17 -5z"
        />
        <path
          className="decorative-path path-20"
          d="M1958 243 c12 -2 30 -2 40 0 9 3 -1 5 -23 4 -22 0 -30 -2 -17 -4z"
        />
        <path
          className="decorative-path path-21"
          d="M1833 233 c15 -2 37 -2 50 0 12 2 0 4 -28 4 -27 0 -38 -2 -22 -4z"
        />
        <path
          className="decorative-path path-22"
          d="M1713 223 c15 -2 37 -2 50 0 12 2 0 4 -28 4 -27 0 -38 -2 -22 -4z"
        />
        <path
          className="decorative-path path-23"
          d="M2120 204 c-12 -4 -14 -19 -12 -74 2 -39 8 -70 13 -70 5 0 9 7 9 14 0 13 5 13 35 0 59 -24 78 2 21 29 -31 14 -55 51 -43 64 3 2 18 3 34 1 l28 -4 -25 -12 c-24 -11 -24 -12 9 -9 39 2 47 15 29 40 -13 17 -70 30 -98 21z"
        />
        <path
          className="decorative-path path-24"
          d="M2240 201 c0 -21 13 -41 27 -41 13 0 14 -10 9 -57 l-7 -58 21 24 c11 13 23 41 26 62 4 23 13 39 22 41 14 3 13 5 -2 21 -18 18 -96 25 -96 8z"
        />
        <path
          className="decorative-path path-25"
          d="M2403 200 c-36 -14 -57 -116 -29 -139 15 -13 66 -5 66 11 0 5 -4 6 -10 3 -5 -3 -18 -2 -27 4 -16 8 -12 12 22 27 l40 17 -28 11 c-30 11 -31 29 -1 35 10 2 25 8 32 14 11 8 11 12 0 18 -16 11 -37 10 -65 -1z"
        />
        <path
          className="decorative-path path-26"
          d="M2013 185 c-20 -22 -43 -96 -42 -135 0 -33 1 -34 10 -10 17 43 59 56 59 18 0 -21 1 -21 18 -5 13 13 16 31 15 73 -2 31 -5 60 -9 65 -8 13 -37 10 -51 -6z m13 -72 c-14 -14 -23 4 -13 27 l10 25 5 -23 c2 -13 1 -26 -2 -29z"
        />
        <path
          className="decorative-path path-27"
          d="M1899 163 c-5 -16 -12 -34 -14 -40 -9 -27 -35 -14 -35 17 0 58 -29 26 -32 -35 -1 -30 21 -77 32 -70 6 4 8 15 5 26 -5 14 -2 19 13 19 14 0 21 -9 26 -31 8 -42 22 -29 30 28 4 27 10 63 13 81 4 25 2 32 -11 32 -9 0 -21 -12 -27 -27z"
        />
        <path
          className="decorative-path path-28"
          d="M2500 131 c-12 -58 -6 -98 10 -70 7 10 14 9 35 -5 15 -10 34 -15 43 -11 13 5 11 11 -16 31 -44 35 -41 47 8 39 39 -7 40 -6 40 23 0 32 -30 52 -79 52 -26 0 -29 -4 -41 -59z m95 8 c5 -5 -6 -9 -28 -9 -29 0 -35 3 -31 15 6 16 39 12 59 -6z"
        />
        <path
          className="decorative-path path-29"
          d="M1738 163 c-21 -8 -38 -20 -38 -26 0 -6 -9 -20 -20 -32 -17 -18 -19 -26 -9 -53 9 -27 16 -32 43 -32 32 0 51 11 75 42 11 15 8 16 -43 11 -71 -7 -73 7 -6 49 28 17 50 37 50 44 0 17 -6 17 -52 -3z"
        />
        <path
          className="decorative-path path-30"
          d="M1173 153 c9 -2 23 -2 30 0 6 3 -1 5 -18 5 -16 0 -22 -2 -12 -5z"
        />
        <path
          className="decorative-path path-31"
          d="M1113 143 c9 -2 23 -2 30 0 6 3 -1 5 -18 5 -16 0 -22 -2 -12 -5z"
        />
        <path
          className="decorative-path path-32"
          d="M1043 133 c9 -2 23 -2 30 0 6 3 -1 5 -18 5 -16 0 -22 -2 -12 -5z"
        />
        <path
          className="decorative-path path-33"
          d="M2662 124 c-28 -19 -28 -41 0 -71 l21 -23 -27 0 c-16 0 -25 -4 -21 -10 3 -5 24 -10 46 -10 46 0 52 19 13 45 -20 13 -23 19 -13 31 14 17 59 19 59 2 0 -8 5 -6 10 4 25 43 -39 67 -88 32z"
        />
        <path
          className="decorative-path path-34"
          d="M973 123 c9 -2 25 -2 35 0 9 3 1 5 -18 5 -19 0 -27 -2 -17 -5z"
        />
        <path
          className="decorative-path path-35"
          d="M913 113 c9 -2 23 -2 30 0 6 3 -1 5 -18 5 -16 0 -22 -2 -12 -5z"
        />
        <path
          className="decorative-path path-36"
          d="M843 103 c9 -2 23 -2 30 0 6 3 -1 5 -18 5 -16 0 -22 -2 -12 -5z"
        />
        <path
          className="decorative-path path-37"
          d="M763 93 c9 -2 25 -2 35 0 9 3 1 5 -18 5 -19 0 -27 -2 -17 -5z"
        />
        <path
          className="decorative-path path-38"
          d="M518 83 c6 -2 18 -2 25 0 6 3 1 5 -13 5 -14 0 -19 -2 -12 -5z"
        />
        <path
          className="decorative-path path-39"
          d="M678 83 c12 -2 30 -2 40 0 9 3 -1 5 -23 4 -22 0 -30 -2 -17 -4z"
        />
        <path
          className="decorative-path path-40"
          d="M588 73 c6 -2 18 -2 25 0 6 3 1 5 -13 5 -14 0 -19 -2 -12 -5z"
        />
      </g>
    </svg>
  );
}
