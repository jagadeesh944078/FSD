import { useEffect, useState } from "react";
import AddComment from "./AddComment";
import CommentBox from "./CommentBox";

const data = [
  {
    id: 1,
    username: "Akshay Saini",
    comment: "Lorem ipsum dolor sit amet consectetur adip occurence velit",
    replies: [
      {
        id: 2,
        username: "Deepika Padukone",
        comment: "Lorem ipsum dolor sit amet consectetur adip occurence velit",
      },
    ],
  },
  {
    id: 3,
    username: "Elon Musk",
    comment: "Lorem ipsum dolor sit amet consectetur adip occurence velit",
    replies: [
      {
        id: 4,
        username: "Deepika Padukone",
        comment: "Lorem ipsum dolor sit amet consectetur adip occurence velit",
        replies: [
          {
            id: 5,
            username: "Deepika Padukone",
            comment:
              "Lorem ipsum dolor sit amet consectetur adip occurence velit",
            replies: [
              {
                id: 6,
                username: "Deepika Padukone",
                comment:
                  "Lorem ipsum dolor sit amet consectetur adip occurence velit",
                replies: [
                  {
                    id: 7,
                    username: "Deepika Padukone",
                    comment:
                      "Lorem ipsum dolor sit amet consectetur adip occurence velit",
                    replies: [
                      {
                        id: 8,
                        username: "Deepika Padukone",
                        comment:
                          "Lorem ipsum dolor sit amet consectetur adip occurence velit",
                        replies: [
                          {
                            id: 9,
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
            id: 10,
            username: "Deepika Padukone",
            comment:
              "Lorem ipsum dolor sit amet consectetur adip occurence velit",
          },
        ],
      },
      {
        id: 11,
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

  const handleDelete = (id) => {
    const cloneComments = [...commentData];
    const findDelete = (cloneComments, id) => {
      cloneComments.map((comment) => {
        if (comment.id === id) {
          const index = cloneComments.indexOf(comment);
          cloneComments.splice(index, 1);
        } else if (comment?.replies?.length > 0) {
          findDelete(comment.replies, id);
        }
      });
    };
    findDelete(cloneComments, id);
    setCommentData(cloneComments);
    sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(cloneComments));
  };

  const handleEdit = (commentId, newComment) => {
    const clonedComments = [...commentData];
    const findEdit = (clonedComments, commentId) => {
      clonedComments.map((comment) => {
        if (comment.id === commentId) {
          comment.comment = newComment;
        } else if (comment?.replies?.length > 0) {
          findEdit(comment.replies, commentId);
        }
      });
    };

    findEdit(clonedComments, commentId);
    setCommentData(clonedComments);
    sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(clonedComments));
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
      {commentData.map((comment) => (
        <CommentBox
          item={comment}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      ))}

      {/* <CommentBox
        data={commentData}
        onDelete={handleDelete}
        onEdit={handleEdit}
      /> */}
    </div>
  );
};

export default Comments;
