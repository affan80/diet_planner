import Image from 'next/image';
import planeImage from '../../app/images/plane.srfVEkqf.webp';

export default function Ab_info() {
  return (
    <section className="manual">          
      <h1 id="user-manual">Get started in 4 easy steps</h1>
      <div className="info-container">
        <div className="get-start">
          <h2 className="step">1. Create</h2>
          <p className="step-info">
            Tell us about yourself, your diet preferences, and your
            <br />
            goals. We'll create meal plans specific to your needs in
            <br />
            seconds! You always have the option to tweak your settings later.
          </p>

          <h2 className="step">2. Cook</h2>
          <p className="step-info">
            Enjoy making and eating delicious meals without the stress of planning.
            <br />
            Not only will you know you're eating better, you'll have more time and
            energy for other things.
          </p>

          <h2 className="step">3. Conquer!</h2>
          <p className="step-info">
            Make adjustments to your preferences, discover new meals, or put your
            favorites on repeat.
            <br />
            Review nutrition stats, track weight progress, and achieve your goals!
          </p>
        </div>
        <Image src={planeImage} alt="logo" width={1000} height={1000} />
      </div>
    </section>
  );
}

