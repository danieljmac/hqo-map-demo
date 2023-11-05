import { styled, type HTMLStyledProps } from '@./styled-system/jsx'

type As = 'p' | 'span' | 'div' | 'label'

export type TextProps = {
  as?: As
} & HTMLStyledProps<As>

export const Text = (props: TextProps) => {
  const { as = 'p', ...rest } = props
  const Component = styled(as)

  return (
    <Component
      textAlign={rest.textAlign == undefined ? 'start' : undefined}
      {...rest}
    />
  )
}
