import React from "react";
import { Post as PostModel } from "../__generated__/graphql";
import Card from "./card";
import LinesEllipsis from "react-lines-ellipsis";
import { ChipSet, Chip } from "@material/react-chips";
import "@material/react-chips/dist/chips.css";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { sanitize } from "../utils/dom-sanitizer";

interface PostProps {
  post: PostModel;
}

const Post: React.FC<PostProps> = ({ post }) => {
  const { title, author, content } = post;

  return (
    <Card>
      <h3>{title}</h3>
      <ChipSet>
        <Chip
          id={author.id}
          label={author.name}
          leadingIcon={
            author.photo ? (
              <img src={author.photo ?? ""} />
            ) : (
              <AccountCircleRoundedIcon />
            )
          }
        />
      </ChipSet>
      <div style={{ height: 20 }} />
      <LinesEllipsis
        text={sanitize(content)}
        maxLine="3"
        ellipsis="... "
        trimRight
        basedOn="letters"
      />
    </Card>
  );
};

export default Post;
