import { ComponentMapping } from '@uniformdev/csk-components/utils/createComponentResolver';
import { ContentCardComponent } from './ContentCard';
import Container from './Container';
import CustomComponent from './CustomComponent';
import Page from '../canvas/Page';

// Here, you can add your own component or customize an existing CSK component with your logic or styles.
export const customComponentsMapping: ComponentMapping = {
  // This is a simple example of how you can add your own components.
  customComponent: { component: CustomComponent },
  contentCard: { component: ContentCardComponent },
  articlePage: { component: Page },
  landingPage: { component: Page },

  // This is an overridden CSK Container component.
  container: { component: Container },
};
