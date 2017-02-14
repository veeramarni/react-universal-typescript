import * as React from 'react';

interface Props {
  episode: { show, title, description, imageThumbUrl, topics };
}

const Episode: React.SFC<Props> = ({ episode }) => (
  <div>
    <h3>{episode.show.title}</h3>
      <h1>{episode.title}</h1>
      <p>{episode.description}</p>
      <img src={episode.imageThumbUrl}/>
      {episode.topics.map(topic =>
        <div key={topic.id}>{topic.name}</div>
      )}
  </div>
);

export default Episode;
