import './about.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Image from 'react-bootstrap/Image';

const About = () => {
  return (
    <div className='aboutContainer container'>
      <div className="row">
        <div className="col-md-6">
          <p>
            About Unsplash uses cookies and similar technologies to secure our site, provide useful features to free and paying users, and to ensure optimal performance. By clicking Accept all cookies or closing this prompt, you consent to the use of all cookies. By clicking Accept essential only, you consent only to the use of cookies that are strictly necessary for the site to function.
          </p>
        </div>
        <div className="col-md-6">
          <Image
            src="https://t3.ftcdn.net/jpg/01/35/70/90/360_F_135709080_2XHH0eeTGZ6rAaxgyuLKKdTaUCZAgPCZ.jpg"
            alt="Description of the image"
            fluid
            className='imageContainer'
          />
        </div>
      </div>
    </div>
  );
};

export default About;
