import { pageMetadata } from '../../lib/seo'

export const metadata = pageMetadata('Client Testimonials', 'Read client feedback about working with Hudson Virtual and explore virtual assistant services for small businesses and charities.', '/testimonials')

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
