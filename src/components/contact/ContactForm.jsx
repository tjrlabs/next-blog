'use client';
import classes from './contact-form.module.css'
import {useRef, useState, useEffect} from "react";
import Notification from "@/components/ui/notification";

async function sendContactData(contactDetails){
    const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(contactDetails),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const data = await response.json();

    if(!response.ok){
        throw new Error(data.message || 'Something went wrong!');
    }
    //return await response.json();
}

export default function ContactFormComponent(){

    const emailRef = useRef();
    const nameRef = useRef();
    const messageRef = useRef();
    const [requestStatus,setRequestStatus] = useState();
    const [requestError, setRequestError] = useState();

    useEffect(() => {
        if(requestStatus === 'success' || requestStatus === 'error'){
            const timer = setTimeout(() => {
                setRequestStatus(null);
                setRequestError(null);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [requestStatus]);

    async function sendMessageHandler(event){
        event.preventDefault();
        setRequestStatus('pending');
        try{
            await sendContactData({
                email: emailRef.current.value,
                name: nameRef.current.value,
                message: messageRef.current.value
            });
            setRequestStatus('success');
            emailRef.current.value = '';
            nameRef.current.value = '';
            messageRef.current.value = '';
        }
        catch (error) {
            setRequestStatus('error');
            setRequestError(error.message);
        }
    }

    let notification;

    if(requestStatus === 'pending'){
        notification = {
            status: 'pending',
            title: 'Sending message...',
            message: 'Your message is on its way!'
        }
    }else if(requestStatus === 'success'){
        notification = {
            status: 'success',
            title: 'Success!',
            message: 'Message sent successfully!'
        }
    }else if(requestStatus === 'error'){
        notification = {
            status: 'error',
            title: 'Error!',
            message: requestError
        }
    }

    return <section className={classes.contact}>
        <h1>How can I help you?</h1>
        <form className={classes.form} onSubmit={sendMessageHandler}>
            <div className={classes.controls}>
                <div className={classes.control}>
                    <label htmlFor='email'>Your Email</label>
                    <input type='email' id='email' ref={emailRef} required />
                </div>
                <div className={classes.control}>
                    <label htmlFor='name'>Your Name</label>
                    <input type='text' id='name' ref={nameRef} required />
                </div>
            </div>
            <div className={classes.control}>
                <label htmlFor='message'>Your Message</label>
                <textarea id='message' rows='5' ref={messageRef} required></textarea>
            </div>
            <div className={classes.actions}>
                <button>Send Message</button>
            </div>
        </form>
        {notification && <Notification status={notification.status} title={notification.title} message={notification.message} />}
    </section>
}