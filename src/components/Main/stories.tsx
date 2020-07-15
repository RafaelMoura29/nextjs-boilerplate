import { withKnobs, text } from '@storybook/addon-knobs'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
  decorators: [withKnobs]
}

export const Basic = () => (
  <Main
    title={text('Title', 'React avançado')}
    description={text(
      'Description',
      'Imagem de um átomo e React Avançado escrito ao lado.'
    )}
  />
)
