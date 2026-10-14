import { pageMetadata } from '../../lib/seo'

export const metadata = pageMetadata('Book a Free Virtual Assistant Consultation', 'Discuss your administrative and business support needs with Natasha Hudson. Book a free 30-minute consultation or send Hudson Virtual a message.', '/contact')

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
