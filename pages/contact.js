import { useState } from "react";

import Layout from "../components/Layout/Layout";

const Page = () => {

    const [enquiry, setEnquiry] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)
    
    const handleSubmit = (e) => { 
        e.preventDefault()
        console.log('Sending')
        
        let data = {
            enquiry,
            email,
            message
        }

        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => {
            console.log('Response received')
            if (res.status === 200) {
                console.log('Response succeeded!')
                setSubmitted(true)
                setEnquiry('')
                setEmail('')
                setBody('')
            }
        });
    }
    
    return (
    <div className="bg-cream-1  min-vh100 w-full top-0 left-0 z-10 flex items-center py-20">
            <div className="container">
                <div className="max-w-1430px mx-auto">
                    <div className="md:flex">
                        <div className="md:w-1/2 md:flex">
                            <h3 className="heading-brand-medium block mb-10 text-center">Get in <br className="hidden md:block"/><em>touch</em></h3>
                        </div>
                        <div className="md:w-1/2">
                        
                        <form className="form">
                            <div class="form-group">
                                <label className="hidden" htmlFor='enquiry'>Enquiry Type</label>
                                <select type='text' name='enquiry' 
                                onChange={(e)=>{setEnquiry(e.target.value)}}>
                                    <option>General Enquiry</option>
                                    <option>Option 2</option>
                                    <option>Option 3</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label className="hidden" htmlFor='email'>Email</label>
                                <input placeholder="Enter your email" type='email' name='email'
                                onChange={(e)=>{setEmail(e.target.value)}} />
                            </div>
                            <div class="form-group">
                                <label className="hidden" htmlFor='message'>Message</label>
                                <textarea placeholder="Message" type='text' name='message'
                                onChange={(e)=>{setMessage(e.target.value)}}></textarea>
                            </div>
                            <button className="button-tertiary" type='submit' onClick={(e)=>{handleSubmit(e)}}>Submit</button>
                        </form >

                        </div>
                    </div>
                </div>
            </div>
    </div>
    );
};

export default Page;

Page.getLayout = function getLayout(page) {
return (
    <Layout border="true">{page}</Layout>
)
}

export async function getStaticProps({ params }) {
return {
    props: {
    test: ""
    },
    revalidate: 1,
};
}
