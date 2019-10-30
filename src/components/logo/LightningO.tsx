import React from 'react';
import styled from 'styled-components';
import { colors } from 'common/colors';

interface SvgProps {
  width: number;
  height: number;
}

interface OwnProps {
  size: number;
  oColor: string;
  lightningColor: string;
}

const OSvg = styled.svg<SvgProps>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`;

const LightningO = ({ size = 300, oColor = colors.officialBlue, lightningColor = colors.officialOrange }: OwnProps) => {
  const proportion = 615 / 445;
  return (
    <OSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 615 445" width={size} height={size / proportion}>
      <defs>
        <clipPath id="a" clipPathUnits="userSpaceOnUse">
          <path d="M0 334h461.5V0H0z" />
        </clipPath>
      </defs>
      <g clipPath="url(#a)" transform="matrix(1.33333 0 0 -1.33333 0 445.33333)">
        <path
          fill={oColor}
          d="M382.7412 152.5791c-8.276-2.745-14.313-4.865-18.515-6.387-2.36-6.115-5.128-12.264-8.382-18.467-11.918-22.722-26.992-39.675-45.225-50.854-18.234-11.19-37.249-16.78-57.024-16.78-24.316 0-43.931 7.083-58.843 21.259-13.519 12.841-20.842 28.514-22.109 46.958-7.216-4.695-17.387-11.43-28.925-19.451-15.046-10.458-27.251-19.677-33.787-24.716 1.26-3.054 2.594-6.106 4.095-9.15 9.403-19.108 25.37-35.118 47.899-48.04 22.536-12.919 50.414-19.381 83.647-19.381 38.256 0 72.543 8.13 102.855 24.383 30.312 16.257 54.302 39.46 71.976 69.608 10.617 18.122 18.021 36.622 22.255 55.497-8.37-8.307-19.888-13.447-32.612-13.447-10.225 0-19.642 3.355-27.305 8.968"
        />
        <path
          fill="none"
          stroke="#fff"
          strokeWidth="2.561"
          d="M382.7412 152.5791c-8.276-2.745-14.313-4.865-18.515-6.387-2.36-6.115-5.128-12.264-8.382-18.467-11.918-22.722-26.992-39.675-45.225-50.854-18.234-11.19-37.249-16.78-57.024-16.78-24.316 0-43.931 7.083-58.843 21.259-13.519 12.841-20.842 28.514-22.109 46.958-7.216-4.695-17.387-11.43-28.925-19.451-15.046-10.458-27.251-19.677-33.787-24.716 1.26-3.054 2.594-6.106 4.095-9.15 9.403-19.108 25.37-35.118 47.899-48.04 22.536-12.919 50.414-19.381 83.647-19.381 38.256 0 72.543 8.13 102.855 24.383 30.312 16.257 54.302 39.46 71.976 69.608 10.617 18.122 18.021 36.622 22.255 55.497-8.37-8.307-19.888-13.447-32.612-13.447-10.225 0-19.642 3.355-27.305 8.968z"
        />
        <path
          fill={oColor}
          d="M184.9746 193.6045c5.336 11.978 12.352 23.543 21.089 34.682 22.449 28.619 51.587 42.929 87.408 42.929 23.343 0 42.551-6.843 57.63-20.525 10.284-9.338 16.974-21.143 20.241-35.293 8.284 12.578 22.517 20.896 38.703 20.896 11.531 0 22.049-4.238 30.159-11.208 1.253.24 2.448.462 3.502.656-5.457 24.893-17.942 45.834-37.53 62.775-27.157 23.479-62.778 35.223-106.869 35.223-32.907 0-62.245-5.735-88.022-17.194-25.77-11.464-47.133-27.06-64.066-46.791-16.94-19.732-29.545-43.006-37.815-69.82-6.323-20.008-9.484-39.047-9.484-57.107 0-1.541.08-3.075.14-4.616 5.829 5.416 17.14 15.321 37.615 31.32 24.677 19.29 40.403 29.723 47.299 34.073"
        />
        <path
          fill="none"
          stroke="#fff"
          strokeWidth="2.561"
          d="M184.9746 193.6045c5.336 11.978 12.352 23.543 21.089 34.682 22.449 28.619 51.587 42.929 87.408 42.929 23.343 0 42.551-6.843 57.63-20.525 10.284-9.338 16.974-21.143 20.241-35.293 8.284 12.578 22.517 20.896 38.703 20.896 11.531 0 22.049-4.238 30.159-11.208 1.253.24 2.448.462 3.502.656-5.457 24.893-17.942 45.834-37.53 62.775-27.157 23.479-62.778 35.223-106.869 35.223-32.907 0-62.245-5.735-88.022-17.194-25.77-11.464-47.133-27.06-64.066-46.791-16.94-19.732-29.545-43.006-37.815-69.82-6.323-20.008-9.484-39.047-9.484-57.107 0-1.541.08-3.075.14-4.616 5.829 5.416 17.14 15.321 37.615 31.32 24.677 19.29 40.403 29.723 47.299 34.073z"
        />
        <path
          fill={lightningColor}
          d="M370.3691 166.1123c-4.194 6.975-6.655 15.114-6.655 23.848 0 1.285.086 2.547.186 3.806-2.488-.686-4.955-1.373-7.356-2.06-32.66-9.323-57.116-18.543-70.109-25.403 10.945 52.538 44.325 86.102 44.325 86.102s-63.653-18.713-142.878-69.865c-3.081-1.99-6.196-4.043-9.324-6.134-24.983-16.694-51.28-36.569-77.464-60.049-1.34-1.204-2.681-2.425-4.021-3.645-30.92-28.184-61.565-61.398-89.56-100.373 35.911 30.005 67.184 55.369 95.102 76.757 1.427 1.094 2.828 2.155 4.241 3.228 24.097 18.341 45.699 33.681 65.627 46.438 4.168 2.672 8.27 5.243 12.305 7.69 24.296 14.76 46.238 25.582 67.534 33.349-16.787-19.703-41.957-95.224-41.957-95.224s51.407 34.205 146.179 68.758c3.781 1.381 7.609 2.757 11.531 4.135 2.241.787 4.522 1.574 6.803 2.361-1.674 1.958-3.168 4.063-4.509 6.281"
        />
        <path
          fill="none"
          stroke="#fff"
          strokeWidth="2.561"
          d="M370.3691 166.1123c-4.194 6.975-6.655 15.114-6.655 23.848 0 1.285.086 2.547.186 3.806-2.488-.686-4.955-1.373-7.356-2.06-32.66-9.323-57.116-18.543-70.109-25.403 10.945 52.538 44.325 86.102 44.325 86.102s-63.653-18.713-142.878-69.865c-3.081-1.99-6.196-4.043-9.324-6.134-24.983-16.694-51.28-36.569-77.464-60.049-1.34-1.204-2.681-2.425-4.021-3.645-30.92-28.184-61.565-61.398-89.56-100.373 35.911 30.005 67.184 55.369 95.102 76.757 1.427 1.094 2.828 2.155 4.241 3.228 24.097 18.341 45.699 33.681 65.627 46.438 4.168 2.672 8.27 5.243 12.305 7.69 24.296 14.76 46.238 25.582 67.534 33.349-16.787-19.703-41.957-95.224-41.957-95.224s51.407 34.205 146.179 68.758c3.781 1.381 7.609 2.757 11.531 4.135 2.241.787 4.522 1.574 6.803 2.361-1.674 1.958-3.168 4.063-4.509 6.281z"
        />
        <path
          fill={lightningColor}
          fillRule="evenodd"
          d="M410.0459 227.2188c-20.575 0-37.262-16.685-37.262-37.261 0-20.58 16.687-37.269 37.262-37.269 20.581 0 37.261 16.689 37.261 37.269 0 20.576-16.68 37.261-37.261 37.261"
        />
        <path
          fill="none"
          stroke="#fff"
          strokeWidth="2.561"
          d="M410.0459 227.2188c-20.575 0-37.262-16.685-37.262-37.261 0-20.58 16.687-37.269 37.262-37.269 20.581 0 37.261 16.689 37.261 37.269 0 20.576-16.68 37.261-37.261 37.261z"
        />
      </g>
    </OSvg>
  );
};

export default LightningO;
