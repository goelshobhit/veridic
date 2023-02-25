/**
 *
 * HoverableCard
 *
 */

import React, { memo } from 'react';
import get from 'lodash/get';

import './styles.module.scss';

function HoverableCard({ item }) {
  return (
    <a href={item.link} target="_blank">
      <div className="card-hover">
        <div className="card-hover__content">
          <h3
            className="card-hover__title"
            dangerouslySetInnerHTML={{ __html: get(item, 'title.rendered') }}
          />
          <p className="card-hover__text">
            {get(item, 'primary_category.description')}
          </p>
        </div>
        <div className="card-hover__extra">
          <h4>{get(item, 'parselyMeta.parsely-title')}</h4>
        </div>
        <img src={get(item, 'parselyMeta.parsely-image-url')} alt="" />
      </div>
    </a>
  );
}

HoverableCard.propTypes = {
  ...HoverableCard,
};

export default memo(HoverableCard);
