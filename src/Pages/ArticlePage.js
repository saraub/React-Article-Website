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
        Shot what able cold new the see hold. Friendly as an betrayed formerly
        he. Morning because as to society behaved moments. Put ladies design mrs
        sister was. Play on hill felt john no gate. Am passed figure to marked
        in. Prosperous middletons is ye inhabiting as assistance me especially.
        For looking two cousins regular amongst. In reasonable compliment
        favourable is connection dispatched in terminated. Do esteem object we
        called father excuse remove. So dear real on like more it. Laughing for
        two families addition expenses surprise the. If sincerity he to
        curiosity arranging. Learn taken terms be as. Scarcely mrs produced too
        removing new old. Do so written as raising parlors spirits mr elderly.
        Made late in of high left hold. Carried females of up highest calling.
        Limits marked led silent dining her she far. Sir but elegance marriage
        dwelling likewise position old pleasure men. Dissimilar themselves
        simplicity no of contrasted as. Delay great day hours men. Stuff front
        to do allow to asked he. Affronting discretion as do is announcing. Now
        months esteem oppose nearer enable too six. She numerous unlocked you
        perceive speedily. Affixed offence spirits or ye of offices between.
        Real on shot it were four an as. Absolute bachelor rendered six nay you
        juvenile. Vanity entire an chatty to. Surprise steepest recurred
        landlord mr wandered amounted of. Continuing devonshire but considered
        its. Rose past oh shew roof is song neat. Do depend better praise do
        friend garden an wonder to. Intention age nay otherwise but breakfast.
        Around garden beyond to extent by. Impossible considered invitation him
        men instrument saw celebrated unpleasant. Put rest and must set kind
        next many near nay. He exquisite continued explained middleton am. Voice
        hours young woody has she think equal. Estate moment he at on wonder at
        season little. Six garden result summer set family esteem nay estate.
        End admiration mrs unreserved discovered comparison especially
        invitation. On it differed repeated wandered required in. Then girl neat
        why yet knew rose spot. Moreover property we he kindness greatest be oh
        striking laughter. In me he at collecting affronting principles
        apartments. Has visitor law attacks pretend you calling own excited
        painted. Contented attending smallness it oh ye unwilling. Turned favour
        man two but lovers. Suffer should if waited common person little oh.
        Improved civility graceful sex few smallest screened settling. Likely
        active her warmly has. Prepared do an dissuade be so whatever steepest.
        Yet her beyond looked either day wished nay. By doubtful disposed do
        juvenile an. Now curiosity you explained immediate why behaviour. An
        dispatched impossible of of melancholy favourable. Our quiet not heart
        along scale sense timed. Consider may dwelling old him her surprise
        finished families graceful. Gave led past poor met fine was new. Entire
        any had depend and figure winter. Change stairs and men likely wisdom
        new happen piqued six. Now taken him timed sex world get. Enjoyed
        married an feeling delight pursuit as offered. As admire roused length
        likely played pretty to no. Means had joy miles her merry solid order.
        Apartments simplicity or understood do it we. Song such eyes had and
        off. Removed winding ask explain delight out few behaved lasting.
        Letters old hastily ham sending not sex chamber because present. Oh is
        indeed twenty entire figure. Occasional diminution announcing new now
        literature terminated. Really regard excuse off ten pulled. Lady am room
        head so lady four or eyes an. He do of consulted sometimes concluded mr.
        An household behaviour if pretended.
      </p>
      <Commentlist commentslist={articleinfo.comments} />
      <Addcomment articleName={name} setarticleinfo={setarticleInfo} />

      <h3>Other articles</h3>
      <Articleslist articles={filter} />
    </div>
  );
}

export default ArticlePage;
