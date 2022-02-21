import { useState } from "react";

const ModuleContact = ({settings}) => {

    const [hp1, setHp1] = useState('')
    const [hp2, setHp2] = useState('hp')
    const [enquiry, setEnquiry] = useState('General Enquiry')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const [thankyou, setThankyou] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()

        let data = {
            enquiry,
            yourEmail: email,
            message
        }

        if ( hp1 !== '' || hp2 !== 'hp' ) {

            return;
        }

        const result = await fetch('/api/contact', {
            method: 'POST',
            
            body: JSON.stringify(data)
        }).then((data) => {  
            
            if (data.status === 200) {

                return data.json();
            }
        });

        if ( result.result.status == 'mail_sent' ) {
            setSubmitted(true)
            setEmail('')
            setMessage('')
            setEnquiry('')
        } else {

            const form_groups = document.querySelectorAll('.form-group');
            form_groups.forEach( (group) => {
                group.classList.remove('text-red-1');

                if ( group.querySelector('.error') ) {
                    group.querySelector('.error').remove();
                }
            });

            if ( result.result.invalid_fields.length ) {
                

                result.result.invalid_fields.forEach( (invalid_field) => {
                    const el = document.getElementById(invalid_field.error_id);
                    el.classList.add('text-red-1');
                    
                    el.insertAdjacentHTML('beforeend', '<span class="absolute text-12px error">'+invalid_field.message+'</span>');

                });         
            }

        }

    }

    return (
        <>
        <div className="min-vh100 w-full top-0 left-0 z-10 flex items-center py-20 lg:py-40">
                <div className="container">
                    <div className="max-w-1430px mx-auto">
                        <div className="md:flex">
                            <div className="md:w-1/2 md:flex">
                                <h3 className="heading-brand-medium block mb-10 text-center">Get in <br className="hidden md:block"/><em>touch</em></h3>
                            </div>
                            <div className="md:w-1/2">

                                <p className={`transition-all delay-500 absolute my-10 uppercase ${submitted ? 'opacity-100 visible' : 'opacity-0 invisible'} `}>We look forward to finding your message.</p>
                                <form className={`transition-all ${submitted ? 'opacity-0 invisible' : ''} form`}>
                                    <div className="form-group" id="-ve-enquiry">
                                        <label className="hidden" htmlFor='enquiry'>Enquiry Type</label>
                                        <select type='text' name='enquiry'
                                        onChange={(e)=>{setEnquiry(e.target.value)}}>
                                            <option>General Enquiry</option>
                                        </select>
                                    </div>
                                    <div className="form-group" id="-ve-yourEmail">
                                        <label className="hidden" htmlFor='email'>Email</label>
                                        <input placeholder="Enter your email" type='email' name='your-email'
                                        onChange={(e)=>{setEmail(e.target.value)}} />
                                    </div>
                                    <div className="form-group" id="-ve-message">
                                        <label className="hidden" htmlFor='message'>Message</label>
                                        <textarea placeholder="Message" type='text' name='message'
                                        onChange={(e)=>{setMessage(e.target.value)}}></textarea>
                                    </div>
                                    <input className="!hidden" placeholder="Enter your email" type='text' name='hp1' value={hp1}
                                        onChange={(e)=>{setHp1(e.target.value)}} />
                                    <input className="!hidden" placeholder="Enter your email" type='text' name='hp2' value={hp2}
                                        onChange={(e)=>{setHp2(e.target.value)}} />
                                    <button className="button-tertiary" type='submit' onClick={(e)=>{handleSubmit(e)}}>Submit</button>
                                </form >

                            </div>
                        </div>
                    </div>
                </div>
        </div>
        </>
    );
};

export default ModuleContact;