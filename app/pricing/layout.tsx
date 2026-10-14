import { pageMetadata } from '../../lib/seo'

export const metadata = pageMetadata('Virtual Assistant Pricing & Support Plans', 'Compare Hudson Virtual support plans: on-demand assistance at £35 per hour, dedicated monthly support at £30 per hour, and scoped project quotes.', '/pricing')

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
