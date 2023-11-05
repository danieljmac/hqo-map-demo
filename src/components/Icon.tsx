import { Box } from '@./styled-system/jsx'
import {
  IconName as FAIconName,
  IconStyle,
} from '@fortawesome/fontawesome-svg-core'
import { BoxProps } from '@./styled-system/jsx'
import { CSSProperties } from 'react'

export type IconName = FAIconName
export type IconAlignmentX = 'anchorLeft' | 'anchorRight' | 'anchorCenter'

export type IconProps = {
  icon: FAIconName
  iconStyle?: IconStyle
  alignIconX?: IconAlignmentX
  fixedContainerW?: CSSProperties['width'] //SizeToken
} & BoxProps

export function Icon({
  icon,
  iconStyle = 'light',
  alignIconX = 'anchorLeft',
  fixedContainerW,
  ...rest
}: IconProps) {
  const faIconStyle = 'fa-' + iconStyle
  const faIconName = 'fa-' + icon
  const size = rest.fontSize ?? rest.boxSizing ?? '16px'
  const faIconAlign = () => {
    switch (alignIconX) {
      case 'anchorLeft':
        return 'left'
      case 'anchorRight':
        return 'right'
      case 'anchorCenter':
        return 'center'
      default:
        return undefined
    }
  }
  const iconClassName = faIconStyle + ' ' + faIconName

  return (
    <Box
      display={'flex'}
      w={fixedContainerW ?? undefined}
      fontSize={size}
      textAlign={faIconAlign()}
      justifyContent={faIconAlign()}
      {...rest}
    >
      <i
        // style={{ background: 'blue' }}
        className={iconClassName}
      ></i>
    </Box>
  )
}