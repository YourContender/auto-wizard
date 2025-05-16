import { StaticRouter } from 'react-router-dom';
import {renderToString} from 'react-dom/server'
import {App} from './App'

/**
 * @param {string} _url
 */
export function render(_url) {
    console.log(_url);
    const html = renderToString(
        <StaticRouter location={_url} context={{}}>
            <App/>
        </StaticRouter>,
    );
    return {html}
}