const posts = [
  { title: "Post 1", content: "Post 1 content" },
  { title: "Post 2", content: "Post 2 content" },
  { title: "Post 3", content: "Post 3 content" },
];

const listPosts = () => {
  posts.map((post) => {
    console.log(post.title);
  });
};

const addPost = (newPost) => {
  return new Promise((resolve, reject) => {
    if (newPost) {
      posts.push(newPost);
      resolve(posts);
    } else {
      reject("Post eklenemedi.");
    }
  });
};

const showPosts = async () => {
  console.log("Mevcut postlar:");
  listPosts();

  await addPost({ title: "Post 4", content: "Post 4 content" });

  console.log("Yeni post eklendikten sonra:");
  listPosts();
};

showPosts();
