'use client';

import { useState } from 'react';
import Link from 'next/link';

const retainerOptions = [10, 15, 20, 25, 30, 35, 40];
const onDemandFeatures = ['No monthly commitment', '3-hour minimum purchase', 'Hours valid for 3 months', 'Available as needed', 'Standard response time'];
const dedicatedFeatures = ['Priority support', 'Dedicated assistant', 'Unused hours roll over, up to 25%', '3-month minimum commitment'];
const projectFeatures = ['Custom project scoping', 'Fixed project pricing', 'Clear deliverables', 'Regular progress updates', 'Flexible timeline options'];

function FeatureList({ items }: { items: string[] }) {
  return <ul className="pricing-features">{items.map(item => <li key={item}><span aria-hidden="true">✓</span>{item}</li>)}</ul>;
}

export default function PricingPage() {
  const [retainerHours, setRetainerHours] = useState(10);
  const [paygoHours, setPaygoHours] = useState(5);
  const [showAssessment, setShowAssessment] = useState(false);
  const [answers, setAnswers] = useState<string[]>([]);
  const questions = [
    { question: 'How often do you need support?', choices: ['Occasionally', 'Every week'] },
    { question: 'Are your tasks predictable?', choices: ['They vary', 'Mostly predictable'] },
    { question: 'Do you prefer a fixed monthly cost?', choices: ['No', 'Yes'] },
    { question: 'Would you benefit from ongoing support?', choices: ['Not yet', 'Yes'] },
    { question: 'What best describes your need?', choices: ['A one-off task', 'Regular assistance'] },
  ];
  const recommended = answers.filter(answer => ['Every week', 'Mostly predictable', 'Yes', 'Regular assistance'].includes(answer)).length >= 3 ? 'Dedicated Support' : 'On-Demand Support';

  return <main>
    <section className="page-banner"><div className="container-wide"><p className="eyebrow eyebrow-light">Pricing</p><h1>Flexible support. Clear pricing.</h1><p>Choose occasional support, a monthly plan or a fixed project quote.</p></div></section>
    <section className="section-pad container-wide">
      <div className="pricing-grid">
        <article className="pricing-card"><div className="pricing-card-top"><p className="eyebrow">Occasional support</p><h2>On-Demand</h2><p className="price">£35 <span>/ hour</span></p><p>Flexible assistance when you need it.</p></div><div className="pricing-card-body"><label htmlFor="paygo-hours">Estimate hours</label><select id="paygo-hours" value={paygoHours} onChange={event => setPaygoHours(Number(event.target.value))}>{Array.from({length: 38}, (_, index) => index + 3).map(hours => <option key={hours} value={hours}>{hours} hours</option>)}</select><div className="price-summary"><span>Estimated total</span><strong>£{paygoHours * 35}</strong></div><FeatureList items={onDemandFeatures} /><Link href="/contact" className="button button-gold">Enquire about support <span aria-hidden="true">→</span></Link></div></article>
        <article className="pricing-card pricing-card-featured"><div className="pricing-card-top"><p className="eyebrow eyebrow-light">Ongoing support</p><h2>Dedicated Support</h2><p className="price">£{retainerHours * 30} <span>/ month</span></p><p className="rate-note">£30 per hour</p><p>Consistent support with a monthly allocation.</p></div><div className="pricing-card-body"><label htmlFor="retainer-hours">Hours per month</label><select id="retainer-hours" value={retainerHours} onChange={event => setRetainerHours(Number(event.target.value))}>{retainerOptions.map(hours => <option key={hours} value={hours}>{hours} hours</option>)}</select><p className="small-note">Plans from 10 to 40 hours per month.</p><FeatureList items={dedicatedFeatures} /><Link href="/contact" className="button button-gold">Discuss a monthly plan <span aria-hidden="true">→</span></Link></div></article>
        <article className="pricing-card"><div className="pricing-card-top"><p className="eyebrow">Defined projects</p><h2>Project Support</h2><p className="price price-quote">Custom quote</p><p>A fixed price based on your project scope.</p></div><div className="pricing-card-body"><div className="price-summary">Scope and pricing agreed before work begins.</div><FeatureList items={projectFeatures} /><Link href="/contact" className="button button-gold">Discuss your project <span aria-hidden="true">→</span></Link></div></article>
      </div>
      <div className="assessment-panel"><div><h2>Need help choosing?</h2><p>Use the five-question assessment or discuss your requirements with Natasha.</p></div><button type="button" className="button button-gold" onClick={() => { setShowAssessment(!showAssessment); setAnswers([]); }}>{showAssessment ? 'Close assessment' : 'Find a suitable plan →'}</button></div>
      {showAssessment && <div className="assessment-content" aria-live="polite">{answers.length < questions.length ? <><p className="eyebrow">Question {answers.length + 1} of {questions.length}</p><h3>{questions[answers.length].question}</h3><div className="action-row">{questions[answers.length].choices.map(choice => <button type="button" className="button button-outline" key={choice} onClick={() => setAnswers([...answers, choice])}>{choice}</button>)}</div></> : <><p className="eyebrow">Your result</p><h3>{recommended}</h3><p>Based on your answers, this may be a suitable starting point. We can discuss the details together.</p><div className="action-row"><button type="button" className="button button-outline" onClick={() => setAnswers([])}>Start again</button><Link href="/contact" className="button button-gold">Discuss your requirements →</Link></div></>}</div>}
      <div className="pricing-support"><h2>Support available across your business.</h2><div className="process-grid"><div><h3>Administration</h3><p>Email, diary and travel coordination.</p></div><div><h3>Business operations</h3><p>Documents, client communications and processes.</p></div><div><h3>Project support</h3><p>Research, reporting and meeting coordination.</p></div></div></div>
    </section>
    <section className="cta-band"><div className="container-wide cta-band-inner"><div><h2>Discuss the support your business needs.</h2><p>Book a free 30-minute consultation.</p></div><Link href="/contact" className="button button-gold">Arrange a consultation <span aria-hidden="true">→</span></Link></div></section>
  </main>;
}
