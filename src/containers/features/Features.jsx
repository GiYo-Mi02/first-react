
import './features.css'

const featuresData = [
  {
    title: 'Improving end distrusts instantly',
    text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.',
  },
  {
    title: 'Become the tended active',
    text: 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
  },
  {
    title: 'Message or am nothing',
    text: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.',
  },
  {
    title: 'Really boy law county',
    text: 'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush..',
  },
];

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1>
        <p>Request Early Access to Get Started</p>
    </div>
      <div className="gpt3__features-container">
        <div className="gpt3__features-container">
          {featuresData.map((feature, index) => (
            <div className="gpt3__features-container__feature" key={index}>
              <div className="gpt3__features-container__feature-title">
                <div />
                <h1>{feature.title}</h1>
              </div>
              <div className="gpt3__features-container_feature-text">
                <p>{feature.text}</p>
              </div>
            </div>
          ))}
    </div>
    </div>
    </div>
  )
}

export default Features