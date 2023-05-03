import React from 'react';

const Reviews = () => {
  return (
    <div className='py-1'>
      <div className='bg-[#C5AC80]  mx-auto px-4 sm:px-6 lg:px-8 my-10'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10'>
          <div className='mx-auto text-center'>
            <h2 className='text-3xl font-bold text-black mb-8'>
              What Our Customer Says
            </h2>
            {/* card */}

            <div className='flex flex-row overflow-x-auto no-scrollbar md:justify-center  items-center space-x-6 w-100'>
              {/* Card 1 */}
              <div className='relative '>
                <div className='bg-white  shadow-lg p-6 w-[100%] flex flex-col items-center space-y-3 rounded-lg'>
                  <div className='w-[182px] h-[182px] border-[#A4906C] border-2 rounded-full flex justify-center items-center'>
                    <img
                      src='https://s3-alpha-sig.figma.com/img/0d9f/85f7/9ed6c9dcfc2516a8bb6b79a7b8816fe5?Expires=1682899200&Signature=kyLC7pY3~78GQeMTBs71PTxEsXRdIOA7H7HvnpfnOcL5z1QQTZQT1XXHwNk4szGrjCofPhTwfHqzFWfR4cah~V38E4XLblzhE9qYMBM642I2yAqnRu4Xld1vY7m2TY315SZ7aQHbVa2gmAjmuxne2PnaQE~V-CZHymHkqnAqGOTU5HId2mwOIJNo0027wQdy2vTcn7n4Gatgl2tBvJqxeRS~PNCQR319Sv2bq4tr~0Bch5Y4XboU-M84TfetWL~LGHTejKUeln7SF3IKqm6-OrT~aysF5-UkGEo1qpzEQl79m8FzFlwW5Xmtgh7A4SBmu-0ExVOsiWzc8sFx5NJqCQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
                      className='border-[#A4906C] w-[132px] h-[132px] border-2 rounded-full object-cover'
                    />
                  </div>

                  <div className='flex justify-center items-center text-xl  gap-1 text-gray-900 mb-2'>
                    <div className='font-bold'>Eemma</div>
                    <div>Jordan</div>
                  </div>

                  <p className='text-gray-600'>
                    Phasellus vitae lorem porta elit molestie vestibulum. Duis
                    varius urna vitae libero dignissim fermentum. Nullam quis
                    purus id sem cursus facilisis.
                  </p>
                  <div className='flex justify-between items-center lg:w-[250px] md:w-[200px]'>
                    <div class='flex items-center'>
                      <svg
                        aria-hidden='true'
                        class='w-5 h-5 text-yellow-400'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <title>First star</title>
                        <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                      </svg>
                      <svg
                        aria-hidden='true'
                        class='w-5 h-5 text-yellow-400'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <title>Second star</title>
                        <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                      </svg>
                      <svg
                        aria-hidden='true'
                        class='w-5 h-5 text-yellow-400'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <title>Third star</title>
                        <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                      </svg>
                      <svg
                        aria-hidden='true'
                        class='w-5 h-5 text-yellow-400'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <title>Fourth star</title>
                        <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                      </svg>
                      <svg
                        aria-hidden='true'
                        class='w-5 h-5 text-gray-300 dark:text-gray-500'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <title>Fifth star</title>
                        <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                      </svg>
                    </div>

                    <div>
                      <p>
                        4.0 <span className='text-xs text-gray-500'>/5</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className='absolute top-3 -right-[70px]'>
                  <svg
                    width='63'
                    height='35'
                    viewBox='0 0 63 35'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      opacity='0.8'
                      d='M28.8164 15.8086C28.8164 12.1921 27.4915 8.77246 24.8418 5.5498C22.0488 2.18392 18.8799 0.500977 15.335 0.500977C13.0433 0.500977 11.8975 1.48568 11.8975 3.45508C11.8975 4.13542 12.5778 4.86947 13.9385 5.65723C15.2992 6.48079 15.9795 7.73405 15.9795 9.41699C15.9795 11.0641 15.2812 12.0309 13.8848 12.3174C14.028 12.2816 12.6673 12.2637 9.80273 12.2637C7.1888 12.2637 4.98665 13.3021 3.19629 15.3789C1.51335 17.3483 0.671875 19.6579 0.671875 22.3076C0.671875 25.7451 1.99674 28.6276 4.64648 30.9551C7.15299 33.2109 10.1608 34.3389 13.6699 34.3389C23.7676 34.3389 28.8164 28.1621 28.8164 15.8086ZM62.9229 15.8086C62.9229 12.1921 61.598 8.77246 58.9482 5.5498C56.1553 2.18392 52.9863 0.500977 49.4414 0.500977C47.1497 0.500977 46.0039 1.48568 46.0039 3.45508C46.0039 4.13542 46.6842 4.86947 48.0449 5.65723C49.3698 6.48079 50.0322 7.73405 50.0322 9.41699C50.0322 11.0999 49.334 12.0667 47.9375 12.3174C48.0807 12.2816 46.738 12.2637 43.9092 12.2637C41.2952 12.2637 39.0931 13.3021 37.3027 15.3789C35.6198 17.3483 34.7783 19.6579 34.7783 22.3076C34.7783 25.7451 36.1032 28.6276 38.7529 30.9551C41.2594 33.2109 44.2673 34.3389 47.7764 34.3389C57.874 34.3389 62.9229 28.1621 62.9229 15.8086Z'
                      fill='#C5AC80'
                    />
                  </svg>
                </div>
              </div>

              {/* Card 2 */}
              <div className='relative'>
                <div className='bg-[#1E1E1E] text-white shadow-lg p-6 w-[100%] flex flex-col items-center space-y-3 rounded-lg'>
                  <div className='w-[182px] border-[#A4906C] h-[182px] border-2 rounded-full flex justify-center items-center'>
                    <img
                      src='https://s3-alpha-sig.figma.com/img/8a49/666c/003d9847fbff56ccac019da81f4166f3?Expires=1682899200&Signature=fr3NfN4U7CY79-bBzAwfz7diLr6z4ERBHvD4OwD~8iEMqsBkIEYvdRjGiC66VdWO5Wcu8XliVJPOMhACX4JYVEemo1O7ysb0G98XxP9YSMJiHOoL-ZghsWKg30k9xCefejXXtoCqwgtSqsq5Q~zQPov7Gz8K2~oKVymZ41LbT4YLGdAMNksr2K7d~qhqGkrjGPXKfyrCcfo9Zp2ZkZOcBSzGvn85ZcT5VsMEy5GVWlQXvgKUSIWCsVwu49QdkFi2F0dR2DjyYGmn3KN9C~DT0dMsn-kC93MDImN0yDjk3eX7ganPvzbSRFzpFtEtH-ROqEynetLv8Rq94PkSDgeJlQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
                      className='w-[132px] border-[#A4906C] h-[132px] border-2 rounded-full object-cover'
                    />
                  </div>

                  <div className='flex justify-center items-center text-xl  gap-1  mb-2'>
                    <div className='font-bold'>Eemma</div>
                    <div>Jordan</div>
                  </div>

                  <p className=''>
                    Phasellus vitae lorem porta elit molestie vestibulum. Duis
                    varius urna vitae libero dignissim fermentum. Nullam quis
                    purus id sem cursus facilisis.
                  </p>
                  <div className='flex justify-between items-center lg:w-[250px] md:w-[200px]'>
                    <div class='flex items-center'>
                      <svg
                        aria-hidden='true'
                        class='w-5 h-5 text-yellow-400'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <title>First star</title>
                        <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                      </svg>
                      <svg
                        aria-hidden='true'
                        class='w-5 h-5 text-yellow-400'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <title>Second star</title>
                        <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                      </svg>
                      <svg
                        aria-hidden='true'
                        class='w-5 h-5 text-yellow-400'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <title>Third star</title>
                        <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                      </svg>
                      <svg
                        aria-hidden='true'
                        class='w-5 h-5 text-yellow-400'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <title>Fourth star</title>
                        <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                      </svg>
                      <svg
                        aria-hidden='true'
                        class='w-5 h-5 text-gray-300 dark:text-gray-500'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <title>Fifth star</title>
                        <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                      </svg>
                    </div>

                    <div>
                      <p>
                        4.0 <span className='text-xs text-gray-500'>/5</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className='absolute top-3 -right-[70px]'>
                  <svg
                    width='63'
                    height='35'
                    viewBox='0 0 63 35'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      opacity='0.8'
                      d='M28.8164 15.8086C28.8164 12.1921 27.4915 8.77246 24.8418 5.5498C22.0488 2.18392 18.8799 0.500977 15.335 0.500977C13.0433 0.500977 11.8975 1.48568 11.8975 3.45508C11.8975 4.13542 12.5778 4.86947 13.9385 5.65723C15.2992 6.48079 15.9795 7.73405 15.9795 9.41699C15.9795 11.0641 15.2812 12.0309 13.8848 12.3174C14.028 12.2816 12.6673 12.2637 9.80273 12.2637C7.1888 12.2637 4.98665 13.3021 3.19629 15.3789C1.51335 17.3483 0.671875 19.6579 0.671875 22.3076C0.671875 25.7451 1.99674 28.6276 4.64648 30.9551C7.15299 33.2109 10.1608 34.3389 13.6699 34.3389C23.7676 34.3389 28.8164 28.1621 28.8164 15.8086ZM62.9229 15.8086C62.9229 12.1921 61.598 8.77246 58.9482 5.5498C56.1553 2.18392 52.9863 0.500977 49.4414 0.500977C47.1497 0.500977 46.0039 1.48568 46.0039 3.45508C46.0039 4.13542 46.6842 4.86947 48.0449 5.65723C49.3698 6.48079 50.0322 7.73405 50.0322 9.41699C50.0322 11.0999 49.334 12.0667 47.9375 12.3174C48.0807 12.2816 46.738 12.2637 43.9092 12.2637C41.2952 12.2637 39.0931 13.3021 37.3027 15.3789C35.6198 17.3483 34.7783 19.6579 34.7783 22.3076C34.7783 25.7451 36.1032 28.6276 38.7529 30.9551C41.2594 33.2109 44.2673 34.3389 47.7764 34.3389C57.874 34.3389 62.9229 28.1621 62.9229 15.8086Z'
                      fill='#C5AC80'
                    />
                  </svg>
                </div>
              </div>

              {/* Card 3 */}
              <div className='relative'>
                <div className=' text-black bg-white shadow-lg p-6 w-[100%] flex flex-col items-center space-y-3 rounded-lg'>
                  <div className='w-[182px] border-[#A4906C] h-[182px] border-2 rounded-full flex justify-center items-center'>
                    <img
                      src='https://s3-alpha-sig.figma.com/img/105c/b09b/57309e1cce4c270d6cbf1e57f273c4f6?Expires=1682899200&Signature=eQAD0u-JME98Nm~xwJfPecnviR4qxegEX3SYRDiplMytoBtgcGkd-MOe0pb7scbzH6woL0~lQXl6q6db0VmZpUouuuP0dmBEp4irB~dl1tAPmxB7u02yIyamDM~J~KS5XfKP6teLEIDIyFA4SqLUCWboFDo8ibX1m-wnbAmjjJXupc1a9VUQeshL0Fia10WsbGkhW-qr7rW0T5YUI56tmYBTU5P7auBeknI8-VtIQpViywYE7Qqy1It1LcHJQ02kiIZChpL2HUNVWQVaQpjSCPaNBXwqsFhTRmtwwVq-tz20N68lo1YR11T5Gi6xqisoH6C~YhfYO5k-TXTao4HCYQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
                      className='w-[132px] border-[#A4906C] h-[132px] border-2 rounded-full object-cover'
                    />
                  </div>

                  <div className='flex justify-center items-center text-xl  gap-1  mb-2'>
                    <div className='font-bold'>Eemma</div>
                    <div>Jordan</div>
                  </div>

                  <p className=''>
                    Phasellus vitae lorem porta elit molestie vestibulum. Duis
                    varius urna vitae libero dignissim fermentum. Nullam quis
                    purus id sem cursus facilisis.
                  </p>
                  <div className='flex justify-between items-center lg:w-[250px] md:w-[200px]'>
                    <div class='flex items-center'>
                      <svg
                        aria-hidden='true'
                        class='w-5 h-5 text-yellow-400'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <title>First star</title>
                        <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                      </svg>
                      <svg
                        aria-hidden='true'
                        class='w-5 h-5 text-yellow-400'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <title>Second star</title>
                        <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                      </svg>
                      <svg
                        aria-hidden='true'
                        class='w-5 h-5 text-yellow-400'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <title>Third star</title>
                        <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                      </svg>
                      <svg
                        aria-hidden='true'
                        class='w-5 h-5 text-yellow-400'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <title>Fourth star</title>
                        <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                      </svg>
                      <svg
                        aria-hidden='true'
                        class='w-5 h-5 text-gray-300 dark:text-gray-500'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <title>Fifth star</title>
                        <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                      </svg>
                    </div>

                    <div>
                      <p>
                        4.0 <span className='text-xs text-gray-500'>/5</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className='absolute top-3 -right-[70px]'>
                  <svg
                    width='63'
                    height='35'
                    viewBox='0 0 63 35'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      opacity='0.8'
                      d='M28.8164 15.8086C28.8164 12.1921 27.4915 8.77246 24.8418 5.5498C22.0488 2.18392 18.8799 0.500977 15.335 0.500977C13.0433 0.500977 11.8975 1.48568 11.8975 3.45508C11.8975 4.13542 12.5778 4.86947 13.9385 5.65723C15.2992 6.48079 15.9795 7.73405 15.9795 9.41699C15.9795 11.0641 15.2812 12.0309 13.8848 12.3174C14.028 12.2816 12.6673 12.2637 9.80273 12.2637C7.1888 12.2637 4.98665 13.3021 3.19629 15.3789C1.51335 17.3483 0.671875 19.6579 0.671875 22.3076C0.671875 25.7451 1.99674 28.6276 4.64648 30.9551C7.15299 33.2109 10.1608 34.3389 13.6699 34.3389C23.7676 34.3389 28.8164 28.1621 28.8164 15.8086ZM62.9229 15.8086C62.9229 12.1921 61.598 8.77246 58.9482 5.5498C56.1553 2.18392 52.9863 0.500977 49.4414 0.500977C47.1497 0.500977 46.0039 1.48568 46.0039 3.45508C46.0039 4.13542 46.6842 4.86947 48.0449 5.65723C49.3698 6.48079 50.0322 7.73405 50.0322 9.41699C50.0322 11.0999 49.334 12.0667 47.9375 12.3174C48.0807 12.2816 46.738 12.2637 43.9092 12.2637C41.2952 12.2637 39.0931 13.3021 37.3027 15.3789C35.6198 17.3483 34.7783 19.6579 34.7783 22.3076C34.7783 25.7451 36.1032 28.6276 38.7529 30.9551C41.2594 33.2109 44.2673 34.3389 47.7764 34.3389C57.874 34.3389 62.9229 28.1621 62.9229 15.8086Z'
                      fill='#C5AC80'
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
