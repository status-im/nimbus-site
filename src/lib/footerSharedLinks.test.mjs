import { test } from 'node:test'
import assert from 'node:assert/strict'
import {
  parseSharedFooterLinks,
  replaceSharedFooterLinks,
} from './footerSharedLinks.ts'

const research = [
  { label: 'Logos Research', href: 'https://research.logos.co/' },
]
const infrastructure = [
  { label: 'Messaging', href: 'https://logos.co/technology-stack/messaging' },
]
const legacyResearch = [{ label: 'VacP2P', href: 'https://vac.dev' }]

test('replaceSharedFooterLinks swaps the items of matching shared columns only', () => {
  // Arrange
  const columns = [
    { title: 'Community', items: [{ label: 'Discord', href: '/discord' }] },
    { title: 'shared:Research', items: legacyResearch },
    { title: 'shared:Infrastructure', items: [{ label: 'Waku', href: '/w' }] },
  ]

  // Act
  const result = replaceSharedFooterLinks(columns, {
    Research: research,
    Infrastructure: infrastructure,
  })

  // Assert
  assert.deepEqual(result, [
    columns[0],
    { title: 'shared:Research', items: research },
    { title: 'shared:Infrastructure', items: infrastructure },
  ])
})

test('replaceSharedFooterLinks keeps shared columns that have no override', () => {
  const columns = [{ title: 'shared:Research', items: legacyResearch }]

  const result = replaceSharedFooterLinks(columns, {
    Infrastructure: infrastructure,
  })

  assert.deepEqual(result, columns)
})

test('replaceSharedFooterLinks ignores columns without a title', () => {
  const columns = [{ label: 'Plain link', href: '/plain' }]

  const result = replaceSharedFooterLinks(columns, { Research: research })

  assert.deepEqual(result, columns)
})

test('replaceSharedFooterLinks returns new objects and leaves its inputs untouched', () => {
  const column = { title: 'shared:Research', items: legacyResearch }
  const columns = [column]

  const result = replaceSharedFooterLinks(columns, { Research: research })

  assert.notEqual(result, columns)
  assert.notEqual(result[0], column)
  assert.notEqual(result[0].items, research)
  assert.deepEqual(column.items, legacyResearch)
})

test('parseSharedFooterLinks returns no overrides when the field is absent', () => {
  assert.deepEqual(parseSharedFooterLinks(undefined), {})
})

test('parseSharedFooterLinks accepts a map of group name to label/href links', () => {
  const value = { Research: research, Infrastructure: infrastructure }

  assert.deepEqual(parseSharedFooterLinks(value), value)
})

test('parseSharedFooterLinks throws when the field is not an object', () => {
  assert.throws(
    () => parseSharedFooterLinks(['Research']),
    /sharedFooterLinks must be an object/,
  )
})

test('parseSharedFooterLinks throws when a group is not a list of label/href links', () => {
  assert.throws(
    () => parseSharedFooterLinks({ Research: [{ label: 'Logos Research' }] }),
    /sharedFooterLinks\.Research/,
  )
  assert.throws(
    () => parseSharedFooterLinks({ Research: 'https://research.logos.co/' }),
    /sharedFooterLinks\.Research/,
  )
})
