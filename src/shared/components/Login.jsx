import Image from "next/image";
import { useState } from "react";
import { Modal } from "shared/ui";
import google from "/stories/assets/google.svg";
const Login = () => {
  const [alert, setAlert] = useState(false);
  return (
    <>
      <div className="min-h-screen overflow-hidden bg-gray-100 flex items-center justify-center px-2">
        <div className="relative">
          <div className="absolute right-0 top-0 translate-x-1/2 -translate-y-1/4">
            <svg
              width="160"
              height="160"
              viewBox="0 0 160 160"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="20" cy="20" r="4" stroke="#FF3355" strokeWidth="2" />
              <g opacity="0.2">
                <circle
                  cx="60"
                  cy="20"
                  r="4"
                  stroke="#FF3355"
                  strokeWidth="2"
                />
              </g>
              <circle cx="100" cy="20" r="4" stroke="#FF3355" strokeWidth="2" />
              <g opacity="0.2">
                <circle
                  cx="140"
                  cy="20"
                  r="4"
                  stroke="#FF3355"
                  strokeWidth="2"
                />
              </g>
              <g opacity="0.2">
                <circle
                  cx="20"
                  cy="60"
                  r="4"
                  stroke="#FF3355"
                  strokeWidth="2"
                />
              </g>
              <g opacity="0.2">
                <circle
                  cx="60"
                  cy="60"
                  r="4"
                  stroke="#FF3355"
                  strokeWidth="2"
                />
              </g>
              <g opacity="0.2">
                <circle
                  cx="100"
                  cy="60"
                  r="4"
                  stroke="#FF3355"
                  strokeWidth="2"
                />
              </g>
              <g opacity="0.2">
                <circle
                  cx="140"
                  cy="60"
                  r="4"
                  stroke="#FF3355"
                  strokeWidth="2"
                />
              </g>
              <g opacity="0.2">
                <circle
                  cx="20"
                  cy="100"
                  r="4"
                  stroke="#FF3355"
                  strokeWidth="2"
                />
              </g>
              <circle cx="60" cy="100" r="4" stroke="#FF3355" strokeWidth="2" />
              <g opacity="0.2">
                <circle
                  cx="100"
                  cy="100"
                  r="4"
                  stroke="#FF3355"
                  strokeWidth="2"
                />
              </g>
              <circle
                cx="140"
                cy="100"
                r="4"
                stroke="#FF3355"
                strokeWidth="2"
              />
              <g opacity="0.2">
                <circle
                  cx="20"
                  cy="140"
                  r="4"
                  stroke="#FF3355"
                  strokeWidth="2"
                />
              </g>
              <g opacity="0.2">
                <circle
                  cx="60"
                  cy="140"
                  r="4"
                  stroke="#FF3355"
                  strokeWidth="2"
                />
              </g>
              <g opacity="0.2">
                <circle
                  cx="100"
                  cy="140"
                  r="4"
                  stroke="#FF3355"
                  strokeWidth="2"
                />
              </g>
              <g opacity="0.2">
                <circle
                  cx="140"
                  cy="140"
                  r="4"
                  stroke="#FF3355"
                  strokeWidth="2"
                />
              </g>
            </svg>
          </div>
          <div className="absolute left-0 bottom-0 -translate-x-1/2 translate-y-1/4">
            <svg
              width="160"
              height="160"
              viewBox="0 0 160 160"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="16" y="16" width="8" height="8" fill="#002266" />
              <g opacity="0.2">
                <rect x="56" y="16" width="8" height="8" fill="#002266" />
              </g>
              <rect x="96" y="16" width="8" height="8" fill="#002266" />
              <g opacity="0.2">
                <rect x="136" y="16" width="8" height="8" fill="#002266" />
              </g>
              <g opacity="0.2">
                <rect x="16" y="56" width="8" height="8" fill="#002266" />
              </g>
              <g opacity="0.2">
                <rect x="56" y="56" width="8" height="8" fill="#002266" />
              </g>
              <g opacity="0.2">
                <rect x="96" y="56" width="8" height="8" fill="#002266" />
              </g>
              <g opacity="0.2">
                <rect x="136" y="56" width="8" height="8" fill="#002266" />
              </g>
              <g opacity="0.2">
                <rect x="16" y="96" width="8" height="8" fill="#002266" />
              </g>
              <rect x="56" y="96" width="8" height="8" fill="#002266" />
              <g opacity="0.2">
                <rect x="96" y="96" width="8" height="8" fill="#002266" />
              </g>
              <rect x="136" y="96" width="8" height="8" fill="#002266" />
              <g opacity="0.2">
                <rect x="16" y="136" width="8" height="8" fill="#002266" />
              </g>
              <g opacity="0.2">
                <rect x="56" y="136" width="8" height="8" fill="#002266" />
              </g>
              <g opacity="0.2">
                <rect x="96" y="136" width="8" height="8" fill="#002266" />
              </g>
              <g opacity="0.2">
                <rect x="136" y="136" width="8" height="8" fill="#002266" />
              </g>
            </svg>
          </div>
          <div className="relative z-10 bg-white rounded-md md:py-14 md:px-16 py-10 px-14 flex items-center flex-col gap-y-6 overflow-hidden">
            <svg
              width="220"
              height="48"
              viewBox="0 0 220 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1366_19777)">
                <rect
                  width="219"
                  height="48"
                  transform="translate(0.5)"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M78.4098 3H90.4999C90.4999 9.62673 85.0365 14.9988 78.4098 14.9988C78.4098 14.9988 78.4097 14.9988 78.4097 14.9988H66.3196V3H78.4097H78.4098ZM66.3195 21.0001C79.573 21.0001 90.4999 31.7442 90.4999 44.9977H66.3195V21.0001Z"
                  fill="#002266"
                />
                <path
                  d="M36.232 3H0.5V14.9979H12.4106V32.9917H24.3213V14.9979H36.232V3Z"
                  fill="#FF3355"
                />
                <path
                  d="M36.232 3H60.0533V14.9979H48.1426L48.1426 32.993H60.0533V33.118C60.0533 39.6752 54.7207 44.9909 48.1426 44.9909L36.232 44.9896L36.232 14.9979L36.232 14.9949L36.232 3Z"
                  fill="#FF3355"
                />
                <path
                  d="M54.098 20.9981H60.0533V26.997H54.098V20.9981Z"
                  fill="#FF3355"
                />
                <path
                  d="M24.3213 32.9917H12.4106V44.9909C18.9887 44.9909 24.3213 39.6752 24.3213 33.118V32.9917Z"
                  fill="#FF3355"
                />
                <rect
                  x="113"
                  y="3"
                  width="1.49999"
                  height="42"
                  fill="#D1D5DB"
                />
                <path
                  d="M147.272 36V12H153.059V36H147.272ZM132.498 36V12H138.285V36H132.498ZM134.744 26.64L134.778 21.4286H150.336V26.64H134.744Z"
                  fill="#002266"
                />
                <path
                  d="M159.708 36V12H170.431C171.952 12 173.325 12.3314 174.551 12.9943C175.799 13.6571 176.775 14.5714 177.478 15.7371C178.182 16.88 178.534 18.1829 178.534 19.6457C178.534 21.1543 178.182 22.5143 177.478 23.7257C176.775 24.9143 175.81 25.8514 174.585 26.5371C173.359 27.2229 171.975 27.5657 170.431 27.5657H165.223V36H159.708ZM172.916 36L166.857 25.1657L172.78 24.3086L179.521 36H172.916ZM165.223 23.1086H169.921C170.511 23.1086 171.021 22.9829 171.453 22.7314C171.907 22.4571 172.247 22.08 172.474 21.6C172.724 21.12 172.848 20.5714 172.848 19.9543C172.848 19.3371 172.712 18.8 172.44 18.3429C172.168 17.8629 171.77 17.4971 171.248 17.2457C170.749 16.9943 170.136 16.8686 169.41 16.8686H165.223V23.1086Z"
                  fill="#002266"
                />
                <path
                  d="M184.292 36V12H189.466L198.147 26.2286L194.437 26.1943L203.22 12H208.19V36H202.573V28.5257C202.573 26.4686 202.618 24.6171 202.709 22.9714C202.822 21.3257 203.004 19.6914 203.254 18.0686L203.9 19.8514L197.296 30.1714H195.049L188.581 19.92L189.228 18.0686C189.478 19.6 189.648 21.1771 189.739 22.8C189.852 24.4 189.909 26.3086 189.909 28.5257V36H184.292Z"
                  fill="#002266"
                />
              </g>
              <defs>
                <clipPath id="clip0_1366_19777">
                  <rect
                    width="219"
                    height="48"
                    fill="white"
                    transform="translate(0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
            <h1 className="md:px-4 sm:px-2 font-extrabold md:text-3xl sm:text-xl text-lg text-prussian-blue-900">
              Đăng nhập tài khoản
            </h1>
            <div className="relative select-none w-full flex justify-center before:absolute before:h-px before:w-full before:bg-gray-500 before:top-1/2 before:-z-10">
              <p className="px-2 w-fit bg-white font-light md:text-sm text-sx text-gray-500">
                Đăng nhập với
              </p>
            </div>
            <button
              onClick={() => setAlert(!alert)}
              className="w-full select-none inline-flex items-center shadow-sm justify-center border border-gray-300 mx-3 py-2 px-4 rounded-md gap-x-3 text-gray-900 text-sm font-medium"
            >
              <Image
                src={google}
                layout="fixed"
                alt="google"
                width={20}
                height={20}
              />
              Google
            </button>
          </div>
        </div>
      </div>
      {alert && <Modal />}
    </>
  );
};

export default Login;
