import React from 'react'
import { BsArrowDown } from "react-icons/bs"
import { RiArrowDropUpLine, RiArrowDropDownLine } from "react-icons/ri"

export default function Main() {
    return (
        <main className="h-full relative" id='Home'>
            <section className="max-w-maxwidth mx-auto relative flex items-center justify-end">
                <div className="absolute left-0">
                    <div className="absolute -top-20 left-24 z-50" data-aos="fade-down" data-aos-duration="1500">
                        <svg width="100" height="116" viewBox="0 0 100 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.00003 0C1.60447 0 1.21776 0.117294 0.888865 0.337057C0.559966 0.556819 0.303586 0.869167 0.152211 1.23462C0.000835459 1.60007 -0.0387293 2.00222 0.0384412 2.39018C0.115612 2.77814 0.3061 3.1345 0.585805 3.41421C0.86551 3.69391 1.22185 3.8844 1.60981 3.96157C1.99777 4.03874 2.39996 3.99913 2.76541 3.84776C3.13086 3.69638 3.44319 3.44002 3.66295 3.11113C3.88272 2.78223 4.00003 2.39556 4.00003 2C4.00003 1.46957 3.78933 0.960848 3.41426 0.585775C3.03918 0.210702 2.53046 0 2.00003 0Z" fill="#244D4D" />
                            <path d="M2.00003 16C1.60447 16 1.21776 16.1173 0.888865 16.3371C0.559966 16.5568 0.303586 16.8692 0.152211 17.2346C0.000835459 17.6001 -0.0387293 18.0022 0.0384412 18.3902C0.115612 18.7781 0.3061 19.1345 0.585805 19.4142C0.86551 19.6939 1.22185 19.8844 1.60981 19.9616C1.99777 20.0387 2.39996 19.9991 2.76541 19.8478C3.13086 19.6964 3.44319 19.44 3.66295 19.1111C3.88272 18.7822 4.00003 18.3956 4.00003 18C4.00003 17.4696 3.78933 16.9608 3.41426 16.5858C3.03918 16.2107 2.53046 16 2.00003 16Z" fill="#244D4D" />
                            <path d="M2.00003 32C1.60447 32 1.21776 32.1173 0.888865 32.3371C0.559966 32.5568 0.303586 32.8692 0.152211 33.2346C0.000835459 33.6001 -0.0387293 34.0022 0.0384412 34.3902C0.115612 34.7781 0.3061 35.1345 0.585805 35.4142C0.86551 35.6939 1.22185 35.8844 1.60981 35.9616C1.99777 36.0387 2.39996 35.9991 2.76541 35.8478C3.13086 35.6964 3.44319 35.44 3.66295 35.1111C3.88272 34.7822 4.00003 34.3956 4.00003 34C4.00003 33.4696 3.78933 32.9608 3.41426 32.5858C3.03918 32.2107 2.53046 32 2.00003 32Z" fill="#244D4D" />
                            <path d="M2.00003 48C1.60447 48 1.21776 48.1173 0.888865 48.3371C0.559966 48.5568 0.303586 48.8692 0.152211 49.2346C0.000835459 49.6001 -0.0387293 50.0022 0.0384412 50.3902C0.115612 50.7781 0.3061 51.1345 0.585805 51.4142C0.86551 51.6939 1.22185 51.8844 1.60981 51.9616C1.99777 52.0387 2.39996 51.9991 2.76541 51.8478C3.13086 51.6964 3.44319 51.44 3.66295 51.1111C3.88272 50.7822 4.00003 50.3956 4.00003 50C4.00003 49.4696 3.78933 48.9608 3.41426 48.5858C3.03918 48.2107 2.53046 48 2.00003 48Z" fill="#244D4D" />
                            <path d="M2.00003 64C1.60447 64 1.21776 64.1173 0.888865 64.3371C0.559966 64.5568 0.303586 64.8692 0.152211 65.2346C0.000835459 65.6001 -0.0387293 66.0022 0.0384412 66.3902C0.115612 66.7781 0.3061 67.1345 0.585805 67.4142C0.86551 67.6939 1.22185 67.8844 1.60981 67.9616C1.99777 68.0387 2.39996 67.9991 2.76541 67.8478C3.13086 67.6964 3.44319 67.44 3.66295 67.1111C3.88272 66.7822 4.00003 66.3956 4.00003 66C4.00003 65.4696 3.78933 64.9608 3.41426 64.5858C3.03918 64.2107 2.53046 64 2.00003 64Z" fill="#244D4D" />
                            <path d="M2.00003 80C1.60447 80 1.21776 80.1173 0.888865 80.3371C0.559966 80.5568 0.303586 80.8692 0.152211 81.2346C0.000835459 81.6001 -0.0387293 82.0022 0.0384412 82.3902C0.115612 82.7781 0.3061 83.1345 0.585805 83.4142C0.86551 83.6939 1.22185 83.8844 1.60981 83.9616C1.99777 84.0387 2.39996 83.9991 2.76541 83.8478C3.13086 83.6964 3.44319 83.44 3.66295 83.1111C3.88272 82.7822 4.00003 82.3956 4.00003 82C4.00003 81.4696 3.78933 80.9608 3.41426 80.5858C3.03918 80.2107 2.53046 80 2.00003 80Z" fill="#244D4D" />
                            <path d="M2.00003 96C1.60447 96 1.21776 96.1173 0.888865 96.3371C0.559966 96.5568 0.303586 96.8692 0.152211 97.2346C0.000835459 97.6001 -0.0387293 98.0022 0.0384412 98.3902C0.115612 98.7781 0.3061 99.1345 0.585805 99.4142C0.86551 99.6939 1.22185 99.8844 1.60981 99.9616C1.99777 100.039 2.39996 99.9991 2.76541 99.8478C3.13086 99.6964 3.44319 99.44 3.66295 99.1111C3.88272 98.7822 4.00003 98.3956 4.00003 98C4.00003 97.4696 3.78933 96.9608 3.41426 96.5858C3.03918 96.2107 2.53046 96 2.00003 96Z" fill="#244D4D" />
                            <path d="M2.00003 112C1.60447 112 1.21776 112.117 0.888865 112.337C0.559966 112.557 0.303586 112.869 0.152211 113.235C0.000835459 113.6 -0.0387293 114.002 0.0384412 114.39C0.115612 114.778 0.3061 115.135 0.585805 115.414C0.86551 115.694 1.22185 115.884 1.60981 115.962C1.99777 116.039 2.39996 115.999 2.76541 115.848C3.13086 115.696 3.44319 115.44 3.66295 115.111C3.88272 114.782 4.00003 114.396 4.00003 114C4.00003 113.47 3.78933 112.961 3.41426 112.586C3.03918 112.211 2.53046 112 2.00003 112Z" fill="#244D4D" />
                            <path d="M18 0C17.6045 0 17.2178 0.117294 16.8889 0.337057C16.56 0.556819 16.3036 0.869167 16.1522 1.23462C16.0008 1.60007 15.9613 2.00222 16.0384 2.39018C16.1156 2.77814 16.3061 3.1345 16.5858 3.41421C16.8655 3.69391 17.2219 3.8844 17.6098 3.96157C17.9978 4.03874 18.4 3.99913 18.7654 3.84776C19.1309 3.69638 19.4432 3.44002 19.663 3.11113C19.8827 2.78223 20 2.39556 20 2C20 1.46957 19.7893 0.960848 19.4143 0.585775C19.0392 0.210702 18.5305 0 18 0Z" fill="#244D4D" />
                            <path d="M18 16C17.6045 16 17.2178 16.1173 16.8889 16.3371C16.56 16.5568 16.3036 16.8692 16.1522 17.2346C16.0008 17.6001 15.9613 18.0022 16.0384 18.3902C16.1156 18.7781 16.3061 19.1345 16.5858 19.4142C16.8655 19.6939 17.2219 19.8844 17.6098 19.9616C17.9978 20.0387 18.4 19.9991 18.7654 19.8478C19.1309 19.6964 19.4432 19.44 19.663 19.1111C19.8827 18.7822 20 18.3956 20 18C20 17.4696 19.7893 16.9608 19.4143 16.5858C19.0392 16.2107 18.5305 16 18 16Z" fill="#244D4D" />
                            <path d="M18 32C17.6045 32 17.2178 32.1173 16.8889 32.3371C16.56 32.5568 16.3036 32.8692 16.1522 33.2346C16.0008 33.6001 15.9613 34.0022 16.0384 34.3902C16.1156 34.7781 16.3061 35.1345 16.5858 35.4142C16.8655 35.6939 17.2219 35.8844 17.6098 35.9616C17.9978 36.0387 18.4 35.9991 18.7654 35.8478C19.1309 35.6964 19.4432 35.44 19.663 35.1111C19.8827 34.7822 20 34.3956 20 34C20 33.4696 19.7893 32.9608 19.4143 32.5858C19.0392 32.2107 18.5305 32 18 32Z" fill="#244D4D" />
                            <path d="M18 48C17.6045 48 17.2178 48.1173 16.8889 48.3371C16.56 48.5568 16.3036 48.8692 16.1522 49.2346C16.0008 49.6001 15.9613 50.0022 16.0384 50.3902C16.1156 50.7781 16.3061 51.1345 16.5858 51.4142C16.8655 51.6939 17.2219 51.8844 17.6098 51.9616C17.9978 52.0387 18.4 51.9991 18.7654 51.8478C19.1309 51.6964 19.4432 51.44 19.663 51.1111C19.8827 50.7822 20 50.3956 20 50C20 49.4696 19.7893 48.9608 19.4143 48.5858C19.0392 48.2107 18.5305 48 18 48Z" fill="#244D4D" />
                            <path d="M18 64C17.6045 64 17.2178 64.1173 16.8889 64.3371C16.56 64.5568 16.3036 64.8692 16.1522 65.2346C16.0008 65.6001 15.9613 66.0022 16.0384 66.3902C16.1156 66.7781 16.3061 67.1345 16.5858 67.4142C16.8655 67.6939 17.2219 67.8844 17.6098 67.9616C17.9978 68.0387 18.4 67.9991 18.7654 67.8478C19.1309 67.6964 19.4432 67.44 19.663 67.1111C19.8827 66.7822 20 66.3956 20 66C20 65.4696 19.7893 64.9608 19.4143 64.5858C19.0392 64.2107 18.5305 64 18 64Z" fill="#244D4D" />
                            <path d="M18 80C17.6045 80 17.2178 80.1173 16.8889 80.3371C16.56 80.5568 16.3036 80.8692 16.1522 81.2346C16.0008 81.6001 15.9613 82.0022 16.0384 82.3902C16.1156 82.7781 16.3061 83.1345 16.5858 83.4142C16.8655 83.6939 17.2219 83.8844 17.6098 83.9616C17.9978 84.0387 18.4 83.9991 18.7654 83.8478C19.1309 83.6964 19.4432 83.44 19.663 83.1111C19.8827 82.7822 20 82.3956 20 82C20 81.4696 19.7893 80.9608 19.4143 80.5858C19.0392 80.2107 18.5305 80 18 80Z" fill="#244D4D" />
                            <path d="M18 96C17.6045 96 17.2178 96.1173 16.8889 96.3371C16.56 96.5568 16.3036 96.8692 16.1522 97.2346C16.0008 97.6001 15.9613 98.0022 16.0384 98.3902C16.1156 98.7781 16.3061 99.1345 16.5858 99.4142C16.8655 99.6939 17.2219 99.8844 17.6098 99.9616C17.9978 100.039 18.4 99.9991 18.7654 99.8478C19.1309 99.6964 19.4432 99.44 19.663 99.1111C19.8827 98.7822 20 98.3956 20 98C20 97.4696 19.7893 96.9608 19.4143 96.5858C19.0392 96.2107 18.5305 96 18 96Z" fill="#244D4D" />
                            <path d="M18 112C17.6045 112 17.2178 112.117 16.8889 112.337C16.56 112.557 16.3036 112.869 16.1522 113.235C16.0008 113.6 15.9613 114.002 16.0384 114.39C16.1156 114.778 16.3061 115.135 16.5858 115.414C16.8655 115.694 17.2219 115.884 17.6098 115.962C17.9978 116.039 18.4 115.999 18.7654 115.848C19.1309 115.696 19.4432 115.44 19.663 115.111C19.8827 114.782 20 114.396 20 114C20 113.47 19.7893 112.961 19.4143 112.586C19.0392 112.211 18.5305 112 18 112Z" fill="#244D4D" />
                            <path d="M34 0C33.6045 0 33.2178 0.117294 32.8889 0.337057C32.56 0.556819 32.3036 0.869167 32.1522 1.23462C32.0008 1.60007 31.9613 2.00222 32.0384 2.39018C32.1156 2.77814 32.3061 3.1345 32.5858 3.41421C32.8655 3.69391 33.2219 3.8844 33.6098 3.96157C33.9978 4.03874 34.4 3.99913 34.7654 3.84776C35.1309 3.69638 35.4432 3.44002 35.663 3.11113C35.8827 2.78223 36 2.39556 36 2C36 1.46957 35.7893 0.960848 35.4143 0.585775C35.0392 0.210702 34.5305 0 34 0Z" fill="#244D4D" />
                            <path d="M34 16C33.6045 16 33.2178 16.1173 32.8889 16.3371C32.56 16.5568 32.3036 16.8692 32.1522 17.2346C32.0008 17.6001 31.9613 18.0022 32.0384 18.3902C32.1156 18.7781 32.3061 19.1345 32.5858 19.4142C32.8655 19.6939 33.2219 19.8844 33.6098 19.9616C33.9978 20.0387 34.4 19.9991 34.7654 19.8478C35.1309 19.6964 35.4432 19.44 35.663 19.1111C35.8827 18.7822 36 18.3956 36 18C36 17.4696 35.7893 16.9608 35.4143 16.5858C35.0392 16.2107 34.5305 16 34 16Z" fill="#244D4D" />
                            <path d="M34 32C33.6045 32 33.2178 32.1173 32.8889 32.3371C32.56 32.5568 32.3036 32.8692 32.1522 33.2346C32.0008 33.6001 31.9613 34.0022 32.0384 34.3902C32.1156 34.7781 32.3061 35.1345 32.5858 35.4142C32.8655 35.6939 33.2219 35.8844 33.6098 35.9616C33.9978 36.0387 34.4 35.9991 34.7654 35.8478C35.1309 35.6964 35.4432 35.44 35.663 35.1111C35.8827 34.7822 36 34.3956 36 34C36 33.4696 35.7893 32.9608 35.4143 32.5858C35.0392 32.2107 34.5305 32 34 32Z" fill="#244D4D" />
                            <path d="M34 48C33.6045 48 33.2178 48.1173 32.8889 48.3371C32.56 48.5568 32.3036 48.8692 32.1522 49.2346C32.0008 49.6001 31.9613 50.0022 32.0384 50.3902C32.1156 50.7781 32.3061 51.1345 32.5858 51.4142C32.8655 51.6939 33.2219 51.8844 33.6098 51.9616C33.9978 52.0387 34.4 51.9991 34.7654 51.8478C35.1309 51.6964 35.4432 51.44 35.663 51.1111C35.8827 50.7822 36 50.3956 36 50C36 49.4696 35.7893 48.9608 35.4143 48.5858C35.0392 48.2107 34.5305 48 34 48Z" fill="#244D4D" />
                            <path d="M34 64C33.6045 64 33.2178 64.1173 32.8889 64.3371C32.56 64.5568 32.3036 64.8692 32.1522 65.2346C32.0008 65.6001 31.9613 66.0022 32.0384 66.3902C32.1156 66.7781 32.3061 67.1345 32.5858 67.4142C32.8655 67.6939 33.2219 67.8844 33.6098 67.9616C33.9978 68.0387 34.4 67.9991 34.7654 67.8478C35.1309 67.6964 35.4432 67.44 35.663 67.1111C35.8827 66.7822 36 66.3956 36 66C36 65.4696 35.7893 64.9608 35.4143 64.5858C35.0392 64.2107 34.5305 64 34 64Z" fill="#244D4D" />
                            <path d="M34 80C33.6045 80 33.2178 80.1173 32.8889 80.3371C32.56 80.5568 32.3036 80.8692 32.1522 81.2346C32.0008 81.6001 31.9613 82.0022 32.0384 82.3902C32.1156 82.7781 32.3061 83.1345 32.5858 83.4142C32.8655 83.6939 33.2219 83.8844 33.6098 83.9616C33.9978 84.0387 34.4 83.9991 34.7654 83.8478C35.1309 83.6964 35.4432 83.44 35.663 83.1111C35.8827 82.7822 36 82.3956 36 82C36 81.4696 35.7893 80.9608 35.4143 80.5858C35.0392 80.2107 34.5305 80 34 80Z" fill="#244D4D" />
                            <path d="M34 96C33.6045 96 33.2178 96.1173 32.8889 96.3371C32.56 96.5568 32.3036 96.8692 32.1522 97.2346C32.0008 97.6001 31.9613 98.0022 32.0384 98.3902C32.1156 98.7781 32.3061 99.1345 32.5858 99.4142C32.8655 99.6939 33.2219 99.8844 33.6098 99.9616C33.9978 100.039 34.4 99.9991 34.7654 99.8478C35.1309 99.6964 35.4432 99.44 35.663 99.1111C35.8827 98.7822 36 98.3956 36 98C36 97.4696 35.7893 96.9608 35.4143 96.5858C35.0392 96.2107 34.5305 96 34 96Z" fill="#244D4D" />
                            <path d="M34 112C33.6045 112 33.2178 112.117 32.8889 112.337C32.56 112.557 32.3036 112.869 32.1522 113.235C32.0008 113.6 31.9613 114.002 32.0384 114.39C32.1156 114.778 32.3061 115.135 32.5858 115.414C32.8655 115.694 33.2219 115.884 33.6098 115.962C33.9978 116.039 34.4 115.999 34.7654 115.848C35.1309 115.696 35.4432 115.44 35.663 115.111C35.8827 114.782 36 114.396 36 114C36 113.47 35.7893 112.961 35.4143 112.586C35.0392 112.211 34.5305 112 34 112Z" fill="#244D4D" />
                            <path d="M50 0C49.6045 0 49.2178 0.117294 48.8889 0.337057C48.56 0.556819 48.3036 0.869167 48.1522 1.23462C48.0008 1.60007 47.9613 2.00222 48.0384 2.39018C48.1156 2.77814 48.3061 3.1345 48.5858 3.41421C48.8655 3.69391 49.2219 3.8844 49.6098 3.96157C49.9978 4.03874 50.4 3.99913 50.7654 3.84776C51.1309 3.69638 51.4432 3.44002 51.663 3.11113C51.8827 2.78223 52 2.39556 52 2C52 1.46957 51.7893 0.960848 51.4143 0.585775C51.0392 0.210702 50.5305 0 50 0Z" fill="#244D4D" />
                            <path d="M50 16C49.6045 16 49.2178 16.1173 48.8889 16.3371C48.56 16.5568 48.3036 16.8692 48.1522 17.2346C48.0008 17.6001 47.9613 18.0022 48.0384 18.3902C48.1156 18.7781 48.3061 19.1345 48.5858 19.4142C48.8655 19.6939 49.2219 19.8844 49.6098 19.9616C49.9978 20.0387 50.4 19.9991 50.7654 19.8478C51.1309 19.6964 51.4432 19.44 51.663 19.1111C51.8827 18.7822 52 18.3956 52 18C52 17.4696 51.7893 16.9608 51.4143 16.5858C51.0392 16.2107 50.5305 16 50 16Z" fill="#244D4D" />
                            <path d="M50 32C49.6045 32 49.2178 32.1173 48.8889 32.3371C48.56 32.5568 48.3036 32.8692 48.1522 33.2346C48.0008 33.6001 47.9613 34.0022 48.0384 34.3902C48.1156 34.7781 48.3061 35.1345 48.5858 35.4142C48.8655 35.6939 49.2219 35.8844 49.6098 35.9616C49.9978 36.0387 50.4 35.9991 50.7654 35.8478C51.1309 35.6964 51.4432 35.44 51.663 35.1111C51.8827 34.7822 52 34.3956 52 34C52 33.4696 51.7893 32.9608 51.4143 32.5858C51.0392 32.2107 50.5305 32 50 32Z" fill="#244D4D" />
                            <path d="M50 48C49.6045 48 49.2178 48.1173 48.8889 48.3371C48.56 48.5568 48.3036 48.8692 48.1522 49.2346C48.0008 49.6001 47.9613 50.0022 48.0384 50.3902C48.1156 50.7781 48.3061 51.1345 48.5858 51.4142C48.8655 51.6939 49.2219 51.8844 49.6098 51.9616C49.9978 52.0387 50.4 51.9991 50.7654 51.8478C51.1309 51.6964 51.4432 51.44 51.663 51.1111C51.8827 50.7822 52 50.3956 52 50C52 49.4696 51.7893 48.9608 51.4143 48.5858C51.0392 48.2107 50.5305 48 50 48Z" fill="#244D4D" />
                            <path d="M50 64C49.6045 64 49.2178 64.1173 48.8889 64.3371C48.56 64.5568 48.3036 64.8692 48.1522 65.2346C48.0008 65.6001 47.9613 66.0022 48.0384 66.3902C48.1156 66.7781 48.3061 67.1345 48.5858 67.4142C48.8655 67.6939 49.2219 67.8844 49.6098 67.9616C49.9978 68.0387 50.4 67.9991 50.7654 67.8478C51.1309 67.6964 51.4432 67.44 51.663 67.1111C51.8827 66.7822 52 66.3956 52 66C52 65.4696 51.7893 64.9608 51.4143 64.5858C51.0392 64.2107 50.5305 64 50 64Z" fill="#244D4D" />
                            <path d="M50 80C49.6045 80 49.2178 80.1173 48.8889 80.3371C48.56 80.5568 48.3036 80.8692 48.1522 81.2346C48.0008 81.6001 47.9613 82.0022 48.0384 82.3902C48.1156 82.7781 48.3061 83.1345 48.5858 83.4142C48.8655 83.6939 49.2219 83.8844 49.6098 83.9616C49.9978 84.0387 50.4 83.9991 50.7654 83.8478C51.1309 83.6964 51.4432 83.44 51.663 83.1111C51.8827 82.7822 52 82.3956 52 82C52 81.4696 51.7893 80.9608 51.4143 80.5858C51.0392 80.2107 50.5305 80 50 80Z" fill="#244D4D" />
                            <path d="M50 96C49.6045 96 49.2178 96.1173 48.8889 96.3371C48.56 96.5568 48.3036 96.8692 48.1522 97.2346C48.0008 97.6001 47.9613 98.0022 48.0384 98.3902C48.1156 98.7781 48.3061 99.1345 48.5858 99.4142C48.8655 99.6939 49.2219 99.8844 49.6098 99.9616C49.9978 100.039 50.4 99.9991 50.7654 99.8478C51.1309 99.6964 51.4432 99.44 51.663 99.1111C51.8827 98.7822 52 98.3956 52 98C52 97.4696 51.7893 96.9608 51.4143 96.5858C51.0392 96.2107 50.5305 96 50 96Z" fill="#244D4D" />
                            <path d="M50 112C49.6045 112 49.2178 112.117 48.8889 112.337C48.56 112.557 48.3036 112.869 48.1522 113.235C48.0008 113.6 47.9613 114.002 48.0384 114.39C48.1156 114.778 48.3061 115.135 48.5858 115.414C48.8655 115.694 49.2219 115.884 49.6098 115.962C49.9978 116.039 50.4 115.999 50.7654 115.848C51.1309 115.696 51.4432 115.44 51.663 115.111C51.8827 114.782 52 114.396 52 114C52 113.47 51.7893 112.961 51.4143 112.586C51.0392 112.211 50.5305 112 50 112Z" fill="#244D4D" />
                            <path d="M66 0C65.6045 0 65.2178 0.117294 64.8889 0.337057C64.56 0.556819 64.3036 0.869167 64.1522 1.23462C64.0008 1.60007 63.9613 2.00222 64.0384 2.39018C64.1156 2.77814 64.3061 3.1345 64.5858 3.41421C64.8655 3.69391 65.2219 3.8844 65.6098 3.96157C65.9978 4.03874 66.4 3.99913 66.7654 3.84776C67.1309 3.69638 67.4432 3.44002 67.663 3.11113C67.8827 2.78223 68 2.39556 68 2C68 1.46957 67.7893 0.960848 67.4143 0.585775C67.0392 0.210702 66.5305 0 66 0Z" fill="#244D4D" />
                            <path d="M66 16C65.6045 16 65.2178 16.1173 64.8889 16.3371C64.56 16.5568 64.3036 16.8692 64.1522 17.2346C64.0008 17.6001 63.9613 18.0022 64.0384 18.3902C64.1156 18.7781 64.3061 19.1345 64.5858 19.4142C64.8655 19.6939 65.2219 19.8844 65.6098 19.9616C65.9978 20.0387 66.4 19.9991 66.7654 19.8478C67.1309 19.6964 67.4432 19.44 67.663 19.1111C67.8827 18.7822 68 18.3956 68 18C68 17.4696 67.7893 16.9608 67.4143 16.5858C67.0392 16.2107 66.5305 16 66 16Z" fill="#244D4D" />
                            <path d="M66 32C65.6045 32 65.2178 32.1173 64.8889 32.3371C64.56 32.5568 64.3036 32.8692 64.1522 33.2346C64.0008 33.6001 63.9613 34.0022 64.0384 34.3902C64.1156 34.7781 64.3061 35.1345 64.5858 35.4142C64.8655 35.6939 65.2219 35.8844 65.6098 35.9616C65.9978 36.0387 66.4 35.9991 66.7654 35.8478C67.1309 35.6964 67.4432 35.44 67.663 35.1111C67.8827 34.7822 68 34.3956 68 34C68 33.4696 67.7893 32.9608 67.4143 32.5858C67.0392 32.2107 66.5305 32 66 32Z" fill="#244D4D" />
                            <path d="M66 48C65.6045 48 65.2178 48.1173 64.8889 48.3371C64.56 48.5568 64.3036 48.8692 64.1522 49.2346C64.0008 49.6001 63.9613 50.0022 64.0384 50.3902C64.1156 50.7781 64.3061 51.1345 64.5858 51.4142C64.8655 51.6939 65.2219 51.8844 65.6098 51.9616C65.9978 52.0387 66.4 51.9991 66.7654 51.8478C67.1309 51.6964 67.4432 51.44 67.663 51.1111C67.8827 50.7822 68 50.3956 68 50C68 49.4696 67.7893 48.9608 67.4143 48.5858C67.0392 48.2107 66.5305 48 66 48Z" fill="#244D4D" />
                            <path d="M66 64C65.6045 64 65.2178 64.1173 64.8889 64.3371C64.56 64.5568 64.3036 64.8692 64.1522 65.2346C64.0008 65.6001 63.9613 66.0022 64.0384 66.3902C64.1156 66.7781 64.3061 67.1345 64.5858 67.4142C64.8655 67.6939 65.2219 67.8844 65.6098 67.9616C65.9978 68.0387 66.4 67.9991 66.7654 67.8478C67.1309 67.6964 67.4432 67.44 67.663 67.1111C67.8827 66.7822 68 66.3956 68 66C68 65.4696 67.7893 64.9608 67.4143 64.5858C67.0392 64.2107 66.5305 64 66 64Z" fill="#244D4D" />
                            <path d="M66 80C65.6045 80 65.2178 80.1173 64.8889 80.3371C64.56 80.5568 64.3036 80.8692 64.1522 81.2346C64.0008 81.6001 63.9613 82.0022 64.0384 82.3902C64.1156 82.7781 64.3061 83.1345 64.5858 83.4142C64.8655 83.6939 65.2219 83.8844 65.6098 83.9616C65.9978 84.0387 66.4 83.9991 66.7654 83.8478C67.1309 83.6964 67.4432 83.44 67.663 83.1111C67.8827 82.7822 68 82.3956 68 82C68 81.4696 67.7893 80.9608 67.4143 80.5858C67.0392 80.2107 66.5305 80 66 80Z" fill="#244D4D" />
                            <path d="M66 96C65.6045 96 65.2178 96.1173 64.8889 96.3371C64.56 96.5568 64.3036 96.8692 64.1522 97.2346C64.0008 97.6001 63.9613 98.0022 64.0384 98.3902C64.1156 98.7781 64.3061 99.1345 64.5858 99.4142C64.8655 99.6939 65.2219 99.8844 65.6098 99.9616C65.9978 100.039 66.4 99.9991 66.7654 99.8478C67.1309 99.6964 67.4432 99.44 67.663 99.1111C67.8827 98.7822 68 98.3956 68 98C68 97.4696 67.7893 96.9608 67.4143 96.5858C67.0392 96.2107 66.5305 96 66 96Z" fill="#244D4D" />
                            <path d="M66 112C65.6045 112 65.2178 112.117 64.8889 112.337C64.56 112.557 64.3036 112.869 64.1522 113.235C64.0008 113.6 63.9613 114.002 64.0384 114.39C64.1156 114.778 64.3061 115.135 64.5858 115.414C64.8655 115.694 65.2219 115.884 65.6098 115.962C65.9978 116.039 66.4 115.999 66.7654 115.848C67.1309 115.696 67.4432 115.44 67.663 115.111C67.8827 114.782 68 114.396 68 114C68 113.47 67.7893 112.961 67.4143 112.586C67.0392 112.211 66.5305 112 66 112Z" fill="#244D4D" />
                            <path d="M82 0C81.6045 0 81.2178 0.117294 80.8889 0.337057C80.56 0.556819 80.3036 0.869167 80.1522 1.23462C80.0008 1.60007 79.9613 2.00222 80.0384 2.39018C80.1156 2.77814 80.3061 3.1345 80.5858 3.41421C80.8655 3.69391 81.2219 3.8844 81.6098 3.96157C81.9978 4.03874 82.4 3.99913 82.7654 3.84776C83.1309 3.69638 83.4432 3.44002 83.663 3.11113C83.8827 2.78223 84 2.39556 84 2C84 1.46957 83.7893 0.960848 83.4143 0.585775C83.0392 0.210702 82.5305 0 82 0Z" fill="#244D4D" />
                            <path d="M82 16C81.6045 16 81.2178 16.1173 80.8889 16.3371C80.56 16.5568 80.3036 16.8692 80.1522 17.2346C80.0008 17.6001 79.9613 18.0022 80.0384 18.3902C80.1156 18.7781 80.3061 19.1345 80.5858 19.4142C80.8655 19.6939 81.2219 19.8844 81.6098 19.9616C81.9978 20.0387 82.4 19.9991 82.7654 19.8478C83.1309 19.6964 83.4432 19.44 83.663 19.1111C83.8827 18.7822 84 18.3956 84 18C84 17.4696 83.7893 16.9608 83.4143 16.5858C83.0392 16.2107 82.5305 16 82 16Z" fill="#244D4D" />
                            <path d="M82 32C81.6045 32 81.2178 32.1173 80.8889 32.3371C80.56 32.5568 80.3036 32.8692 80.1522 33.2346C80.0008 33.6001 79.9613 34.0022 80.0384 34.3902C80.1156 34.7781 80.3061 35.1345 80.5858 35.4142C80.8655 35.6939 81.2219 35.8844 81.6098 35.9616C81.9978 36.0387 82.4 35.9991 82.7654 35.8478C83.1309 35.6964 83.4432 35.44 83.663 35.1111C83.8827 34.7822 84 34.3956 84 34C84 33.4696 83.7893 32.9608 83.4143 32.5858C83.0392 32.2107 82.5305 32 82 32Z" fill="#244D4D" />
                            <path d="M82 48C81.6045 48 81.2178 48.1173 80.8889 48.3371C80.56 48.5568 80.3036 48.8692 80.1522 49.2346C80.0008 49.6001 79.9613 50.0022 80.0384 50.3902C80.1156 50.7781 80.3061 51.1345 80.5858 51.4142C80.8655 51.6939 81.2219 51.8844 81.6098 51.9616C81.9978 52.0387 82.4 51.9991 82.7654 51.8478C83.1309 51.6964 83.4432 51.44 83.663 51.1111C83.8827 50.7822 84 50.3956 84 50C84 49.4696 83.7893 48.9608 83.4143 48.5858C83.0392 48.2107 82.5305 48 82 48Z" fill="#244D4D" />
                            <path d="M82 64C81.6045 64 81.2178 64.1173 80.8889 64.3371C80.56 64.5568 80.3036 64.8692 80.1522 65.2346C80.0008 65.6001 79.9613 66.0022 80.0384 66.3902C80.1156 66.7781 80.3061 67.1345 80.5858 67.4142C80.8655 67.6939 81.2219 67.8844 81.6098 67.9616C81.9978 68.0387 82.4 67.9991 82.7654 67.8478C83.1309 67.6964 83.4432 67.44 83.663 67.1111C83.8827 66.7822 84 66.3956 84 66C84 65.4696 83.7893 64.9608 83.4143 64.5858C83.0392 64.2107 82.5305 64 82 64Z" fill="#244D4D" />
                            <path d="M82 80C81.6045 80 81.2178 80.1173 80.8889 80.3371C80.56 80.5568 80.3036 80.8692 80.1522 81.2346C80.0008 81.6001 79.9613 82.0022 80.0384 82.3902C80.1156 82.7781 80.3061 83.1345 80.5858 83.4142C80.8655 83.6939 81.2219 83.8844 81.6098 83.9616C81.9978 84.0387 82.4 83.9991 82.7654 83.8478C83.1309 83.6964 83.4432 83.44 83.663 83.1111C83.8827 82.7822 84 82.3956 84 82C84 81.4696 83.7893 80.9608 83.4143 80.5858C83.0392 80.2107 82.5305 80 82 80Z" fill="#244D4D" />
                            <path d="M82 96C81.6045 96 81.2178 96.1173 80.8889 96.3371C80.56 96.5568 80.3036 96.8692 80.1522 97.2346C80.0008 97.6001 79.9613 98.0022 80.0384 98.3902C80.1156 98.7781 80.3061 99.1345 80.5858 99.4142C80.8655 99.6939 81.2219 99.8844 81.6098 99.9616C81.9978 100.039 82.4 99.9991 82.7654 99.8478C83.1309 99.6964 83.4432 99.44 83.663 99.1111C83.8827 98.7822 84 98.3956 84 98C84 97.4696 83.7893 96.9608 83.4143 96.5858C83.0392 96.2107 82.5305 96 82 96Z" fill="#244D4D" />
                            <path d="M82 112C81.6045 112 81.2178 112.117 80.8889 112.337C80.56 112.557 80.3036 112.869 80.1522 113.235C80.0008 113.6 79.9613 114.002 80.0384 114.39C80.1156 114.778 80.3061 115.135 80.5858 115.414C80.8655 115.694 81.2219 115.884 81.6098 115.962C81.9978 116.039 82.4 115.999 82.7654 115.848C83.1309 115.696 83.4432 115.44 83.663 115.111C83.8827 114.782 84 114.396 84 114C84 113.47 83.7893 112.961 83.4143 112.586C83.0392 112.211 82.5305 112 82 112Z" fill="#244D4D" />
                            <path d="M98 0C97.6045 0 97.2178 0.117294 96.8889 0.337057C96.56 0.556819 96.3036 0.869167 96.1522 1.23462C96.0008 1.60007 95.9613 2.00222 96.0384 2.39018C96.1156 2.77814 96.3061 3.1345 96.5858 3.41421C96.8655 3.69391 97.2219 3.8844 97.6098 3.96157C97.9978 4.03874 98.4 3.99913 98.7654 3.84776C99.1309 3.69638 99.4432 3.44002 99.663 3.11113C99.8827 2.78223 100 2.39556 100 2C100 1.46957 99.7893 0.960848 99.4143 0.585775C99.0392 0.210702 98.5305 0 98 0Z" fill="#244D4D" />
                            <path d="M98 16C97.6045 16 97.2178 16.1173 96.8889 16.3371C96.56 16.5568 96.3036 16.8692 96.1522 17.2346C96.0008 17.6001 95.9613 18.0022 96.0384 18.3902C96.1156 18.7781 96.3061 19.1345 96.5858 19.4142C96.8655 19.6939 97.2219 19.8844 97.6098 19.9616C97.9978 20.0387 98.4 19.9991 98.7654 19.8478C99.1309 19.6964 99.4432 19.44 99.663 19.1111C99.8827 18.7822 100 18.3956 100 18C100 17.4696 99.7893 16.9608 99.4143 16.5858C99.0392 16.2107 98.5305 16 98 16Z" fill="#244D4D" />
                            <path d="M98 32C97.6045 32 97.2178 32.1173 96.8889 32.3371C96.56 32.5568 96.3036 32.8692 96.1522 33.2346C96.0008 33.6001 95.9613 34.0022 96.0384 34.3902C96.1156 34.7781 96.3061 35.1345 96.5858 35.4142C96.8655 35.6939 97.2219 35.8844 97.6098 35.9616C97.9978 36.0387 98.4 35.9991 98.7654 35.8478C99.1309 35.6964 99.4432 35.44 99.663 35.1111C99.8827 34.7822 100 34.3956 100 34C100 33.4696 99.7893 32.9608 99.4143 32.5858C99.0392 32.2107 98.5305 32 98 32Z" fill="#244D4D" />
                            <path d="M98 48C97.6045 48 97.2178 48.1173 96.8889 48.3371C96.56 48.5568 96.3036 48.8692 96.1522 49.2346C96.0008 49.6001 95.9613 50.0022 96.0384 50.3902C96.1156 50.7781 96.3061 51.1345 96.5858 51.4142C96.8655 51.6939 97.2219 51.8844 97.6098 51.9616C97.9978 52.0387 98.4 51.9991 98.7654 51.8478C99.1309 51.6964 99.4432 51.44 99.663 51.1111C99.8827 50.7822 100 50.3956 100 50C100 49.4696 99.7893 48.9608 99.4143 48.5858C99.0392 48.2107 98.5305 48 98 48Z" fill="#244D4D" />
                            <path d="M98 64C97.6045 64 97.2178 64.1173 96.8889 64.3371C96.56 64.5568 96.3036 64.8692 96.1522 65.2346C96.0008 65.6001 95.9613 66.0022 96.0384 66.3902C96.1156 66.7781 96.3061 67.1345 96.5858 67.4142C96.8655 67.6939 97.2219 67.8844 97.6098 67.9616C97.9978 68.0387 98.4 67.9991 98.7654 67.8478C99.1309 67.6964 99.4432 67.44 99.663 67.1111C99.8827 66.7822 100 66.3956 100 66C100 65.4696 99.7893 64.9608 99.4143 64.5858C99.0392 64.2107 98.5305 64 98 64Z" fill="#244D4D" />
                            <path d="M98 80C97.6045 80 97.2178 80.1173 96.8889 80.3371C96.56 80.5568 96.3036 80.8692 96.1522 81.2346C96.0008 81.6001 95.9613 82.0022 96.0384 82.3902C96.1156 82.7781 96.3061 83.1345 96.5858 83.4142C96.8655 83.6939 97.2219 83.8844 97.6098 83.9616C97.9978 84.0387 98.4 83.9991 98.7654 83.8478C99.1309 83.6964 99.4432 83.44 99.663 83.1111C99.8827 82.7822 100 82.3956 100 82C100 81.4696 99.7893 80.9608 99.4143 80.5858C99.0392 80.2107 98.5305 80 98 80Z" fill="#244D4D" />
                            <path d="M98 96C97.6045 96 97.2178 96.1173 96.8889 96.3371C96.56 96.5568 96.3036 96.8692 96.1522 97.2346C96.0008 97.6001 95.9613 98.0022 96.0384 98.3902C96.1156 98.7781 96.3061 99.1345 96.5858 99.4142C96.8655 99.6939 97.2219 99.8844 97.6098 99.9616C97.9978 100.039 98.4 99.9991 98.7654 99.8478C99.1309 99.6964 99.4432 99.44 99.663 99.1111C99.8827 98.7822 100 98.3956 100 98C100 97.4696 99.7893 96.9608 99.4143 96.5858C99.0392 96.2107 98.5305 96 98 96Z" fill="#244D4D" />
                            <path d="M98 112C97.6045 112 97.2178 112.117 96.8889 112.337C96.56 112.557 96.3036 112.869 96.1522 113.235C96.0008 113.6 95.9613 114.002 96.0384 114.39C96.1156 114.778 96.3061 115.135 96.5858 115.414C96.8655 115.694 97.2219 115.884 97.6098 115.962C97.9978 116.039 98.4 115.999 98.7654 115.848C99.1309 115.696 99.4432 115.44 99.663 115.111C99.8827 114.782 100 114.396 100 114C100 113.47 99.7893 112.961 99.4143 112.586C99.0392 112.211 98.5305 112 98 112Z" fill="#244D4D" />
                        </svg>
                    </div>
                    <section className="backdrop-blur-md bg-white/30 pr-36 py-12" data-aos="fade-right" data-aos-duration="1500">
                        <h1 className="text-dark-green font-[900] text-5xl font-notoserif leading-snug"
                            data-aos="fade-right"
                            data-aos-duration="2000">
                            We Help You <br />
                            Make Modern <br />
                            Interior
                        </h1>
                        <p className="font-opensans mt-3" data-aos="fade-right" data-aos-duration="3000">
                            We will help you to make an elegant <br />
                            and luxuristic interior designed by <br />
                            professional interior designer.
                        </p>
                    </section>
                </div>
                <figure className="h-[600px] w-[1000px]" data-aos="fade-up" data-aos-duration="1300">
                    <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Furniture" />
                </figure>

                <div className="h-[5.1rem] w-[5rem] absolute -bottom-4 z-50 -right-4 grid place-items-center backdrop-blur-md bg-white/30">
                    <BsArrowDown className="animate-bounce text-xl" />
                </div>
                {/* -right-16 */}
                <div className="fixed top-0 bottom-0 right-1 h-full flex space-y-20 flex-col justify-center items-center w-[4rem]">
                    <div className="flex flex-col justify-center space-y-5">
                        <a href="/#" data-aos="zoom-out-left" data-aos-duration="1300" className="text-2xl font-normal"><RiArrowDropUpLine /></a>
                        <a href="/#" data-aos="zoom-out-left" data-aos-duration="1700" className="text-2xl"><RiArrowDropDownLine /></a>
                    </div>

                    <div className="flex flex-col justify-center space-y-3 items-center">
                        <h3 className="font-notoserif text-sm font-bold" data-aos="zoom-out-left" data-aos-duration="2000">01</h3>
                        <section className="h-[3rem] w-[1px] bg-gray-400/30" data-aos="zoom-out-left" data-aos-duration="2200"></section>
                        <h3 className="font-notoserif text-sm font-bold" data-aos="zoom-out-left" data-aos-duration="2500">06</h3>
                    </div>
                </div>
            </section>
        </main>
    )
}
