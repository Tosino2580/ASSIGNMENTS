import emily from '/src/assets/images/image-emily.jpg';
import thomas from '/src/assets/images/image-thomas.jpg';
import jennie from '/src/assets/images/image-jennie.jpg';

const Article = () => {
  return (
    <div className="article">
      <div className="emily">
        <img src={emily} alt="" />
        <p>
          We put our trust in Sunnyside and they delivered, making sure our
          needs were met and deadlines were always hit.
        </p>
        <div className="weight">
          <h3>Emily R.</h3>
          <p>Marketing Director</p>
        </div>
      </div>
      <div className="thomas">
        <img src={thomas} alt="" />
        <p>
          Sunnyside’s enthusiasm coupled with their keen interest in our brand’s
          success made it a satisfying and enjoyable experience.
        </p>
        <div className="weight">
          <h3>Thomas S.</h3>
          <p>Chief Operating Officer</p>
        </div>
      </div>
      <div className="jennie">
        <img src={jennie} alt="" />
        <p>
          Incredible end result! Our sales increased over 400% when we worked
          with Sunnyside. Highly recommended!
        </p>
        <div className="weight">
          <h3>Jennie F.</h3>
          <p>Business Owner</p>
        </div>
      </div>
    </div>
  );
};

export default Article;
