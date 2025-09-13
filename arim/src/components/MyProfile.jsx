import { useState, useEffect } from 'react';
import { Octokit } from 'octokit';
import '../styles/PageStyle.css';
import CSS from '../assets/icon_css.svg';
import Figma from '../assets/icon_figma.svg';
import Html from '../assets/icon_html.svg';
import ReactImg from '../assets/icon_react.svg';
import Flutter from '../assets/flutter.png';
import JavaScriptImg from '../assets/icon_javascript.svg';

export default function MyProfile() {
  const [profile, setProfile] = useState({});
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  async function getProfile() {
    try {
      const octokit = new Octokit();
      const res = await octokit.request('GET /users/{username}', {
        username: 'rimedang',
      });
      console.log(res.data);
      setProfile(res.data);
    } catch (e) {
      setError(e);
      setErrorMessage(error);
      console.log(errorMessage);
    }
  }

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div className="profileSection">
      <h2 className="profileTitle">프론트엔드 개발자 이아림입니다.</h2>
      <div className="profile">
        <img
          className="profileImg"
          src={profile.avatar_url}
          alt={`${profile.name} Github Avatar`}
        />
        <div className="introduce">
          <div>{profile.name}</div>
          <div>2005.09.30</div>
          <div>소프트웨어융합학부</div>
          <a className="githuburl" href={profile.html_url} target="_blank">
            Github
          </a>
        </div>
      </div>
      <div className="skill">
        <h3>skill & Tools</h3>
        <img className="icons" src={CSS} alt="css" />
        <img className="icons" src={Html} alt="html" />
        <img className="icons" src={JavaScriptImg} alt="javascript" />
        <img className="icons" src={ReactImg} alt="react" />
        <img className="icons" src={Flutter} alt="Flutter" />
        <img className="icons" src={Figma} alt="figma" />
      </div>
    </div>
  );
}
