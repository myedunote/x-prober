import React, { FC } from 'react'
import { Row } from '../../../Grid/src/components/row'
import { CpuUsage } from './cpu-usage'
import { MemBuffers } from './mem-buffers'
import { MemCached } from './mem-cached'
import { MemRealUsage } from './mem-real-usage'
import { SwapCached } from './swap-cached'
import { SwapUsage } from './swap-usage'
import { SystemLoad } from './system-load'

export const ServerStatus: FC = () => {
  return (
    <Row>
      <SystemLoad />
      <CpuUsage />
      <MemRealUsage />
      <MemCached />
      <MemBuffers />
      <SwapUsage />
      <SwapCached />
    </Row>
  )
}
