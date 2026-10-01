import React, { type ReactElement } from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme-original/Footer/Layout'
import type { Props } from '@theme/Footer/Layout'
import {
  parseSharedFooterLinks,
  replaceSharedFooterLinks,
} from '@site/src/lib/footerSharedLinks'

type FooterLinksProps = { readonly links: readonly Record<string, unknown>[] }

/**
 * Wraps the Logos theme footer so the `shared:*` columns injected by the
 * preset (Research / Infrastructure) show the links declared under
 * `customFields.sharedFooterLinks` in docusaurus.config.js.
 */
export default function LayoutWrapper(props: Props): ReactElement {
  const { siteConfig } = useDocusaurusContext()
  const { links } = props

  if (!React.isValidElement<FooterLinksProps>(links)) {
    return <Layout {...props} />
  }

  const overrides = parseSharedFooterLinks(
    siteConfig.customFields?.sharedFooterLinks,
  )
  const replacedLinks = React.cloneElement(links, {
    links: replaceSharedFooterLinks(links.props.links, overrides),
  })

  return <Layout {...props} links={replacedLinks} />
}
