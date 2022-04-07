interface IHelperProps {
  [key: string]: string
}

const size: IHelperProps = {
  xs: '320px',
  sm: '465px',
  md: '750px',
  lg: '1024px',
  xl: '1440px'
}

const device: IHelperProps = {
  xs: `(min-width: ${size.xs})`,
  sm: `(min-width: ${size.sm})`,
  md: `(min-width: ${size.md})`,
  lg: `(min-width: ${size.lg})`,
  xl: `(min-width: ${size.xl})`
}

const fontWeight: IHelperProps = {
  thin: '300',
  regular: '400',
  semiBold: '600',
  extraBold: '800'
}

export default { size, device, fontWeight }
