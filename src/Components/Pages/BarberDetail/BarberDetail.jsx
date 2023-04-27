import React from 'react';
import '../../../Styles/Styles.css';
import man from '../../../assets/icons/manbarber.png';
import scissors from '../../../assets/icons/scissors.png';
import Card from '../../ReUseableComponents/Card';
// import { ReactComponent as SearchOp } from "../../../assets/icons/SearchOp.svg";
const BarberDetail = () => {
  return (
    <>
      <div className='bg-[#1E1E1E] background-image-Detail text-[white] flex justify-center items-center relative'></div>
      <div className='flex md:flex-row flex-col'>
        <div className='md:col-md-4 -mt-32 md:ml-5 flex md:justify-start justify-center z-20'>
          <img src={man} className=' w-[330px] h-[337px]' />
          {/* <p className='text-[35px] mt-5 md:hidden block'> Barba Raja</p> */}
        </div>
        <div className='md:col-md-8 md:flex'>
          <div className='md:col-md-7  flex flex-col md:items-start md:mt-0 mt-4 items-center justify-evenly md:pl-20 '>
            <div className='flex ml-3'>
              <div className='w-[32px] h-[32px] bg-[#C5AC80] rounded-full flex justify-center items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={2}
                  stroke='black'
                  className='w-[13px] h-[13px]'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z'
                  />
                </svg>
              </div>
              <p className='flex justify-center items-center ml-5 text-[20px]'>
                +99 951 456 3517
              </p>
            </div>
            <div className='flex ml-3'>
              <div className='w-[32px] h-[32px] bg-[#C5AC80] rounded-full flex justify-center items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={2}
                  stroke='black'
                  className='w-[13px] h-[13px]'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'
                  />
                </svg>
              </div>
              <p className='flex justify-center items-center ml-5 text-[20px]'>
                Barbaraja@example.com
              </p>
            </div>
          </div>
          <div className='md:col-md-5 md:pl-20 pt-4 flex flex-col md:items-start items-end background-image-scissors'>
            <p className='text-[28px]'>Rating</p>
            <p className='text-[28px] flex items-center gap-2'>
              {[1, 2, 3, 4, 5].map((rating) => {
                return (
                  <>
                    {rating !== 5 ? (
                      <svg
                        width='16'
                        height='16'
                        viewBox='0 0 16 16'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M8.33844 13.3356L12.2151 15.8945C12.715 16.2224 13.3304 15.7346 13.1842 15.1348L12.0612 10.5447C12.0309 10.4175 12.0357 10.2839 12.0752 10.1594C12.1146 10.0349 12.1871 9.92454 12.2843 9.84101L15.761 6.82624C16.2148 6.4344 15.984 5.64272 15.3918 5.60274L10.8536 5.29886C10.7298 5.29137 10.6108 5.24654 10.5111 5.16985C10.4113 5.09317 10.3353 4.98794 10.2921 4.86704L8.59996 0.436842C8.55516 0.308816 8.47356 0.198222 8.36623 0.120071C8.2589 0.0419207 8.13104 0 8 0C7.86896 0 7.7411 0.0419207 7.63377 0.120071C7.52644 0.198222 7.44484 0.308816 7.40004 0.436842L5.70786 4.86704C5.66474 4.98794 5.58867 5.09317 5.48895 5.16985C5.38923 5.24654 5.27019 5.29137 5.14637 5.29886L0.608244 5.60274C0.015981 5.64272 -0.214771 6.4344 0.239041 6.82624L3.71571 9.84101C3.81288 9.92454 3.88537 10.0349 3.92484 10.1594C3.9643 10.2839 3.96913 10.4175 3.93877 10.5447L2.90038 14.799C2.72347 15.5187 3.46188 16.1025 4.05414 15.7106L7.66156 13.3356C7.76272 13.2687 7.88012 13.2332 8 13.2332C8.11988 13.2332 8.23728 13.2687 8.33844 13.3356Z'
                          fill='#FF9900'
                        />
                      </svg>
                    ) : (
                      <svg
                        width='16'
                        height='16'
                        viewBox='0 0 16 16'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M8.33844 13.3356L12.2151 15.8945C12.715 16.2224 13.3304 15.7346 13.1842 15.1348L12.0612 10.5447C12.0309 10.4175 12.0357 10.2839 12.0752 10.1594C12.1146 10.0349 12.1871 9.92454 12.2843 9.84101L15.761 6.82624C16.2148 6.4344 15.984 5.64272 15.3918 5.60274L10.8536 5.29886C10.7298 5.29137 10.6108 5.24654 10.5111 5.16985C10.4113 5.09317 10.3353 4.98794 10.2921 4.86704L8.59996 0.436842C8.55516 0.308816 8.47356 0.198222 8.36623 0.120071C8.2589 0.0419207 8.13104 0 8 0C7.86896 0 7.7411 0.0419207 7.63377 0.120071C7.52644 0.198222 7.44484 0.308816 7.40004 0.436842L5.70786 4.86704C5.66474 4.98794 5.58867 5.09317 5.48895 5.16985C5.38923 5.24654 5.27019 5.29137 5.14637 5.29886L0.608244 5.60274C0.015981 5.64272 -0.214771 6.4344 0.239041 6.82624L3.71571 9.84101C3.81288 9.92454 3.88537 10.0349 3.92484 10.1594C3.9643 10.2839 3.96913 10.4175 3.93877 10.5447L2.90038 14.799C2.72347 15.5187 3.46188 16.1025 4.05414 15.7106L7.66156 13.3356C7.76272 13.2687 7.88012 13.2332 8 13.2332C8.11988 13.2332 8.23728 13.2687 8.33844 13.3356Z'
                          fill='#CACACA'
                        />
                      </svg>
                    )}
                  </>
                );
              })}
              <p className='text-[24px] mt-2 ml-3'>4.0</p>

              <p className='text-[16px] mt-3 text-[#CACACA]'>/5</p>
            </p>
            <button className='w-[193px] h-[60px] bg-[#C5AC80] text-[18px] rounded-[70px]'>
              Book Appointment
            </button>
          </div>
        </div>
      </div>
      <div className='ml-24 mr-5 mt-5'>
        <p className='text-[35px]'> Barba Raja</p>
        <p className='text-justify leading-relaxed'>
          Nunc accumsan cursus viverra. Aliquam rutrum est eget tristique
          porttitor. Donec non ipsum lorem. Morbi malesuada, ex sed elementum
          tincidunt, tortor turpis sollicitudin magna, nec auctor ligula velit
          ut ante. Sed quis enim lobortis, rutrum purus sed, congue eros.
        </p>
        <p className='text-justify leading-relaxed'>
          Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. Etiam vestibulum lacinia pulvinar. Sed
          imperdiet eleifend diam ut venenatis. Vivamus vitae ultricies eros, a
          tristique justo. Sed venenatis, odio vel ornare condimentum, tellus
          leo bibendum ex, non fermentum augue felis vel nulla. Integer
          malesuada lectus nec pharetra facilisis. Mauris fermentum augue a enim
          dictum, a tincidunt ante tempus. Aliquam tortor velit, scelerisque id
          viverra rhoncus, interdum ut dolor. Curabitur egestas lobortis enim,
          vel imperdiet tortor fringilla in. Fusce rutrum, lorem a fringilla
          pulvinar, tortor leo placerat quam, vel facilisis urna erat eu ex.
          Quisque massa nisi, sagittis sed viverra in, dictum fringilla dolor.
          Integer vitae tincidunt augue
        </p>
      </div>
      <div className='ml-24 mr-10 mt-10'>
        <svg
          width='100%'
          height='1'
          viewBox='0 0 1192 1'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <line
            opacity='0.3'
            x1='3.05176e-05'
            y1='0.5'
            x2='1192'
            y2='0.5'
            stroke='#1E1E1E'
          />
        </svg>
      </div>
    </>
  );
};

export default BarberDetail;
