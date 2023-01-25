import { SVGProps } from "react"

interface IconProps extends SVGProps<SVGSVGElement> { }

export const LogoSci = ({ className }: IconProps) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 512 512">
    <path d="M152.3 1.5c-37.1 6.7-67.6 34.7-77.3 71-3.1 11.4-3.8 30.4-1.6 41.5 1.5 7.1 5.2 19.7 6.2 20.8.1.2 4.3-.2 9.2-.9l8.9-1.2-2.4-5.9c-3.9-9.7-5.5-18.4-5.4-30.3 0-18.4 5.4-34 16.6-48.4 7.5-9.6 16-16.2 28-22.1 13.3-6.5 22.9-8.4 38.4-7.7 21.3.9 36.5 7.8 52.1 23.6 8.2 8.2 10.3 11 14.2 19.1 6 12.1 7.8 18.9 8.5 32 1.2 22.4-6.3 42.3-22.1 58.8-6.9 7.2-12 11.1-21.8 16.2l-6.6 3.5 6.2 7 6.3 6.9 5.9-3.3c20.8-11.8 37.3-31.4 44.8-53.2 12-35.2 3.6-72.5-22.3-99.2C216 6.9 182.8-4 152.3 1.5zM343.3 1c-10.8 2-24.1 8.8-30.5 15.6-4.9 5.3-9.5 14.2-10.8 20.8-1.6 8.6-.6 15.2 3.6 23.6 12.3 24.6 48.5 34.5 75.9 20.8 8.4-4.3 17.8-13.7 21.8-21.7 2.9-6 3.2-7.4 3.2-16.1 0-8.5-.3-10.1-2.9-15.5-5.9-12-19-22.3-33.1-26.2C363.9.6 349.8-.1 343.3 1zM363 35v9h-18v-8.3c0-4.6.3-8.7.7-9 .3-.4 4.4-.7 9-.7h8.3v9z" /><path d="M160 36c-25.7 4-46.2 23.5-51.6 49-2.9 13.6-.4 29.1 6.8 42 1.7 3 3.1 5.6 3.2 5.7 0 0 4.4.8 9.6 1.7 16.8 2.9 34 9.8 47.4 18.9 5.9 4 6 4 10.5 2.8 18.2-4.7 37.1-23.6 42.1-42.1 8.8-32.3-8.5-64.9-40-75.3-8.5-2.9-19.9-4-28-2.7zm24.7 20.2c14.6 5.4 25.7 19.7 27.7 35.5l.7 5.3h-17.8l-.6-3.9c-1.4-10.9-10.9-20.4-21.8-21.8l-3.9-.6V52.8l5.3.7c2.8.4 7.6 1.6 10.4 2.7z" /><path d="M93 151.1C31.2 158.8-10.9 221 4.6 281.8c4.8 19.2 13.2 34 27.4 48.3 17.9 18.1 38.6 28 64.5 31 25 2.9 52.6-4.6 73.2-20.1 4.3-3.2 13.1-11.3 19.5-17.9 12.1-12.5 20.7-18.9 32-23.9 22.8-10.2 50-10.1 72.4.3 11.6 5.3 19.1 11.1 33.4 25.5 7.4 7.5 16.2 15.5 19.5 17.7 42.5 28.6 96.8 24.6 132.9-9.8 4.3-4 10-10.2 12.7-13.8 7-9.3 14.4-24.8 17.4-36.5 2.2-8.6 2.5-12 2.5-26.6 0-14.5-.3-18-2.5-26.6-7.8-30.8-32.5-59.4-61.6-71.1-22.5-9.1-47.3-10.4-70.4-3.7-19.1 5.5-32.2 14-50.5 32.4-14.3 14.5-21.8 20.2-33.4 25.5-22.4 10.4-49.6 10.5-72.4.3-11.2-5-19.4-11.2-34.2-25.9-18.1-18.1-27.6-24.5-46-31.1-12.7-4.5-33.4-6.6-48-4.7zm28.6 18c17.8 3.1 33.2 10.9 46.3 23.3 11.1 10.6 18.2 22.1 23.2 37.6l2.7 8.5 6.3 2.2c3.4 1.2 9.6 4.5 13.7 7.3 15.6 10.9 23.6 10.8 39.8-.2 10.5-7.2 16.6-9.2 27.4-9.1 10.5.1 16.3 2.1 27.9 9.8 4.6 3 8.7 5.5 9.1 5.5.4 0 1.1-3 1.5-6.7 3.8-36.1 28.1-65.3 63-75.9 8.1-2.5 10.5-2.8 24.5-2.8 17.6 0 23.2 1.1 36.7 7.4 19.1 8.9 33.5 23 42.8 41.8 6.4 13 8 20.7 8 38.2 0 13.1-.4 16.7-2.3 23.3-5.7 19.7-19 38.4-35.5 49.6-6.5 4.4-19.8 10.6-27.2 12.6-8.5 2.2-26.7 3.1-36 1.6-19.3-3.1-37.6-12.9-50.7-26.9-9.6-10.2-19.2-28-21.3-39.3-.6-3.4-1-3.7-6.5-5.2-3.6-1-9.2-3.9-14.2-7.3-9.3-6.4-14.2-8.4-20.3-8.4-6 0-9.9 1.6-18.8 7.6-11 7.4-17.2 9.6-27.7 9.7-10.8.1-16.1-1.7-28.1-9.3-5.1-3.3-9.6-6-10.1-6-.4 0-.8 1.5-.8 3.4s-.6 6.7-1.4 10.8c-7.1 36.6-36.5 65.2-72.8 70.9-12 1.9-28.6.6-39.8-3-14.8-4.8-24.9-11-36-22.1-28.9-28.9-34.3-70.5-13.9-106.7 6-10.7 20.6-25.2 31.3-31.2 8.8-5 21.3-9.7 29-11 7.4-1.2 23.3-1.3 30.2 0z" /><path d="M98.2 186.1c-15.7 1.8-28.4 8.2-40.7 20.4-12.4 12.4-18.5 24.9-20.4 41.4-2.9 25.8 8.2 50.5 29.4 65.6 12.2 8.8 24.8 12.7 40.5 12.7 12 0 21.2-2.1 32-7.4 12.1-6 24.8-18.7 30.8-30.8 5.3-10.9 7.4-20 7.4-32s-2.1-21.1-7.4-32c-3.4-6.9-5.9-10.2-13.3-17.5-7.3-7.4-10.6-9.9-17.5-13.3-13-6.4-26.5-8.7-40.8-7.1zm17.8 20.7c0 5.7 2.7 15 6.2 21.1 1.6 3 6.6 10.2 11.1 16 11.9 15.6 17.6 29.6 17.7 42.8v4.3h-18v-5c0-5.9-3-15.4-6.7-21.3-1.5-2.3-6.2-8.9-10.5-14.7-11.6-15.3-15.6-24.9-17.3-40.8l-.7-6.2H116v3.8zm-44 17.9c.1 11 4 19.6 17 36.8 4.6 6 9.8 14.1 11.6 18 3.3 7.1 6.4 19.5 6.4 26v3.5H89v-4.3c0-10.9-4.1-19.5-17.5-37.2-11.2-14.7-15.6-25-17.1-40.2l-.7-6.3H72v3.7zM402 185.7c-25 2.5-46 16.2-56.9 37.3-19.4 37.1-2.8 82.8 35.6 98.3 8.8 3.6 16.4 5 26.8 4.9 11.5 0 20.8-2.2 31.5-7.4 11.1-5.5 24.7-18.6 30.2-29.3 11.1-21.3 11.1-45.7 0-67-5.5-10.7-19.1-23.8-30.2-29.3-11.5-5.6-26.2-8.6-37-7.5zm4.7 24.8c-.8 8.7-4.3 20-8.5 27.2-1.6 2.7-6.5 9.6-10.9 15.4-10.1 13.3-13.3 19.9-14.7 30l-1 7.9h-17.8l.7-6.3c1.7-15.4 6.1-25.8 17.6-40.7 12.7-16.7 16.9-25.6 16.9-36.1V203H407.3l-.6 7.5zm44 18.3c-1.1 14-6 24.7-19.3 42-3.5 4.5-7.7 10.6-9.4 13.5-3 5.4-6 15.9-6 21.4v3.3h-17.9l.6-5.8c1.5-16.4 5.5-25.7 18-42.3 12.4-16.3 14.4-20.7 16.8-36.2l.6-3.7h17.2l-.6 7.8zM185 353.9c-1.9.4-6.6 2.8-10.5 5.3-9.4 6.1-14.4 8.5-25 12.3-8.5 3.1-9.3 3.6-14.7 9.9-6.9 8.2-12.9 19.6-16 30.2-3.3 11.4-3.3 31.6.1 42.4 10.4 33.5 37.6 55.4 71.6 57.7 60.4 4 102.7-59.8 75.8-114.2-12.9-26.1-38.6-42.8-67.8-44-5.5-.2-11.6-.1-13.5.4zm22.6 18.2c7.4 1.3 20.4 7.5 26.7 12.8 23.6 19.7 29.5 52.7 14 79-8 13.6-23.4 25-38.4 28.6-9 2.1-21 1.9-30.4-.5-21.1-5.4-38.6-23.1-44-44.5-1.9-7.6-1.9-22.4 0-30 5.6-22 23.4-39.6 45.5-45 6.8-1.7 18.7-1.8 26.6-.4z" /><path d="M191.5 388.7c-25 2.5-43.4 25.7-39.6 50.1 4.8 30.7 38.9 47.3 65.5 31.7 6-3.5 12.7-10.3 15.9-15.9 4.6-8.3 5.9-13.9 5.5-23.9-.3-8.1-.7-10.1-3.9-16.7-8.1-16.9-25.5-27-43.4-25.3zM427 425.9c-14.7 4-27.9 14-33.6 25.6-2.6 5.5-2.9 6.9-2.9 16.5 0 12 1.3 15.7 8.7 24.7 10.2 12.4 24.9 18.7 43.3 18.7 17 0 29-4.7 40.1-15.8 10-10.1 11.9-14.4 11.9-27.6 0-9.6-.3-11-2.9-16.5-5.8-11.8-19.7-22.2-34.7-25.9-8.5-2.1-21.6-2-29.9.3zm24 33.1v9h-17v-18h17v9z" />
  </svg>
)

