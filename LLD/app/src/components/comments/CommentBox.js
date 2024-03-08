import { useState } from "react";
import AddComment from "./AddComment";

const CommentBox = ({ item, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = (commentId, comment) => {
    onEdit(commentId, comment);
  };

  return (
    <div className="pl-10 border-l border-black">
      <div className="flex">
        <div>
          <img
            src="https://www.redditstatic.com/avatars/defaults/v2/avatar_default_6.png"
            alt="logo"
            className="w-10 h-10 rounded-lg"
          />
        </div>
        <div className="ml-2 mb-2">
          <p className="font-bold mt-2">{item?.username}</p>
          {!isEditing && <p className="mt-2 mb-2 text-sm">{item?.comment}</p>}
          {isEditing && (
            <AddComment
              defaultText={item.comment}
              showCancel={true}
              commentId={item.id}
              onClose={() => setIsEditing(false)}
              onEdit={handleEdit}
            />
          )}
          <button
            className="text-blue-500 font-semibold hover:underline"
            onClick={() => {
              setIsEditing((isEditing) => !isEditing);
            }}
          >
            edit
          </button>
          <button className="text-blue-500 font-semibold ml-2 mr-2 hover:underline">
            reply
          </button>
          <button
            className="text-red-500 font-semibold hover:underline"
            onClick={() => onDelete(item.id)}
          >
            delete
          </button>
        </div>
      </div>
      <div>
        {item?.replies &&
          item?.replies.map((comment) => (
            <CommentBox item={comment} onDelete={onDelete} onEdit={onEdit} />
          ))}
      </div>
    </div>
  );

  // return data.map((item, index) => (
  //   <div key={index} className="pl-10 border-l border-black">
  //     <div className="flex">
  //       <div>
  //         <img
  //           src="https://www.redditstatic.com/avatars/defaults/v2/avatar_default_6.png"
  //           alt="logo"
  //           className="w-10 h-10 rounded-lg"
  //         />
  //       </div>
  //       <div className="ml-2 mb-2">
  //         <p className="font-bold mt-2">{item.username}</p>
  //         {!isEditing && <p className="mt-2 mb-2 text-sm">{item.comment}</p>}
  //         {isEditing && (
  //           <AddComment
  //             defaultText={item.comment}
  //             showCancel={true}
  //             commentId={item.id}
  //             onClose={() => setIsEditing(false)}
  //             onEdit={handleEdit}
  //           />
  //         )}
  //         <button
  //           className="text-blue-500 font-semibold hover:underline"
  //           onClick={() => {
  //             setIsEditing((isEditing) => !isEditing);
  //           }}
  //         >
  //           edit
  //         </button>
  //         <button className="text-blue-500 font-semibold ml-2 mr-2 hover:underline">
  //           reply
  //         </button>
  //         <button
  //           className="text-red-500 font-semibold hover:underline"
  //           onClick={() => onDelete(item.id)}
  //         >
  //           delete
  //         </button>
  //       </div>
  //     </div>
  //     <div>
  //       {item?.replies && (
  //         <CommentBox data={item.replies} onDelete={onDelete} onEdit={onEdit} />
  //       )}
  //     </div>
  //   </div>
  // ));
};

export default CommentBox;
