import { Header } from '@/components/Form';
import { PageSEO } from '@/components/SEO';
import siteMetadata from '@/data/siteMetadata';
import { useRandomColorPair } from '@/lib/hooks/useRandomColorPair';
import { RoughNotation } from 'react-rough-notation';

function Contact(): React.ReactElement {
  const [randomColor] = useRandomColorPair();

  return (
    <>
      <PageSEO
        title={`Contact - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <div className='fade-in divide-y-2 divide-gray-100 dark:divide-gray-800'>
        <Header title='Contact' />
        <div className='container py-12'>
          <p className='text-gray-800 dark:text-gray-200'>
          Any questions about anything I've been working on? Do you have a project that you think I might like and could possibly be involved in? Let me know!
          </p>
          <form
            action='https://formspree.io/xrgnvgyb'
            method='POST'
            className='mt-4'
          >
            <div className='flex flex-col mb-4'>
              <label
                htmlFor='name'
                className='mb-2 text-gray-800 dark:text-gray-200'
              >
                Name
              </label>
              <input
                type='text'
                id='name'
                name='name'
                required
                className='border-2 border-gray-300 p-2 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
              />
            </div>
            <div className='flex flex-col mb-4'>
              <label
                htmlFor='email'
                className='mb-2 text-gray-800 dark:text-gray-200'
              >
                Email
              </label>
              <input
                type='email'
                id='email'
                name='_replyto'
                required
                className='border-2 border-gray-300 p-2 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
              />
            </div>
            <div className='flex flex-col mb-4'>
              <label
                htmlFor='message'
                className='mb-2 text-gray-800 dark:text-gray-200'
              >
                Message
              </label>
              <textarea
                id='message'
                name='message'
                rows={4}
                required
                className='border-2 border-gray-300 p-2 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
              ></textarea>
            </div>
            <button
              type='submit'
              className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded'
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
