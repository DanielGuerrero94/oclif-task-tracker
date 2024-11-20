import {runCommand} from '@oclif/test'
import {expect} from 'chai'

import { getTestTmpPath, removeTmpFile } from '../utils/fs-tests'

describe('mark-in-progress', () => {
  const testDir = getTestTmpPath(import.meta.url)

  beforeEach(async () => {
    await removeTmpFile(testDir)
  })

  it('runs mark-in-progress cmd', async () => {
    await runCommand(`add --data-dir ${testDir} test`)
    const {stdout} = await runCommand(`mark-in-progress --data-dir ${testDir} 1`)
    expect(stdout).to.contain('marked as in progress')
  })
})
