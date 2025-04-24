import { h, render } from 'preact';
import './polyfills';
import './global/languages.store';
import './global/tracking.store.ts';
import { InitialPage } from 'components/initial-page/initial-page';
import './styles.scss';
import '@uw/icons/dist/uw-icons.css';

// render only when dom is ready
document.addEventListener('DOMContentLoaded', () => {
  render(<InitialPage />, document.body);
});
