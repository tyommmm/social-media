import React from 'react';
import s from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faPlus,
  faArrowRightToBracket,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../../../hooks/use-auth';
import { Link } from 'react-router-dom';
import Avatar from '../../avatar/Avatar';
import CreatePost from '../../createPost/CreatePost';

const Header: React.FC = () => {
  const { isAuth } = useAuth();
  const [createPostMode, setCreatePostMode] = React.useState<boolean>(false);

  return (
    <>
      {createPostMode && <CreatePost setCreatePostMode={setCreatePostMode} />}
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.logo}>
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                id="Layer_1"
                x="0px"
                y="0px"
                width="100%"
                viewBox="0 0 500 500"
                enableBackground="new 0 0 500 500"
                xmlSpace="preserve">
                <path
                  fill="#EFF4FC"
                  opacity="1.000000"
                  stroke="none"
                  d=" M254.000000,501.000000   C169.333359,501.000000 85.166710,501.000000 1.000045,501.000000   C1.000030,334.333405 1.000030,167.666794 1.000015,1.000135   C167.666565,1.000090 334.333130,1.000090 500.999756,1.000045   C500.999847,167.666519 500.999847,334.333038 500.999939,500.999786   C418.833344,501.000000 336.666656,501.000000 254.000000,501.000000  M217.846771,268.640015   C229.429504,274.493561 241.196213,280.016266 252.529282,286.318756   C259.887848,290.410980 267.471161,294.755890 273.444550,300.544922   C285.766693,312.486725 280.828888,332.502045 264.635406,338.236023   C260.163086,339.819641 255.269287,340.756134 250.527481,340.943787   C227.006073,341.874603 205.248642,334.683197 183.914017,325.798401   C180.932266,324.556610 177.974823,323.256500 174.414719,321.729736   C174.414719,336.455048 174.523972,350.266266 174.336258,364.073456   C174.290558,367.436249 175.391357,369.047638 178.493607,370.357941   C207.526108,382.620605 237.576614,385.721954 268.513641,380.436066   C285.822845,377.478638 301.155609,370.452026 313.571716,357.575470   C335.330811,335.009399 338.316895,284.337585 303.087830,261.071686   C287.879364,251.027725 271.247559,243.146500 255.319717,234.180817   C248.662048,230.433273 241.901123,226.781509 235.657318,222.414062   C230.655182,218.915131 227.332825,213.891159 226.843918,207.397339   C225.729431,192.593826 234.312668,182.568420 249.704346,180.855469   C263.734711,179.294022 277.206879,182.126419 290.440735,186.322159   C297.686401,188.619354 304.769409,191.429596 312.250427,194.125488   C317.685669,181.001709 322.994904,168.182129 328.494598,154.902740   C321.597443,152.305069 315.277893,149.827332 308.891296,147.536560   C281.934937,137.867767 254.447571,134.800430 226.461929,142.162521   C185.460892,152.948517 165.276703,195.615189 183.061829,233.615784   C190.318741,249.121262 202.461258,260.033478 217.846771,268.640015  z"
                />
                <path
                  fill="#1978F2"
                  opacity="1.000000"
                  stroke="none"
                  d=" M217.537811,268.441895   C202.461258,260.033478 190.318741,249.121262 183.061829,233.615784   C165.276703,195.615189 185.460892,152.948517 226.461929,142.162521   C254.447571,134.800430 281.934937,137.867767 308.891296,147.536560   C315.277893,149.827332 321.597443,152.305069 328.494598,154.902740   C322.994904,168.182129 317.685669,181.001709 312.250427,194.125488   C304.769409,191.429596 297.686401,188.619354 290.440735,186.322159   C277.206879,182.126419 263.734711,179.294022 249.704346,180.855469   C234.312668,182.568420 225.729431,192.593826 226.843918,207.397339   C227.332825,213.891159 230.655182,218.915131 235.657318,222.414062   C241.901123,226.781509 248.662048,230.433273 255.319717,234.180817   C271.247559,243.146500 287.879364,251.027725 303.087830,261.071686   C338.316895,284.337585 335.330811,335.009399 313.571716,357.575470   C301.155609,370.452026 285.822845,377.478638 268.513641,380.436066   C237.576614,385.721954 207.526108,382.620605 178.493607,370.357941   C175.391357,369.047638 174.290558,367.436249 174.336258,364.073456   C174.523972,350.266266 174.414719,336.455048 174.414719,321.729736   C177.974823,323.256500 180.932266,324.556610 183.914017,325.798401   C205.248642,334.683197 227.006073,341.874603 250.527481,340.943787   C255.269287,340.756134 260.163086,339.819641 264.635406,338.236023   C280.828888,332.502045 285.766693,312.486725 273.444550,300.544922   C267.471161,294.755890 259.887848,290.410980 252.529282,286.318756   C241.196213,280.016266 229.429504,274.493561 217.537811,268.441895  z"
                />
              </svg>
              <span>Socialsquare</span>
            </Link>
          </div>
          <div className={s.actions}>
            <div className={s.search}>
              <FontAwesomeIcon icon={faSearch} />
              <input type="text" placeholder="Search..." />
            </div>
            {isAuth ? (
              <>
                <div className={s.create} onClick={() => setCreatePostMode(true)}>
                  <FontAwesomeIcon icon={faPlus} />
                  <span>Create</span>
                </div>
                <div className={s.avatar}>
                  <Link to="/profile">
                    <Avatar />
                  </Link>
                </div>
              </>
            ) : (
              <>
                <div className={s.signIn}>
                  <Link to="login">
                    <FontAwesomeIcon icon={faArrowRightToBracket} />
                    <span>Log in</span>
                  </Link>
                </div>
                <div className={s.signUp}>
                  <Link to="register">
                    <FontAwesomeIcon icon={faUserPlus} />
                    <span>Register</span>
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
