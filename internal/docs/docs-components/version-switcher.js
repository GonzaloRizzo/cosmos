import React from 'react'
import styled from 'styled-components'
import { colors } from '@auth0/cosmos/tokens'

import { changelog } from '@auth0/cosmos/meta/changelog'

/* grab lines that start with ## */
const regex = /^## (.*)$/gm
const lines = changelog.match(regex)
let versions = lines.map(line => line.split('## ')[1].split(' [')[0])

/* remove versions older than 0.5.1 */
console.log(versions)
versions = versions.filter(version => version > '0.5.0')
console.log(versions)

const Wrapper = styled.span`
  font-size: 14px;
  letter-spacing: 1.4px;
  1display: inline-block;
  color: ${colors.base.grayLightest};
  font-weight: 700;
  margin-left: 16px;

  select {
    background: transparent;
    border: none;
    font-size: 12px;
    color: ${colors.base.grayLight};
  }
`

const VersionSwitcher = () => (
  <Wrapper>
    COSMOS
    <select
      onChange={event => {
        window.location.href = `https:auth0-cosmos-${event.target.value.replace(/\./g, '-')}.now.sh`
      }}
    >
      {versions.map(v => <option value={v}>{v}</option>)}
    </select>
  </Wrapper>
)

export default VersionSwitcher
