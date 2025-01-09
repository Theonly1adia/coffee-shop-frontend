import PropTypes from 'prop-types';

export default function Hero({ title }) {
  return (
    <div className="Hero">
      <div>
        <img src="/Splash-page.jpg" alt="Coffee shop" className="w-full h-auto rounded-md" />
        <p className="mt-4 text-lg">
          Where every Brew's a Celebration!
        </p>
      </div>
    </div>
  );
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
};
