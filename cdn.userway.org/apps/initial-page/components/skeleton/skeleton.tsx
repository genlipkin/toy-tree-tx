import { h } from 'preact';
import './skeleton.scss';

export const Skeleton = () => (
  <div class="uwaw-skeleton">
    <div className="uwaw-skeleton__hw" />

    <div className="uwaw-skeleton__switchers">
      <div className="uwaw-skeleton__switchers__item">
        <div className="uwaw-skeleton__switchers__icon" />
        <div className="uwaw-skeleton__switchers__label" />
        <div className="uwaw-skeleton__switchers__trigger" />
      </div>
      <div className="uwaw-skeleton__switchers__item">
        <div className="uwaw-skeleton__switchers__icon" />
        <div className="uwaw-skeleton__switchers__label" />
        <div className="uwaw-skeleton__switchers__trigger" />
      </div>
    </div>

    <div className="uwaw-skeleton__features">
      {Array(12)
        .fill(null)
        .map(() => (
          <div className="uwaw-skeleton__features__item">
            <div className="uwaw-skeleton__features__item__i" />
          </div>
        ))}
    </div>

    <div className="uwaw-skeleton__hw" />

    <div className="uwaw-skeleton__switchers">
      <div className="uwaw-skeleton__switchers__item">
        <div className="uwaw-skeleton__switchers__label" />
        <div className="uwaw-skeleton__switchers__trigger" />
      </div>
      <div className="uwaw-skeleton__switchers__item">
        <div className="uwaw-skeleton__switchers__label" />
        <div className="uwaw-skeleton__switchers__trigger" />
      </div>
      <div className="uwaw-skeleton__switchers__item">
        <div className="uwaw-skeleton__switchers__icon" />
        <div className="uwaw-skeleton__switchers__label" />
        <div className="uwaw-skeleton__switchers__trigger" />
      </div>
    </div>
  </div>
);
