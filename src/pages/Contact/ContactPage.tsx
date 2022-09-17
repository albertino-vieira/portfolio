import { useState } from "react";
import emailjs from '@emailjs/browser';

import './ContactPage.css'

interface ContactState {
    name: string;
    email: string;
    message: string
}


function ContactPage() {
    const [contactState, setContactState] = useState<ContactState>({ name: '', email: '', message: '' })


    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setContactState({ ...contactState, [name]: value });
    }
    console.log(process.env.REACT_APP_PUBLIC_KEY, process.env)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { name, email, message } = contactState;
        if (name !== '' && email !== '' && message !== '') {
            emailjs.send(process.env.REACT_APP_SERVICE_ID!, process.env.REACT_APP_TEMPLATE_ID!, { ...contactState }, process.env.REACT_APP_PUBLIC_KEY!)
                .then((response) => {
                    alert('Email sent!');
                }, (err) => {
                    alert('Error try again later!');
                });
        }
    }

    return <div className="page-container">
        <h1 className="title">Contact me</h1>

        <p className="info-label">If you want to reach me fill in some information and I will get back to you as soon as possible</p>
        <form className="form-contact" onSubmit={handleSubmit}>
            <label className="form-label">
                Name:
                <input className="form-label-input" type="text" name="name" onChange={handleChange} />
            </label>
            <label className="form-label">
                Email:
                <input className="form-label-input" type="text" name="email" onChange={handleChange} />
            </label>
            <label className="form-label">
                Message:
                <textarea className="form-label-text-area" name="message" onChange={handleChange} />
            </label>
            <input className="check-my-work-btn" type="submit" value="Submit" onChange={handleChange} />
        </form>
    </div>

}

export default ContactPage;