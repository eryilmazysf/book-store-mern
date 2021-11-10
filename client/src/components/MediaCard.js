import { useState } from "react";
import { Skeleton, Switch, Card, Avatar } from "antd";
import { useHistory } from "react-router-dom";

const { Meta } = Card;

export const MediaCard = ({ title, description, imgSrc, id }) => {
  const [loading, setLoading] = useState(false);
  let history = useHistory();

  return (
    <div>
      <button onClick={() => history.push(`/books/${id}`)}>
        <Skeleton loading={loading} active>
          <Card
            hoverable
            loading={loading}
            className="media-card"
            cover={<img alt="cover" src={imgSrc} />}
          >
            <Meta title={title} description={description} />
          </Card>
        </Skeleton>
      </button>
    </div>
  );
};
