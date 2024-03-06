import { useEffect, useState } from "react";
import AddComment from "./AddComment";
import CommentBox from "./CommentBox";

const data = [
  {
    username: "Akshay Saini",
    comment: "Lorem ipsum dolor sit amet consectetur adip occurence velit",
    replies: [
      {
        username: "Deepika Padukone",
        comment: "Lorem ipsum dolor sit amet consectetur adip occurence velit",
      },
    ],
  },
  {
    username: "Elon Musk",
    comment: "Lorem ipsum dolor sit amet consectetur adip occurence velit",
    replies: [
      {
        username: "Deepika Padukone",
        comment: "Lorem ipsum dolor sit amet consectetur adip occurence velit",
        replies: [
          {
            username: "Deepika Padukone",
            comment:
              "Lorem ipsum dolor sit amet consectetur adip occurence velit",
            replies: [
              {
                username: "Deepika Padukone",
                comment:
                  "Lorem ipsum dolor sit amet consectetur adip occurence velit",
                replies: [
                  {
                    username: "Deepika Padukone",
                    comment:
                      "Lorem ipsum dolor sit amet consectetur adip occurence velit",
                    replies: [
                      {
                        username: "Deepika Padukone",
                        comment:
                          "Lorem ipsum dolor sit amet consectetur adip occurence velit",
                        replies: [
                          {
                            username: "Deepika Padukone",
                            comment:
                              "Lorem ipsum dolor sit amet consectetur adip occurence velit",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            username: "Deepika Padukone",
            comment:
              "Lorem ipsum dolor sit amet consectetur adip occurence velit",
          },
        ],
      },
      {
        username: "Deepika Padukone",
        comment: "Lorem ipsum dolor sit amet consectetur adip occurence velit",
      },
    ],
  },
  {
    username: "Sachin Tendulkar",
    comment: "Lorem ipsum dolor sit amet consectetur adip occurence velit",
  },
];

const SESSION_STORAGE_KEY = "NestedCommets";

const Comments = () => {
  const [commentData, setCommentData] = useState(data);

  const addComments = (comment) => {
    const newComment = {
      username: "jagadeesh",
      comment: comment,
    };
    const commentsToAdd = [newComment, ...commentData];
    setCommentData((prevComments) => {
      const updatedComments = [newComment, ...prevComments];
      sessionStorage.setItem(
        SESSION_STORAGE_KEY,
        JSON.stringify(commentsToAdd)
      );
      return updatedComments;
    });
  };

  useEffect(() => {
    const storedComments = JSON.parse(
      sessionStorage.getItem(SESSION_STORAGE_KEY)
    );
    setCommentData(storedComments ?? commentData);
  }, []);

  return (
    <div>
      <AddComment onAdd={addComments} />
      <CommentBox data={commentData} />
    </div>
  );
};

export default Comments;
