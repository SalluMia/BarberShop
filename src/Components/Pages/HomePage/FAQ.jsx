import React, { useState } from 'react';

const faqs = [
  {
    question: 'Quisque efficitur aliquet diam, a elementum neque rutrum vel.',
    answer:
      'Etiam cursus massa at elit tempor, non consectetur enim molestie. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
  },
  {
    question: 'Sed nec sem porttitor, dignissim odio a, finibus ligula.',
    answer:
      'React is a JavaScript library for building user interfaces. It allows you to create reusable UI components and manage the state of your application. React is often used in combination with other libraries and frameworks to build full-stack web applications.',
  },
  {
    question: 'Fusce at urna vel massa scelerisque facilisis ut at urna.',
    answer:
      'Etiam cursus massa at elit tempor, non consectetur enim molestie. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
  },

  {
    question:
      'Quisque luctus pulvinar aliquet. Sed vehicula ligula ut nibh aliquam, nec euismod.',
    answer:
      'Etiam cursus massa at elit tempor, non consectetur enim molestie. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
  },

  {
    question: 'Mauris lobortis vel nisl eu tempor. Duis hendrerit lacus nulla.',
    answer:
      'Etiam cursus massa at elit tempor, non consectetur enim molestie. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
  },

  {
    question:
      'Nulla elementum porta neque, vitae egestas lectus aliquam a. Pellentesque gravida.',
    answer:
      'Etiam cursus massa at elit tempor, non consectetur enim molestie. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
  },
];

const FAQ = () => {
  const [isOpen, setIsOpen] = useState(new Array(faqs.length).fill(false));

  const toggleFAQ = (index) => {
    setIsOpen((prevOpen) =>
      prevOpen.map((open, i) => (i === index ? !open : open))
    );
  };

  return (
    <div className='relative'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10'>
        <div className='max-w-3xl mx-auto text-center'>
          <h2 className='text-3xl font-bold  text-black mb-8'>
            Frequently Asked Questions
          </h2>
          <p> Quisque tempus erat dapibus enim faucibus ultricies. </p>
          <div className='space-y-4'>
            {faqs.map((faq, index) => (
              <div
                className={` ${
                  isOpen[index] && 'bg-[#C5AC80]'
                } border-2 rounded-lg p-6 border-[#C5AC80]`}
                key={index}
              >
                <buttonn
                  type='button'
                  className='flex justify-between items-center w-full text-left'
                  onClick={() => toggleFAQ(index)}
                >
                  <span className='text-xl '>{faq.question}</span>
                  <svg
                    className={`h-6 w-6 transform transition-transform ${
                      isOpen[index] && 'rotate-180'
                    }`}
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M19 9l-7 7-7-7'
                    />
                  </svg>
                </buttonn>
                {isOpen[index] && (
                  <div className='relative'>
                    <div className=' overflow-hidden transition-height ease-out duration-300 mt-4'>
                      <p className='text-black'>{faq.answer}</p>
                    </div>

                    <div className='absolute bottom-0 right-0'>
                      <svg
                        width='101'
                        height='101'
                        viewBox='0 0 101 101'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <rect
                          opacity='0.1'
                          x='50.5095'
                          y='-4'
                          width='77.0881'
                          height='77.0881'
                          rx='10'
                          transform='rotate(45 50.5095 -4)'
                          fill='white'
                        />
                      </svg>
                    </div>

                    <div className='absolute -bottom-[10px] right-20'>
                      <svg
                        width='49'
                        height='49'
                        viewBox='0 0 49 49'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <rect
                          opacity='0.1'
                          x='24.2549'
                          y='-1.49023'
                          width='37.1298'
                          height='37.1298'
                          rx='5'
                          transform='rotate(45 24.2549 -1.49023)'
                          fill='white'
                        />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <img
        className='absolute top-0 left-20 w-[220.47px] h-[510.78px] opacity-30 rotate-[220deg]'
        src='https://s3-alpha-sig.figma.com/img/454b/44e1/ff75b028adb83abe646dc480677ea294?Expires=1682899200&Signature=Nfyxr2ihD9ipIWAgB1f3CSrPgOdH2RAIOZKplNtCs10k1zQr1ju-v6bwCrI9X7lUny9749KdI18VzP0RFg8JBxorbawb-qLoPtWhBVbVw1vzWJ-eyZBQZ-je~npadTvzqY3XGYQBu~yX63ZD0yFunBPGsAlGVA07HXcmi5R3owynin7JHjxoQKhBO1x9fwCV8abbDecL0~yk27jx3UHCjBr09iu4kxCcfWZGHmLmtzfldDNME5~pVk0j-E3paaWFLgnwN-uAwRu7pg3o-H~fJTzN0u6anCJY33N6s5tYv8tC6-SC1uIfGWi7sqhrL9vkhmi4R7E2lIo-zwkpGRqdUQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
      />

      <div className='absolute top-40 right-10'>
        <svg
          width='199'
          height='199'
          viewBox='0 0 199 199'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect
            opacity='0.1'
            x='99.4905'
            y='-8.58579'
            width='152.843'
            height='152.843'
            rx='25'
            transform='rotate(45 99.4905 -8.58579)'
            fill='#C5AC80'
            stroke='#C5AC80'
            stroke-width='2'
          />
        </svg>
      </div>

      <div className='absolute bottom-0 -left-[90px]'>
        <svg
          width='199'
          height='199'
          viewBox='0 0 199 199'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect
            opacity='0.1'
            x='99.4905'
            y='-8.58579'
            width='152.843'
            height='152.843'
            rx='25'
            transform='rotate(45 99.4905 -8.58579)'
            fill='#C5AC80'
            stroke='#C5AC80'
            stroke-width='2'
          />
        </svg>
      </div>
    </div>
  );
};

export default FAQ;
