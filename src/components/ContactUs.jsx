import toast from 'react-hot-toast';
import assets from '../assets/assets'
import Title from './Title'

const ContactUs = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "4a0ca682-103d-4113-ae1b-d08244e50afb");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Thank you for your submission!");
        event.target.reset();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div id='contact-us' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700'>

      <Title 
        title='Reach out to us' 
        desc='from strategy to execution, we craft digital solution that move your business forward' 
      />

      <form onSubmit={onSubmit} className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full'>

        <div>
          <label className='mb-2 text-sm font-medium'>Your Name</label>
          <div className='flex pl-3 rounded-lg border border-gray-300'>
            <img src={assets.person_icon} alt="" />
            <input 
              type="text" 
              name="name"
              placeholder='Enter your name' 
              className='w-full text-sm p-3 outline-none' 
              required
            />
          </div>
        </div>

        <div>
          <label className='mb-2 text-sm font-medium'>Email id</label>
          <div className='flex pl-3 rounded-lg border border-gray-300'>
            <img src={assets.email_icon} alt="" />
            <input 
              type="email" 
              name="email"
              placeholder='Enter your Email' 
              className='w-full text-sm p-3 outline-none' 
              required
            />
          </div>
        </div>

        <div className='sm:col-span-2'>
          <label className='mb-2 text-sm font-medium'>Message</label>
          <textarea 
            name="message"
            rows={8} 
            placeholder='Enter your message' 
            className='w-full text-sm p-3 outline-none rounded-lg border border-gray-300' 
            required
          />
        </div>

        <button 
          type="submit" 
          className='w-max flex gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-105 transition-all'
        >
          Submit 
          <img src={assets.arrow_icon} alt="" className='w-4'/>
        </button>

      </form>

    </div>
  )
}

export default ContactUs