const posts = [
  {
    title: "カフェの空間で集中力を高める方法",
    date: "2025年5月19日",
    excerpt: "お気に入りのカフェで作業することで、どのようにパフォーマンスが上がるのか？私の経験から解説します。",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=70",
    url: "article-1.html"
  },
  {
    title: "Web制作を副業にするための第一歩",
    date: "2025年5月10日",
    excerpt: "本業エンジニアが副業でWeb制作を始める際のステップと注意点をまとめました。",
    image: "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?auto=format&fit=crop&w=800&q=70",
    url: "article-2.html"
  }
];

const postList = document.getElementById("post-list");

posts.forEach(post => {
  const article = document.createElement("article");
  article.className = "post";
  article.innerHTML = `
    <img src="${post.image}" alt="記事画像">
    <h2><a href="${post.url}">${post.title}</a></h2>
    <p class="date">${post.date}</p>
    <p class="excerpt">${post.excerpt}</p>
  `;
  postList.appendChild(article);
});
