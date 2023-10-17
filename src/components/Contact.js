import React, { useEffect, useRef, useState } from 'react';
import '../styles/contact.scss';
import emailjs from '@emailjs/browser';
import { ContactLabel, ContactMessage } from './ContactLabel';
const Contact = () => {

    const [success, setSuccess] = useState(false);
    const [visible, setVisible] = useState(false);
    const form = useRef()

    useEffect(() => {
        if (visible) {
            setTimeout(() => {
                setVisible(false);
            }, 5000)
        }

    })
    const sendEmail = (e) => {
        e.preventDefault();
        setVisible(true);
        emailjs.sendForm('service_892ijfv', 'template_o2wg417', form.current, 'gTDTWOwvJnf8bXXKP')
            .then((result) => {
                setSuccess(true);


            }).catch((error) => {


                console.error(error);
            });
        e.target.reset();
    };

    return (
        <section className='contact'>
            <h2 className="heading">Contact</h2>
            <div className="formular">
                <form ref={form} onSubmit={sendEmail}>
                    <ContactLabel htmlFor="nom" input_type="text" label_name="Nom/Prénom" name="user_name" isRequired={true} />
                    <ContactLabel htmlFor="mail" input_type="email" label_name="Adresse e-mail" name="user_email" isRequired={true} placeholder="yourmail@gmail.com" />
                    <ContactLabel htmlFor="num" input_type="number" label_name="Numéro de téléphone" isRequired={false} placeholder="+33612345678" />
                    <ContactLabel htmlFor="birthdate" input_type="date" label_name="Date de naissance" isRequired={false} placeholder="jj/mm/aaaa" />
                    <ContactMessage />
                    <div className="submiting">
                        <input type="submit" value="Envoyer" className='btn' />

                        {visible ?
                            success ? <p className='send-state'>L'email a été envoyé avec succès !</p>
                                : <p className='send-state'>Un problème est survenu lors de l'envoi de votre mail, il n'a pas pu être envoyé</p>
                            : ''}
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;