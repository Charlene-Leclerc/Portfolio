import React, { useEffect, useRef, useState } from 'react';
import '../styles/contact.scss';
import emailjs from '@emailjs/browser';
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

                console.log(success);
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

                    <label htmlFor="nom">Nom/Prénom*</label>
                    <div>
                        <input className="input-field" type="text" name='user_name' required />
                    </div>

                    <label htmlFor="mail">Adresse e-mail*</label>
                    <div>
                        <input className="input-field" type="email" placeholder="mail@gmail.com" name='user_email' required />
                    </div>

                    <label htmlFor="num">Numéro de téléphone</label>
                    <div>
                        <input className="input-field" type="text" placeholder="+33612345678" />
                    </div>

                    <label htmlFor="birthdate">Date de naissance</label>
                    <div>
                        <input className="input-field" type="date" placeholder="jj/mm/aaaa" />
                    </div>

                    <label htmlFor="message">Message*</label>
                    <div>
                        <textarea cols="30" rows="10" name="message" placeholder="Vous avez un message? Ecrivez-moi ici!" required></textarea>
                    </div>
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