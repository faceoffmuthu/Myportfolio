import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

const Footer = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const form = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage('')

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log('✅ Message sent successfully:', result.text)
          setShowSuccessMessage(true)
          e.target.reset()
          setTimeout(() => setShowSuccessMessage(false), 3000)
          setIsSubmitting(false)
        },
        (error) => {
          console.error('❌ Failed to send:', error.text)
          setErrorMessage('Something went wrong. Please try again later.')
          setIsSubmitting(false)
        }
      )
  }

  return (
    <section data-no-custom-cursor className="w-full bg-gray-100 py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <div className="w-full max-w-7xl mx-auto">
        {/* Top Contact Section */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-8 md:gap-10 mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 flex-1 w-full">
            <div className="flex-1 border border-gray-400 rounded-full px-3 sm:px-4 md:px-5 lg:px-6 py-2.5 sm:py-3 md:py-3.5 lg:py-4 text-center sm:text-left">
              <p className="text-black text-sm sm:text-base md:text-lg lg:text-xl font-saira-condensed break-words">+91 9629122832</p>
            </div>
            <div className="flex-1 border border-gray-400 rounded-full px-3 sm:px-4 md:px-5 lg:px-6 py-2.5 sm:py-3 md:py-3.5 lg:py-4 text-center sm:text-left">
              <p className="text-black text-sm sm:text-base md:text-lg lg:text-xl font-saira-condensed break-words">faceoffmuthu@gmail.com</p>
            </div>
            <div className="flex-1 border border-gray-400 rounded-full px-3 sm:px-4 md:px-5 lg:px-6 py-2.5 sm:py-3 md:py-3.5 lg:py-4 text-center sm:text-left">
              <p className="text-black text-sm sm:text-base md:text-lg lg:text-xl font-saira-condensed break-words">Tirunelveli, Tamil Nadu</p>
            </div>
          </div>

          <div className="flex items-start sm:items-center gap-2 sm:gap-3 flex-shrink-0 lg:ml-auto w-full sm:w-auto justify-center sm:justify-start lg:justify-end">
            <span className="text-black text-lg sm:text-xl md:text-2xl flex-shrink-0">✺</span>
            <h2 className="text-black text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold uppercase font-saira-condensed leading-tight">
              INTERESTED IN <br className="hidden sm:block" /> WORKING WITH ME ?
            </h2>
          </div>
        </div>

        {/* Form Section */}
        <div className="border-t border-gray-400 pt-6 sm:pt-8 md:pt-10 lg:pt-12">
          <form ref={form} onSubmit={handleSubmit} className="relative">
            <div className="flex flex-col lg:flex-row gap-0 border border-gray-400">
              <div className="flex flex-col sm:flex-row border-b border-gray-400">
                {/* Name */}
                <div className="flex-1 border-b sm:border-b-0 sm:border-r border-gray-400 p-3 sm:p-4 md:p-5 lg:p-6">
                  <label className="block text-black text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold uppercase font-saira-condensed mb-1.5 sm:mb-2">
                    YOUR NAME *
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    placeholder="John Alex"
                    required
                    className="w-full bg-transparent text-gray-500 text-sm sm:text-base md:text-lg lg:text-xl font-saira-condensed placeholder-gray-400 outline-none"
                  />
                </div>

                {/* Email */}
                <div className="flex-1 p-3 sm:p-4 md:p-5 lg:p-6">
                  <label className="block text-black text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold uppercase font-saira-condensed mb-1.5 sm:mb-2">
                    YOUR EMAIL *
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    placeholder="john.example@gmail.com"
                    required
                    className="w-full bg-transparent text-gray-500 text-sm sm:text-base md:text-lg lg:text-xl font-saira-condensed placeholder-gray-400 outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Message + Button */}
            <div className="flex flex-col lg:flex-row border-l border-r border-b border-gray-400">
              <div className="flex-1 p-3 sm:p-4 md:p-5 lg:p-6">
                <label className="block text-black text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold uppercase font-saira-condensed mb-1.5 sm:mb-2">
                  YOUR MESSAGE *
                </label>
                <textarea
                  name="message"
                  placeholder="Hi, I'm Looking for..."
                  rows="4"
                  required
                  className="w-full bg-transparent text-gray-500 text-sm sm:text-base md:text-lg lg:text-xl font-saira-condensed placeholder-gray-400 outline-none resize-none"
                />
              </div>

              <div className="w-full lg:w-auto lg:min-w-[140px] xl:min-w-[180px] border-t lg:border-t-0 lg:border-l border-gray-400 flex items-center justify-center lg:flex-col lg:justify-center p-3 sm:p-4 md:p-6 lg:p-8 xl:p-10 bg-black hover:bg-gray-900 transition-colors">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`flex items-center justify-center gap-2 sm:gap-2.5 md:gap-3 text-white font-bold uppercase font-saira-condensed text-xs sm:text-sm md:text-base lg:text-base xl:text-lg hover:opacity-90 transition-opacity group w-full lg:w-auto ${
                    isSubmitting ? 'opacity-60 cursor-not-allowed' : ''
                  }`}
                >
                  <span className="font-saira-condensed text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl whitespace-nowrap">
                    {isSubmitting ? 'SENDING...' : 'SEND TO ME'}
                  </span>
                  <svg
                    width="16"
                    height="16"
                    className="sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0 transform rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </form>

          {/* Success or Error Messages */}
          {showSuccessMessage && (
            <p className="text-green-600 mt-4 text-center font-saira-condensed">
              ✅ Message sent successfully!
            </p>
          )}
          {errorMessage && (
            <p className="text-red-600 mt-4 text-center font-saira-condensed">
              {errorMessage}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}

export default Footer
