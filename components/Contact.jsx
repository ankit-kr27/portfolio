import { assets } from '@/assets/assets'
import Image from 'next/image'
import { useState } from 'react'

export const Contact = () => {
    const [result, setResult] = useState('')

    const onSubmit = async (event) => {
        event.preventDefault()
        setResult('Sending....')
        const formData = new FormData(event.target)

        formData.append('access_key', process.env.NEXT_PUBLIC_WEB3FORM_ACCESS_KEY)

        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData,
        })

        const data = await response.json()

        if (data.success) {
            setResult('Form Submitted Successfully')
            event.target.reset()
        } else {
            console.log('Error', data)
            setResult(data.message)
        }
    }
    return (
        <div
            id="contact"
            className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[lenght:90%_auto]"
        >
            <h4 className="text-center mb-2 text-lg font-Ovo">
                Connect With Me
            </h4>
            <h2 className="text-center text-5xl font-Ovo">Get In Touch</h2>
            <p className="text-center max-w-2xl mx-auto font-Ovo mt-5 mb-12">
                I'd love to hear from you! If you have any questions, comments,
                or feedback, feel free to reach out to me. I'll get back to you
                as soon as possible.
            </p>

            <form className="max-w-2xl mx-auto" onSubmit={onSubmit}>
                <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
                    <input
                        className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
                        name='name'
                        type="text"
                        placeholder="Enter your name"
                        required
                    />
                    <input
                        className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
                        name='email'
                        type="email"
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <textarea
                    className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6"
                    name='message'
                    rows={6}
                    placeholder="Enter your message"
                    required
                ></textarea>
                <button
                    className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500"
                    type="submit"
                >
                    Submit now{' '}
                    <Image
                        src={assets.right_arrow_white}
                        className="w-5"
                        alt={'arrow'}
                    />
                </button>
                <p className="mx-auto text-center">{result}</p>
            </form>
        </div>
    )
}
