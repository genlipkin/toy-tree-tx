import { useContext } from 'preact/hooks';
import { ApplicationContext } from 'contexts/use-application-setup';
import { useClickOutside } from '@uw/common-components';

export const useClickOutsideElement = (ref, callback) => {
  const { isOpen } = useContext(ApplicationContext);

  useClickOutside(ref, callback, isOpen);
};
