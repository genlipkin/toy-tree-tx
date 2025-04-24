import { sendPostMessage } from 'helpers/post-message.helper';
import { useContext, useState } from 'preact/hooks';
import { wait } from 'helpers/operators';
import { ApplicationContext } from 'contexts/use-application-setup';
import { useApi } from 'hooks/use-api';

declare const applicationConfig: { base: { api: string } };

const TARGET_PAGE_DOWNLOAD_TIME = 1000;

const getPdfUrl = (origin: string) => {
  const siteUrl = encodeURIComponent(origin);

  return `${applicationConfig.base.api}a11y-data/v0/site/${siteUrl}/acc-report-pdf`;
};

export const useViolationsReport = () => {
  const Api = useApi();
  const { targetPageOrigin } = useContext(ApplicationContext);
  const [isReportLoading, setIsReportLoading] = useState(false);

  const downloadPdfPage = (pdfFileUrl: string) => {
    const url = getPdfUrl(targetPageOrigin);

    sendPostMessage({
      action: 'download_pdf',
      url: `${url}/${pdfFileUrl}`,
    });

    // We don't know how long PDF report file will be downloaded by the target page
    return wait(TARGET_PAGE_DOWNLOAD_TIME);
  };

  const getPdfPage = () => {
    const url = getPdfUrl(targetPageOrigin);

    return Api.get(url, { uwAiWidgetState: 'WIDGET_OFF' });
  };

  const downloadPdfReport = () => {
    if (isReportLoading) return;

    setIsReportLoading(true);

    return getPdfPage()
      .then((response) => {
        const pdfFileUrl = response?.payload?.accReportPdfName;

        if (!pdfFileUrl) {
          throw new Error('No PDF Report found!');
        }

        return pdfFileUrl;
      })
      .then(downloadPdfPage)
      .catch((e) => console.error('PDF Report Error:', e))
      .finally(() => setIsReportLoading(false));
  };

  return {
    downloadPdfReport,
    isReportLoading,
  };
};
