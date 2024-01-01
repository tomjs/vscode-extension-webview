interface WebviewHtmlDevOptions {
  /**
   * local server url
   */
  serverUrl: string;
}
/**
 *
 * @param options serverUrl string or object options
 */
declare function getHtml(options: string | WebviewHtmlDevOptions): string;

export { getHtml as default, getHtml, type WebviewHtmlDevOptions };
