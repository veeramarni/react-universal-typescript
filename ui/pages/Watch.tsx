import * as React from 'react';
import * as Helmet from 'react-helmet';
import EpisodeDetail from 'ui/components/EpisodeDetail';

interface Props {
  match;
}

const Watch: React.SFC<Props> = ({match}) => (
  <div>
    <EpisodeDetail id={match.params.id} />
  </div>
);

export default Watch;
