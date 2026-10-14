import Link from 'next/link'

const faqs = [
  {
    question: "What does a Virtual Assistant (VA) do?",
    answer: "A Virtual Assistant provides professional admin support remotely. At Hudson Virtual Business Services, I help small businesses, solopreneurs, and charities by taking care of the back-end admin, so you can focus on what you do best."
  },
  {
    question: "What kind of tasks can you help with?",
    answer: "Great question! Here's a quick overview:\n\n• Diary & email management\n• Client onboarding\n• Invoicing & expense tracking\n• Document creation & formatting\n• Minute-taking\n• Research & data entry\n• Basic website updates\n• Process improvement & automation (coming soon!)\n\nIf you're unsure if your task fits, just ask!"
  },
  {
    question: "Who do you work with?",
    answer: "I primarily support small charities, women-led businesses, wellness professionals, and passionate solopreneurs who are ready to delegate their admin and grow sustainably."
  },
  {
    question: "How do I know if I'm ready to hire a Virtual Assistant?",
    answer: "If you're overwhelmed by admin, missing deadlines, or feel like you're spending more time in your business than on it, it's probably time. A VA helps you buy back your time and headspace."
  },
  {
    question: "Do you offer contracts?",
    answer: "Yes, all client relationships begin with a service agreement outlining the scope of work, confidentiality, rates, and terms. Transparency is key!"
  },
  {
    question: "What are your working hours?",
    answer: "I generally work Monday to Friday during UK business hours. I'm flexible and will always communicate clearly if something changes. Urgent or weekend work can be arranged in advance (additional charges may apply)."
  },
  {
    question: "Is there a minimum number of hours I have to book?",
    answer: "For retainer clients, I offer packages starting from 10 hours per month. On-demand support has a 3-hour minimum purchase. See the pricing page for current rates and terms."
  },
  {
    question: "What if my needs change or I want to pause?",
    answer: "Life and business are fluid! You can adjust your package, pause services, or increase hours with notice. My goal is to support you, not tie you down."
  },
  {
    question: "Is my business information safe with you?",
    answer: "Absolutely. Your privacy and data security are top priority. I'm ICO registered and committed to GDPR compliance and confidentiality."
  },
  {
    question: "Do you use AI or automation tools?",
    answer: "Yes, I do! I use smart tools (like AI, automation platforms, and systems integration) to streamline your workflows. My team and I are developing even more tech-savvy solutions—watch this space!"
  }
];


export default function FAQsPage() {
  return <main>
    <section className="page-banner"><div className="container-wide"><h1>Virtual assistant FAQs</h1><p>Common questions about working with Hudson Virtual.</p></div></section>
    <section className="section-pad container-wide service-detail faq-list">{faqs.map(faq => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}<p>Explore <Link href="/services" className="text-link">services</Link> and <Link href="/pricing" className="text-link">pricing</Link>, or <Link href="/contact" className="text-link">arrange a free consultation</Link> to discuss your questions.</p></section>
  </main>
}
