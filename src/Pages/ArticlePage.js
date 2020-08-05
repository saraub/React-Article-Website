import React, { useState, useEffect } from "react";
import Articlecontent from "./article-content";
import Addcomment from "../Components/AddCommentForm";
import NotfoundPage from "./NotFfoundPage";
import Commentlist from "../Components/CommentList";
import Upvotesection from "../Components/upvotesection";
import Articleslist from "../Components/ArticlesList";
import articles from "./article-content";
function ArticlePage({ match }) {
  const name = match.params.name;
  const article = Articlecontent.find((article) => article.name === name);
  const [articleinfo, setarticleInfo] = useState({
    upvotes: 0,
    comments: [],
  });

  useEffect(() => {
    const fetchdata = async () => {
      const result = await fetch(`/api/articles/${name}`);
      const body = await result.json();
      console.log(body);
      setarticleInfo(body);
    };
    fetchdata();
    setarticleInfo({
      upvotes: Math.ceil(Math.random() * 10),
      comments: [],
    });
  }, [name]);

  if (!article) return <NotfoundPage />;
  const filter = Articlecontent.filter((articles) => articles.name !== name);
  return (
    <div id="page-body">
      <h2>{article.title}</h2>
      <Upvotesection
        articleName={name}
        upvotes={articleinfo.upvotes}
        setArticleinfo={setarticleInfo}
      />

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Egestas erat
        imperdiet sed euismod nisi porta. Enim ut tellus elementum sagittis
        vitae et. Tempus egestas sed sed risus. Pretium lectus quam id leo in.
        Risus nullam eget felis eget nunc lobortis mattis aliquam. Accumsan in
        nisl nisi scelerisque eu ultrices. Nam aliquam sem et tortor consequat
        id. Eget felis eget nunc lobortis mattis. Cursus turpis massa tincidunt
        dui ut. Mauris ultrices eros in cursus turpis. Tempus egestas sed sed
        risus pretium quam vulputate dignissim. Tellus pellentesque eu tincidunt
        tortor aliquam nulla facilisi cras.Convallis posuere morbi leo urna
        molestie at elementum eu facilisis.Mauris nunc congue nisi vitae
        suscipit tellus mauris. Aliquam sem fringilla ut morbi tincidunt augue
        interdum velit euismod.Cursus in hac habitasse platea dictumst quisque
        sagittis purus sit.Sed elementum tempus egestas sed sed risus
        pretium.Amet commodo nulla facilisi nullam vehicula ipsum a arcu
        cursus.Scelerisque mauris pellentesque pulvinar pellentesque. Vitae
        justo eget magna fermentum. Condimentum lacinia quis vel eros. Enim
        nulla aliquet porttitor lacus luctus accumsan tortor posuere. Purus
        gravida quis blandit turpis cursus in hac habitasse. Eu facilisis sed
        odio morbi. Imperdiet massa tincidunt nunc pulvinar sapien et ligula
        ullamcorper malesuada. Ornare suspendisse sed nisi lacus sed viverra.
        Turpis in eu mi bibendum neque egestas congue. Nisl rhoncus mattis
        rhoncus urna neque viverra. Nunc aliquet bibendum enim facilisis gravida
        neque convallis a cras. Nisi scelerisque eu ultrices vitae.
      </p>
      <Commentlist commentslist={articleinfo.comments} />
      <Addcomment articleName={name} setarticleinfo={setarticleInfo} />

      <h3>Other articles</h3>
      <Articleslist articles={filter} />
    </div>
  );
}

export default ArticlePage;
