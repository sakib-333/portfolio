import { motion } from 'framer-motion';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { useState } from 'react';
import { toast } from 'react-toastify';

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
    access_key: string;
};

const Contact = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<Inputs>();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        setIsSubmitting(true);
        data.subject = `Alert from portfolio: ${data.subject}`
        data.access_key = import.meta.env.VITE_API_KEY

        try {
            const response = await fetch(import.meta.env.VITE_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify(data)
            });

            const res = await response.json();
            if (res.success) {
                toast.success("Message sent successfully!");
                reset();
            } else {
                toast.error("Failed to send message. Please try again.");
            }
        } catch (error) {
            toast.error("An error occurred. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="py-xl" id="contact">
            <div className="max-w-7xl mx-auto px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-surface-container rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl grid grid-cols-1 md:grid-cols-2"
                >
                    <div className="p-12 md:p-20 bg-zinc-950 border-r border-zinc-800">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="font-h2 text-h2 text-white mb-6"
                        >
                            Start a Project.
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-on-surface-variant mb-12"
                        >
                            Have a technical challenge or a product idea? Let's discuss how we can build it with rigor and precision.
                        </motion.p>

                        <div className="space-y-8">
                            {[
                                {
                                    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                    </svg>,
                                    label: 'Phone', value: '+8801955207333'
                                },
                                {
                                    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                    </svg>
                                    ,
                                    label: 'Email Me', value: 'sakib.cse.333@gmail.com'
                                },
                                {
                                    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                    </svg>
                                    , label: 'Current Location', value: 'Dhaka, Bangladesh'
                                }
                            ].map((item, index) => (
                                <motion.div
                                    key={item.label}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                                    className="flex items-center gap-6 group"
                                >
                                    <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center group-hover:bg-primary-container transition-colors">
                                        <span className="text-white">{item.icon}</span>
                                    </div>
                                    <div>
                                        <p className="text-xs text-zinc-500 uppercase tracking-widest font-semibold">{item.label}</p>
                                        <p className="text-white font-medium">{item.value}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="mt-20 flex gap-4"
                        >
                            <a className="w-10 h-10 rounded-lg border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-primary hover:border-primary transition-all" href="https://github.com/sakib-333" target='_blank' rel="noopener noreferrer">
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.61-4.041-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
                            </a>
                            <a className="w-10 h-10 rounded-lg border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-primary hover:border-primary transition-all" href="https://www.linkedin.com/in/sakibur-rahman" target='_blank' rel="noopener noreferrer">
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
                            </a>
                            <a
                                className="w-10 h-10 rounded-lg border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-primary hover:border-primary transition-all"
                                href="https://wa.me/8801955207333"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <svg
                                    className="w-5 h-5 fill-current"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M20.52 3.48A11.82 11.82 0 0012.04 0C5.42 0 .04 5.38.04 12c0 2.11.55 4.17 1.6 5.99L0 24l6.17-1.61A11.94 11.94 0 0012.04 24C18.66 24 24 18.62 24 12c0-3.2-1.25-6.2-3.48-8.52zM12.04 21.9c-1.8 0-3.56-.48-5.1-1.39l-.36-.21-3.66.96.98-3.57-.24-.37A9.83 9.83 0 012.14 12c0-5.46 4.44-9.9 9.9-9.9 2.64 0 5.12 1.03 6.98 2.89A9.8 9.8 0 0121.9 12c0 5.46-4.44 9.9-9.86 9.9zm5.43-7.41c-.3-.15-1.77-.87-2.04-.96-.27-.09-.47-.15-.66.15-.2.3-.76.96-.93 1.17-.17.21-.35.24-.65.09-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.74-1.64-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.21.05-.39-.02-.54-.08-.15-.66-1.59-.91-2.18-.24-.57-.48-.49-.66-.5h-.56c-.2 0-.5.08-.76.39-.26.3-1 1-.97 2.43.03 1.43 1.03 2.82 1.18 3.01.15.2 2.03 3.1 4.92 4.35.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.12.56-.08 1.77-.72 2.02-1.41.25-.69.25-1.29.18-1.41-.08-.12-.27-.2-.57-.35z" />
                                </svg>
                            </a>
                            <a className="w-10 h-10 rounded-lg border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-primary hover:border-primary transition-all" href="https://www.facebook.com/sakib071" target='_blank' rel="noopener noreferrer">
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg>
                            </a>
                        </motion.div>
                    </div>
                    <div className="p-12 md:p-20">
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            {[
                                { label: 'Your Name', placeholder: 'John Doe', type: 'text', name: 'name' },
                                { label: 'Email Address', placeholder: 'john@example.com', type: 'email', name: 'email' }
                            ].map((field, index) => (
                                <motion.div
                                    key={field.label}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
                                    className="space-y-2"
                                >
                                    <label className="text-xs font-semibold uppercase text-zinc-500 tracking-widest">{field.label}</label>
                                    <input
                                        {...register(field.name as keyof Inputs, { required: `${field.label} is required` })}
                                        className={`w-full bg-zinc-900 border-zinc-800 rounded-lg py-3 px-4 text-white focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all ${errors[field.name as keyof Inputs] ? 'border-red-500' : ''}`}
                                        placeholder={field.placeholder}
                                        type={field.type}
                                    />
                                    {errors[field.name as keyof Inputs] && (
                                        <p className="text-red-500 text-xs mt-1">{errors[field.name as keyof Inputs]?.message}</p>
                                    )}
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.7 }}
                                className="space-y-2"
                            >
                                <label className="text-xs font-semibold uppercase text-zinc-500 tracking-widest">Subject</label>
                                <select
                                    {...register('subject', { required: 'Subject is required' })}
                                    className={`w-full bg-zinc-900 border-zinc-800 rounded-lg py-3 px-4 text-white focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all ${errors.subject ? 'border-red-500' : ''}`}
                                >
                                    <option value="">Select a subject</option>
                                    <option value="Full-stack Project">Full-stack Project</option>
                                    <option value="Technical Consultation">Technical Consultation</option>
                                    <option value="Career Opportunity">Career Opportunity</option>
                                    <option value="Other">Other</option>
                                </select>
                                {errors.subject && (
                                    <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>
                                )}
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.8 }}
                                className="space-y-2"
                            >
                                <label className="text-xs font-semibold uppercase text-zinc-500 tracking-widest">Message</label>
                                <textarea
                                    {...register('message', { required: 'Message is required' })}
                                    className={`w-full bg-zinc-900 border-zinc-800 rounded-lg py-3 px-4 text-white focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all ${errors.message ? 'border-red-500' : ''}`}
                                    placeholder="How can I help you?"
                                    rows={4}
                                ></textarea>
                                {errors.message && (
                                    <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
                                )}
                            </motion.div>
                            <motion.button
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.9 }}
                                disabled={isSubmitting}
                                className={`w-full bg-primary-container text-white py-4 rounded-lg font-bold text-lg transition-all flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-[0_0_20px_rgba(0,98,57,0.3)] active:scale-[0.98]'}`}
                                type="submit"
                            >
                                {isSubmitting ? (
                                    <>
                                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <span>Send Message</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                                        </svg>

                                    </>
                                )}
                            </motion.button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
