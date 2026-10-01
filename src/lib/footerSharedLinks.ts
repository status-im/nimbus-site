/**
 * The Logos Docusaurus preset appends footer columns titled `shared:<group>`
 * (Research, Infrastructure) after the links declared in docusaurus.config.js.
 * Those columns are not configurable through `themeConfig.footer`, so this
 * module lets the site replace their items via `customFields.sharedFooterLinks`.
 */

export const SHARED_FOOTER_TITLE_PREFIX = 'shared:'

export type SharedFooterLink = {
  readonly label: string
  readonly href: string
}

/** Footer group name (without the `shared:` prefix) to its replacement links. */
export type SharedFooterLinks = Readonly<
  Record<string, readonly SharedFooterLink[]>
>

type FooterColumn = Readonly<Record<string, unknown>>

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value)

const isSharedFooterLink = (value: unknown): value is SharedFooterLink =>
  isRecord(value) &&
  typeof value.label === 'string' &&
  typeof value.href === 'string'

const parseGroupLinks = (
  group: string,
  links: unknown,
): readonly SharedFooterLink[] => {
  if (!Array.isArray(links) || !links.every(isSharedFooterLink)) {
    throw new Error(
      `customFields.sharedFooterLinks.${group} must be an array of { label, href } objects`,
    )
  }
  return links
}

/** Validates the raw `customFields.sharedFooterLinks` value from site config. */
export function parseSharedFooterLinks(value: unknown): SharedFooterLinks {
  if (value === undefined) return {}
  if (!isRecord(value)) {
    throw new Error(
      'customFields.sharedFooterLinks must be an object keyed by footer group name (e.g. "Infrastructure")',
    )
  }
  return Object.fromEntries(
    Object.entries(value).map(([group, links]) => [
      group,
      parseGroupLinks(group, links),
    ]),
  )
}

const sharedGroupName = (title: unknown): string | undefined =>
  typeof title === 'string' && title.startsWith(SHARED_FOOTER_TITLE_PREFIX)
    ? title.slice(SHARED_FOOTER_TITLE_PREFIX.length)
    : undefined

/**
 * Returns a new column list in which every `shared:<group>` column that has
 * an entry in `overrides` gets its items replaced. Other columns and the
 * inputs themselves are left untouched.
 */
export function replaceSharedFooterLinks<T extends FooterColumn>(
  columns: readonly T[],
  overrides: SharedFooterLinks,
): readonly T[] {
  return columns.map((column) => {
    const group = sharedGroupName(column.title)
    const links = group === undefined ? undefined : overrides[group]
    return links === undefined ? column : { ...column, items: [...links] }
  })
}
