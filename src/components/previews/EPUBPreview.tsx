import type { OdFileObject } from '../../types'

import { FC, useEffect, useRef, useState } from 'react'
import { ReactReader } from 'react-reader'
import { useRouter } from 'next/router'

import Loading from '../Loading'
import DownloadButtonGroup from '../DownloadBtnGtoup'
import { DownloadBtnContainer } from './Containers'
import { getStoredToken } from '../../utils/protectedRouteHandler'

const EPUBPreview: FC<{ file: OdFileObject }> = ({ file }) => {
  const { asPath } = useRouter()
  const hashedToken = getStoredToken(asPath)

   const epubPath = encodeURIComponent(
    `${getBaseUrl()}/api/raw?path=${asPath}${hashedToken ? `&odpt=${hashedToken}` : ''}`
  );
  const url = `https://app.flowoss.com/?src=${epubPath}`;

  return (
    <div>
      <div className="w-full overflow-hidden rounded relative" style={{ height: 'calc(100vh - 120px)' }}>
        <iframe 
          src={url} 
          frameBorder="0" 
          width="100%" 
          height="100%" 
          allowFullScreen
        ></iframe>
      </div>
      <DownloadBtnContainer>
        <DownloadButtonGroup />
      </DownloadBtnContainer>
    </div>
  );
};

export default EPUBPreview;
