import { useState, type FormEvent } from 'react';
import { motion } from 'motion/react';

export default function JoinUs() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', city: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', email: '', city: '' });
    }, 4000);
  };

  return (
    <section className="py-24 bg-paper relative overflow-hidden" id="join">
      {/* Decorative background flair */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-cream rounded-l-[100px] opacity-50 hidden lg:block pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 uppercase tracking-wider">
            Become a Member
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-6 leading-tight">
            Join the <span className="text-primary italic">Community</span>
          </h2>
          <p className="text-slate text-lg mb-8 leading-relaxed text-pretty">
            Take the first step towards a journey of spiritual fulfillment and community service. Fill out the basic details below, and our team will get in touch to welcome you.
          </p>

          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-full bg-cream border border-slate/10 flex items-center justify-center font-serif text-xl font-bold text-primary">
              1K+
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-semibold text-charcoal">Active Members</span>
              <span className="text-sm text-slate">Across India</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-paper-warm rounded-panel p-8 md:p-10 shadow-paper border border-line relative overflow-hidden">
            {/* Subtle overlay accent */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-orange-400"></div>
            
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif font-bold text-charcoal mb-3">Thank You!</h3>
                <p className="text-slate">We have received your details and will contact you shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-paper border border-line rounded-paper px-4 py-3.5 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-charcoal"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-paper border border-line rounded-paper px-4 py-3.5 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-charcoal"
                      placeholder="+91"
                    />
                  </div>
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-slate mb-2">City</label>
                    <input 
                      type="text" 
                      id="city"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full bg-paper border border-line rounded-paper px-4 py-3.5 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-charcoal"
                      placeholder="e.g. Mumbai"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate mb-2">Email Address (Optional)</label>
                  <input 
                    type="email" 
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-paper border border-line rounded-paper px-4 py-3.5 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-charcoal"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="pt-2">
                  <button 
                    type="submit"
                    className="w-full bg-primary hover:bg-primary-hover text-white font-medium px-6 py-4 rounded-paper transition-all shadow-md hover:shadow-lifted hover:shadow-primary/20 transform hover:-translate-y-1"
                  >
                    Submit Details
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
