import { useState } from "react";

import Layout from "../components/Layout/Layout";

const Page = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)
    
    const handleSubmit = (e) => { 
        e.preventDefault()
        console.log('Sending')
        
        let data = {
            name,
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
                setName('')
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
                        <div className="md:w-1/2 flex">
                            <h3 className="heading-brand-medium inline-block">Get in <br/><em>touch</em></h3>
                        </div>
                        <div className="md:w-1/2">
                        
                        < form >
                            <div>
                                <label htmlFor='name'>Name</label>
                                <input type='text' name='name' 
                                onChange={(e)=>{setName(e.target.value)}} />  
                            </div>
                            <div>
                                <label htmlFor='email'>Email</label>
                                <input type='email' name='email'
                                onChange={(e)=>{setEmail(e.target.value)}} />
                            </div>
                            <div>
                                <label htmlFor='message'>Message</label>
                                <input type='text' name='message'
                                onChange={(e)=>{setMessage(e.target.value)}} />
                            </div>
                            <input type='submit' onClick={(e)=>{handleSubmit(e)}}/>
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
