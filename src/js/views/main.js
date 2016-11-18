import tag from 'metapod';
import * as StyleConfig from '../config/style';

export default () => tag.div(
  tag.div(
    tag.span({ className: StyleConfig.MESSAGE_CLASS }),
    tag.a(
      'x',
      {
        href: '#',
        className: StyleConfig.CLOSE_CLASS,
      },
    ),
    { className: StyleConfig.CONTAINER_CLASS },
  ),
  { className: StyleConfig.NOTIFY_CLASS },
);
