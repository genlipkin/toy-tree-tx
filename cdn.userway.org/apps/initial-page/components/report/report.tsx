import { INITIAL_PAGE_STATE } from 'constants/constants';
import { stateStore } from 'global/state.store';
import { FunctionComponent, h } from 'preact';
import { useContext, useEffect, useRef, useState } from 'preact/hooks';
import { useApi } from 'hooks/use-api';
import { ApplicationContext } from 'contexts/use-application-setup';
import { useTranslation } from 'hooks/use-translation';
import './report.scss';
import { layoutStore } from '../../global/layout.store';

export const ReportView: FunctionComponent = () => {
  const { code, href, settings } = useContext(ApplicationContext);
  const [isProcessing, setIsProcessing] = useState(false);
  const [formError, setFormError] = useState<{ email: string; text: string }>(null);

  const [text, setText] = useState('');
  const [email, setEmail] = useState('');

  const textRef = useRef<HTMLTextAreaElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const Api = useApi();
  const { translate } = useTranslation();

  const goBack = () => {
    stateStore.state.next(INITIAL_PAGE_STATE);
  };

  const clearErrors = () => {
    setFormError(null);
  };

  const getActiveFeature = () => {
    const allFeatures = settings.current;

    return Object.keys(allFeatures).reduce((features, key) => {
      if (allFeatures[key].value) {
        features[key] = true;
      }

      return features;
    }, {});
  };

  const submitForm = (event) => {
    event.preventDefault();
    setIsProcessing(true);

    const formData = new FormData();
    if (code) {
      formData.append('code', code);
    }
    if (href) {
      formData.append('url', href);
    }
    if (text) {
      formData.append('text', text);
    }
    if (email) {
      formData.append('email', email);
    } else {
      formData.append('email', '');
    }
    if (settings) {
      formData.append('features', JSON.stringify(getActiveFeature()));
    }

    return Api.sendFormData('reports', formData)
      .then((response) => {
        clearErrors();
        if (response.errors) {
          setFormError(response.errors);
        }
        if (response.code === 200) {
          setText('');
          goBack();
        }
      })
      .catch(({ errors }) => {
        if (errors.text === 'Cannot be empty') {
          errors.text = 'widget.report.text.errors.required';
        }

        if (errors.email === 'Cannot be empty') {
          errors.email = 'widget.report.email.errors.required';
        }

        if (errors.email === 'Invalid email address') {
          errors.email = 'widget.report.email.errors.invalid';
        }

        setFormError(errors);

        if (errors.text) {
          setTimeout(() => textRef.current.focus(), 0);
          return;
        }

        if (errors.email) {
          setTimeout(() => emailRef.current.focus(), 0);
        }
      })
      .finally(() => {
        setIsProcessing(false);
      });
  };

  const onFocus = (e) => {
    e.target.parentElement && e.target.parentElement.classList.add('focused');
  };
  const onBlur = (e) => {
    e.target.parentElement && e.target.parentElement.classList.remove('focused');
  };
  useEffect(() => layoutStore.viewUpdate$.next(), []);

  return (
    <div class="widget-form widget-form_report">
      <form name="form" role="form" onSubmit={submitForm} noValidate autocomplete="off">
        <fieldset disabled={isProcessing}>
          <div
            input-focus
            auto-focus="true"
            class={`widget-input ${formError?.text ? 'has-error' : ''}`}
          >
            <label id="report-txt" class="label" for="text">
              {translate('widget.report.text.label')}
            </label>
            <textarea
              ref={textRef}
              onInput={(e) => setText((e.target as HTMLInputElement).value)}
              onFocus={onFocus}
              onBlur={onBlur}
              aria-labelledby={`report-txt${formError?.text ? ' report-txt-err' : ''}`}
              aria-invalid={!!formError?.text}
              title={translate('widget.report.text.label')}
              id="text"
              name="text"
              className="input input_textarea"
              autoComplete="off"
            />
            {formError?.text && (
              <div id="report-txt-err" role="alert" class="help-block">
                {translate(formError.text)}
              </div>
            )}
          </div>
          <div input-focus class={`widget-input ${formError?.email ? 'has-error' : ''}`}>
            <label id="report-email" class="label" for="email">
              {translate('widget.report.email.label')}
            </label>
            <input
              ref={emailRef}
              onInput={(e) => setEmail((e.target as HTMLInputElement).value)}
              onFocus={onFocus}
              onBlur={onBlur}
              aria-labelledby={`report-email${formError?.email ? ' report-email-err' : ''}`}
              aria-invalid={!!formError?.email}
              title={translate('widget.report.email.label')}
              id="email"
              name="email"
              className="input"
              placeholder={translate('widget.report.email.placeholder')}
              type="email"
              autoComplete="email"
            />
            {formError?.email && (
              <div id="report-email-err" role="alert" class="help-block">
                {translate(formError.email)}
              </div>
            )}
          </div>

          <div class="buttons">
            <button
              class="btn btn_blue btn_border"
              onClick={goBack}
              type="button"
              aria-label={translate('widget.report.buttons.cancel.aria')}
            >
              {translate('widget.report.buttons.cancel.label')}
            </button>
            <button
              class={`btn btn_blue ${isProcessing ? 'processing' : ''}`}
              type="submit"
              aria-label={translate(
                isProcessing
                  ? 'widget.report.buttons.submit.processing'
                  : 'widget.report.buttons.submit.aria',
              )}
            >
              {translate(
                isProcessing
                  ? 'widget.report.buttons.submit.processing'
                  : 'widget.report.buttons.submit.label',
              )}
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};
