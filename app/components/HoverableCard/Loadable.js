/**
 *
 * Asynchronously loads the component for HoverableCard
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
