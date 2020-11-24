export type Post = {
  title: string;
  content: string;
  avatar: string;
};

export const SinglePost = (props: Post) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <img src={props.avatar} alt={props.title} />
    </div>
  );
};
