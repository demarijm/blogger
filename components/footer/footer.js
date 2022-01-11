import Image from 'next/image'


function Footer() {
    return <>
      <hr className='mb-2'/>
      <div className='flex justify-center p-8 items-start'>
      <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className='flex justify-center items-center'
        >
          Demari'd by {' '}

            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />

        </a>
        </div>
    </>
    ;
  }

  export default Footer