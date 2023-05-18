import { it, expect } from 'vitest'

it('test1', () => expect('bar').toMatchSnapshot())

it('test2', () => {})