const Home = (props: IconProps) => (
  <svg
    viewBox="0 0 1024 1024"
    fill="currentColor"
    height="1em"
    width="1em"
    {...props}
  >
    <path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 00-44.4 0L77.5 505a63.9 63.9 0 00-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0018.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z" />
  </svg>
)
const Dashboard = (props: IconProps) => (
  <svg fill="none" viewBox="0 0 15 15" height="1em" width="1em" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M2.8 1h-.05c-.229 0-.426 0-.6.041A1.5 1.5 0 001.04 2.15C1 2.324 1 2.52 1 2.75V5.25c0 .229 0 .426.041.6A1.5 1.5 0 002.15 6.96C2.324 7 2.52 7 2.75 7H5.25c.229 0 .426 0 .6-.041A1.5 1.5 0 006.96 5.85C7 5.676 7 5.48 7 5.25V2.75c0-.229 0-.426-.041-.6A1.5 1.5 0 005.85 1.04C5.676 1 5.48 1 5.25 1H2.8zm-.417 1.014c.043-.01.11-.014.417-.014h2.4c.308 0 .374.003.417.014a.5.5 0 01.37.37c.01.042.013.108.013.416v2.4c0 .308-.003.374-.014.417a.5.5 0 01-.37.37C5.575 5.996 5.509 6 5.2 6H2.8c-.308 0-.374-.003-.417-.014a.5.5 0 01-.37-.37C2.004 5.575 2 5.509 2 5.2V2.8c0-.308.003-.374.014-.417a.5.5 0 01.37-.37zM9.8 1h-.05c-.229 0-.426 0-.6.041A1.5 1.5 0 008.04 2.15C8 2.324 8 2.52 8 2.75V5.25c0 .229 0 .426.041.6A1.5 1.5 0 009.15 6.96C9.324 7 9.52 7 9.75 7H12.25c.229 0 .426 0 .6-.041A1.5 1.5 0 0013.96 5.85C14 5.676 14 5.48 14 5.25V2.75c0-.229 0-.426-.041-.6A1.5 1.5 0 0012.85 1.04C12.676 1 12.48 1 12.25 1H9.8zm-.417 1.014c.043-.01.11-.014.417-.014h2.4c.308 0 .374.003.417.014a.5.5 0 01.37.37c.01.042.013.108.013.416v2.4c0 .308-.004.374-.014.417a.5.5 0 01-.37.37c-.042.01-.108.013-.416.013H9.8c-.308 0-.374-.003-.417-.014a.5.5 0 01-.37-.37C9.004 5.575 9 5.509 9 5.2V2.8c0-.308.003-.374.014-.417a.5.5 0 01.37-.37zM2.75 8H5.25c.229 0 .426 0 .6.041A1.5 1.5 0 016.96 9.15C7 9.324 7 9.52 7 9.75V12.25c0 .229 0 .426-.041.6A1.5 1.5 0 015.85 13.96C5.676 14 5.48 14 5.25 14H2.75c-.229 0-.426 0-.6-.041A1.5 1.5 0 011.04 12.85C1 12.676 1 12.48 1 12.25V9.75c0-.229 0-.426.041-.6A1.5 1.5 0 012.15 8.04C2.324 8 2.52 8 2.75 8zm.05 1c-.308 0-.374.003-.417.014a.5.5 0 00-.37.37C2.004 9.425 2 9.491 2 9.8v2.4c0 .308.003.374.014.417a.5.5 0 00.37.37c.042.01.108.013.416.013h2.4c.308 0 .374-.004.417-.014a.5.5 0 00.37-.37c.01-.042.013-.108.013-.416V9.8c0-.308-.003-.374-.014-.417a.5.5 0 00-.37-.37C5.575 9.004 5.509 9 5.2 9H2.8zm7-1h-.05c-.229 0-.426 0-.6.041A1.5 1.5 0 008.04 9.15C8 9.324 8 9.52 8 9.75V12.25c0 .229 0 .426.041.6A1.5 1.5 0 009.15 13.96c.174.041.371.041.6.041H12.25c.229 0 .426 0 .6-.041a1.5 1.5 0 001.109-1.109c.041-.174.041-.371.041-.6V9.75c0-.229 0-.426-.041-.6A1.5 1.5 0 0012.85 8.04C12.676 8 12.48 8 12.25 8H9.8zm-.417 1.014c.043-.01.11-.014.417-.014h2.4c.308 0 .374.003.417.014a.5.5 0 01.37.37c.01.042.013.108.013.416v2.4c0 .308-.004.374-.014.417a.5.5 0 01-.37.37c-.042.01-.108.013-.416.013H9.8c-.308 0-.374-.004-.417-.014a.5.5 0 01-.37-.37C9.004 12.575 9 12.509 9 12.2V9.8c0-.308.003-.374.014-.417a.5.5 0 01.37-.37z"
      clipRule="evenodd"
    />
  </svg>
)
const Store = (props: IconProps) => (
  <svg
    viewBox="0 0 512 512"
    fill="currentColor"
    height="1em"
    width="1em"
    {...props}
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={32}
      d="M448 448V240M64 240v208M382.47 48H129.53c-21.79 0-41.47 12-49.93 30.46L36.3 173c-14.58 31.81 9.63 67.85 47.19 69h2c31.4 0 56.85-25.18 56.85-52.23 0 27 25.46 52.23 56.86 52.23s56.8-23.38 56.8-52.23c0 27 25.45 52.23 56.85 52.23s56.86-23.38 56.86-52.23c0 28.85 25.45 52.23 56.85 52.23h1.95c37.56-1.17 61.77-37.21 47.19-69l-43.3-94.54C423.94 60 404.26 48 382.47 48zM32 464h448M136 288h80a24 24 0 0124 24v88h0-128 0v-88a24 24 0 0124-24zM288 464V312a24 24 0 0124-24h64a24 24 0 0124 24v152"
    />
  </svg>
)
const Reports = (props: IconProps) => (
  <svg
    viewBox="0 0 1024 1024"
    fill="currentColor"
    height="1em"
    width="1em"
    {...props}
  >
    <path d="M864 518H506V160c0-4.4-3.6-8-8-8h-26a398.46 398.46 0 00-282.8 117.1 398.19 398.19 0 00-85.7 127.1A397.61 397.61 0 0072 552a398.46 398.46 0 00117.1 282.8c36.7 36.7 79.5 65.6 127.1 85.7A397.61 397.61 0 00472 952a398.46 398.46 0 00282.8-117.1c36.7-36.7 65.6-79.5 85.7-127.1A397.61 397.61 0 00872 552v-26c0-4.4-3.6-8-8-8zM705.7 787.8A331.59 331.59 0 01470.4 884c-88.1-.4-170.9-34.9-233.2-97.2C174.5 724.1 140 640.7 140 552c0-88.7 34.5-172.1 97.2-234.8 54.6-54.6 124.9-87.9 200.8-95.5V586h364.3c-7.7 76.3-41.3 147-96.6 201.8zM952 462.4l-2.6-28.2c-8.5-92.1-49.4-179-115.2-244.6A399.4 399.4 0 00589 74.6L560.7 72c-4.7-.4-8.7 3.2-8.7 7.9V464c0 4.4 3.6 8 8 8l384-1c4.7 0 8.4-4 8-8.6zm-332.2-58.2V147.6a332.24 332.24 0 01166.4 89.8c45.7 45.6 77 103.6 90 166.1l-256.4.7z" />
  </svg>
)
const Design = (props: IconProps) => (
  <svg
    fill="currentColor"
    viewBox="0 0 16 16"
    height="1em"
    width="1em"
    {...props}
  >
    <path d="M15.825.12a.5.5 0 01.132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.067 6.067 0 01-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.118 8.118 0 01-3.078.132 3.659 3.659 0 01-.562-.135 1.382 1.382 0 01-.466-.247.714.714 0 01-.204-.288.622.622 0 01.004-.443c.095-.245.316-.38.461-.452.394-.197.625-.453.867-.826.095-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.201-.925 1.746-.896.126.007.243.025.348.048.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.176-2.67 6.18-6.206 9.117-8.104a.5.5 0 01.596.04zM4.705 11.912a1.23 1.23 0 00-.419-.1c-.246-.013-.573.05-.879.479-.197.275-.355.532-.5.777l-.105.177c-.106.181-.213.362-.32.528a3.39 3.39 0 01-.76.861c.69.112 1.736.111 2.657-.12.559-.139.843-.569.993-1.06a3.122 3.122 0 00.126-.75l-.793-.792zm1.44.026c.12-.04.277-.1.458-.183a5.068 5.068 0 001.535-1.1c1.9-1.996 4.412-5.57 6.052-8.631-2.59 1.927-5.566 4.66-7.302 6.792-.442.543-.795 1.243-1.042 1.826-.121.288-.214.54-.275.72v.001l.575.575zm-4.973 3.04l.007-.005a.031.031 0 01-.007.004zm3.582-3.043l.002.001h-.002z" />
  </svg>
)
const Settings = (props: IconProps) => (
  <svg
    viewBox="0 0 512 512"
    fill="currentColor"
    height="1em"
    width="1em"
    {...props}
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={32}
      d="M262.29 192.31a64 64 0 1057.4 57.4 64.13 64.13 0 00-57.4-57.4zM416.39 256a154.34 154.34 0 01-1.53 20.79l45.21 35.46a10.81 10.81 0 012.45 13.75l-42.77 74a10.81 10.81 0 01-13.14 4.59l-44.9-18.08a16.11 16.11 0 00-15.17 1.75A164.48 164.48 0 01325 400.8a15.94 15.94 0 00-8.82 12.14l-6.73 47.89a11.08 11.08 0 01-10.68 9.17h-85.54a11.11 11.11 0 01-10.69-8.87l-6.72-47.82a16.07 16.07 0 00-9-12.22 155.3 155.3 0 01-21.46-12.57 16 16 0 00-15.11-1.71l-44.89 18.07a10.81 10.81 0 01-13.14-4.58l-42.77-74a10.8 10.8 0 012.45-13.75l38.21-30a16.05 16.05 0 006-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 00-6.07-13.94l-38.19-30A10.81 10.81 0 0149.48 186l42.77-74a10.81 10.81 0 0113.14-4.59l44.9 18.08a16.11 16.11 0 0015.17-1.75A164.48 164.48 0 01187 111.2a15.94 15.94 0 008.82-12.14l6.73-47.89A11.08 11.08 0 01213.23 42h85.54a11.11 11.11 0 0110.69 8.87l6.72 47.82a16.07 16.07 0 009 12.22 155.3 155.3 0 0121.46 12.57 16 16 0 0015.11 1.71l44.89-18.07a10.81 10.81 0 0113.14 4.58l42.77 74a10.8 10.8 0 01-2.45 13.75l-38.21 30a16.05 16.05 0 00-6.05 14.08c.33 4.14.55 8.3.55 12.47z"
    />
  </svg>
)

export const icons = {
  Home, Dashboard, Store, Reports, Design, Settings
}

export type IconType = keyof typeof icons