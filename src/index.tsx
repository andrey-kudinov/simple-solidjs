/* @refresh reload */
import { render } from 'solid-js/web';

import './index.css';
import { Clock } from './Clock';

render(() => <Clock />, document.getElementById('root') as HTMLElement);
