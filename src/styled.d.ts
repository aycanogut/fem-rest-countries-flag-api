import 'styled-components'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    body: string
    text: string
    elements: string
    input: string
    navShadow: string
  }
}
