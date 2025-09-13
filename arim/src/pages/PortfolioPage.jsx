import MyProfile from '../components/MyProfile.jsx';
import MyRefo from '../components/MyRepo.jsx';
import Email from '../components/Email.jsx';
import '../styles/PageStyle.css';

export default function PortfolioPage() {
  return (
    <>
      <div>
        <MyProfile />
        <MyRefo />
        <Email />
      </div>
    </>
  );
}
