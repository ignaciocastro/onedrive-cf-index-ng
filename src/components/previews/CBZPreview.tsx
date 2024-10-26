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
  const url = `https://villain.js.org/#/reader?src=${cbzPath}&theme=Dark`;

  return (
    <div>
      <div className="iframe-container">
        <iframe
          src={url}
          frameBorder="0"
          className="iframe"
          allowFullScreen
        ></iframe>
      </div>
      <DownloadBtnContainer>
        <DownloadButtonGroup />
      </DownloadBtnContainer>
      <style jsx>{`
        .iframe-container {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 90vh; /* Adjust height as needed */
          overflow: hidden;
        }

        .iframe {
          width: 100%;
          height: 100%;
          min-height: 300px; /* Set a minimum height */
        }

        @media (max-width: 768px) {
          .iframe-container {
            height: 70vh; /* Adjust height for mobile */
          }
        }
      `}</style>
    </div>
  );
};

export default CBZEmbedPreview;
