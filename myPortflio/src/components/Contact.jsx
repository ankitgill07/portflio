import React, { useState } from 'react'
import Footer from './Footer';

function Contact() {

const [formData , setFormData] = useState({
name: "",
email : "",
message : ""
})
  const [isSubmitting, setIsSubmitting] = useState(false); 


const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "0b236547-68f6-4c49-8e8d-ca93381dc3b8");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
    
          body: json
        }).then((res) => res.json());

        if (res.success) {
          console.log("Success", res);
          alert("Form submitted successfully!");
setIsSubmitting(true)
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        }
      };
  return (
    <div className='mt-7 pb-10'>
        <div className=' text-center py-14'>
            <h2  className=' font-poppins text-white tracking-wide text-6xl font-extrabold'>Let's connect</h2>
        </div>
        <div className='lg:flex items-center lg:space-x-48 xl:space-x-64 space-y-32 lg:space-y-0 i'>
       <img className='w-full h-full lg:w-[480px] xl:w-[640px] aspect-[16/9] object-cover' src="https://anuragsinghbam.netlify.app/images/contact-me.svg" alt="" />
         <div className='w-full'>
         <form onSubmit={onSubmit} className=' flex flex-col'>
            <label className=' fill-white text-white flex gap-1.5  items-center font-poppins ' htmlFor="name">
            <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle></svg>Name</label>
            <input className='mt-[6px] mb-4 p-[11px] outline-none    rounded-md' name='name' type="text"      value={formData.name}
          onChange={handleChange} placeholder='' required />
            <label className=' fill-white text-white flex gap-1.5 items-center font-poppins ' htmlFor="name">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-at-sign">
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path></svg>Email</label>
            <input className='mt-[6px] mb-4 p-[11px] outline-none    rounded-md' type="email" name='email'      value={formData.email}
          onChange={handleChange}  placeholder='' required />
            <label className=' fill-white text-white gap-1.5  flex items-center font-poppins ' htmlFor="name">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-message-square">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>Message</label>
              <textarea className=' outline-none rounded-md mt-[6px] mb-4 p-[11px]' name="message" id="message"          value={formData.message}
          onChange={handleChange} cols="25" rows="10" required></textarea>

              <button  className={'font-poppins mt-[6px] mb-4 p-[11px] font-medium flex gap-2 items-center rounded-md justify-center text-white text-base  ' + (isSubmitting ? "bg-[#3c853d] "  : "bg-[#1788ae] ]")}>
              <i class="fas fa-paper-plane"></i>
                Send Message</button>
         </form>
         </div>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default Contact