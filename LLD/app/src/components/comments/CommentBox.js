const CommentBox = ({ data }) => {
  return data.map((item, index) => (
    <div key={index} className="pl-10 border-l border-black">
      <div className="flex">
        <div>
          <img
            src="https://www.redditstatic.com/avatars/defaults/v2/avatar_default_6.png"
            alt="logo"
            className="w-10 h-10 rounded-lg"
          />
        </div>
        <div className="ml-2">
          <p className="font-bold mt-2">{item.username}</p>
          <p className="mt-2 mb-2 text-sm">{item.comment}</p>
        </div>
      </div>
      <div>{item?.replies && <CommentBox data={item.replies} />}</div>
    </div>
  ));
};

export default CommentBox;
