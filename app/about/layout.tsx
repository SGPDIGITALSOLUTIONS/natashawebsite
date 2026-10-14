import { pageMetadata } from '../../lib/seo'

export const metadata = pageMetadata('About Natasha Hudson — Virtual Assistant', 'Meet Natasha Hudson, founder of Hudson Virtual. Practical, personal virtual assistant support for small businesses, solopreneurs and charities.', '/about')

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
