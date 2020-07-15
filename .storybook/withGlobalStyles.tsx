import { StoryFn } from '@storybook/addons'

import GlovalStyles from '../src/styles/global'


const withGlobalStyles = (storyFn: StoryFn) => (
  <>
  <GlovalStyles />
  {storyFn()}
  </>
)

export default withGlobalStyles
