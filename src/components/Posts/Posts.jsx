import Post from "./Post";

const Posts = ({ data }) => {
  console.log(data);
  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      {data ? (
        data.map((post, index) => <Post post={post} key={index} />)
      ) : (
        <div className="text-center text-red-900 text-3xl py-6">Not Found!</div>
      )}
    </div>
  );
};

export default Posts;
