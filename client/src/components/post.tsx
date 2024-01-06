import React from "react";
import { Post as PostModel } from "../__generated__/graphql";
import Card from "./card";
import LinesEllipsis from "react-lines-ellipsis";
import { ChipSet, Chip } from "@material/react-chips";
import AccountCircleRounded from "@mui/icons-material/AccountCircleRounded";

interface PostProps {
  post: PostModel;
}

const Post: React.FC<PostProps> = ({ post }) => {
  const { title, author, content } = post;

  return (
    <Card>
      <h3>{title}</h3>
      <ChipSet>
        <Chip id={author.id} label={author.name} />
      </ChipSet>
      <div style={{ height: 20 }} />
      <LinesEllipsis
        text={content}
        maxLine="3"
        ellipsis="... "
        trimRight
        basedOn="letters"
      />
    </Card>
  );
};

export default Post;
