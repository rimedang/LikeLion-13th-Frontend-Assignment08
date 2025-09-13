import { useState, useEffect } from 'react';

import { Octokit } from 'octokit';
import '../styles/PageStyle.css';

export default function MyRepo() {
  const [myRepos, setMyRepos] = useState([]);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  async function getRepos() {
    try {
      const octokit = new Octokit();
      const res = await octokit.request('GET /users/{username}/repos', {
        username: 'rimedang',
        sort: 'updated',
        per_page: 8,
      });
      console.log(res.data);
      setMyRepos(res.data);
    } catch (e) {
      setError(e);
      setErrorMessage(error);
      console.log(errorMessage);
    }
  }
  useEffect(() => {
    getRepos();
  }, []);

  return (
    <div className="section">
      <div className="repoBox">
        <h2 className="title">최근 업로드한 Repository</h2>
        <div className="repos">
          {myRepos.map((repo) => (
            <div className="repo" key={repo.id}>
              <a className="repoTitle" href={repo.html_url} target="_blank">
                {repo.full_name}
              </a>
              <div className="description">
                프로젝트 설명 : {repo.description}
              </div>
              {repo.homepage && (
                <div className="deployment">
                  배포 url:{' '}
                  <a
                    href={repo.homepage}
                    target="_blank"
                    className="deployment"
                  ></a>
                </div>
              )}
              <div className="language">사용한 언어: {repo.language}</div>
              <div className="pushed">
                최근 커밋한 날짜 :{' '}
                {new Date(repo.pushed_at).toLocaleDateString('en-CA', {
                  timeZone: `Asia/Seoul`,
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
