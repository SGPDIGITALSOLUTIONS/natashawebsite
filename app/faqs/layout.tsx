import { pageMetadata } from '../../lib/seo'

export const metadata = pageMetadata('Virtual Assistant FAQs', 'Find answers about Hudson Virtual services, contracts, working arrangements and support plans for small businesses and charities.', '/faqs')

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
