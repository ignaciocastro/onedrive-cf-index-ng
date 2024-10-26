import { useRouter } from 'next/router';
import { getBaseUrl } from '../../utils/getBaseUrl';
import { getStoredToken } from '../../utils/protectedRouteHandler';
import DownloadButtonGroup from '../DownloadBtnGtoup';
import { DownloadBtnContainer } from './Containers';

const CBZEmbedPreview: React.FC<{ file: any }> = ({ file }) => {
  const { asPath } = useRouter();
  const hashedToken = getStoredToken(asPath);

  const cbzPath = encodeURIComponent(
    `${getBaseUrl()}/api/raw?path=${asPath}${hashedToken ? `&odpt=${hashedToken}` : ''}`
  );
  const url = `https://villain.js.org/#/reader?src=${cbzPath}&theme=dark`;

  return (
    <div>
      <div className="w-full overflow-hidden rounded" style={{ height: '90vh' }}>
        <iframe src={url} frameBorder="0" width="100%" height="100%"></iframe>
      </div>
      <DownloadBtnContainer>
        <DownloadButtonGroup />
      </DownloadBtnContainer>
    </div>
  );
};

export default CBZEmbedPreview;
