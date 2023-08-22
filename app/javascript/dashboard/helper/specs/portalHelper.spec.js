import { buildPortalArticleURL, buildPortalURL } from '../portalHelper';

describe('PortalHelper', () => {
  describe('buildPortalURL', () => {
    it('returns the correct url', () => {
      window.chatwootConfig = {
        hostURL: 'https://app.clubecerto.com',
        helpCenterURL: 'https://help.clubecerto.com',
      };
      expect(buildPortalURL('handbook')).toEqual(
        'https://help.clubecerto.com/hc/handbook'
      );
      window.chatwootConfig = {};
    });
  });

  describe('buildPortalArticleURL', () => {
    it('returns the correct url', () => {
      window.chatwootConfig = {
        hostURL: 'https://pulse.clubecerto.com',
        helpCenterURL: 'https://pulse.clubecerto.com',
      };
      expect(
        buildPortalArticleURL('handbook', 'culture', 'fr', 'article-slug')
      ).toEqual('https://help.clubecerto.com/hc/handbook/articles/article-slug');
      window.chatwootConfig = {};
    });
  });
});
