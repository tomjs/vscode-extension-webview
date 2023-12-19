import template from './template';

export interface WebviewHtmlDevOptions {
  /**
   * local server url
   */
  serverUrl: string;
}

/**
 *
 * @param options serverUrl string or object options
 */

export function getHtml(options: string | WebviewHtmlDevOptions) {
  const opts: WebviewHtmlDevOptions = {
    serverUrl: '',
  };

  if (typeof options === 'string') {
    opts.serverUrl = options;
  } else {
    Object.assign(opts, options);
  }

  return template.replace('{{serverUrl}}', opts.serverUrl);
}

export default getHtml;
