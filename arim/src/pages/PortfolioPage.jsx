import MyProfile from '../components/MyProfile.jsx';
import MyRePo from '../components/MyRepo.jsx';
import Email from '../components/Email.jsx';
import '../styles/PageStyle.css';

export default function PortfolioPage() {
  return (
    <>
      <section className="section profileSection">
        <MyProfile />
      </section>

      <section className="section repoSection">
        <MyRePo />
      </section>

      <section className="section emailSection">
        <Email />
      </section>
    </>
  );
}
